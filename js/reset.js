import {d} from './variables.js'
export let resetBtn = {}

export const resetAll = (e) => {
    let btn = e.target;
    if(btn.id === 'message__reset'){
        for(let i = 1; i<=9; i++){
            d.getElementById(i).innerHTML = "";
            d.getElementById(i).classList.remove('clicked');
        }   
        d.getElementById('message').classList.remove('animate');
        return resetBtn.key = true; 
    }
}

