console.log('--------1--------');
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1) + min);

  }
  let arr =  [...Array(30)].map(_ => rand(5,25));
console.log(arr);


console.log('--------2--------');
console.log('-a-');
console.log(arr.filter(a => a > 10).length)


console.log('-b-');
let max=Math.max(...arr);
let index = arr.indexOf(max)
console.log(max,index);


console.log('-c-');
console.log(arr.filter(a => a % 2 === 0).reduce((a,b) => a + b));


console.log('-d-');
let newArr = arr.map((a,i)=> a-i);
console.log(newArr);


console.log('-e-');
let arr2 =  [...Array(10)].map(_ => rand(5,25));
let bigArr= [...arr,...arr2];
console.log(bigArr);


console.log('-f-');
console.log(bigArr.filter(a => a % 2 === 0));
console.log(bigArr.filter(a => a % 2 !== 0));


console.log('-g-');
let evenArr = bigArr.filter(a => a % 2 === 0);
console.log(evenArr.map(a => { 
    if (a > 15 ){
        return a =0;
    }
    return a;
}));


console.log('-h-');
console.log(arr.indexOf(10));


console.log('--------3--------');
const letters = ['A','B','C','D'];
  let array1 =  [...Array(200)].map(_ => letters[rand(0,3)]);
  console.log(array1);


  console.log('--------4--------');
  let array2 =  [...Array(200)].map(_ => letters[rand(0,3)]);
  let array3 =  [...Array(200)].map(_ => letters[rand(0,3)]);
  let bigArray= [];
  array1.forEach((a,i) => {
    const element = a + array2[i]+array3[i]
    bigArray.push(element)
 })
 let uniqueChars = [...new Set(bigArray)];
 console.log(uniqueChars);
 console.log(uniqueChars.length);


 console.log('--------5--------');
 var arrUni1 = [];
while(arrUni1.length < 100){
    var r = rand(100,999)
    if(arrUni1.indexOf(r) === -1) arrUni1.push(r);
}
console.log(arrUni1);
var arrUni2 = [];
while(arrUni2.length < 100){
    var r = rand(100,999)
    if(arrUni2.indexOf(r) === -1) arrUni2.push(r);
}
console.log(arrUni2);


 console.log('--------6--------');
const numbersToDeleteSet = new Set(arrUni2);
const newArrUni = arrUni1.filter((numb) => {
  return !numbersToDeleteSet.has(numb);
});
console.log(newArrUni);

console.log('--------7--------');
const bigNumbArray = [...arrUni1,...arrUni2]
let duplicates =bigNumbArray.filter((a, i, aa) => aa.indexOf(a) === i && aa.lastIndexOf(a) !== i);
console.log(duplicates);

console.log('--------8--------');


console.log('--------9--------');
let arrEnd =  [...Array(2)].map(_ => rand(5,25));
console.log(arrEnd);

for (let i = 0; i < 10; i++){
  let n =arrEnd[i]+arrEnd[i +1];
  arrEnd.push(n)
}
console.log(arrEnd)










