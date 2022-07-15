const girls = ['Brigita', 'Edita', 'Deimantė', 'Justė', 'Ona', 'Bronė', 'Ramunė', 'Kaštonė', 'Meilutė'];

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1) + min);

  }

  console.log('--------1--------');
  let cats =  [...Array(10)].map(_ => rand(2,12));
  console.log(cats);
  let owners =  [...Array(10)].map(_ => girls[rand(0,8)]);
  console.log(owners);
  console.log('--------2--------');
  let catsTotal = cats.filter(a => a % 3 === 0).reduce((a,b) => a + b);
  console.log(catsTotal);
  console.log('--------3--------');
  owners.unshift('Nauseda');
  console.log(owners);
  console.log('--------4--------');
  owners.shift();
  let catOwner = [];/*
  for (let index = 0; index < owners.length -1; index++) {
    const element = owners[index] + ' ' + cats[index];
    catOwner.push(element)
  }
console.log(catOwner);*/
owners.forEach((a,i) => {
    const element = a + ' has ' + cats[i] + ' cats'
    catOwner.push(element)
 })
 console.log(catOwner)
 console.log('--------5--------');
 let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index);
 console.log([[...new Set(findDuplicates(owners))][0]]);
