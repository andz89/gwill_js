const db = require("../db");
const { v4: uuidv4 } = require("uuid");
let Admin = function (data) {
  this.data = data;
};
Admin.prototype.add_template_into_database = function () {


  return new Promise(async (resolve, reject) => {
    if(this.data.edit_id == ''){

      let data = {
        template_id: uuidv4(),
        template_name: this.data.template_name,
        template_description: this.data.template_description,
        json_file: this.data.json_file,
        canvas_image: this.data.file
      };
      let sql = "INSERT INTO templates SET ?";
      db.query(sql, data, (err, result) => {
        if (err) {
          reject(err);
          return false;
        }
  
        resolve();
      });
    }else{
       let a = String(this.data.template_description)
  
       if(this.data.file){
        var sql = `UPDATE templates SET template_name ='${this.data.template_name}',template_description ='${a}',canvas_image = '${this.data.file}' WHERE template_id = '${this.data.edit_id}'`;

        db.query(sql, (err, result) => {
          if (err) {
            reject(err);
            return false;
          }
          resolve();
        });
       }else{

        var sql = `UPDATE templates SET template_name ='${this.data.template_name}',template_description ='${a}' WHERE template_id = '${this.data.edit_id}'`;

        db.query(sql, (err, result) => {
          if (err) {
            reject(err);
            return false;
          }
          resolve();
        });
       }


   
    }

  });
};

Admin.prototype.remove = function (req, res) {
  return new Promise( (resolve, reject) => {

    let sql = `DELETE FROM templates WHERE template_id = '${this.data.id}'`;
    db.query(sql, (err) => {
      if (err) {
        reject(err);
        return false;
      }

      resolve();
    });
  });
}

Admin.prototype.getContact = function (req, res) {
  return new Promise( (resolve, reject) => {

    let sql = `Select * FROM contact`;
    db.query(sql, (err,result) => {
      if (err) {
        reject(err);
        return false;
      }

      resolve(result);
    });
  });
}

Admin.prototype.update_contact = function () {
  return new Promise((resolve, reject) => {

      var sql = `UPDATE contact SET phone_number = '${this.data.phone_number}', email = '${this.data.email}', facebook_page = '${this.data.facebook_page}', address = '${this.data.address}' WHERE id = '1'`;
      db.query(sql, (err, result) => {
        if (err) {

          reject(err);
          return false;
        }
        resolve(result);
      });
  
  });
};
module.exports = Admin;
