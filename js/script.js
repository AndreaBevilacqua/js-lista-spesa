let spesa = ['Salumi', 'Acqua', 'Verdura', 'Uova', 'Pane'];

let element = 0;
let outputElement = document.getElementById('result');

while (element < spesa.length) {
    let paragraph = document.createElement('p');

    paragraph.innerText = spesa[element];

    outputElement.appendChild(paragraph);

    element++;
}
