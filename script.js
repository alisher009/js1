let users = [
    {
        name: 'blblbl'
    },
    {
        name: 'bfbfbfb'
    },
    {
        name: 'fvfvfv'
    },
    {
        name: 'fvfvfv'
    },
    {
        name: 'yufvfvfv'
    },
    {
        name: 'lfvfps'
    },
    {
        name: 'skriptonit'
    }
]

function addAge(users) {
    let sum = 0
    for (let user of users) {
        user.age = Math.floor(Math.random() * 50)
        sum += user.age
    }
    return sum / users.length
}
addAge(users)
console.log(users);
console.log('средний возраст', Math.round(addAge(users)))
