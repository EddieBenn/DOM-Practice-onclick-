let counter = document.querySelector('.counter');
let inputSumbit = document.getElementById('inputData');



function addNumber() {
    if (inputSumbit.value == 0) {
        return 0
    } else {
        counter.innerHTML = inputSumbit.value;
    }
    inputSumbit.value = [];
}
   

function increment() {
    let addedValue = Number(counter.innerHTML);
    if (addedValue !== 0) {
        let incrementedValue = addedValue += 1;
        counter.innerHTML = incrementedValue;
    } else {
        alert("Add a Number");
    }
}

function decrement() {
    let deductedValue = Number(counter.innerHTML);
    if (deductedValue !== 0 || deductedValue < 0) {
        let decrementedValue = deductedValue -= 1;
        counter.innerHTML = decrementedValue;
    } else {
        alert("Add a Number");
    }

}

function clearValue() {
    counter.innerHTML = 0;
}