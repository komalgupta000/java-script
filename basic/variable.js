const accountId = 9876
let accountEmail = "kg09876@gmail.com"
var accountPassword = "12345"
accountCity = "bihar sharif"
let accountState;

// accountId = 12345  // not allowed
accountEmail = "k23451g@gmail.com"
accountPassword = "09876"
accountCity = "Kolkata"


console.log(accountCity)
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);



/* 
   Prefer not to use var
   because of issue in block scope and functional scope{}
*/