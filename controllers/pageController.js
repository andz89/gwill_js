const Page = require("../models/Page");

exports.home = (req, res) => {
  //session as user
  res.render("pages/home-dashboard", {
    user_data: req.session.user,
    session: req.session.user ? true : false,
    user_type: req.session.user.user_role,
  });
};

exports.contact_page = (req, res) => {
  res.render("pages/contact_page",{
    user_type: req.session.user.user_role,
  });
  
};


exports.login_page = (req, res) => {

    res.render("users/login-page", {
      errors: req.flash("errors"),
      users_data: req.flash("users_data"),
    });
  
};


exports.templates_page = (req, res) => {

let templates = new Page()
templates.getAllTemplates().then((data)=>{
;
  res.render("pages/templates", {
    data: data,
    user_type: req.session.user.user_role,
    // user_type: req.session.user.user_role,
    // session: req.session.user ? true : false,
  }); 
})
  
}

exports.account_page = (req, res) => {
  let page = new Page(req.session.user);
  page.getAccount().then((data) => {
    res.render("pages/account_page", {
      user_data: data,
      session: req.session.user ? true : false,
      user_type: req.session.user.user_role,
    });
  });
};
exports.register_page = (req, res) => {
  res.render("users/register-page", {
    regErrors: req.flash("regErrors"),
    users_data: req.flash("users_data"),
  });
};
exports.login_page = (req, res) => {

    res.render("users/login-page", {
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