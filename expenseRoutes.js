module.exports = function ExpenseRoutes(Expenses) {
    async function home(req, res, next) {
  
        try {
            res.render("index");
          } catch (err) {
            next(err);
          }
    


}

async function dailyExpense(req, res, next){
  

  try{
    // let username_id = req.body.username;
    let descriptions_id = req.body.description1;
    let name = req.body.username;
    let contact = req.body.details;
    let email = req.body.mail;
    let item = req.body.item1;
    let amount = req.body.amount;
    let date = req.body.date;

  if(name){
    Expenses.setUserInfo(name, contact, email)
  }

  if(item){
    Expenses.userExpenses( descriptions_id, amount, date, item)
    // console.log("mon" + item)
  }
  res.redirect("/");
  //   }
      } catch (err) {
          next(err);
        }
}

return{
    home,
    dailyExpense,
 } 
}
