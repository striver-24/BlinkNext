const sharp = require('sharp');
const sizes = [16, 32, 180, 192, 512];

async function generateFavicons() {
    for (const size of sizes) {
        const fileName = size === 180 
            ? 'apple-touch-icon.png'
            : size === 192 
                ? 'android-chrome-192x192.png'
                : size === 512 
                    ? 'android-chrome-512x512.png'
                    : `favicon-${size}x${size}.png`;

        await sharp('assets/logo.svg')
            .resize(size, size)
            .toFile(`assets/${fileName}`);
    }
}

generateFavicons().catch(console.error); 