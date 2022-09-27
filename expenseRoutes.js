module.exports = function ExpenseRoutes(Expenses) {
    async function home(req, res, next) {
        let name = req.body.name;
        let contact = req.body.details;
        let email = req.body.mail;
        try {
            res.render("index", {
              userName: Expenses.setUserInfo(name, contact, email),
              Contact: Expenses.setUserInfo(name, contact, email),
              Email: Expenses.setUserInfo(name, contact, email),
            });
          } catch (err) {
            next(err);
          }
    


}

return{
    home,
 } 
}
