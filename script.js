let arr = [ 'alish','amir', 'amin', 'zarina', 'shoxrux ', 'kumush', 'amina', 'xoji', 'shox', 'ula', 'artyom'] 
let e = Math.floor(Math.random() *100)

let a = confirm(`Добро пожаловать в наш  ресторан: 
в наш ресторан можно зойти только по записи: 
Вы бронировали места? `)

if(a === true) {
    let name = prompt('Как вас зовут?') 
if(arr.includes(`${name}`)) {
    alert(`Добро пожаловать ${name} 
     Ваш столик готов  `+ e )
} else  {
   alert('Увы вас нет в списке гостей');
}
} else {
   alert('Вам нужно забронировать столик')
}

