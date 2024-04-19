


for (let i = 1; i <= 100; i++) {
    const mycontainer = document.getElementById('cont-box')

    const myDiv = document.createElement('div')

    if (i % 3 == 0 && i % 5 == 0) {
        myDiv.append('FizzBuzz')
        mycontainer.append(myDiv)
        console.log('FizzBuzz')
    } else if (i % 3 == 0) {
        myDiv.append('Fizz')
        mycontainer.append(myDiv)
        console.log('Fizz')
    } else if (i % 5 == 0) {
        myDiv.append('Buzz')
        mycontainer.append(myDiv)
        console.log('Buzz')
    } else {
        myDiv.append(i)
        mycontainer.append(myDiv)
        console.log(i)
    }
}

