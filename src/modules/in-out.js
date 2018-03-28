const LINE = /\n/g;
const TAGS = /([<|>])/g;
const WORD = /[^a-z']/;

export function createContent (text) {
    return text
        .replace(TAGS, e => e === '<' ? '&lt;' : '&gt;')
        .replace(LINE, '<br>');
}

export function selectionWord () {
    const selection = window.getSelection().toString();
    const text = selection.trim().toLowerCase();
    return WORD.test(text) ? false : text;
}