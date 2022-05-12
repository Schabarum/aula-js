/*
const p = new Promise((resolve,reject) => {
    if (Math.random() > 0.5)
        resolve('yay')
    reject('no')
})  

p
  .then(console.log)
  .catch(console.log)

Promise.all([
    new Promise(resolve => resolve(1)),
    new Promise(resolve => resolve(2)),
    new Promise(resolve => reject('ERROU'))
])

.then(res => console.log(res))
.catch(res => console.log(err))
*/

const foo = async() => {
    if (Math.random() > 0.5)
        return 'yeah'
    throw new Error('ops')
}

foo()
    .then(a => console.log(a))
    .catch(a => console.log(a.message))

