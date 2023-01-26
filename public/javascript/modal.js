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
    document.querySelector('.close').addEventListener('click', function(){
      document.querySelector('.modal-template').style.display ='none'
      
    })

    document.querySelector('.edit-template-btn').addEventListener('click', function(e){
      let parent = e.target.parentElement.parentElement;
     
      parent.querySelector('.modal-template-image').src
  let modal_title =  parent.querySelector('.modal-template-title').innerText
  let modal_description =  parent.querySelector('.modal-template-description').innerHTML;
  let modal_id = parent.querySelector('.modal-id').value

  document.querySelector('.modal-template').style.display ='none'

  document.querySelector("#template-form").classList.remove("hide");
  document.querySelector("#template-form").classList.add("show");


  // document.querySelector("#template-description" ).value = modal_description
  editor.root.innerHTML = modal_description
  document.querySelector("#template-name").value = modal_title
  document.querySelector("#edit-id").value = modal_id
      

    })
}
}
export default Modal;
