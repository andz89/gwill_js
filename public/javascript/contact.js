class Contact {
    update_contact() {

      
        document.querySelector("#update-contact-btn").addEventListener("click", () => {
          let phone_number = document.querySelector("#phone_number").value;
          let email = document.querySelector("#email").value;
          let facebook_page = document.querySelector("#facebook_page").value;
          let address = document.querySelector("#address").value;
    
          let data = {};
          data.phone_number = phone_number;
          data.email = email;
          data.facebook_page = facebook_page;
          data.address = address;

          var xhttp = new XMLHttpRequest();
  
          xhttp.onreadystatechange = () => {
            if (xhttp.readyState == 4 && xhttp.status == 200) {

              let data = JSON.parse(xhttp.responseText);
                if(data){
                  phone_number =  data.phone_number
                  email =  data.email
                  facebook_page =  data.facebook_page
                  address =  data.address

                    document.querySelector('.update-contact-message').style.display = 'block';

                    setTimeout(function(){
                    document.querySelector('.update-contact-message').style.display = 'none';

                    },2000)
                }
       
            }
          };
          xhttp.open(
            "POST",
            `http://localhost:5000/update_contact?phone_number=${data.phone_number}&email=${data.email}&facebook_page=${data.facebook_page}&address=${data.address}`,
            true
          );
          xhttp.send();
        });
 
    }
  }
  export default Contact;
  