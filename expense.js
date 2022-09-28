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

async function userExpenses(username_id, descriptions_id, amount, date, item){
  console.log(username_id);
try{
  await db.oneOrNone(`SELECT * FROM expenses WHERE  username_id = $1`,  [username_id]  );
  await db.oneOrNone(`SELECT * FROM expenses WHERE  descriptions_id = $2`,  [ descriptions_id]);
  const theItem =  await db.manyOrNone(`SELECT * FROM expenses WHERE  item_name = $3`,  [item]);

  if(theItem){
   
    await db.none(`INSERT INTO expenses (username_id)
    SELECT (username) FROM users `)

    await db.none(`INSERT INTO expenses (descriptions_id)
    SELECT (descriptions) FROM categories `)
    await db.none(`INSERT INTO expenses FOREIGN KEY ((username_id) references users(id)`)
    

    await db.none(`INSERT INTO expenses (username_id,  descriptions_id, Amount, Dates, item_name)
    VALUES ($1, $2, $3, $4, $5)`, [ username_id, descriptions_id, amount, date, item])
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