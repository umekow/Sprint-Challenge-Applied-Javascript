/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

//select div to append to 
const carouselContainer = document.querySelector('.carousel-container'); 

//create carousel

const createCarousel = () => {
  //create element
  const carousel_div = document.createElement('div'); 
  const leftButton = document.createElement('div');
  const img1 = document.createElement('img'); 
  const img2 = document.createElement('img'); 
  const img3 = document.createElement('img'); 
  const img4 = document.createElement('img');
  const rightButton = document.createElement('div'); 

  //assign classes
  carousel_div.classList.add('carousel');
  leftButton.classList.add('left-button'); 
  rightButton.classList.add('right-button'); 

  //src
  img1.src="./assets/carousel/mountains.jpeg" ; 
  img2.src="./assets/carousel/computer.jpeg" ; 
  img3.src="./assets/carousel/trees.jpeg" ;
  img4.src="./assets/carousel/turntable.jpeg" ; 

  //append
  carousel_div.append(leftButton, img1, img2, img3, img4, rightButton); 
  
  //return div
  return carousel_div; 
}

carouselContainer.append(createCarousel()); 

const images = document.querySelectorAll('.carousel-container img');


const currentIndex = 0; 
images[currentIndex].style.display = "inline"; 
