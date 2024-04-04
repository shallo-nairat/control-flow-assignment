//Write a program that takes in an array of numbers and consoles the first four items multiplied by itself  
//and the last two added by 10. Return the array with the new values
  
function changeArray(numbers){
    const firstFour=numbers.slice(0,4).map(item=>item*item);
    const lastTwo =numbers.slice(-2).map(item=>item+10);
    console.log(firstFour);
    console.log(lastTwo);

    const newArray=firstFour.concat(lastTwo);
    console.log (newArray);
    return newArray
}

changeArray([2,3,4,5,6,7,8,9,10,11])

//Write a program that takes in the following array and use a while loop to iterate and break when
// the item is equal to the fourth index :let arrNum = [1,2,3,4,5,6,7,8,9];

  const arrNum =(studentNumber)=>{
    while (studentNumber.length>4){
        console.log('Gift students');
        studentNumber.pop();
        if(studentNumber.length===4)
        console.log('You have gifted two students');
    }
  }
  arrNum([1,2,3,4,5,6,7,8,9])
  //Write a function that takes in a an array of strings and use a continue statement when the item
  // is at the second index:  let fruits= ['apple','plum','banana','strawberries','kiwi']
      
 function yummyFruits(arr){
    for(let i =0; i<arr.length;+i++){
        if (i==2){
            continue;
        }
        console.log(arr[i]);
    }
 }
 const fruits = ['apple','plum','banana','strawberries','kiwi']
 console.log(fruits);
 //Write a function that accepts an array of strings and console.logs each element using a for loop.
 function namesOfColors (arr){
    for(let i=0; i<=arr.length; i++){
        console.log(arr[i]);
    }

 }
 namesOfColors(['yellow','blue','orange','red','violet'])
 

 //Write a JavaScript function that takes a string as input and reverses it using
 // a while loop. The function should return the reversed string. 

 function reversedNames(names){
  let i = names.length
  while(i --){
    console.log(names[i]);
  }
 }
     reversedNames("hawa")
     return reversedNames