const canvas = document.getElementById("hero-canvas");
const context = canvas.getContext("2d");

const frameCount = 150;
const images = [];
const imageSeq = index => `frames/frame_${index.toString().padStart(4, '0')}.jpg`;

fadeText = document.getElementById("fadeText")

let currentFrame = 0;

const items = document.querySelectorAll('#projectItem');
items.forEach(item => {
  item.addEventListener('click', () => {
    const url = item.getAttribute('data-link');
    window.location.href = url;
  });
});

// Preload images
for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = imageSeq(i);
  img.style.imageRendering = "pixelated"
  images.push(img);
}

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

images[0].onload = function () {
    drawImageCover(context, images[0], canvas)
};

// Scroll handler
window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const start = 0;
    const end = 2000; // scroll zone where animation should happen
    
    console.log(scrollTop);

    if (scrollTop >= start && scrollTop <= end) {
        const scrollFraction = (scrollTop - start) / (end - start);
        const frameIndex = Math.floor(scrollFraction * (frameCount - 1));
    
        if (frameIndex !== currentFrame) {
        currentFrame = frameIndex;
        requestAnimationFrame(() => {
            drawImageCover(context, images[currentFrame], canvas)
        });
        
    }

    canvas.style.display = "block";
    fadeText.style.display = "block";
    } else {
        canvas.style.display = "none";
        fadeText.style.display = "none";
    }

    const triggerStart = 300;
    const triggerEnd = 400;

    const opacity = Math.min(Math.max((scrollTop - triggerStart) / (triggerEnd - triggerStart), 0), 1);
    fadeText.style.opacity = opacity;

    const items = document.querySelectorAll('#projectItem');
    items.forEach(item => {
    if (isInViewport(item)) {
        item.classList.add('visible');
    }
  });
});

function drawImageCover(ctx, img, canvas) {
    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;
  
    let drawWidth, drawHeight, offsetX, offsetY;
  
    if (imgRatio > canvasRatio) {
      // Image is wider than canvas
      drawHeight = canvas.height;
      drawWidth = img.width * (canvas.height / img.height);
    } else {
      // Image is taller than canvas
      drawWidth = canvas.width;
      drawHeight = img.height * (canvas.width / img.width);
    }
  
    offsetX = (canvas.width - drawWidth) / 2;
    offsetY = (canvas.height - drawHeight) / 2;
  
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
}

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top + 200 <= window.innerHeight;
  }