const myHeading = document.getElementById('myHeading');
const myButton = document.getElementById('myButton');
const myTextInput = document.getElementById('myTextInput');
const myList = document.getElementsByTagName('li');
const errorNotPurple = document.getElementsByClassName('error-not-purple');

myButton.addEventListener('click', () => {
    myHeading.style.color = myTextInput.value;
});

for (let i=0; i<myList.length; i+=1) {
    myList[i].style.color = 'purple';
}

for (let i=0; i<myList.length; i+=1) {
    errorNotPurple[i].style.color = 'red';
}