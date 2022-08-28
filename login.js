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
    window.location.href = "index.html";
})

// function for go to log-in page

document.querySelector(".gotologin").addEventListener("click", function(){
    window.location.href = "login.html";
})
// function for go to grow page
document.querySelector("#grow").addEventListener("click", function(){
    window.location.href = "grow.html";
})
// function for go to cart page

document.querySelector(".gotocart").addEventListener("click", function(){
    window.location.href = "cart.html";
});


// document.querySelector(".creatacc").innerHTML = null;
document.querySelector(".register").style.display = "none";
document.querySelector(".regbtn").addEventListener("click",gonext);
function gonext(){
    document.getElementById("login-form").style.display = "none";
    document.querySelector(".register").style.display = "block";
    document.querySelector(".loginbtn").style.display = "block";
    document.querySelector(".regbtn").style.display = "none";
}

document.querySelector(".loginbtn").addEventListener("click",gonext1);
function gonext1(){
    document.getElementById("login-form").style.display = "block";
    document.querySelector(".register").style.display = "none";
    document.querySelector(".loginbtn").style.display = "none";
    document.querySelector(".regbtn").style.display = "block";

}


// register user function

document.querySelector(".sub2").addEventListener("click",addData);
    
    var userData = JSON.parse(localStorage.getItem("userDatabase")) || [];
    function addData(){
        var fstname=document.querySelector("#fname").value;
        var lstname=document.querySelector("#lname").value;
        var emlname=document.querySelector("#eml2").value;
        var passname=document.querySelector("#pass2").value;
   
    var userCard={
        firstname:fstname,
        lastname:lstname,
        emailname:emlname,
        passwordname:passname
    };
    userData.push(userCard);
    localStorage.setItem("userDatabase", JSON.stringify(userData));

    if(fstname == "" || lstname == "" || emlname == "" || passname == ""){
        if(passname.length <= 5){
            alert("Please fill all information");
        }
        else{
            alert("Please fill all information");
        }
    }
    else {
        alert("Register successfull");
    }
}

// user login function

document.querySelector(".sub").addEventListener("click", addDetails);

    function addDetails(event){
        event.preventDefault();
        var email = document.querySelector("#eml").value;
        
        var passwor = document.querySelector("#pass").value;

        var userdata = JSON.parse(localStorage.getItem("userDatabase"));
        var flag = 0;

        for(var i=0; i<userdata.length; i++){
            if((email == userdata[i].emailname) && (passwor == userdata[i].passwordname)){
                window.location.href = "index.html";
                break;
            }
            else{
                alert("Invalid Email or Password");
                break;
            }
        }
    }
