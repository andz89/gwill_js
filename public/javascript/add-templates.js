class Add_templates {
  show_templates_form() {
    let template_form = document.querySelector("#template-form");
    if (template_form) {
      document
        .querySelector("#display-add-templates-form-btn")
        .addEventListener("click", () => {
          
          if (template_form.classList.contains("hide")) {
            document.querySelector('.template-container').style.display = 'none'
            document.querySelector("#template-form").classList.remove("hide");
            document.querySelector("#template-form").classList.add("show");
          } else {
            document.querySelector('.template-container').style.display = 'flex'
            editor.root.innerHTML = ''
  document.querySelector("#template-name").value = ''
  document.querySelector("#edit-id").value = ''


            document.querySelector("#template-form").classList.remove("show");
            document.querySelector("#template-form").classList.add("hide");
          }
        });
    }
  }
  submit_template() {
  
    if (document.querySelector("#display-image")) {

      document.querySelector("#display-image").addEventListener("change", (e) => {
    
        const imageFiles = e.target.files;
        /**
         * Count the number of files selected.
         */
        const imageFilesLength = imageFiles.length;
        /**
         * If at least one image is selected, then proceed to display the preview.
         */
        if (imageFilesLength > 0) {
            /**
             * Get the image path.
             */
            const imageSrc = URL.createObjectURL(imageFiles[0]);
            /**
             * Select the image preview element.
             */
            const imagePreviewElement = document.querySelector("#preview-selected-image");
            /**
             * Assign the path to the image preview element.
             */
            imagePreviewElement.src = imageSrc;
            /**
             * Show the element by changing the display value to "block".
             */
            imagePreviewElement.style.display = "block";
        }

      

        
      });
    }
  }
}

export default Add_templates;
