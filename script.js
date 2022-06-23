let products = [
  {
    id: Math.random(),
    name: 'mackbook',
    model: 'air',
    color: 'space grey',
    price: 1200
  },
  {
    id: Math.random(),
    name: 'acer',
    model: 'aspire',
    color: 'black',
    price: 800
  },
  {
    id: Math.random(),
    name: 'ark',
    model: 'swift',
    color: 'gold',
    price: 1500
  },
  {
    id: Math.random(),
    name: 'hp',
    model: 'povilion',
    color: 'green',
    price: 1500
  },
  {
    id: Math.random(),
    name: 'microsoft',
    model: 'tuf',
    color: 'black',
    price: 200
  },

  {
    id: Math.random(),
    name: 'HYPERPC ',
    model: 'STATION PRO',
    color: 'black',
    price: 20000
  },
  {
    id: Math.random(),
    name: 'Samsung ',
    model: 'neznayu',
    color: 'black',
    price: 500
  },
  {
    id: Math.random(),
    name: 'asus ',
    model: 'Intel Core I9',
    color: 'black',
    price: 900
  },

  {
    id: Math.random(),
    name: 'Lg',
    model: 'Intel',
    color: 'black',
    price: 1200
  },

  {
    id: Math.random(),
    name: 'Lenovo',
    model: 'Intel ',
    color: 'blue',
    price: 700
  },


]

let b = confirm(' вы хотите купить компютер ')
if (b === true) {
  let from = +prompt('from?')
  let to = +prompt('to?')
  let filtered = products.filter(item => item.price >= from && item.price <= to)

  alert(JSON.stringify(filtered));
  
    let a = confirm('Вы точно хотите купить компютер ?')
    if (a === true) {
      alert('Хорошо')
      let name = prompt('какую марку вы выбрали ')
      let nameFilter = filtered.filter(item => item.name === `${name}`)

      alert(JSON.stringify( nameFilter )); 

      let card = '7777'
      let cash = '$'

      let cashCard = prompt('cash or cards')

      if(cashCard === '$'|| cashCard === '7777'  ) {
       alert('плотеж успешно завершон:')
      
      } else {
        alert(' карта не обнаружена')
      }    
    } else {
      alert('досвидание')
    }
} else {  
  alert('Всего хорошого досвидание')
}    