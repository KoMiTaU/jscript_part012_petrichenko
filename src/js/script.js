"use strict";


if (4 == 9) {
    console.log('ok!');
} else {
    console.log('Error');
}


// if(num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console,log('Too much');
// }else {
//     console.log('ok');
// }

// (num == 50) ? console.log('ok') : console.log('Error');


const num = 50;

switch (num) {
    case 49:
        console.log('No');
        break;
    case 100:
        console.log('No');
        break;
    case 50:
        console.log('YES!!!!');
        break;
    default:
        console.log('Try next time')
        break;

}
