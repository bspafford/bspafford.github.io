
let currentFrame = 0;

const dragButton = document.getElementById('dragButton');
const line = document.getElementById('line');
const beforeDiv = document.getElementById('before');
const afterDiv = document.getElementById('after');
isDragging = false;
let dragOffsetX = 0;

//const img = document.getElementById("coverImg");
heroImg = document.getElementById("heroImg")
let lastScrollY = 0;
let ticking = false;

requestAnimationFrame(updateImagePosition);

// setup footer
var coll = document.getElementsByClassName("collapsible");
for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    const content = this.nextElementSibling;
    this.classList.toggle("active");

    if (content.style.maxHeight) {
      // CLOSE
      content.style.maxHeight = null;
    } else {
      // OPEN
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

function updateImagePosition() {
    heroImg.style.transform = `translateY(${lastScrollY * 0.5}px)`;
    fadeLogo.style.transform = `translateY(${lastScrollY * 0.425}px)`;
    ticking = false;
}

window.addEventListener("scroll", () => {
	lastScrollY = window.scrollY;

    if (!ticking) {
		console.log("updating");
        requestAnimationFrame(updateImagePosition);
        ticking = true;
    }

	const items = document.querySelectorAll('.projectItem');
	items.forEach(item => {
		if (isInViewport(item)) {
			item.classList.add('visible');
		}
	});
});

dragButton.addEventListener("mousedown", (event) => {
	isDragging = true;

	const rect = dragButton.getBoundingClientRect();
	dragOffsetX = event.pageX - rect.left;

	console.log(event.pageX, rect.left, dragOffsetX);
	//dragButton.style.left = `${dragOffsetX}px`;

	dragButton.style.cursor = 'grabbing';
});

window.addEventListener("mousemove", (event) => {
	if (!isDragging) return;

	const rect = beforeDiv.getBoundingClientRect();
	buttonWidth = dragButton.getBoundingClientRect().width;
	var newLeft = event.pageX - rect.left + buttonWidth / 2 - dragOffsetX;
	newLeft = Math.max(0, Math.min(newLeft, afterDiv.getBoundingClientRect().width));

	//dragButton.style.left = `${newLeft}px`;
	line.style.left = `${newLeft}px`;
	beforeDiv.style.width = `${newLeft}`
});

document.addEventListener('mouseup', () => {
	isDragging = false;
	dragButton.style.cursor = 'grab';
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