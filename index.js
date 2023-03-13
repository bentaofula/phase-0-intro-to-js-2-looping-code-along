// Code your solutions in this file
function writeCards(myArray, surprise)
{
    myArray = ["Guadalupe", "Ollie", "Aki"];
    const newArray = [ ];
    for(let a = 0; a < myArray.length; a++)
    {
        newArray.push(`Thank you, ${myArray[a]}, for the wonderful ${surprise} gift!`);
    }
    return newArray;
}
function countDown(number)
{
    let count = 0;
    while( number >= count)
    {
        console.log(number);
        number -=1;
    }
}
countDown(10);
writeCards();