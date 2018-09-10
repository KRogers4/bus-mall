let BMImageArray = [];
//use getElementById to find our image tags in html
// let imageOne = document.getElementById('image1');
// let imageTwo = document.getElementById('image2');
// let imageThree = document.getElementById('image3');

let elImageContainer = document.getElementById('image-container');
//create an object constructor that will take in parameters, and store properties of an image
// let BMImage = function(name, universe, filePath) {
let BMImage = function(name, universe, filePath, Pid) {
    this.name = name;
    this.universe = universe;
    this.filePath = filePath;
    this.Pid = Pid;
    this.clicked = 0;
    this.shown = 0;
};

let Thor = new BMImage('Bag', 'Travel', './images/bag.jpg', 'bag');
let Thanos = new BMImage('Pants', 'Clothes', './images/90degrees.jpg', 'pants');
let BlackPanther = new BMImage('Banana', 'Eats', './images/banana.jpg','banana');
let Hulk = new BMImage('Boots', 'Clothes', './images/boots.jpg', 'boots');
let DeadPool = new BMImage('Chair', 'Funishings', './images/chair.jpg', 'chair');
let DrStrange = new BMImage('Pen', 'Tools', './images/pen.jpg', 'pen');

//push our new instances/objects to our imageArray
BMImageArray.push(Thor, Thanos, BlackPanther, Hulk, DeadPool, DrStrange);
function randomImage() {
    //declare a variable that will calculate a random whole number between 0 and the length of our image array
    let randomNumber = Math.floor(Math.random() * BMImageArray.length);
    //declare a variable that will store the image object at the index of our random number
    let imageIndex = BMImageArray[randomNumber];
    //increment the shown property of our random image object by 1
    imageIndex.shown += 1;
    //return our random image object
    return imageIndex;
}

let firstImage;
let secondImage;
let thirdImage;
//define a function that will display our random images
function displayImages() {
    for(let i =0; i < 3; i++) {
        let elImage = document.createElement('img');
        let imageObject = randomImage();
        elImageContainer.appendChild(elImage);
        elImage.setAttribute('Pid', imageObject.Pid);
        elImage.src = imageObject.filePath;
        elImage.addEventListener('click', imageClicked);
        if(i === 0) {
            firstImage = imageObject;
        } else if(i === 1) {
            secondImage = imageObject;
        } else {
            thirdImage = imageObject;
        }
    }
}
displayImages();
console.log(elImageContainer);
console.log('images', firstImage, secondImage, thirdImage);

//define event handler function that will increment the times clicked for the firstImage
function  imageClicked(event) {
    console.log('event', event.target.Pid);
}

console.log('first image shown', firstImage.shown);
console.log('second image shown', secondImage.shown);
console.log('third image shown', thirdImage.shown);