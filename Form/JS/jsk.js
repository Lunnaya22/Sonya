//window.onload = function() {
// after('window')
// };

//document.addEventListener('DOMContentLoader', function() {
//    alert('document')
// })

// const form = document.getElementById('test-form');
const genderInputs = document.querySelectorAll('.j-gender-input');

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


// form.addEventListener('submit', function(event) {
//     event.preventDefault();
//     event.stopPropagation();

//     console.log(event);
// })