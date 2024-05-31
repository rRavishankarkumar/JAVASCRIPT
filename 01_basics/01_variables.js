const accountId = 14453
let accountEmail = "ravishankar@gmail.com"
var accountPassword = "123456"
accountCity = "Kolkata"
let accountState;

//accountId = 2 //not allowed

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
/*
Preferd not to use var
because of issue in block scop and functional scope
*/



//accountId = "852187"
accountEmail = "ravishankar852187@gmail.com"
accountPassword = "8521879182"
accountCity = "Bangaluru"

console.log(accountId);


console.table([accountId, accountEmail, accountPassword, accountCity]);