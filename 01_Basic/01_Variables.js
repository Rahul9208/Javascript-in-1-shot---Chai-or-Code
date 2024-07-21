const accountId = 144553
let accountEmail = "rahuldas9208@gmail.com"
var accountpassword = "12345"
accountCity = "Jaipur"

//accountId = 2 //not allowed
accountEmail = "rd@rd.com"
accountpassword = "21212121"
accountCity = "Bengaluru"
let accountState ; //undefined


console.log(accountId);
/*
prefer not to use var beacause of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountpassword,accountCity,accountState]);