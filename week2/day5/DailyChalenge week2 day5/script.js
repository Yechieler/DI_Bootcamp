let userNumb =  prompt(`Pick a number to begin counting down bottles`);

while(isNaN(userNumb) ||  userNumb == "" ) {
    userNum = prompt("Please type a 'number' for the song.");
}
let bottles = userNumb;
let down = 1;

while(bottles-down>0) {
    console.log(`${bottles} bottles of beer on the wall, ${bottles} bottles of beer.`)
    if (down>1) {
        console.log(`Take ${down} down and pass them around, ${bottles-down} bottles of beer on the wall.`);
    } else if (down==1) {
        console.log(`Take ${down} down and pass it around, ${bottles-down} bottles of beer on the wall.`)
    }
    bottles-= down;
    down++;
}
if (bottles - down <= 0) {

    if (bottles == 1) {
        console.log(`${bottles} bottle of beer on the wall, ${bottles} bottle of beer.`);
        console.log(`Take it down and pass it around, no more bottles of beer on the wall.`);

    }
    else {
        console.log(`${bottles} bottles of beer on the wall, ${bottles} bottles of beer.`);
        console.log(`Take all of them down and pass them around, no more bottles of beer on the wall.`);
    }
    console.log(`No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, ${userNumb} bottles of beer on the wall.`)
}