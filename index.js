function name(params) {
    fetch('https://trainingsession8.herokuapp.com/data')
        .then(response => response.json())
        .then(json => console.log(json))
}

fetch('https://trainingsession8.herokuapp.com/data')
.then(response => response.json())
.then(json => {
    studentSelect= document.getElementById('Students');
    json.Sheet1.forEach(element => {
        var options = document.createElement('option');
        options.innerHTML=element['A'];
        studentSelect.appendChild(options);
    });
})