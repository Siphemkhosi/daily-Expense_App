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
    // let username_id =  await db.manyOrNone(`SELECT  * FROM expenses username_id = $1`);
    let descriptions_id = req.body.description1;
    let name = req.body.username;
    let contact = req.body.details;
    let email = req.body.mail;
    let item = req.body.item1;
    let amount = req.body.amount;
    let date = req.body.date;
   const userData = {name: name,
    contact:contact,
    email:email,
};

  if(name){
    Expenses.setUserInfo(descriptions_id, amount, date, item, userData)
  }

  if(item){
    Expenses.userExpenses(descriptions_id, amount, date, item, userData)
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
