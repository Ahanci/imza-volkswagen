/**
 * Logo Sanity'ye yükleme + siteSettings'e baglama.
 * Musteri artik Studio'dan logo degistirebilir.
 */
import { writeClient } from "../src/sanity/lib/client";
import * as fs from "node:fs";
import * as path from "node:path";

async function main() {
  console.log("Logo Sanity'ye yukleniyor...");

  const logoPath = path.join(process.cwd(), "public/images/logo.png");
  const logoBuffer = fs.readFileSync(logoPath);
  const logoStats = fs.statSync(logoPath);
  console.log(`   Dosya: ${logoPath}`);
  console.log(`   Boyut: ${(logoStats.size / 1024).toFixed(1)} KB`);

  // 1) Logo'yu Sanity'ye yukle
  const asset = await writeClient.assets.upload("image", logoBuffer, {
    filename: "imza-volkswagen-logo.png",
    contentType: "image/png",
    title: "Imza Volkswagen Logo",
  });
  console.log(`Asset yuklendi: ${asset._id}`);
  console.log(`   URL: ${asset.url}`);

  // 2) Eski logo varsa sil
  const currentSettings = await writeClient.fetch(
    `*[_id == "siteSettings"][0]{logo, favicon}`
  );
  if (currentSettings?.logo?.asset?._ref) {
    try {
      await writeClient.delete(currentSettings.logo.asset._ref);
      console.log(`Eski logo silindi: ${currentSettings.logo.asset._ref}`);
    } catch (e: any) {
      console.log(`Eski logo silinemedi: ${e.message}`);
    }
  }

  // 3) siteSettings.logo'yu yeni asset'e bagla
  await writeClient
    .patch("siteSettings")
    .set({
      logo: {
        _type: "image",
        asset: { _type: "reference", _ref: asset._id },
      },
    })
    .commit();
  console.log("siteSettings.logo guncellendi");

  // 4) Favicon (32x32) yukle
  console.log("\nFavicon yukleniyor (32x32)...");
  const faviconPath = path.join(process.cwd(), "public/favicon-32.png");
  if (fs.existsSync(faviconPath)) {
    if (currentSettings?.favicon?.asset?._ref) {
      try { await writeClient.delete(currentSettings.favicon.asset._ref); } catch (e: any) {}
    }
    const faviconBuffer = fs.readFileSync(faviconPath);
    const faviconAsset = await writeClient.assets.upload("image", faviconBuffer, {
      filename: "favicon-32.png",
      contentType: "image/png",
      title: "Favicon 32x32",
    });
    await writeClient
      .patch("siteSettings")
      .set({
        favicon: {
          _type: "image",
          asset: { _type: "reference", _ref: faviconAsset._id },
        },
      })
      .commit();
    console.log(`Favicon yuklendi: ${faviconAsset._id}`);
  }

  // 5) Apple Touch Icon (180x180) yukle
  console.log("\nApple Touch Icon yukleniyor (180x180)...");
  const applePath = path.join(process.cwd(), "public/apple-touch-icon.png");
  if (fs.existsSync(applePath)) {
    const appleBuffer = fs.readFileSync(applePath);
    const appleAsset = await writeClient.assets.upload("image", appleBuffer, {
      filename: "apple-touch-icon-180.png",
      contentType: "image/png",
      title: "Apple Touch Icon 180x180",
    });
    console.log(`Apple Touch Icon yuklendi: ${appleAsset._id}`);
  }

  console.log("\nTum logo asset'leri Sanity'ye yuklendi!");
}

main().catch((e) => {
  console.error("Hata:", e);
  process.exit(1);
});
