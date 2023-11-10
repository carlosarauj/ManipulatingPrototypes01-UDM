let objA = {
    chaveA: 'A'
}

let objB = {
    chaveB: 'B'
}

let objC = new Object()

objC.chaveC = 'C'

Object.setPrototypeOf(objB, objA)
Object.setPrototypeOf(objC, objB)

console.log(objC.chaveC)