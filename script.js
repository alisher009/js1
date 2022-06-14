
let name = prompt('Как вас зовут?')
let money = 10000
let account = 7777

name = name[0].toUpperCase() + name.slice(1)


if(name === 'Alex'){
    let account = +prompt("Номер счетa?")
    if(account == account){
        let accountMoney = +prompt('Сколько обналичить?')
        if(accountMoney <= money){
            let totolmoney = money - accountMoney
            alert(`Операция успешно завершина   Снято: ${accountMoney}
            Осталось: ${totolmoney}`);
         
        } else {
            alert( " На счету, Недостаточно средст. ");
        } 
    } else {
        alert('Пользователь не найден: проверте и повторите попытку')
    }
} else {
    alert('Пользователь не найден: проверте и повторите попытку' )
}



// // Задание.2
// let name = prompt('как вас зовут?')

// if (name[0].toLowerCase() === 'a') {
//     console.log('добро пожаловать ');
//     let age = prompt('Ваш возраст')
//     if ( age >= 20 && age <= 40); {
//         console.log('добро пожаловать ');


//         let accout = prompt('вход больше 100$ ')
//         if (accout >= 100) {
//             console.log('Все Отлично');

//             let b = prompt('вместимость 10 человек')

//             if (b > 0 && b <= 10) {
//                 console.log('готово')
//             } else {
//                 console.log('много людей');
//             }

//         } else {
//             console.log('На счету недостаточно средств Повторите Попытку');
//         }
//     }
//  } else {
//     console.log('мы за росизм');
// } 


