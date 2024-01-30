/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  
  // remove all space and make string a lowercase 
  str = str.split(" ").join("").toLowerCase();

  let size = str.length,j=0;

  for(i = size-1;i>=(size/2)+1;i--)
  {
    if(str.charAt(i) != str.charAt(j)){
      console.log("i = "+str.charAt(i)+" j ="+str.charAt(j))
      return false;
    }
    j++;
  }
  return true;
}

module.exports = isPalindrome;
