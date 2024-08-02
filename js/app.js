function startAnimation() {
    const textElement = document.getElementById('animatedText');
    textElement.classList.add('animate');
}

function stopAnimation() {
    const textElement = document.getElementById('animatedText');
    textElement.classList.remove('animate');
}