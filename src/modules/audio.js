const audioCache = new Map();
const errorCache = new Set();

export async function playAudio (accent, word) {
    const key = `${accent}:${word}`;
    
    if (errorCache.has(key)) {
        return;
    }
    
    if (audioCache.has(key)) {
        return audioCache.get(key).play();
    }
    
    try {
        const audio = createAudio(accent, word);
        await audio.play();
        audioCache.set(key, audio);
    } catch (e) {
        errorCache.add(key);
    }
}

function createAudio (accent, word) {
    const audio = document.createElement('audio');
    audio.setAttribute('type', 'audio/mpeg');
    audio.volume = 0.5;
    audio.src = `http://wooordhunt.ru/data/sound/word/${accent}/mp3/${word}.mp3`;
    return audio;
}
