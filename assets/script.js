/////////////////////////////////// Task (A) ///////////////////////////////////////////////
var array = [11, 22, 33, 44, 55, 66, 77, 88, 99, 100]

var sum_even_number = 0;
for (var index=0 ; index < array.length ; index++)
{
    if (array[index] % 2 == 0)
    {
        sum_even_number += array[index];
    }
}
//The sum of even number
console.log(sum_even_number);
document.writeln('sum even number : ', sum_even_number , '<br>');

var TheSumOfNumberLessThan_5 = 0;
for (var index = 0 ; index <array.length ; index++ )
{
    if (index <= 4)
    {
        TheSumOfNumberLessThan_5 += array[index];
    }
}
//The sum of index < 5
console.log(TheSumOfNumberLessThan_5);
document.write('The Sum Of Number Less Than 5 : ',TheSumOfNumberLessThan_5 , '<br>');

/////////////////////////////////// Task (B) ///////////////////////////////////////////////
var object = {
    Myname : "Ghader Ahmad",
    Mynumbaer : "0938484984",
    Myage : "23",
    Myemail : "ahmadghaderfarok@gmail.com"
};

// ALL Objects
console.log(object);
document.write(object , '<br>');

// Each one individuallu
console.log(object.Myname);
console.log(object.Mynumbaer);
console.log(object.Myage);
console.log(object.Myemail);

document.write('My Name : ', object.Myname, '<br>');
document.write('My Nunber : ', object.Mynumbaer, '<br>');
document.write('My Age : ', object.Myage, '<br>');
document.write('My Email : ', object.Myemail, '<br>');