import os
import base64
import requests
from datetime import datetime
from pathlib import Path
from dotenv import load_dotenv

load_dotenv()

def generate_image(prompt: str, aspect_ratio: str = "16:9", size: str = "1K") -> str:
    """Generate an image using Nano Banana Pro (Gemini 3 Pro Image)."""

    api_key = os.getenv("GEMINI_API_KEY")
    if not api_key:
        raise ValueError("GEMINI_API_KEY not found in environment")

    url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp-image-generation:generateContent"

    headers = {
        "x-goog-api-key": api_key,
        "Content-Type": "application/json"
    }

    payload = {
        "contents": [{
            "parts": [{"text": prompt}]
        }],
        "generationConfig": {
            "responseModalities": ["IMAGE", "TEXT"],
        }
    }

    response = requests.post(url, headers=headers, json=payload)
    response.raise_for_status()

    result = response.json()

    # Extract and save image
    output_dir = Path("./public/images")
    output_dir.mkdir(parents=True, exist_ok=True)

    for i, candidate in enumerate(result.get("candidates", [])):
        for j, part in enumerate(candidate.get("content", {}).get("parts", [])):
            if "inlineData" in part:
                image_data = part["inlineData"]["data"]
                mime_type = part["inlineData"]["mimeType"]
                ext = mime_type.split("/")[-1]

                filename = output_dir / f"hero-ai-network.{ext}"
                with open(filename, "wb") as f:
                    f.write(base64.b64decode(image_data))

                print(f"Saved: {filename}")
                return str(filename)

    raise ValueError("No image data in response")

if __name__ == "__main__":
    prompt = """Create an abstract, modern AI visualization for a property management tech platform.

    Visual elements:
    - Interconnected glowing nodes forming a subtle neural network pattern
    - Teal (#5eead4) and gold/amber (#d4a574) accent colors as glowing highlights
    - Deep navy blue background (#0f172a)
    - Abstract geometric building silhouettes subtly integrated into the network
    - Soft glowing orbs and light particles floating in the composition
    - Clean, minimalist aesthetic with sophisticated gradients
    - Depth through layered transparency effects

    Style: Futuristic, premium tech, minimalist, cinematic.
    Mood: Intelligent, trustworthy, innovative.
    No text, no logos, no people."""

    try:
        image_path = generate_image(
            prompt=prompt,
            aspect_ratio="16:9",
            size="1K"
        )
        print(f"Generated: {image_path}")
    except Exception as e:
        print(f"Error: {e}")
