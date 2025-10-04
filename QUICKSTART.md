# Quick Start Guide

## Running the Viewer

### Option 1: Direct File Access
Simply open `index.html` in any modern web browser (Chrome, Firefox, Safari, Edge).

### Option 2: Local Web Server (Recommended)
For best performance and to avoid CORS issues:

```bash
# Using Python 3
python3 -m http.server 8080

# Using Python 2
python -m SimpleHTTPServer 8080

# Using Node.js
npx http-server -p 8080

# Using PHP
php -S localhost:8080
```

Then navigate to: `http://localhost:8080/index.html`

## Features Demonstrated

### 1. Deep Zoom Capability
- Zoom in/out using mouse wheel or on-screen controls
- Maximum zoom level: 10x
- Smooth zoom transitions with 1.2s animation time

### 2. Image Navigation
- Pan by clicking and dragging
- Navigator panel in bottom-right corner shows overview
- Double-click to reset to home view

### 3. Multiple Images
- Gallery sidebar with 4 sample NASA-themed images
- Click any thumbnail to switch images
- Active image is highlighted

### 4. Full Control Set
- Zoom In/Out buttons
- Home button (reset view)
- Full Screen toggle
- Navigator panel

### 5. Responsive Design
- Works on desktop and mobile devices
- Sidebar collapses on smaller screens
- Touch-friendly controls

## Adding Your Own Images

Edit `script.js` and add entries to the `imageData` object:

```javascript
'your-image-name': {
    type: 'image',
    url: 'images/your-image.jpg'
}
```

Then add a corresponding button in `index.html` image gallery section.

## Technical Specifications

- **OpenSeadragon Version**: 4.1.0
- **Sample Images**: 3000x3000px JPEGs
- **Supported Formats**: JPEG, PNG, and any format supported by OpenSeadragon
- **Browser Requirements**: Modern browsers with JavaScript enabled
- **Performance**: Optimized for images up to 10,000x10,000px

## Customization

### Colors
Edit `style.css` to change the color scheme. Main colors are defined in:
- Header gradient: `#4a90e2` to `#63b3ed`
- Background: `#0a0e27` to `#1a1f3a`

### Zoom Levels
Edit `script.js` OpenSeadragon configuration:
- `minZoomLevel`: Currently 0.5
- `maxZoomLevel`: Currently 10
- `defaultZoomLevel`: Currently 0 (fit to viewport)

### Animation Speed
Edit `animationTime` in `script.js` (currently 1.2 seconds)
