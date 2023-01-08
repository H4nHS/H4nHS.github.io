const images = [
    "cat1.jpg",
    "cat2.jpg",
    "cat3.jpg",
    "cat4.jpg",
    "cat5.jpg",
    "cat6.jpg",
    "cat7.jpg",
    "cat8.jpg",
    "cat9.jpg",
    "cat10.jpg",
    "cat11.jpg",
    "cat12.jpg",
    "cat13.jpg",
];

const randomImg = images[Math.floor(Math.random() * images.length)];
const bgImg = `img/${randomImg}`;
document.body.style.backgroundImage = `url(${bgImg})`;
document.body.style.backgroundSize = "cover";
document.body.style.backgroundRepeat = "no-repeat";
