module.exports = function Expenses(db) {
    async function setUserInfo(name, contact, email){
        try{
      const mail = await db.manyOrNone(`SELECT * FROM dailyexpenses WHERE  firstname = $1 `,  [name]);
      const user = await db.manyOrNone(`SELECT * FROM priceplan WHERE   lastname = $2`,[contact]
      );
      const phone = await db.manyOrNone(`SELECT * FROM  priceplan WHERE  Email = $3 `,  [email]);
       
      if(user){
       
         await db.none(`INSERT INTO priceplan (firstname, lastname, email )
         VALUES ($1, $2, $3)`, [name, contact, email])
    
       }
    
    
    } catch (err) {
            console.error(err.message);
          }



}

return{
setUserInfo,
}
}