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

// function for go to home page.

document.querySelector(".navbar > div:nth-child(1) + img").addEventListener("click", function(){
    window.location.href = "index.html";
})

// function for go to log-in page

document.querySelector(".gotologin").addEventListener("click", function(){
    window.location.href = "Signin.html";
})




// function for taking cartdata from product page

var data = JSON.parse(localStorage.getItem("cartDetails"));

display(data);


function display(data){
  data.map(function(elem,index){
  var productname = document.querySelector(".productName");
  productname.textContent = elem.name;

  var productweight = document.querySelector(".bottomtext");
  productweight.textContent = elem.packs;

  var productprice = document.querySelector(".priceamount4");
  productprice.textContent = elem.price;

  var productqty = document.querySelector(".displaybox");
  productqty.value = elem.qty;

  })
}

    
   /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

var display=document.getElementById("display");
display="0"
document.getElementById("buttonplus").addEventListener("click",additionFun);
function additionFun(){
    console.log("worked")
    var display=document.getElementById("display").value;
    display++;
    document.getElementById("display").value=display;

    
}
document.getElementById("another").addEventListener("click",subtraction)



function subtraction(){
    
    var display=document.getElementById("display").value;
    
    if(display>0){   
    display--;
    document.getElementById("display").value=display;
    }
}
var price=document.querySelector(".priceamount4").textContent
document.getElementById("buttonplus").addEventListener("click",totalprice);
document.getElementById("another").addEventListener("click",totalprice2);
document.getElementById("totalmoney").textContent=price
function totalprice(){
  var bag = "";
    for(var i=0; i<price.length; i++){
      if(i>1){
        bag += price[i];
      }
    }
    document.getElementById("totalmoney").textContent=bag;
   
    var display=document.getElementById("display").value;
   
   
   
    display=+display;
    bag=+bag
    var product=bag*display;
  
    var price2=document.getElementById("totalmoney").textContent=product;
    document.getElementById("totalamount").textContent=product;
    var totalPrice=document.getElementById("totalamount").textContent;
    document.getElementById("subtotal").textContent=product;
    localStorage.setItem("totalValue3",product);

    return bag;
    
}

var product;

function totalprice2(price2){
    var price=document.getElementById("price2").innerHTML;
   var price2=document.getElementById('totalmoney').innerHTML
    var display=document.getElementById("display").value;
    console.log(display)
    var pricee=document.getElementById("price2").textContent
    if(display==0){
        pricee="";
    }
   
   if(display>0){ 
  
    display=+display;
    price2=+price2
    var product=price2-price;
    
    var price2=document.getElementById("totalmoney").textContent=product;
    document.getElementById("totalamount").textContent=product;
    document.getElementById("subtotal").textContent=product;
   }


}

// total money needed to pay
var n=JSON.parse(localStorage.getItem("price4"));
document.getElementById("totalamount").textContent=totalprice();
document.getElementById("subtotal").textContent=totalprice();
document.getElementById("freedelivery").textContent=350-totalprice();
document.getElementById("buttonplus").addEventListener("click",moreMoney)
function moreMoney(){
    document.getElementById("freedelivery").textContent=350-document.getElementById("totalamount").textContent;
    var del=document.getElementById("freedelivery").textContent;
    var totalAmount=document.getElementById("totalamount").textContent;
    del=350-totalAmount;
    if(del<=0){
        document.getElementById("spend").textContent="CONGRATULATIONS YOU HAVE GOT FREE SHIPPING!";
      //   document.getElementById("freedelivery").textContent="CONGRATULATIONS YOU HAVE GOT";
      //   document.getElementById("moreto").textContent="CONGRATULATIONS YOU HAVE GOT"
    }
}
document.getElementById("another").addEventListener("click",moreMoney2);
function moreMoney2(){
   document.getElementById("spend").textContent;
   document.getElementById("freedelivery").textContent=350-totalprice();
  
   document.getElementById("freedelivery").textContent=(350-document.getElementById("totalamount").textContent)
}
var dataArray=JSON.parse(localStorage.getItem("productDetails")) || []
function checkout(){

   var product_name=document.querySelector(".productName").textContent
   var product_image=document.querySelector("imageUrl")
   var dataObj={Name:product_name,
   image:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/grapefruit-funfacts_219x.png?v=1639461506",
   price:document.getElementById("totalamount").textContent}
   dataArray.push(dataObj)
   localStorage.setItem("productDetails",JSON.stringify(dataArray))
   window.location.href="info.html"
}

