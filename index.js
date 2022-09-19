//mini steps
function reverse(word) {
  // 'abc' => 'cba
  const wordArray = word.split("")
  const reversedWordArray = wordArray.reverse()
  const reversedWord = reversedWordArray.join("")
  return reversedWord;
}


function isPalindrome(word) {
  // Write your algorithm here
  //reverse the input string using method stub to pretend there is a method to reverse string
  const reversedWord = reverse(word)
  //if the input is the same as the reversed input
  if (word === reversedWord) {
    return true
  } else {
    return false
  }
}

/* 
Add your pseudocode here
In order to reverse the string we need to use split() to return
//a new array. We can then use the reverse() method on the new array. Then we 
//use join() to make the reversed array back into a string
//it will return true if the reversed string equals the argument, or false if 
//it does not
*/

/*
Add written explanation of your solution here
The function takes in one argument that is a string, checks to see if it is a 
palindrome. If it is, it will return true, if its not, it will return false
test cases:
"wow" would be true, "hi" would be false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;







  


