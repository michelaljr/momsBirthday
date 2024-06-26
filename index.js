document.addEventListener('DOMContentLoaded', () => {
    const title = document.getElementById('title');
    const text = title.innerText;
    title.innerHTML = '';

    text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.innerText = char;

        // Make the first letter of each word larger
        if (index === 0 || text[index - 1] === ' ') {
            span.classList.add('first-letter');
        }
        
        span.classList.add(`letter${index + 1}`);
        title.appendChild(span);
    });
});

function showMessage(index, messageText) {
    const message = document.getElementById(`message${index}`);
    message.innerText = messageText;
    message.style.display = message.style.display === 'block' ? 'none' : 'block';
}