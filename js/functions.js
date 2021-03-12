import {d, message, containers} from './variables.js';
//Esta variable sirve para controlar en que turno van
let counter = 1;
let winner = false;

export const pressBtn = e => {
    resetAll(e);
    if(winner !== true){
        // Guardamos el evento en una variable
        const btn = e.target;
        // Verificamos que sea un boton y que esté vacio
        if(btn.classList.contains('board__box') && btn.innerHTML ===""){
            //Le pasamos una clase para que se vea clickeado
            btn.classList.toggle('clicked');
            //Le asignamos a los movimientos su letra respectiva
            if(counter%2 !== 0){
                let box = d.getElementById(btn.id);
                box.innerHTML = 'O';
                counter++
            }else{
                if(counter%2 === 0){
                    let box = d.getElementById(btn.id);
                    box.innerHTML = 'X';
                    counter++
                }
            }  
        }
        //Ejecutamos desde el 5to movimiento ya que desde ahí ya se puede ganar
        if(counter >= 5){
            saveButtonNumber(counter);
        }
        
        //Cuando hay empate o tablas
        if(counter === 10 && winner ===false){
            message.classList.add('animate');
            containers.first.innerHTML = 'Draw';
            containers.second.innerHTML = 'Draw';

        }
    }

}



const saveButtonNumber = () => {

    //Sirve para guardar las casillas que seleccionen cada jugador
    const result = {
        firstPlayer: [],
        secondPlayer: []
    }

    for(let i = 1; i<=9; i++){
        //Seleccionamos una de las casillas con su id
        let selectedBox = d.getElementById(i); 
        //Comparamos si las casillas contienen un 'X' u 'O'
        if(selectedBox.innerHTML === 'X'){
            //Guardamos los números de las casillas que selecionaron cada jugador
            result.firstPlayer.push(i);
        }

        if(selectedBox.innerHTML === 'O'){
            result.secondPlayer.push(i);
        }

        // ------------------------------------------------------
    }
    //Ejecutamos la comprobación de los resultados
    verifyResult(result);
}

const verifyResult = (result) => {
    const n = result.firstPlayer;
    let win = false;
    const m = result.secondPlayer;
    firstPlayer(n, win);
    secondPlayer(m, win);

    
}


const firstPlayer = (n, win) => {
    if(n.includes(1) && n.includes(4) && n.includes(7)){ win = true;}
    if(n.includes(1) && n.includes(2) && n.includes(3)){ win = true;}
    if(n.includes(1) && n.includes(5) && n.includes(9)){ win = true;}
    if(n.includes(2) && n.includes(5) && n.includes(8)){ win = true;}
    if(n.includes(3) && n.includes(5) && n.includes(7)){ win = true;}
    if(n.includes(3) && n.includes(6) && n.includes(9)){ win = true;}
    if(n.includes(4) && n.includes(5) && n.includes(6)){ win = true;}
    if(n.includes(7) && n.includes(8) && n.includes(9)){ win = true;}

    if(win === true){
        counter = 1;
        containers.first.innerHTML = 'Loser';
        containers.second.innerHTML = 'Winner';
        winner = true;
        message.classList.add('animate');
    }
}


const secondPlayer = (m, win) => {
    if(m.includes(1) && m.includes(4) && m.includes(7)){ win = true;}
    if(m.includes(1) && m.includes(2) && m.includes(3)){ win = true;}
    if(m.includes(1) && m.includes(5) && m.includes(9)){ win = true;}
    if(m.includes(2) && m.includes(5) && m.includes(8)){ win = true;}
    if(m.includes(3) && m.includes(5) && m.includes(7)){ win = true;}
    if(m.includes(3) && m.includes(6) && m.includes(9)){ win = true;}
    if(m.includes(4) && m.includes(5) && m.includes(6)){ win = true;}
    if(m.includes(7) && m.includes(8) && m.includes(9)){ win = true;}

    if(win === true){
        counter = 1;
        containers.first.innerHTML = 'Winner';
        containers.second.innerHTML = 'Loser';
        winner = true;
        message.classList.add('animate');
    }
}


const resetAll = (e) => {
    let btn = e.target;
    if(btn.id === 'message__reset'){
        for(let i = 1; i<=9; i++){
            d.getElementById(i).innerHTML = "";
            d.getElementById(i).classList.remove('clicked');
        }   
        d.getElementById('message').classList.remove('animate');
        winner = false;
        counter = 1;
    }
}