const images = [
  "images/image-1.jpg",
  "images/image-2.jpg",
  "images/image-3.jpg",
  "images/image-4.jpg",
  "images/image-5.jpg",
  "images/image-6.jpg",
];

const imageId = document.getElementById("image");
let count = 0;

setInterval(() => {
  if (count >= images.length) {
    count = 0;
  }
  const imageSourch = images[count];
  imageId.setAttribute("src", imageSourch);
  //   console.log(images[count]);
  count++;
}, 1000);
