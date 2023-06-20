let marutiSuzuki = document.getElementById('mSuzuki');
let mercedes = document.getElementById('mercedes');
let bmw = document.getElementById('bmw');
let tataMotors = document.getElementById('tMotors');


function marutiSuzukiJs(currentState) {
    console.log(currentState);
    currentState.className = "nav-link active";
    mercedes.className = "nav-link";
    bmw.className = "nav-link";
    tataMotors.className = "nav-link";

    let carModel = document.getElementById('add_images');
    carModel.removeChild(carModel.children[0]);

    var imgOne = document.createElement("img");
    imgOne.src = "images/suzuki_1.jpg";
    imgOne.style.width = "270px";
    imgOne.style.height = "143px";
    var imgTwo = document.createElement("img");
    imgTwo.src = "images/suzuki_2.jpg";
    imgTwo.style.width = "270px";
    imgTwo.style.height = "143px";
    var imgThree = document.createElement("img");
    imgThree.src = "images/suzuki_3.png";
    imgThree.style.width = "270px";
    imgThree.style.height = "143px";
    var imgFour = document.createElement("img");
    imgFour.src = "images/suzuki_4.webp";
    imgFour.style.width = "270px";
    imgFour.style.height = "143px";
    var imgFive = document.createElement("img");
    imgFive.src = "images/suzuki_5.jpeg";
    imgFive.style.width = "270px";
    imgFive.style.height = "143px";
    var imgSix = document.createElement("img");
    imgSix.src = "images/suzuki_6.jpg";
    imgSix.style.width = "270px";
    imgSix.style.height = "143px";
    var imgSeven = document.createElement("img");
    imgSeven.src = "images/suzuki_7.avif";
    imgSeven.style.width = "270px";
    imgSeven.style.height = "143px";
    var imgEight = document.createElement("img");
    imgEight.src = "images/suzuki_8.png";
    imgEight.style.width = "270px";
    imgEight.style.height = "143px";
    var imgNine = document.createElement("img");
    imgNine.src = "images/suzuki_9.jpg";
    imgNine.style.width = "270px";
    imgNine.style.height = "143px";
    var imgTen = document.createElement("img");
    imgTen.src = "images/suzuki_10.webp";
    imgTen.style.width = "270px";
    imgTen.style.height = "143px";
    var imgEleven = document.createElement("img");
    imgEleven.src = "images/suzuki_11.jpg";
    imgEleven.style.width = "270px";
    imgEleven.style.height = "143px";
    var imgTwelve = document.createElement("img");
    imgTwelve.src = "images/suzuki_12.png";
    imgTwelve.style.width = "270px";
    imgTwelve.style.height = "143px";
    var imgThirteen = document.createElement("img");
    imgThirteen.src = "images/suzuki_13.jpg";
    imgThirteen.style.width = "270px";
    imgThirteen.style.height = "143px"; 

    console.log(imgOne);
    console.log(imgFive);

    var carsImg1 = document.createElement("div");
    var carsImg2 = document.createElement("div");
    var carsImg3 = document.createElement("div");
    var carsImg4 = document.createElement("div");
    var carsImg5 = document.createElement("div");
    var carsImg6 = document.createElement("div");
    var carsImg7 = document.createElement("div");
    var carsImg8 = document.createElement("div");
    var carsImg9 = document.createElement("div");
    var carsImg10 = document.createElement("div");
    var carsImg11 = document.createElement("div");
    var carsImg12 = document.createElement("div");
    var carsImg13 = document.createElement("div");

    carsImg1.className = "cars_img";
    carsImg2.className = "cars_img";
    carsImg3.className = "cars_img";
    carsImg4.className = "cars_img";
    carsImg5.className = "cars_img";
    carsImg6.className = "cars_img";
    carsImg7.className = "cars_img";
    carsImg8.className = "cars_img";
    carsImg9.className = "cars_img";
    carsImg10.className = "cars_img";
    carsImg11.className = "cars_img";
    carsImg12.className = "cars_img";
    carsImg13.className = "cars_img";

    carsImg1.appendChild(imgOne);
    carsImg2.appendChild(imgTwo);
    carsImg3.appendChild(imgThree);
    carsImg4.appendChild(imgFour);
    carsImg5.appendChild(imgFive);
    carsImg6.appendChild(imgSix);
    carsImg7.appendChild(imgSeven);
    carsImg8.appendChild(imgEight);
    carsImg9.appendChild(imgNine);
    carsImg10.appendChild(imgTen);
    carsImg11.appendChild(imgEleven);
    carsImg12.appendChild(imgTwelve);
    carsImg13.appendChild(imgThirteen);

    var newElement = document.createElement("div");
    newElement.className = "car_img_set"; 

    newElement.appendChild(carsImg1);
    newElement.appendChild(carsImg2);
    newElement.appendChild(carsImg3);
    newElement.appendChild(carsImg4);
    newElement.appendChild(carsImg5);
    newElement.appendChild(carsImg6);
    newElement.appendChild(carsImg7);
    newElement.appendChild(carsImg8);
    newElement.appendChild(carsImg9);
    newElement.appendChild(carsImg10);
    newElement.appendChild(carsImg11);
    newElement.appendChild(carsImg12);
    newElement.appendChild(carsImg13);

    console.log(newElement);
    carModel.appendChild(newElement);
}

function mercedesJs(currentState) {
    console.log(currentState);
    currentState.className = "nav-link active";
    marutiSuzuki.className = "nav-link";
    bmw.className = "nav-link";
    tataMotors.className = "nav-link";

    let carModel = document.getElementById('add_images');
    carModel.removeChild(carModel.children[0]);

    var imgOne = document.createElement("img");
    imgOne.src = "images/mercedes_12.avif";
    imgOne.style.width = "270px";
    imgOne.style.height = "143px";
    var imgTwo = document.createElement("img");
    imgTwo.src = "images/mercedes_2.jpg";
    imgTwo.style.width = "270px";
    imgTwo.style.height = "143px";
    var imgThree = document.createElement("img");
    imgThree.src = "images/mercedes_3.avif";
    imgThree.style.width = "270px";
    imgThree.style.height = "143px";
    var imgFour = document.createElement("img");
    imgFour.src = "images/mercedes_4.jpg";
    imgFour.style.width = "270px";
    imgFour.style.height = "143px";
    var imgFive = document.createElement("img");
    imgFive.src = "images/mercedes_13.jpg";
    imgFive.style.width = "270px";
    imgFive.style.height = "143px";

    console.log(imgOne);
    console.log(imgFive);

    var carsImg1 = document.createElement("div");
    var carsImg2 = document.createElement("div");
    var carsImg3 = document.createElement("div");
    var carsImg4 = document.createElement("div");
    var carsImg5 = document.createElement("div");

    carsImg1.className = "cars_img";
    carsImg2.className = "cars_img";
    carsImg3.className = "cars_img";
    carsImg4.className = "cars_img";
    carsImg5.className = "cars_img";
    carsImg1.appendChild(imgOne);
    carsImg2.appendChild(imgTwo);
    carsImg3.appendChild(imgThree);
    carsImg4.appendChild(imgFour);
    carsImg5.appendChild(imgFive);

    var newElement = document.createElement("div");
    newElement.className = "car_img_set"; 

    newElement.appendChild(carsImg1);
    newElement.appendChild(carsImg2);
    newElement.appendChild(carsImg3);
    newElement.appendChild(carsImg4);
    newElement.appendChild(carsImg5);

    console.log(newElement);
    carModel.appendChild(newElement);
}

function bmwJs(currentState) {
    console.log(currentState);
    currentState.className = "nav-link active";
    marutiSuzuki.className = "nav-link";
    mercedes.className = "nav-link";
    tataMotors.className = "nav-link";

    let carModel = document.getElementById('add_images');
    carModel.removeChild(carModel.children[0]);

    var imgOne = document.createElement("img");
    imgOne.src = "images/bmw_1.jpg";
    imgOne.style.width = "270px";
    imgOne.style.height = "143px";
    var imgTwo = document.createElement("img");
    imgTwo.src = "images/bmw_2.jpg";
    imgTwo.style.width = "270px";
    imgTwo.style.height = "143px";
    var imgThree = document.createElement("img");
    imgThree.src = "images/bmw_3.png";
    imgThree.style.width = "270px";
    imgThree.style.height = "143px";
    var imgFour = document.createElement("img");
    imgFour.src = "images/bmw_4.jpg";
    imgFour.style.width = "270px";
    imgFour.style.height = "143px";
    var imgFive = document.createElement("img");
    imgFive.src = "images/bmw_5.png";
    imgFive.style.width = "270px";
    imgFive.style.height = "143px";
    var imgSix = document.createElement("img");
    imgSix.src = "images/bmw_6.jpeg";
    imgSix.style.width = "270px";
    imgSix.style.height = "143px";
    var imgSeven = document.createElement("img");
    imgSeven.src = "images/bmw_7.jpg";
    imgSeven.style.width = "270px";
    imgSeven.style.height = "143px";
    var imgEight = document.createElement("img");
    imgEight.src = "images/bmw_8.png";
    imgEight.style.width = "270px";
    imgEight.style.height = "143px";
    var imgNine = document.createElement("img");
    imgNine.src = "images/bmw_9.png";
    imgNine.style.width = "270px";
    imgNine.style.height = "143px";
    
    console.log(imgOne);
    console.log(imgFive);

    var carsImg1 = document.createElement("div");
    var carsImg2 = document.createElement("div");
    var carsImg3 = document.createElement("div");
    var carsImg4 = document.createElement("div");
    var carsImg5 = document.createElement("div");
    var carsImg6 = document.createElement("div");
    var carsImg7 = document.createElement("div");
    var carsImg8 = document.createElement("div");
    var carsImg9 = document.createElement("div");

    carsImg1.className = "cars_img";
    carsImg2.className = "cars_img";
    carsImg3.className = "cars_img";
    carsImg4.className = "cars_img";
    carsImg5.className = "cars_img";
    carsImg6.className = "cars_img";
    carsImg7.className = "cars_img";
    carsImg8.className = "cars_img";
    carsImg9.className = "cars_img";

    carsImg1.appendChild(imgOne);
    carsImg2.appendChild(imgTwo);
    carsImg3.appendChild(imgThree);
    carsImg4.appendChild(imgFour);
    carsImg5.appendChild(imgFive);
    carsImg6.appendChild(imgSix);
    carsImg7.appendChild(imgSeven);
    carsImg8.appendChild(imgEight);
    carsImg9.appendChild(imgNine);

    var newElement = document.createElement("div");
    newElement.className = "car_img_set"; 

    newElement.appendChild(carsImg1);
    newElement.appendChild(carsImg2);
    newElement.appendChild(carsImg3);
    newElement.appendChild(carsImg4);
    newElement.appendChild(carsImg5);
    newElement.appendChild(carsImg6);
    newElement.appendChild(carsImg7);
    newElement.appendChild(carsImg8);
    newElement.appendChild(carsImg9);

    console.log(newElement);
    carModel.appendChild(newElement);
}

function tataMotorsJs(currentState) {
    console.log(currentState);
    currentState.className = "nav-link active";
    marutiSuzuki.className = "nav-link";
    bmw.className = "nav-link";
    mercedes.className = "nav-link";

    let carModel = document.getElementById('add_images');
    carModel.removeChild(carModel.children[0]);

    var imgOne = document.createElement("img");
    imgOne.src = "images/tata_1.jpeg";
    imgOne.style.width = "270px";
    imgOne.style.height = "143px";
    var imgTwo = document.createElement("img");
    imgTwo.src = "images/tata_2.png";
    imgTwo.style.width = "270px";
    imgTwo.style.height = "143px";
    var imgThree = document.createElement("img");
    imgThree.src = "images/tata_3.png";
    imgThree.style.width = "270px";
    imgThree.style.height = "143px";
    var imgFour = document.createElement("img");
    imgFour.src = "images/tata_4.png";
    imgFour.style.width = "270px";
    imgFour.style.height = "143px";
    var imgFive = document.createElement("img");
    imgFive.src = "images/tata_5.jpg";
    imgFive.style.width = "270px";
    imgFive.style.height = "143px";
    var imgSix = document.createElement("img");
    imgSix.src = "images/tata_6.png";
    imgSix.style.width = "270px";
    imgSix.style.height = "143px";
    var imgSeven = document.createElement("img");
    imgSeven.src = "images/tata_7.png";
    imgSeven.style.width = "270px";
    imgSeven.style.height = "143px";
    var imgEight = document.createElement("img");
    imgEight.src = "images/tata_8.png";
    imgEight.style.width = "270px";
    imgEight.style.height = "143px";
    
    console.log(imgOne);
    console.log(imgFive);

    var carsImg1 = document.createElement("div");
    var carsImg2 = document.createElement("div");
    var carsImg3 = document.createElement("div");
    var carsImg4 = document.createElement("div");
    var carsImg5 = document.createElement("div");
    var carsImg6 = document.createElement("div");
    var carsImg7 = document.createElement("div");
    var carsImg8 = document.createElement("div");

    carsImg1.className = "cars_img";
    carsImg2.className = "cars_img";
    carsImg3.className = "cars_img";
    carsImg4.className = "cars_img";
    carsImg5.className = "cars_img";
    carsImg6.className = "cars_img";
    carsImg7.className = "cars_img";
    carsImg8.className = "cars_img";

    carsImg1.appendChild(imgOne);
    carsImg2.appendChild(imgTwo);
    carsImg3.appendChild(imgThree);
    carsImg4.appendChild(imgFour);
    carsImg5.appendChild(imgFive);
    carsImg6.appendChild(imgSix);
    carsImg7.appendChild(imgSeven);
    carsImg8.appendChild(imgEight);

    var newElement = document.createElement("div");
    newElement.className = "car_img_set"; 

    newElement.appendChild(carsImg1);
    newElement.appendChild(carsImg2);
    newElement.appendChild(carsImg3);
    newElement.appendChild(carsImg4);
    newElement.appendChild(carsImg5);
    newElement.appendChild(carsImg6);
    newElement.appendChild(carsImg7);
    newElement.appendChild(carsImg8);

    console.log(newElement);
    carModel.appendChild(newElement);

}
