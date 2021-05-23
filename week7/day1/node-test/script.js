let a = 7;
let b = 8;

console.log(a+b);

for (i=0;i<10;i++){
    console.log(i);
}

let obj ={
    a:8,
    name:'jeff'
};
console.log(obj.name);

let arr = ['jeff',9,true];
arr.forEach((item,i) => {
    console.log(item);
});

setTimeout( () => {
console.log('its been 5 second');
}, 5000)