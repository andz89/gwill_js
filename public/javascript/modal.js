class Modal {
  modal_update_account() {
    // Get DOM Elements
    const modal = document.querySelector(".modal-update");
    const modalBtn = document.querySelector("#modal-btn");
    const closeBtn = document.querySelector(".close");

    if (modalBtn) {
      // Events
      modalBtn.addEventListener("click", openModal);
      closeBtn.addEventListener("click", closeModal);
      window.addEventListener("click", outsideClick);

      // Open
      function openModal() {
        modal.style.display = "flex";
      }

      // Close
      function closeModal() {
        modal.style.display = "none";
      }

      // Close If Outside Click
      function outsideClick(e) {
        if (e.target == modal) {
          modal.style.display = "none";
        }
      }
    }
  }
  modal_template_each_view(){
    window.addEventListener('click',(e)=>{
      if(e.target.classList.contains("modal-view")){
        document.body.style.overflow = 'hidden'
     

        let parent = e.target.parentElement.parentElement;
        let imgSrc = parent.querySelector('.img').src




        let title = parent.querySelector('.title').innerText
        let description = parent.querySelector('.description').innerHTML
        let id  = parent.id
      


        document.querySelector('.modal-template-image').src = imgSrc
        document.querySelector('.modal-template-title').innerText = title;
        document.querySelector('.modal-template-description').innerHTML = description;
        document.querySelector('.modal-id').value = id;
        document.querySelector('.modal-template').style.display ='flex'

      }
 
    })
    if(document.querySelector('.close')){
   //close ---------------->
   document.querySelector('.close').addEventListener('click', function(){
    document.querySelector('.modal-template').style.display ='none'
    document.body.style.overflow = 'auto'
  })
    }
 

    
    //edit template --------------------------->
    if( document.querySelector('.edit-template-btn')){
      document.querySelector('.edit-template-btn').addEventListener('click', function(e){
        document.body.style.overflow = 'auto'

   //delete created temporary element
   let temp =  document.querySelectorAll('.edit-temporary-element')
   Array.from(temp).forEach((e)=>{
     e.remove()
   })

        let parent = e.target.parentElement.parentElement;
  
       let src = parent.querySelector('.modal-template-image').src
    let modal_title =  parent.querySelector('.modal-template-title').innerText
    let modal_description =  parent.querySelector('.modal-template-description').innerHTML;
    let modal_id = parent.querySelector('.modal-id').value
 

  
    let editLabel = document.querySelector('#edit-label')
    editLabel.innerHTML = `<h3> Editing: ${modal_title} </h3> `
    
    document.querySelector('.template-container').style.display = 'none'
    document.querySelector('.modal-template').style.display ='none'
  
    document.querySelector("#template-form").classList.remove("hide");
    document.querySelector("#template-form").classList.add("show");
  
  
    // document.querySelector("#template-description" ).value = modal_description
    editor.root.innerHTML = modal_description.trim()
    document.querySelector("#template-name").value = modal_title
    document.querySelector("#edit-id").value = modal_id

    

    document.querySelector("#preview-selected-image").src = src
  
        
  
      })
    }
   

//add icon and element to template description
    window.addEventListener("click", function(e){
      if(e.target.classList.contains("modal-view")){
        let a = document.querySelector(".modal-template-description")
        let b = a.querySelectorAll('p')
        let gcash_number ='09951844860'
        Array.from(b, (e)=>{
         if(e.innerText === gcash_number){
          
          e.innerHTML += '  <img src="images/copy.png" class="copy-number edit-temporary-element" width="20" alt=""  />'
          e.innerHTML += `<input style="display:none" class="hide-number edit-temporary-element" value='${gcash_number}' />`
          e.innerHTML +=  '<div class="message-copy edit-temporary-element">Number is copied!</div>'

         }
         if(e.innerText === 'Qr Code:'){
          e.innerHTML += '<br><img src="images/gcash.jpg" class=" edit-temporary-element" width="200" alt=""  />'
         }
        })
      }
    
      if(e.target.classList.contains('copy-number')){
     
      let copyText =  document.querySelector('.hide-number')
      copyText.select()
      copyText.setSelectionRange(0, 99999); // For mobile devices

      // Copy the text inside the text field
      navigator.clipboard.writeText(copyText.value);

      document.querySelector('.message-copy').style.display = 'inline-block';
      setTimeout(()=>{
      document.querySelector('.message-copy').style.display = 'none';

 },3000)

      }
    })


}
}
export default Modal;
