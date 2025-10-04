# NASA High-Resolution Image Viewer

A web-based viewer for exploring NASA's high-resolution images with deep zoom capabilities, built using OpenSeadragon.

## Features

- **Deep Zoom**: Zoom into high-resolution images to view incredible details
- **Smooth Navigation**: Pan and zoom smoothly across large images
- **Multiple Images**: Gallery of stunning NASA space images including:
  - Hubble Ultra Deep Field
  - Pillars of Creation
  - Blue Marble (Earth)
  - Carina Nebula
- **Responsive Design**: Works on desktop and mobile devices
- **Navigator Panel**: Small overview map for easy navigation
- **Full Screen Mode**: View images in full screen for immersive experience

## How to Use

1. **Open the Viewer**: Simply open `index.html` in a web browser
2. **Select an Image**: Click on any image thumbnail in the left sidebar to load it
3. **Zoom In/Out**: Use your mouse wheel or pinch gesture on mobile
4. **Pan**: Click and drag to move around the image
5. **Reset View**: Double-click or use the home button to return to the default view
6. **Full Screen**: Click the fullscreen button in the viewer controls

## Controls

- **Mouse Wheel**: Zoom in/out
- **Click + Drag**: Pan around the image
- **Double Click**: Reset to home view
- **Navigation Controls**: Use the on-screen buttons for zoom, home, and fullscreen

## Technical Details

This viewer uses [OpenSeadragon](https://openseadragon.github.io/), a powerful open-source library for displaying high-resolution images with smooth zooming and panning.

### Technologies Used

- HTML5
- CSS3
- JavaScript
- OpenSeadragon 4.1 (via CDN)

## Customization

To add your own NASA images:

1. Open `script.js`
2. Add new entries to the `imageData` object with the image URL
3. Add corresponding buttons in `index.html` in the image gallery section

Example:
```javascript
'your-image-name': {
    type: 'image',
    url: 'https://your-nasa-image-url.jpg'
}
```

## Browser Compatibility

Works with all modern browsers:
- Chrome/Edge (recommended)
- Firefox
- Safari
- Opera

## License

This project is open source. NASA images are in the public domain.
