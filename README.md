# 💕 Valentine's Day Website - Setup Instructions

## 🎉 Welcome!

Congratulations! You now have a beautiful, romantic Valentine's Day website with stunning animations, a photo gallery, and background music support.

## 📁 Folder Structure

Create this folder structure in the same directory as your HTML file:

```
valentine-website/
├── index.html
├── style.css
├── script.js
├── photos/
│   ├── photo1.jpg
│   ├── photo2.jpg
│   ├── photo3.jpg
│   ├── photo4.jpg
│   ├── photo5.jpg
│   ├── photo6.jpg
│   ├── photo7.jpg
│   ├── photo8.jpg
│   ├── photo9.jpg
│   └── photo10.jpg
└── music/
    └── romantic-song.mp3
```

## 📸 Adding Your Photos

1. Create a folder named `photos` in the same directory as `index.html`
2. Add 10 photos with these exact names:
   - `photo1.jpg`
   - `photo2.jpg`
   - `photo3.jpg`
   - ... up to ...
   - `photo10.jpg`

**Supported formats:** .jpg, .jpeg, .png, .webp

**Recommended size:** 800x600 pixels or similar aspect ratio for best display

**Note:** If a photo is missing, a placeholder will appear with instructions.

## 🎵 Adding Background Music

1. Create a folder named `music` in the same directory as `index.html`
2. Add your romantic song and name it `romantic-song.mp3`

**Supported formats:** .mp3, .ogg

**Recommended:** Use a gentle, romantic instrumental or love song

**Tips:**
- Keep file size under 10MB for faster loading
- Music starts at 30% volume by default
- Users can toggle music on/off with the 🎵 button

### Finding Romantic Music

You can use:
- Royalty-free music from YouTube Audio Library
- Free music from sites like Free Music Archive or Incompetech
- Your own personal collection (make sure you have rights to use it)

**Popular romantic song suggestions:**
- "A Thousand Years" (instrumental)
- "Can't Help Falling in Love" (instrumental)
- "Perfect" (instrumental)
- Classical pieces like "Clair de Lune" or "Moonlight Sonata"

## 🚀 How to Use

1. **Setup files** as described above
2. **Open `index.html`** in any modern web browser (Chrome, Firefox, Safari, Edge)
3. **Click the music button** (🎵) to start the background music
4. **Click "Send Love"** to see the heart explosion animation
5. **Browse photos** using arrow buttons or keyboard arrows (← →)
6. **Click on photos** to trigger heart animations

## ✨ Features

### Animations
- 15 floating hearts that rise continuously
- 25 falling rose petals with rotation
- Animated pulsing heart icon
- Cursor trail (desktop only)
- Heart explosion on button click
- Photo hover effects with heart overlays

### Interactive Elements
- **Send Love Button:** Creates explosive heart animation with random love messages
- **Music Toggle:** Play/pause background music
- **Photo Gallery:** 
  - Navigate with arrow buttons
  - Keyboard navigation (← →)
  - Click photos for heart burst
  - Smooth scrolling between photos
  - Active photo indicators

### Easter Egg
Try the Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A
(Use arrow keys, then press 'b' and 'a')

## 🎨 Customization

### Change Colors
Edit the CSS variables in `style.css`:
```css
:root {
    --color-rose: #ff6b9d;        /* Main pink color */
    --color-blush: #ffc2d4;       /* Light pink */
    --color-deep-rose: #c44569;   /* Dark pink */
    --color-wine: #6a2c4e;        /* Text color */
}
```

### Change Quote
Edit the quote in `index.html`:
```html
<p class="love-quote">
    Your custom romantic quote here
</p>
<p class="quote-author">— Author Name</p>
```

### Change Photo Paths
If you want to use different folder names, edit the `src` attributes in `index.html`:
```html
<img src="your-folder/your-photo.jpg" alt="Description">
```

### Adjust Music Volume
Edit in `script.js`:
```javascript
bgMusic.volume = 0.3; // Change to 0.0 (mute) to 1.0 (max)
```

## 📱 Mobile Friendly

The website is fully responsive and works beautifully on:
- Desktop computers
- Tablets
- Smartphones

## 🌐 Browser Compatibility

Works on all modern browsers:
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## 🔧 Troubleshooting

### Music won't play
- Make sure the file is named exactly `romantic-song.mp3`
- Check that the `music` folder is in the correct location
- Try clicking the page first (browsers block auto-play)

### Photos not showing
- Verify file names match exactly (photo1.jpg, photo2.jpg, etc.)
- Check file extensions (.jpg, .jpeg, .png)
- Make sure the `photos` folder is in the correct location

## ❤️ Enjoy!

May this website help you express your love in the most beautiful way! 

Happy Valentine's Day! 💕
