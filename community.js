let array =JSON.parse(localStorage.getItem("unit3")) ||  [];

    document.getElementById("submit").addEventListener("click",()=>{
      let name = document.querySelector("#ghat").value
      let contact = document.querySelector("#wal").value
      let email = document.querySelector("#iya").value
      let text = document.querySelector("#insan").value
      if(name == "" ||
      contact == "" ||
      email == ""||
      text == ""){
        alert("please fill all the fields")
      }
      else{
        let object = {
        name: name,
        contact:contact,
        email:email,
        text:text
        
      }
      
    //   console.log(object)
    
      array.push(object)
      localStorage.setItem("unit3",JSON.stringify(array))
      
    }   
    alert("Thanks for Inviting!")

    })
      