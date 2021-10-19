var myFirstVariable = "'stringy!'"
var mySecondVariable = 'also "stringy!"'
var firstAndSecondVariables = myFirstVariable + ", " + mySecondVariable;

console.log(myFirstVariable)
console.log(mySecondVariable)
console.log(firstAndSecondVariables)

for (const firstAndSecondVariablesKey in firstAndSecondVariables) {
    console.log(firstAndSecondVariables[firstAndSecondVariablesKey])
}

console.log(testFunc(4, 4, 4))

function testFunc(a, b, c) {
    return a + b + c
}

let i = 0;
while (i < 704) {
    i++
    console.log("whileing!")
}