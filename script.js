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


// navbar search SUBMIT button function

document.querySelector("form").addEventListener("submit", showproduct);

function showproduct(event){
    event.preventDefault();
    var searchInput = document.querySelector(".typeany").value;
    if(searchInput == "ALL FRUITS"){
        window.location.href = "ProductPage.html";
    }
}

//function for go to home page.

document.querySelector(".navbar > div:nth-child(1) + img").addEventListener("click", function(){
    window.location.href = "index.html";
})

// function for go to log-in page

document.querySelector(".gotologin").addEventListener("click", function(){
    window.location.href = "Signin.html";
})

// function for go to cart page

document.querySelector(".gotocart").addEventListener("click", function(){
    window.location.href = "cart.html";
})

// gotoallfruits function

document.querySelector("#gotoallfruits").addEventListener("click", function(){
    window.location.href = "ProductPage.html";
})

document.querySelector("#gotoallfruits1").addEventListener("click", function(){
    window.location.href = "ProductPage.html";
});