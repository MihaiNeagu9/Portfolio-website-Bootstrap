function runTypingEffect() {
    const text = 'I am Neagu Mihai Daniel';
    const typingElement = document.getElementById('typing-text');
    const typingDelay = 70;

    typeText(text, typingElement, typingDelay);
}

function typeText(text, typingElement, typingDelay) {
    for(let i = 0; i < text.length; i++) {
        setTimeout(() => {
            typingElement.textContent += text.charAt(i);
        }, typingDelay * i)
    }
}

document.addEventListener('DOMContentLoaded', runTypingEffect);
