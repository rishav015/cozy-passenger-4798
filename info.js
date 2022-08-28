document.querySelector("#form").addEventListener("submit", shopping)
var kimayeArr = JSON.parse(localStorage.getItem("kimayeData")) || [];


function validation() {
    var email = document.getElementById("email").value;
    var first_name = document.getElementById("first").value;
    var last_name = document.getElementById("last").value;
    var address = document.getElementById("addr").value;
    var city_name = document.getElementById("city").value
    var mobile = document.getElementById("mobile").value;
    if (email == "") {
        document.getElementById("fill_user").innerHTML = "**Please fill input field"
        return false;
    }
    if (first_name == "") {
        
        document.getElementById("fill_first").innerHTML = "**Please fill input field"
        return false;
       
    }
    if (last_name == "") {
        document.getElementById("fill_last").innerHTML = "**Please fill input field"
        return false;
    }
    if (address == "") {
        document.getElementById("fill_address").innerHTML = "**Please fill input field"
        return false;
    }
    if (city_name == "") {
        document.getElementById("fill_city").innerHTML = "**Please fill input field"
        return false;
    }
    if (mobile== "") {
        document.getElementById("fill_mobile").innerHTML = "**Please fill input field"
        return false;
    }

}

function shopping(event) {
    event.preventDefault();
    var kimayeObj = {
        email: form.email.value,
        region: form.region.value,
        first_name: form.first.value,
        last_name: form.last.value,
        address: form.addr.value,
        apartment: form.apartment.value,
        city: form.city.value,
        state: form.state.value,
        pincode: form.pincode.value,
        mobile: form.mobile.value
    }
    kimayeArr.push(kimayeObj)
    localStorage.setItem("kimayeData", JSON.stringify(kimayeArr))
    window.location.href = "Shipping.html"
}

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


