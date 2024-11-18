
const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));



  //-----------------------------------------------------------------------------

  function isAdult(Age){
    if(Age >= 18){

    return `This person is an adult `

     } else{

    return`This person is a minor`    
     }
    }

    console.log(isAdult(1))
    console.log('Exercise 2 Result:', isAdult(21));

  //----------------------------------------------------------


  function isCharVowel(Letter){
    if(Letter === 'a' || Letter === 'e' || Letter === 'u' || Letter === 'i' || Letter === 'o' ){
        return 'true'
    } else {
        return 'false'
    }
  }

  console.log(isCharVowel('o'))
  console.log('Exercise 3 Result:', isCharVowel("a"));

  //---------------------------------------------------------------

  function generateEmail(name,example){

    return `The email is ${name}@${example}`
  }

  console.log(generateEmail("johnsmith","example.com"))
  console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));

  //-------------------------------------------------------------------------

  function greetUser(Greet,Day){
    if(Day === "morning" ){
        return `Good morning ${Greet}`
    } 

    else if(Day === "afternoon"){
        return `Good afternoon ${Greet}`
    }

    else if(Day === "evening"){
        return `Good evening ${Greet}`
    }

    else{
        return`Good day to you ${Greet}`
    }
  }

  console.log(greetUser("Sam","evening"))
  console.log('Exercise 5 Result:', greetUser("Sam", "morning"));

  //---------------------------------------------------------------------------

  function maxOfThree(num1,num2,num3){
    if(num1 > num2 && num1 > num3){
        return num1
    }

    else if(num2 > num1 && num2 > num3){
        return num2
    }

    else if(num3 > num1 && num3 > num2){
        return num3
    }

    else{
        return `all numbers are equal`
    }
  }

  console.log(maxOfThree(12,20,19))
  console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));

  //------------------------------------------------------------------------------

  function calculateTip(number,percentage){
    return number*(percentage/100)
  }

  console.log(calculateTip(10,5))
  console.log('Exercise 7 Result:', calculateTip(50, 20));

  //------------------------------------------------------------------------------

  function convertTemperature(temperature,type){
    if(type === "C"){
        return `${(temperature*9/5)+32} Celsius`
    }

    else if(type === "F"){
        return `${(temperature - 32)* 5/9} Fahrenheit`
    }

    else{
        return `Please enter C or F`
    }
  }
  console.log(convertTemperature(32,'C'))
  console.log('Exercise 8 Result:', convertTemperature(32, "C"));

  //------------------------------------------------------------------------------------------

  function basicCalculator(num4,num5,sign){
    if(sign === 'subtract'){
        return num4-num5
    }
    else if(sign === 'add'){
        return num4+num5
    }
    else if(sign === 'multiply'){
        return num4*num5
    }
    else if(sign === 'divide'){
        return num4/num5
    }
    else{
        return "no number"
    }
  }

  console.log(basicCalculator(5,3,'add'))
  console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));

  //-------------------------------------------------------------