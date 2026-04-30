import os
import subprocess

source_dir = "/Users/samantha/Desktop/2026 Japan/food"
files = [f for f in os.listdir(source_dir) if f.lower().endswith(('.jpg', '.jpeg'))]

landscape_files = []

for f in files:
    path = os.path.join(source_dir, f)
    result = subprocess.run(['sips', '-g', 'pixelWidth', '-g', 'pixelHeight', path], capture_output=True, text=True)
    lines = result.stdout.split('\n')
    width = 0
    height = 0
    for line in lines:
        if 'pixelWidth' in line:
            width = int(line.split(':')[1].strip())
        if 'pixelHeight' in line:
            height = int(line.split(':')[1].strip())
    
    if width > height:
        landscape_files.append(f)
        print(f"Landscape: {f} ({width}x{height})")
    else:
        print(f"Portrait: {f} ({width}x{height})")

print(f"\nFound {len(landscape_files)} landscape files.")
print("First 5 landscape files:")
for f in sorted(landscape_files)[:5]:
    print(f)
