import json
import os
from dotenv import load_dotenv
from googleapiclient.discovery import build

load_dotenv()

youtube=build("youtube","v3", developerKey=os.getenv("API_KEY"))

request=youtube.playlistItems().list(
    part="snippet",
    playlistId="UUyUI5dc74plD-MJ0mS0cDzw",
    maxResults=4
)

response=request.execute()
datos=[]
for video in response["items"]:
    datos.append(video["snippet"])

with open("videos.json", 'w', encoding='utf-8') as f:
        json.dump(datos, f, ensure_ascii=False, indent=4)