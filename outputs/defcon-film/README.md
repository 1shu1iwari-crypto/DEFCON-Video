# DEFCON promo project

A 45-second, 1920 × 1080 HyperFrames composition at 30 fps. The storyboard follows the six supplied beats: system alert and DEFCON reveal, operation room, attack/defend split, Linux competition dashboard, subscription prizes, and the final HAM ARC / Technozion lockup.

## Open and render

Open this folder as a HyperFrames project. From the project folder, run:

```sh
npx hyperframes preview
npx hyperframes lint
npx hyperframes inspect
npx hyperframes render --fps 30 --quality high --output ../DEFCON-promo.mp4
```

The main composition is `index.html`. Timing is 45 seconds. `assets/final-mix.wav` contains the narration and a generated electronic pulse bed and is exactly 45 seconds long. `voiceover-script.txt` is also included for review or replacement recording.

The DEFCON banner, HAM ARC mark, and Technozion mark are included as supplied. They are placed without cropping, recoloring, or stretching.
