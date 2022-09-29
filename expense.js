module.exports = function Expenses(db) {
    async function setUserInfo(descriptions_id, amount, date, item, user_data){
        try{
      const user = await db.manyOrNone(`SELECT * FROM users WHERE  username = $1 AND contact = $2 AND email = $3 `,  [user_data.name, user_data.contact, user_data.email]);

      if(user.length === 0){
       
         await db.none(`INSERT INTO users (username, contact, email )
         VALUES ($1, $2, $3)`, [user_data.name, user_data.contact, user_data.email])
         
   
       }
       const username_id = await db.manyOrNone(`SELECT id FROM users WHERE  username = $1 AND contact = $2 AND email = $3 `,  [user_data.name, user_data.contact, user_data.email]);
         console.log(username_id[0]?.id);  
       
           await db.none(`INSERT INTO expenses (username_id, descriptions_id, amount, dates, item_name)
           VALUES ($1, $2, $3, $4, $5)`, [username_id[0]?.id, descriptions_id, amount, date, item])
       
  
    } catch (err) {
            console.error(err.message);
          }

}

async function userExpenses( descriptions_id, amount, date, item, user_data){

try{
  
  // const username_id = await db.manyOrNone(`SELECT id FROM users WHERE  username = $1 AND contact = $2 AND email = $3 `,  [user_data.name, user_data.contact, user_data.email]);
  // console.log(2);  

  //   await db.none(`INSERT INTO expenses (username_id, descriptions_id, amount, dates, item_name)
  //   VALUES ($1, $2, $3, $4, $5)`, [username_id, descriptions_id, amount, date, item])


} catch (err) {
            console.error(err.message);
          }


}


return{
setUserInfo,
userExpenses
}
}