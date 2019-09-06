// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    //create elements
    const header_div = document.createElement('div'); 
    const date_span = document.createElement('span'); 
    const h1 = document.createElement('h1');
    const temp_span = document.createElement('span'); 

    //assign a class to each element
    header_div.classList.add('header'); 
    date_span.classList.add('date'); 
    temp_span.classList.add('temp'); 

    //append elements 
    header_div.append(date_span, h1, temp_span); 

    return header_div; 
}
