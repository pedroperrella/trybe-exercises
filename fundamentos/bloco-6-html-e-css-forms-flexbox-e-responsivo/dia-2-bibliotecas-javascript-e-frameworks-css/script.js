function createStateList () {
    let stateSelector = document.getElementById('input-state');
    let states = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

for(let i = 0; i < states.length; i += 1) {
    let option = document.createElement('option');
    option.innerText = states[i];
    option.value = states[i];
    stateSelector.appendChild(option);
}
}

window.onload = function () {
    createStateList ();

}