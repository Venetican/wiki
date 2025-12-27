// Favicon generator - creates PNG versions from SVG
function generateFavicons() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Generate 16x16 favicon
    canvas.width = 16;
    canvas.height = 16;
    generateFaviconIcon(ctx, 16);
    const favicon16 = canvas.toDataURL('image/png');
    
    // Generate 32x32 favicon
    canvas.width = 32;
    canvas.height = 32;
    generateFaviconIcon(ctx, 32);
    const favicon32 = canvas.toDataURL('image/png');
    
    // Generate 180x180 apple touch icon
    canvas.width = 180;
    canvas.height = 180;
    generateFaviconIcon(ctx, 180);
    const appleTouch = canvas.toDataURL('image/png');
    
    console.log('Generated favicons:', {
        favicon16: favicon16.substring(0, 50) + '...',
        favicon32: favicon32.substring(0, 50) + '...',
        appleTouch: appleTouch.substring(0, 50) + '...'
    });
}

function generateFaviconIcon(ctx, size) {
    const center = size / 2;
    const radius = size * 0.45;
    
    // Create gradient
    const gradient = ctx.createLinearGradient(0, 0, size, size);
    gradient.addColorStop(0, '#6366f1');
    gradient.addColorStop(0.5, '#8b5cf6');
    gradient.addColorStop(1, '#ec4899');
    
    // Draw background circle
    ctx.beginPath();
    ctx.arc(center, center, radius, 0, 2 * Math.PI);
    ctx.fillStyle = gradient;
    ctx.fill();
    
    // Draw border
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = size * 0.02;
    ctx.stroke();
    
    // Draw DS text
    ctx.fillStyle = '#ffffff';
    ctx.font = `bold ${size * 0.4}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('DS', center, center + size * 0.05);
}

// Uncomment to generate favicons (for development)
// generateFavicons();