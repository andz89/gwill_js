const Admin = require("../models/Admin");
const User = require("../models/User");
const Page = require("../models/Page");
exports.dashboard = (req, res) => {
  res.render("admin/dashboard", {
    data: "you are logged as admin",
  });
};
exports.admin_login_post = (req, res) => {
  let user = new User(req.body);

  user
    .admin_login()
    .then((data) => {
      req.session.user = {
        user_id: data[0].id,
        user_name: data[0].admin_user_name,
        user_email: data[0].admin_user_email,
        user_role: data[0].admin_user_role,
      };
      req.session.save(function (err) {
        res.redirect("/dashboard");
      });
    })
    .catch((data) => {
      req.flash("errors", "Invalid username or password");
      req.flash("users_data", data);

      req.session.save(function () {
        res.redirect("/admin-login");
      });
    });
};
exports.login_page = (req, res) => {
  res.render("admin/admin-login", {
    errors: req.flash("errors"),
    users_data: req.flash("users_data"),
  });
};
exports.templates = (req, res) => {


  let templates = new Page()
templates.getAllTemplates().then((data)=>{

  res.render("admin/admin-templates", {
    data: data,
    user_type: req.session.user.user_role,
    session: req.session.user ? true : false,
  }); 
})
  
};
exports.contact = function(req, res){
  let contact = new Admin()
contact.getContact().then((data)=>{
 
  res.render("admin/admin-contact", {
    phone_number: data[0].phone_number,
    email: data[0].email,
    facebook: data[0].facebook_page,
    address: data[0].address,
    user_type: req.session.user.user_role,
    session: req.session.user ? true : false,
  }); 
})
}

exports.update_contact = function (req, res) {
  let data = {};
  data.phone_number = req.query.phone_number;
  data.email = req.query.email;
  data.facebook_page = req.query.facebook_page;
  data.address = req.query.address;


 
  let user = new Admin(data);
  user
    .update_contact()
    .then(function () {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
};

exports.add_template = function (req, res) {
  let admin = new Admin(req.body);
  if(req.file){
    req.body.file = req.file.filename
  }


  admin
    .add_template_into_database() //database
    .then(function () {
      // res.redirect("/admin-templates");
      res.redirect("/admin-templates");
    })
    .catch((err) => {
      res.send(err);
    });
};
exports.remove = function (req, res){
  let data= {}

  data.id = req.query.id;

  let admin = new Admin(data);
  admin
    .remove() //database
    .then(function () {
      
      res.send('Deleted')
      
    })
    .catch((err) => {
      res.send(err);
    });
}
