function reverse(str) {
   let lettersArray = str.split('');
   let reversedLettersArray = lettersArray.reverse();
   return reversedLettersArray.join(' ');
}

function reverse(str) {
   let reversed = '';

   for (let i = 0; i < str.length; i++) {
      reversed = str[i] + reversed;
   }
   return reversed;
}


function reverse(str) {
   return str.split('').reverse().join('');
}

function isPalindrome(str) {
   return reverse(str) === str;
}
console.log(reverse("myString"));