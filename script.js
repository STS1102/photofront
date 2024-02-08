document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.gallery img');
    
    images.forEach(image => {
        image.addEventListener('click', function() {
            const src = this.getAttribute('src');
            document.querySelector('.modal-img').src = src;
            document.querySelector('.modal').style.display = 'block';
        });
    });

    document.querySelector('.modal').addEventListener('click', function() {
        this.style.display = 'none';
    });
});

function filterImages(category) {
    let elements = document.getElementsByClassName('gallery-item');
    for (let i = 0; i < elements.length; i++) {
        if (category === 'all' || elements[i].classList.contains(category)) {
            elements[i].style.display = 'block'; 
        } else {
            elements[i].style.display = 'none'; 
        }
    }
}

window.onload = function() {
    filterImages('all');
};



/******************************************************************************88*/



document.addEventListener('DOMContentLoaded', (event) => {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    const lightboxContainer = document.getElementById('lightbox-container');
    const lightboxImage = document.getElementById('lightbox-image');
  
    galleryItems.forEach((item) => {
      item.addEventListener('click', function() {
        lightboxImage.src = this.src;
        lightboxContainer.style.display = 'flex';
      });
    });
  
    lightboxContainer.addEventListener('click', function(e) {
      if (e.target !== lightboxImage) {
        lightboxContainer.style.display = 'none';
      }
    });
  });
  




