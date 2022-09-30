module.exports = function Joined(db) {
    async function userExpenses(){
  


        await db.manyOrNone(`SELECT expenses.id, users.username, categories.id, expenses.amount, expenses.dates, expenses.item_name
         FROM expenses
         JOIN users on expenses.username_id = users.id  
         JOIN categories on expenses.descriptions_id = categories.id`);
         // return integrateTables;
       // console.log(integrateTables)
    //    console.log(777976854);
       
       
       }

    return{
userExpenses
    }
}