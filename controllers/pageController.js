const Page = require("../models/Page");
const Admin = require("../models/Admin");


exports.home = (req, res) => {
  //session as user
  res.render("pages/home-dashboard", {
    site_name : "Gwill's Template",
 
    session: req.session.user ? true : false,

  });
};

exports.contact_page = (req, res) => {

  let contact = new Admin()
  contact.getContact().then((data)=>{
   
    res.render("pages/contact_page",{
      site_name : "Gwill's Template",
      phone_number: data[0].phone_number,
      email: data[0].email,
      facebook: data[0].facebook_page,
      address: data[0].address,
      // user_type: req.session.user.user_role,
      session: req.session.user ? true : false,
    }); 
  })
};


exports.login_page = (req, res) => {

    res.render("users/login-page", {
    site_name : "Gwill's Template",

      errors: req.flash("errors"),
      users_data: req.flash("users_data"),
    });
  
};


exports.templates_page = (req, res) => {

let templates = new Page()
templates.getAllTemplates().then((data)=>{
  res.render("pages/templates", {
    site_name : "Gwill's Template",
    data: data,
    session: req.session.user ? true : false,
  }); 
})
  
}

exports.account_page = (req, res) => {
  let page = new Page(req.session.user);
  page.getAccount().then((data) => {
    res.render("pages/account_page", {
    site_name : "Gwill's Template",
      user_data: data,
      session: req.session.user ? true : false,
      user_type: req.session.user.user_role,
    });
  });
};
exports.register_page = (req, res) => {
  res.render("users/register-page", {
    site_name : "Gwill's Template",
    regErrors: req.flash("regErrors"),
    users_data: req.flash("users_data"),
  });
};
exports.login_page = (req, res) => {

    res.render("users/login-page", {
    site_name : "Gwill's Template",
      errors: req.flash("errors"),
      users_data: req.flash("users_data"),
    });
  
};

exports.success_registration_page = function (req, res) {
  if (req.session.success == true) {
    req.session.success = null;

    function success_registration() {
      return new Promise((resolve, reject) => {
        res.render("pages/success_registration_page", {
    site_name : "Gwill's Template",
          success_message: req.flash("success_message"),
          temp_data: req.session.temp,
        });

        resolve();
      });
    } 
    success_registration().then(() => {
      req.session.destroy();
    });
  } else {
    res.redirect("/");
  }
};