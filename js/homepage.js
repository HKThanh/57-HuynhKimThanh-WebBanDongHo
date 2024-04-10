const imageContainer = document.querySelector('.banner'),
    imageSlide = document.querySelector('.slide'),
    images = document.querySelectorAll('.slide img'),
    buttons = document.querySelectorAll('.banner-side');

let imageIndex = 1,
    intervalID;

//generate auto slide show
const autoSlide = () => {
    intervalID = setInterval(() => {
        slideImage(++imageIndex);
    }, 8000);
}

//activate auto slide show
autoSlide();

//slide images
const slideImage = () => {
    imageIndex = imageIndex === images.length ? 0 : imageIndex < 0 ? images.length - 1 : imageIndex;
    imageSlide.style.transform = `translate(${-imageIndex * 115}%)`;
}

//when move mouse on image-container, stop auto slide show
imageContainer.addEventListener('mouseover', () => clearInterval(intervalID));
//when move mouse out of image-container, activate auto slide show
imageContainer.addEventListener('mouseleave', autoSlide);

//when click on button, update image index and slide image
const updateClick = (e) => {
    clearInterval(intervalID);
    imageIndex += e.target.id === 'next' ? 1 : -1;
    slideImage(imageIndex);
    autoSlide();
}

//add event listener to buttons
buttons.forEach((img) => img.addEventListener('click', updateClick));

var btnGetmore = document.querySelector('.btn-getmore');
btnGetmore.addEventListener('click', function() {
    window.location.href = "./xemthem.html";
})

var items = document.querySelectorAll('.items');
items.forEach(function(item) {
    item.addEventListener('click', function() {
        window.location.href = "./Chitietsanpham.html";
    })
})

var tabitems = document.querySelectorAll('.tab-items');
tabitems.forEach(function(tabitem) {
    tabitem.addEventListener('click', function() {
        window.location.href = "./Chitietsanpham.html";
    })
})

// const goTopBtn = document.querySelector('.to-top-button');

// window.addEventListener('scroll', checkHeight);

// function checkHeight() {
//     if (window.scrollY > 20) {
//         goTopBtn.style.display = 'flex'; 
//     } else {
//         goTopBtn.style.display = 'none';
//     }
// }

// goTopBtn.addEventListener('click', () => {
//     window.scrollTo({top: 0, behavior: 'smooth'});
// })