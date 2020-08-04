let slides = ["image1.jpg", "image2.jpg", "image3.jpg"];

slides = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"];

const lastIndex = slides.length - 1;

console.log(slides[lastIndex]);

console.log(slides);

slides.push(slides[1]);
slides.splice(1, 1);
console.log(slides);

slides.splice(1,2, "nouveauté");

console.log(slides);
