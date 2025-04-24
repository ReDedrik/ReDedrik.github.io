from datetime import datetime
import os

# USER INPUT (EDIT THESE VALUES)
title = "Grinding Glass: The Start"
date = "2025-04-21"
content = "This post covers the first steps of grinding a telescope mirror, and the strange beauty of randomness."

# FILE STRUCTURE CONFIG
template_path = "post-template.html"
output_folder = "posts"

# Generate filename-friendly slug
slug = title.lower().replace(" ", "-").replace(":", "").replace("'", "")
filename = f"{date}-{slug}.html"

# Load template
with open(template_path, "r", encoding="utf-8") as file:
    template = file.read()

# Replace placeholders
html = template.replace("{{TITLE}}", title)               .replace("{{DATE}}", datetime.strptime(date, "%Y-%m-%d").strftime("%B %d, %Y"))               .replace("{{CONTENT}}", content)

# Ensure output directory exists
os.makedirs(output_folder, exist_ok=True)

# Write the post
output_path = os.path.join(output_folder, filename)
with open(output_path, "w", encoding="utf-8") as out:
    out.write(html)

print(f"✅ Post created: {output_path}")