let BMImageArray = [];
//use getElementById to find our image tags in html
// let imageOne = document.getElementById('image1');
// let imageTwo = document.getElementById('image2');
// let imageThree = document.getElementById('image3');
let allClix = 0;
let elImageContainer = document.getElementById('image-container');
// console.log(BMImageArray)

//create an object constructor that will take in parameters, and store properties of an image
// let BMImage = function(name, universe, filePath) {
let BMImage = function(name, universe, filePath, id) {
    this.name = name;
    this.universe = universe;
    this.filePath = filePath;
    this.id = id;
    this.clicked = 0;
    this.shown = 0;
    this.addClix = 0; 
};

//check if localstorage exists
if(localStorage.length > 0) {
    //retrieve stored image array from local storage that contains our clicks and shown
    let getData = localStorage.getItem('storageBMImgArr');
    //reassign the value of BMImageArray to the parsed version of image array that we stored in local storage
    BMImageArray = JSON.parse(getData);
} else {
    //if local storage does not exist, instantiate our constructor to create multiple instances/objects of images

let Thor = new BMImage('Bag', 'Travel', './images/bag.jpg', 'bag');
let Thanos = new BMImage('Pants', 'Clothes', './images/90degrees.jpg', 'pants');
let BlackPanther = new BMImage('Banana', 'Eats', './images/banana.jpg','banana');
let Hulk = new BMImage('Boots', 'Clothes', './images/boots.jpg', 'boots');
let DeadPool = new BMImage('Chair', 'Funishings', './images/chair.jpg', 'chair');
let DrStrange = new BMImage('Pen', 'Tools', './images/pen.jpg', 'pen');

// let Thor2 = new BMImage('Breakfast', 'Travel', './images/breakfast.jpg', 'breakfast');
// let Thanos2 = new BMImage('Bubblegum', 'Clothes', './images/bubblegum.jpg', 'gum');
// let BlackPanther2 = new BMImage('Bathroom', 'Travel', './images/bathroom.jpg','bano');
// let Hulk2 = new BMImage('Dog-duck', 'Tools', './images/dog-duck.jpg', 'dog duck');
// let DeadPool2 = new BMImage('Dragon', 'Funishings', './images/dragon.jpg', 'dragon');
// let DrStrange2 = new BMImage('VW bike', 'Travel', './images/img_vw_bike_4.jpg', 'bike');

// let Thor3 = new BMImage('Miracle berry', 'Travel', './images/miracle-berry.jpg', 'Mberry');
// let Thanos3 = new BMImage('Sweep', 'Clothes', './images/pet-sweep.jpg', 'sweep');
// let BlackPanther3 = new BMImage('Shark', 'Travel', './images/shark.jpg','shark');
// let Hulk3 = new BMImage('Scissors', 'Tools', './images/scissors.jpg', 'scissors');
// let DeadPool3 = new BMImage('Tauntaun', 'Funishings', './images/tauntaun.jpg', 'tauntaun');
// let DrStrange3 = new BMImage('VW bike', 'Travel', './images/pen.jpg', 'bike');



//push our new instances/objects to our imageArray
BMImageArray.push(Thor, Thanos, BlackPanther, Hulk, DeadPool, DrStrange);

};
console.log (BMImageArray);

function randomImage() {
    //declare a variable that will calculate a random whole number between 0 and the length of our image array
    let randomNumber = Math.floor(Math.random() * BMImageArray.length);
    //declare a variable that will store the image object at the index of our random number
    let imageIndex = BMImageArray[randomNumber];
    //increment the shown property of our random image object by 1
    // imageIndex.shown += 1;  <--moved in v2 to very end of displayImage function (A) 
    //return our random image object
    return imageIndex;
}

//define event handler function that will increment the times clicked for the firstImage
function  imageClicked(event) {
//if the id of the target html element matches the first, second or third image object, increment that objects clicked property by 1
if(event.target.id === firstImage.id) {
    firstImage.clicked += 1;
} else if(event.target.id === secondImage.id) {
    secondImage.clicked += 1;
} else if(event.target.id === thirdImage.id) {
    thirdImage.clicked += 1;
}
// console.log('first image shown', firstImage.shown);
// console.log('second image shown', secondImage.shown);
// console.log('third image shown', thirdImage.shown);

//invoke our display images function to display 3 new images
displayImages();

console.log('event', firstImage.clicked, secondImage.clicked, thirdImage.clicked);

//every time an image is clicked, save our image array to local storage
localStorage.setItem('storageBMImgArr', JSON.stringify(BMImageArray));
//invoke my chart function to display my data for images clicked and shown




displayChart();

console.log('event target', event.target);
    // console.log('event', event.target.id);  <--function moved up to under return imageIndex & condition added
}
    
    //declare 3 variables to hold image objects displayed on page
    let firstImage;
    let secondImage;
    let thirdImage;
    //define a function that will display our random images
    function displayImages() {
        //re-assign the image container html to an empty string so that it removes our previously shown images
// update begin
    elImageContainer.innerHTML = '';
    //create a loop that will iterate 3 times to display 3 images
    for(let i =0; i < 3; i++) {
    //declare a variable and assign it the value that is returned from invoking randomImage function
        let imageObject = randomImage();
    //write conditionals that will check what iteration our for loop is on and assign our firstImage, secondImage, and thirdImage variables the value of our current image object
            if(i === 0) {  //i is equal to an iteration
            firstImage = imageObject;
                } else if(i === 1) {
    //while the current image object is equal to the first image, get a new image, this will run until the images are no longer the same
                while(imageObject.id === firstImage.id) {  // id to id
                    imageObject = randomImage();
                    console.log('second while', imageObject.id);
                }
            secondImage = imageObject;
                } else {
                while(imageObject.id === firstImage.id || imageObject.id === secondImage.id) {
                    imageObject = randomImage();
                    console.log('third while', imageObject.id);
                }       
            thirdImage = imageObject;
        }
// end update
        let elImage = document.createElement('img');
        elImageContainer.appendChild(elImage);
        elImage.setAttribute('id', imageObject.id);
        elImage.src = imageObject.filePath;
        elImage.addEventListener('click', imageClicked);
        // imageObject.shown += 1;   //(A)
         
    }
}

        if (allClix == 25){
            elImage.removeEventListener('click', imageClicked);
        }
        imageObject.shown += 1;  //(B)
        // return imageObject.shown

// let count = 0;
// function addAClick(){
//   count = count + 1;
//   document.getElementById("viewCount").textContent=count;
// }

// if (totalClicks >= 25 ) {
//     // remove event listener l
//     elImage.removeEventListener('click', imageClicked);
//  }
// //increment the shown property on our current image object by 1
//     imageObject.shown += 1; 
//     console.log(imageObject.shown)
    }
}

displayImages();