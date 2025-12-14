 const tempo = document.querySelector('#tempo');

let data = new Date();
let h = data.getHours()

if(h <18) {
    tempo.innerHTML = 'Fechado';
    tempo.style.backgroundColor = 'red'; 
    tempo.style.color = 'white';
    tempo.style.padding = '5px';
    tempo.style.borderRadius = '10px'
} else {
    tempo.innerHTML = 'Aberto';
    tempo.style.color = '#08ca08';
    tempo.style.fontWeight = '600';
    
}



