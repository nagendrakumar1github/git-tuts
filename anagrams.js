
// let isAnagram= function (str1,str2){
//     let stored =str1.split().sort().join().toLowerCase()
//     let stored1= str2.split().sort().join().toLowerCase()
//     return(stored == stored1);
// }
// console.log(isAnagram("hello","jello"));
// console.log(isAnagram("hello", "lloehss"));

// function checkStringsAnagram(a, b) {
//     let len1 = a.length;
//     let len2 = b.length;
//     if(len1 !== len2){
//        console.log('Invalid Input');
//        return
//     }
//     let str1 = a.split('').sort().join('');
//     let str2 = b.split('').sort().join('');
//     if(str1 === str2){
//        console.log("True");
//     } else { 
//        console.log("False");
//     }
//  }
//  checkStringsAnagram("indian","ndiani")
//  checkStringsAnagram("hello", "ellos")

 function isAnagram(a,b){
    let len1= a.length;
    let len2= b.length;
    if(len1 !== len2){
        console.log("Invalid Input")
    }
    let str1 =a.split('').sort().join("").toLowerCase()
    let str2 = b.split('').sort().join("").toLowerCase()
    if(str1=== str2){
        console.log("true")
    }else{
        console.log("flase")
    }


 }
 isAnagram("hello", "lloeh");
 isAnagram("katari", "riatak");
 