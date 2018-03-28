import {createContent, selectionWord} from './modules/in-out';
import {playAudio} from './modules/audio';

const getById = id => document.getElementById(id);
const clearBtn = getById('btn-clear');
const writeBtn = getById('btn-write');
const area = getById('text-in');
const output = getById('text-out');
const lang = getById('lang');

let accent = 'us';

clearBtn.addEventListener('click', function () {
    area.value = '';
    output.innerHTML = '';
});

writeBtn.addEventListener('click', writeContent);
area.addEventListener('keyup', writeContent);

function writeContent () {
   output.innerHTML = createContent(area.value);
}

output.addEventListener('dblclick', function () {
    const word = selectionWord();
    if (word) {
        return playAudio(accent, word);
    }
});

lang.addEventListener('change', function (event) {
    accent = event.target.value;
});