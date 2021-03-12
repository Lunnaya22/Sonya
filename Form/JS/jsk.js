//window.onload = function() {
// after('window')
// };

//document.addEventListener('DOMContentLoader', function() {
//    alert('document')
// })

// const form = document.getElementById('test-form');
const genderInputs = document.querySelectorAll('.j-gender-input');
const form = document.getElementById('form');
const nameFields = document.querySelectorAll('input[data-valid *= "name"]');

for (let input of genderInputs) {
    input.addEventListener('change', function(e) {
        const inputValue = e.target.value;

        const textNodes = document.querySelectorAll('.j-text-gender');

        for (let textNode of textNodes) {
            textNode.classList.add('d-none');
        }

        document.querySelector(`.j-text-${inputValue}`).classList.remove('d-none');
    })
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
})

for (let input of nameFields) {
    input.addEventListener('blur', (e) => {
        e.target.value && allLetter(e.target.value)
    })
}


function allLetter(inputtxt) {
   const letters = /^[A-Za-z]+$/;

    if (inputtxt.match(letters)) {
        return true;
    } else {
        alert("message");

        return false;
    }
}



// form.addEventListener('submit', function(event) {
//     event.preventDefault();
//     event.stopPropagation();

//     console.log(event);
// })