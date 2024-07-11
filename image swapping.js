const imageSources = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpeg','8.jpg','9.jpg','10.jpg'];
function changeBackgroundImage() {
const randomIndex = Math.floor(Math.random() * imageSources.length);
document.body.style.backgroundImage = `url(${imageSources[randomIndex]})`;
}
setInterval(changeBackgroundImage, 1000);



