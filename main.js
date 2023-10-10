const A = parseInt(Math.random() * 100)
console.log(A)
if(A % 2 == 0){
    console.log('A son juft')
}else{
    console.log('A son toq')
}
console.log('2 mashq')
const b = parseInt(Math.random() * 100)
console.log(b)
if(b % 5 == 0){
    if(b % 3 == 0){
        console.log('b son 5 ga 3 bolinadi')
    }else{
        console.log('b son 5 ga bolinadi')
    }
}else{
    if(b % 3 == 0){
        console.log('b son 3 ga bolinadi')
    }else{
        console.log('b son 5 ga 3 bolinmaydi')
    }
}
console.log('3 mashq')
