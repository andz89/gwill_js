import Check from "./check.js";
import Modal from "./modal.js";
import Update from "./update.js";
import Contact from "./contact.js";

import Loader from "./loader.js";
import Add_templates from "./add-templates.js";



let add_templates = new Add_templates();
add_templates.show_templates_form();
add_templates.submit_template();

let check_password = new Check();
check_password.check_password();

let modal = new Modal();
modal.modal_update_account();
modal.modal_template_each_view();


let update = new Update();
update.update_account();

let contact = new Contact();
contact.update_contact();

let loader = new Loader();
loader.loading();




