// navbar show search dropdown Option

document.querySelector(".searchbar").addEventListener("click", showsearch);

function showsearch(){
    document.querySelector("#searchform").style.display = "block";
}

// navbar hide search dropdown Option

document.querySelector(".hidebar").addEventListener("click", closesearch);

function closesearch(){
    document.querySelector("#searchform").style.display = "none";
}



//function for go to home page.

document.querySelector(".navbar > div:nth-child(1) + img").addEventListener("click", function(){
    window.location.href = "grow.html";
})

// function for go to log-in page

document.querySelector(".gotologin").addEventListener("click", function(){
    window.location.href = "login.html";
})

// function for go to cart page

document.querySelector(".gotocart").addEventListener("click", function(){
    window.location.href = "cart.html";
});