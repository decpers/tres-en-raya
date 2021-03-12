import {d, body} from './variables.js'
import {pressBtn} from './functions.js'
import {resetAll} from './reset.js'

d.addEventListener('DOMContentLoaded', () => {
    body.addEventListener('click', (e) => {
        pressBtn(e);
        resetAll(e);

    })
})