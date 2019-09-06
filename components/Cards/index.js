// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const cardContainer = document.querySelector('.cards-container');

//function to create a card 
const createCard = data => {
    //create elements
    const card = document.createElement('div'); 
    const headline = document.createElement('div'); 
    const author = document.createElement('div'); 
    const imgContainer = document.createElement('div'); 
    const image = document.createElement('img'); 
    const span = document.createElement('span');

    //assign classes
    card.classList.add('card'); 
    headline.classList.add('headline'); 
    author.classList.add('author'); 
    imgContainer.classList.add('img-container'); 


    //append elements to build card
    card.append(headline, author); 

    //appened child elements to author div
    author.append(imgContainer, span);

    //append child element to imgContainer div
    imgContainer.append(image); 

    //content
    headline.textContent = data.headline; 
    image.src= data.authorPhoto; 
    span.textContent = data.authorName; 

    return card; 
}



//get information from link
axios.get('https://lambda-times-backend.herokuapp.com/articles').then(response => {
    
    const articles = response.data.articles; 
    const article_array = Object.entries(articles);
    article_array.forEach(item => {
        item[1].forEach(i => {
            cardContainer.appendChild(createCard(i)); 
        }); 
    }); 
    console.log(article_array);
});