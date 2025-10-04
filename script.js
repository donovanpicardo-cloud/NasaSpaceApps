// Image sources configuration
const imageData = {
    'hubble-deep-field': {
        type: 'image',
        url: 'images/hubble-deep-field.jpg'
    },
    'pillars-of-creation': {
        type: 'image',
        url: 'images/pillars-of-creation.jpg'
    },
    'earth-blue-marble': {
        type: 'image',
        url: 'images/earth-blue-marble.jpg'
    },
    'carina-nebula': {
        type: 'image',
        url: 'images/carina-nebula.jpg'
    }
};

// Initialize OpenSeadragon viewer
let viewer = OpenSeadragon({
    id: "openseadragon-viewer",
    prefixUrl: "openseadragon/images/",
    tileSources: imageData['hubble-deep-field'],
    showNavigator: true,
    navigatorPosition: "BOTTOM_RIGHT",
    navigatorSizeRatio: 0.2,
    showNavigationControl: true,
    navigationControlAnchor: OpenSeadragon.ControlAnchor.TOP_LEFT,
    showHomeControl: true,
    showZoomControl: true,
    showFullPageControl: true,
    defaultZoomLevel: 0,
    minZoomLevel: 0.5,
    maxZoomLevel: 10,
    visibilityRatio: 1.0,
    constrainDuringPan: true,
    animationTime: 1.2,
    blendTime: 0.5,
    preserveViewport: false,
    preserveOverlays: false,
    wrapHorizontal: false,
    wrapVertical: false,
    immediateRender: false,
    debugMode: false,
    timeout: 120000
});

// Handle image selection
document.querySelectorAll('.image-item').forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all buttons
        document.querySelectorAll('.image-item').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Get image data
        const imageKey = this.getAttribute('data-image');
        const imageSource = imageData[imageKey];
        
        // Open new image in viewer
        viewer.open(imageSource);
    });
});

// Add loading indicator
viewer.addHandler('open', function() {
    console.log('Image loading...');
});

viewer.addHandler('open-failed', function(event) {
    console.error('Failed to load image:', event);
    alert('Failed to load the image. Please try another one.');
});

viewer.addHandler('tile-loaded', function() {
    console.log('Tile loaded');
});

// Log when viewer is ready
viewer.addHandler('viewport-change', function() {
    // You can add custom behavior here when viewport changes
});
