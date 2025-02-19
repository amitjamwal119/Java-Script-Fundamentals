// Vowels and consonents

let alpha = ["a","b","c","i","j","k","o","m","u"];
let vowels = ["a","e","i","o","u"]
for (let i = 0; i <= 8; i++) {
    
    if (alpha[i] == vowels[i]) {
        console.log("array contains vowels");
        console.log("Index of vowels from array:", "a-", alpha.indexOf("a") ,"e-", alpha.indexOf("e") ,"i-", alpha.indexOf("i") ,"o-", alpha.indexOf("o") ,"u-", alpha.indexOf("u"));  
    }
    else if (alpha[i] !== vowels[i]) {
        console.log("array also contains consonents"); 
    }
    else{
        
    }
}
