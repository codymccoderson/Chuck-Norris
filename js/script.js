"use strict";

let category = "dev";

const refreshQuoteButton = document.querySelector("#refreshQuote");
const submitFormButton = document.querySelector("#submitForm");
const submitFormButton2 = document.querySelector("#submitForm2");
const submitFormButton3 = document.querySelector("#submitForm3");
const submitFormButton4 = document.querySelector("#submitForm4");

function getQuote(category) {
    const apiUrl = `https://api.chucknorris.io/jokes/random?category=${category}`;
    const chuckSaysParagraph = document.querySelector("#chuckSays");
    
    get(apiUrl).then(function(response){
    chuckSaysParagraph.innerHTML = response.value;
    });
}

refreshQuoteButton.addEventListener("click", function(e) {
    e.preventDefault();
    getQuote(category);
});

submitFormButton.addEventListener("click", function(e) {
    e.preventDefault();
    const categoryInput = document.querySelector("#categoryInput");
    category = categoryInput.value;
    getQuote(category);

})

submitFormButton2.addEventListener("click", function(e) {
    e.preventDefault();
    const categoryInput = document.querySelector("#categoryInput2");
    category = categoryInput.value;
    getQuote(category);

})

submitFormButton3.addEventListener("click", function(e) {
    e.preventDefault();
    const categoryInput = document.querySelector("#categoryInput3");
    category = categoryInput.value;
    getQuote(category);

})

submitFormButton4.addEventListener("click", function(e) {
    e.preventDefault();
    const categoryInput = document.querySelector("#categoryInput4");
    category = categoryInput.value;
    getQuote(category);

})

getQuote(category);