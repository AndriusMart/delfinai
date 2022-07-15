console.log('-----')

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1) + min);

  }
/*
mas[0] = 'Petras';
mas[1] = 'Ona';
mas.push('Bebras', 'Agurkas'); //push naujus elementus ikelia i pabaiga array
mas.unshift('Kurmis', 'Kelmas'); // ikelia elemta i pati prieki array ir visus buvusius perstumia toliau
mas.shift();// panaikina pirma nari 
*/

 /* */
const mas =[];
/* //shitty way
 for (let i= 0; i < 10; i++){
    mas[i]=rand(7,77)
 }
*/

//better way
for (let i= 0; i < 10; i++){
     mas.push(rand(7,77));
 }
 /*// random skaiciai nuo 7 iki 77 10 elementu masyve GOOD WAY
 const mas =  [...Array(10)].map(_ => rand(7,77));
*/

/*
 const cats = ['Murka', 'Pilkis', 'Rainius']; 
 console.log(cats[rand(0,2)]);//picking random elemnet from array cats
 */
/*
 for (let i= 0; i < 10; i++){
    console.log(mas[i]);
}
*/
mas.forEach(n => console.log(n));
