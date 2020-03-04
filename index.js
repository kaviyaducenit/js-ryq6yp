let person=prompt("please Enter your name");
let start=prompt("Start index");
 while(isNaN(start)==true)
{
  alert("Enter valid value");
  let start=prompt("start index");
}
let end=prompt("end index");  
while(isNaN(end)==true)
{
  alert("Enter valid value");
  let end=prompt("End index");
}
alert(person.slice(start,end));
