function displayWelcome(name1, name2) {
    if (name1 == 'Rafal'){
        alert ('siema '+name1);
    }
    if (name2 == 'Radek'){
        alert ('siema'+name2);
    }
    alert ('siema '+name1 +' ' +name2);
}

function multiply(number1, number2) {
    let total = 0;
    total = number1 * number2;
    document.getElementById('result').innerHTML = total.toString();
}

function displayCars(cars) {
    let text = '';
    for(const car of cars){
        text += car + '<br>';
    }

    console.log(text);
    document.getElementById('result').innerHTML = text;
}