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

// function for go to cart page

document.querySelector(".gotocart").addEventListener("click", function(){
    window.location.href = "cart.html";
})


    //   window.onscroll = function () {
    //     myFunction();
    //     // footFunction();
    //   };

    //   var header = document.getElementById("myHeader");
    //   // var sticky = header.offsetTop;
    //   // var footer = document.getElementsById("footer");
    //   function myFunction() {
    //     if (window.pageYOffset > 100) {
    //       header.classList.add("sticky");
    //     } else {
    //       header.classList.remove("sticky");
    //     }
    //   }
      // function footFunction() {
      //   if (window.pageYOffset > 300) {
      //     footer.classList.add("sticky_footer");
      //   } else {
      //     footer.classList.remove("sticky_footer");
      //   }
      // }

      // const pack=document.querySelector('.pp');
      // pack.addEventListener("mouseover",addPack)

      // const addPack=function(){
      //   pack.classList.toggle("image_underline")
      // }

      const btnRight = document.querySelector(".right");
      const btnLeft = document.querySelector(".left");
      let currSlide = 0;
      const slides = document.querySelectorAll(".product");
      const maxSlide = slides.length;
      const goToSlide = function (slide) {
        slides.forEach(
          (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
        );
      };
      goToSlide(0);

      const nextSlide = function () {
        console.log("right", currSlide);
        if (currSlide == maxSlide - 1) {
          currSlide = 0;
        } else {
          currSlide++;
        }
        goToSlide(currSlide);
      };

      const prevSlide = function () {
        console.log("left", currSlide);
        if (currSlide == 0) {
          currSlide = maxSlide - 1;
        } else {
          currSlide--;
        }
        goToSlide(currSlide);
      };
      btnRight.addEventListener("click", nextSlide);
      btnLeft.addEventListener("click", prevSlide);


    //   type="module"
    //   src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"


    //   nomodule
    //   src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"


    // function for qty minus and plus

      var numberplus = document.querySelector(".number").textContent;
      document.querySelector(".minus").addEventListener("click", function(){
          if(numberplus <= 0){
            document.querySelector(".minus").addEventListener("click");
          }
          numberplus = +numberplus - 1;
          document.querySelector(".number").textContent = numberplus;
      })

      document.querySelector(".plus").addEventListener("click", function(){
        numberplus = +numberplus + 1;
        document.querySelector(".number").textContent = numberplus;
    })


    // function for cartdata

      

      document.querySelector(".add").addEventListener("click", additems);

      var cartData = [];

      function additems(){
          var name = document.querySelector(".product_name").textContent;
          var pac = document.querySelector(".packvalue").textContent;
          var price = document.querySelector(".price").textContent;
          var qty = document.querySelector(".number").textContent;
          
          var details = {
              name: name,
              packs: pac,
              price: price,
              qty: qty
          };

          cartData.push(details);

          localStorage.setItem("cartDetails", JSON.stringify(cartData));
      }
let abc = JSON.parse(localStorage.getItem("store"))
 document.querySelector(".main_img").src=abc.image
 document.querySelector(".product_name").innerHTML=abc.name
 document.querySelector(".price_range").innerHTML=abc.price

console.log(abc.image)