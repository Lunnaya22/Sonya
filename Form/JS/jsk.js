//window.onload = function() {
// after('window')
// };

//document.addEventListener('DOMContentLoader', function() {
//    alert('document')
// })

const form = document.getElementById('test-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    event.stopPropagation();

    console.log(event);
})