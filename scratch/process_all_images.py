import os
import subprocess

source_dir = "/Users/samantha/Desktop/2026 Japan/food"
target_dir = "/Users/samantha/Documents/GitHub/s5leong.github.io/public/202603/food"
os.makedirs(target_dir, exist_ok=True)

files = sorted([f for f in os.listdir(source_dir) if f.lower().endswith(('.jpg', '.jpeg'))])

consumed_items = []

for i, f in enumerate(files, 1):
    source_path = os.path.join(source_dir, f)
    target_filename = f"food{i}.jpg"
    target_path = os.path.join(target_dir, target_filename)
    
    # Resize to 800px wide, 75% quality
    subprocess.run(['sips', '-Z', '800', '-s', 'format', 'jpeg', '-s', 'formatOptions', '75', source_path, '--out', target_path], capture_output=True)
    
    consumed_items.append({
        "image": f"/202603/food/{target_filename}",
        "alt": f"Japan food {i}",
        "cursor": "Delicious Japan food"
    })

print("IMAGE_ARRAY_START")
import json
print(json.dumps(consumed_items, indent=2))
print("IMAGE_ARRAY_END")
