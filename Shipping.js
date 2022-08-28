
var productdetails = JSON.parse(localStorage.getItem("productDetails"));

display(productdetails);

function display(productdetails){
    productdetails.map(function(elem,index){
  var productname = document.querySelector(".grapefruit");
  productname.textContent = elem.Name;

  var productimage = document.querySelector(".grapeimg");
  productimage.setAttribute("src", elem.image);

  var productprice = document.querySelector("#priceoff");
  productprice.textContent = elem.price;

  var productprice1 = document.querySelector("#priceoff1");
  productprice1.textContent = elem.price;

  var productprice2 = document.querySelector("#priceoff2");
  productprice2.textContent = elem.price;

  })
}

document.querySelector("#btn").addEventListener("click", function () {
    window.location.href="payment.html"
})

var promo = document.querySelector("#discount>input")
var count = document.querySelector("#priceoff").textContent;
var checkOut1 = document.querySelector(".total_cost1")
var checkOut2 = document.querySelector(".total_cost2")
var checkOut3 = document.querySelector(".total_cost3")
document.querySelector(".promobutton").addEventListener("click", function(){
            if(promo.value == "masai30"){
                count = Math.floor((count*70)/100);
                checkOut1.textContent = "  ₹" + count 
                checkOut2.textContent = "  ₹" + count 
                checkOut3.textContent = "  ₹" + count 
                console.log("here")
            }
            else{
                alert("error");
            }
})