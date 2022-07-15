/*
forEach
map
sort
filter
 */
/*
console.log('--------**forEach**--------');
//(pavadinimai nesvarbus, svarbu eiliskumas 1 reiksme, 2 indexas, 3 visas masyvas)
console.log('--------log visus skaicius--------');
[1,5,77].forEach(a => console.log(a)); // log visus skaicius


console.log('--------log didesnius nei 4--------');
[1,5,77].forEach(a => { // log didesnius nei 4
    if (a > 4 ){
        console.log(a)
    }
});


console.log('--------1 reiksme , 2 indekas.--------');
[1,5,77].forEach((a, i) => console.log(a,i)); // a reiksme , i indekas.


console.log('--------*1 reiksme , 2 indekas, 3 visas masyvas*--------');
[1,5,77].forEach((a, i, t) => console.log(a, i, t)); // tecias/ t argumentas visas masyvas 

console.log('--------*atvirkscias masyvas nr.1*--------');
[1,5,77].forEach((a, i, t) => console.log(t[2 - i]));// 1


console.log('--------*atvirkscias masyvas nr.2*--------');
[1,5,77].forEach((a, i, t) => console.log(t[t.length - i - 1]));//2



console.log('--------*map*--------');
console.log('----------------');
//(pavadinimai nesvarbus, svarbu eiliskumas 1 reiksme, 2 indexas, 3 visas masyvas)

const fe = [1,5,77].forEach(a => console.log(a));
const map = [1,5,77].map(a => console.log(a));
console.log(fe,map);
console.log('--------*veikmas*--------');
const ma = [1,5,77].map(a => a *100);
console.log(ma);
// visos rodyklines funkcijos!!!! 
// veina eilute turi return, norint daugiau reikia paciam prideti return
const m = [1,5,77].map((a, i) =>{  
    
 return   a * i;

});
console.log(m);



console.log('--------*filter*--------');
console.log('----------------');
//(pavadinimai nesvarbus, svarbu eiliskumas 1 reiksme, 2 indexas, 3 visas masyvas)


const fi = [1,5,77].filter(a => a > 4);
console.log(fi);


console.log('--------*filter + map*--------');
const mfi = [1,5,77].filter(a => a > 4).map(r => r *10);
console.log(mfi);


console.log('--------*sort*--------');
console.log('----------------');
// tuscias .sort() sortina pagal pirma skaiciu (realiai nesamone)
// - keicia vietom ,+ palieka vietose, 0 daro ka nori.
// su stringo skaiciais irgi veikai normailiai,kol ji sudaro tik sakiciai
const namas = [1,'10',660,'0',5,77];
namas.sort((a,b) => a-b); 
console.log(namas);

const kelmas = [1,10,660,0,5,77];
kelmas.sort((a,b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;

}); 
console.log(kelmas);

const bebras = ['asda','fgffh','asfa','affrg','gdghgf']; //sortina by ascii table
bebras.sort((a,b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;

}); 
console.log(bebras);

console.log('--------*reduce*--------');
console.log('----------------');
*/