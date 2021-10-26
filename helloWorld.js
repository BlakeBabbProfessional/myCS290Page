var object = { //this is anonymous
    test: 1,
    test2: 2,
    test3: 3,
    44: "test44",
    divideByTwo: function (num) {
        return num / 2
    }
}

console.log(object.divideByTwo(object.test3))