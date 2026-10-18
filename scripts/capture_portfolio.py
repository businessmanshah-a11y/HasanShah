import asyncio
from playwright.async_api import async_playwright
from PIL import Image
import io
import os

SITES = [
    {
        "id": "5setare",
        "url": "https://5setare.com",
        "output": "public/images/portfolio/portfolio-5setare.webp"
    },
    {
        "id": "flycoffee",
        "url": "https://flycoffee.ir",
        "output": "public/images/portfolio/portfolio-flycoffee.webp"
    },
    {
        "id": "ladycoin",
        "url": "https://ladycoin.ir",
        "output": "public/images/portfolio/portfolio-ladycoin.webp"
    },
    {
        "id": "tebirani",
        "url": "https://tebirani1.ir",
        "output": "public/images/portfolio/portfolio-tebirani.webp"
    }
]

async def capture_all():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(
            viewport={"width": 1440, "height": 900},
            device_scale_factor=1.5,
            user_agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
        )
        page = await context.new_page()

        for site in SITES:
            print(f"Loading {site['url']}...")
            try:
                await page.goto(site['url'], wait_until="domcontentloaded", timeout=30000)
                await asyncio.sleep(4)  # Allow lazy images, fonts, and hero animations to render
                
                # Take viewport screenshot
                png_bytes = await page.screenshot(type="png", full_page=False)
                
                # Resize and save as optimized WebP (1440x900)
                img = Image.open(io.BytesIO(png_bytes))
                img = img.resize((1440, 900), Image.Resampling.LANCZOS)
                img.save(site['output'], format="WEBP", quality=85, method=6)
                print(f"Saved: {site['output']} ({os.path.getsize(site['output']) // 1024} KB)")
            except Exception as e:
                print(f"Error capturing {site['url']}: {e}")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(capture_all())
