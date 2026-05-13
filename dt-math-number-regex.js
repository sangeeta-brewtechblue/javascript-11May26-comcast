/*var today = new Date();
console.log(today.toLocaleDateString())

var biggestNum = Number.MAX_VALUE;
console.log(biggestNum)
console.log(typeof NaN);

console.log(Math.sqrt(7))*/


  var phNumregex = /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/;  

  var emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  //console.log(phNumregex.exec(123-456-1234));

  console.log(emailregex.test('abcemail.com'))
  console.log(emailregex.exec('abcemail.com'))


