/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let ans = 0;
  for(let i=0;i<str.length;i++)
  {
    if(str.toLowerCase().charAt(i) == 'a' || str.toLowerCase().charAt(i) == 'e'|| str.toLowerCase().charAt(i) == 'i' || str.toLowerCase().charAt(i) == 'o' || str.toLowerCase().charAt(i) == 'u')
      ans=ans+1;

  }
    return ans;
}

module.exports = countVowels;