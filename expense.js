module.exports = function Expenses(db) {
    async function setUserInfo(name, contact, email){
        try{
      const user = await db.manyOrNone(`SELECT * FROM users WHERE  username = $1 `,  [name]);
 
      if(user.length === 0){
       
         await db.none(`INSERT INTO users (username, contact, email )
         VALUES ($1, $2, $3)`, [name, contact, email])
    
       }
    
    
    } catch (err) {
            console.error(err.message);
          }

}

async function userExpenses(descriptions_id, amount, date, item){
  console.log(descriptions_id);
try{
  // await db.oneOrNone(`SELECT * FROM expenses WHERE  username_id = $1`,  [username_id]  );
  await db.oneOrNone(`SELECT * FROM expenses WHERE  descriptions_id = $1`,  [ descriptions_id]);
  const theItem =  await db.manyOrNone(`SELECT * FROM expenses WHERE  item_name = $1`,  [item]);

  if(theItem){
   
    // await db.none(`INSERT INTO expenses (username_id)
    // SELECT (username) FROM users VALUES ($1)`, [username_id])

    await db.none(`INSERT INTO expenses (descriptions_id)
    SELECT (descriptions) FROM categories `)
   

    await db.none(`INSERT INTO expenses ( amount, dates, item_name)
    VALUES ($1, $2, $3)`, [amount, date, item])
  }

} catch (err) {
            console.error(err.message);
          }


}


return{
setUserInfo,
userExpenses
}
}