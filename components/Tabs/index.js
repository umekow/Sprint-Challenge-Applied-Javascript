// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


//selecting element to append tab to
const tabs_div = document.querySelector('.topics'); 

//function to create a new tab
const createTab = topic => {
    //create div
    const tab_div = document.createElement('div'); 
    
    //add class
    tab_div.classList.add('tab'); 

    //change content
    tab_div.textContent = topic; 

    return tab_div; 
}

//get an array of topics from a link then create a new tab

axios.get('https://lambda-times-backend.herokuapp.com/topics').then(response => {
    //log to console
    console.log(response); 
    
    //an array of topics from site
    const topics = response.data.topics; 
    //iterate through the array, creating a tab for each and then appending it to DOM
    topics.forEach(item => {
        //create tab for each item then append that tab to div on dom
        tabs_div.append(createTab(item));
    }); 


});

