import {createContent, selectionWord} from './modules/in-out';
import {playAudio} from './modules/audio';

const getById = id => document.getElementById(id);
const clearBtn = getById('btn-clear');
const writeBtn = getById('btn-write');
const playBtn = getById('btn-play');
const area = getById('text-in');
const output = getById('text-out');
const lang = getById('lang');

let accent = 'us';

clearBtn.addEventListener('click', clearContent);
writeBtn.addEventListener('click', writeContent);
playBtn.addEventListener('click', selectionAndPlay);
lang.addEventListener('change', changeLang);
area.addEventListener('keyup', writeContent);
output.addEventListener('dblclick', selectionAndPlay);

function changeLang (event) {
    accent = event.target.value;
}

function clearContent () {
    output.innerHTML = '';
    area.value = '';
    area.focus();
}

function writeContent () {
    output.innerHTML = createContent(area.value);
}

function selectionAndPlay () {
    const word = selectionWord();
    if (word) {
        return playAudio(accent, word);
    }
}
