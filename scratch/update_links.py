import os
import re

def update_links(directory):
    pattern = re.compile(r'href="/([a-zA-Z0-9-]+)"')
    
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(('.tsx', '.astro')):
                filepath = os.path.join(root, file)
                
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Replace href="/some-path" with href="/some-path/"
                # But ignore if it already has a trailing slash, or if it's just "/"
                new_content = pattern.sub(r'href="/\1/"', content)
                
                if new_content != content:
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f"Updated {filepath}")

if __name__ == '__main__':
    update_links('src')
