// let arr1 = Array(100).fill(null).map(() => Math.floor(Math.random() * 2000 - 1000) )


// let arr1 = [1,2323,2,54,5,4,12,4,-3 , 55,7,74,55,43,7,90,8,354,3223,9 ,1000,898,5657,10]

// bubbleSort(arr1)
// function bubbleSort(arr) {
//     for (let i = 0, endI = arr.length - 1; i < endI;( i++) {
//         for (let k = 0, endJ = endI - i; k < endJ; k++) {
//             if (arr[k] > arr[k + 1]) {
//                 let bubbl = arr[k];
//                 arr[k] = arr[k + 1];
//                 arr[k + 1] = bubbl;
//             }
//         }
//     }
// }
// console.log(arr1);

const getMaxNumber = (arg, ...arg2) => {
    // if (typeof (arg) === 'number') {
    //     console.log(Math.min(arg, ...arg2));
    // } else if (typeof (arg) === 'object') {
    //     let arr = Object.values(arg ,arg2 )
    //     console.log(Math.min ( ...arr));

    // } 

    if (arg2.length > 1) {
        const arr2 = arg2.reduce((acc, curr) => acc.concat(Object.values(curr)), []);
        if (typeof arg === 'number') {
            console.log(Math.min.apply(null, arg2.concat(arg)));
        } else if (typeof arg === 'object') {
            console.log(Math.min.apply(null, (Object.values(arg).concat(Object.values(arg2)))));
        }

    } else if (arg2.length === 1 ) {
        if (typeof arg === 'number') {
            console.log(Math.min(arg,arg2[0]));
        } else if (typeof arg === 'object') {
            console.log(Math.min.apply(null,(Object.values(arg).concat(Object.values(arg2[0])))));
        }
    } else {
        if(typeof arg === 'number') {
            console.log(arg); 
        } else if ( typeof arg === 'object') {
            console.log(Math.min.apply(null,Object.values(arg)));
        }
    }

}
getMaxNumber(0, 1,)
getMaxNumber([2, 3])
getMaxNumber({ a: 11, b: 3 })
getMaxNumber({ a: 11, b: 13 }, { a: 4, b: 12 })




// function newСompany( value ,base){
//     value = +prompt( 'сколько компов ')
//     base = +prompt(' cколько брак')
//     return  value / base *100
// }
// console.log (newСompany())
