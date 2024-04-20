let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');

function showImage(index) {
  if (index >= images.length) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = images.length - 1;
  }

  images.forEach((image, i) => {
    if (i === currentIndex) {
      image.style.display = 'block';
    } else {
      image.style.display = 'none';
    }
  });
}

function prevImage() {
  currentIndex--;
  showImage(currentIndex);
}

function nextImage() {
  currentIndex++;
  showImage(currentIndex);
}

// Show the first image initially
showImage(currentIndex);
function clearImage() {
    document.getElementById('myImage').src = '';
}
