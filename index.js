const textElement = document.querySelector(".animated-text");
const texts = [
    "BIBO IS THE BEST",
    "BIBO IS THE GREATEST",
    "BIBO IS THE MOST BEAUTIFUL",
    "BIBO IS THE CUTEST",
    "Everything crumbles against bibo",
    "yay bibo",
    "You are kenough",
];

let index = 0;

textElement.classList.add('opacity-100');

setInterval(() => {
    textElement.classList.remove('opacity-100');
    setTimeout(() => {
        textElement.textContent = texts[index];
        index = (index + 1) % texts.length;
        textElement.classList.add('opacity-100');
    }, 300);
}, 3000);

let points = localStorage.getItem('points') ? parseInt(localStorage.getItem('points')) : 0;
const pointCounter = document.getElementById('point-counter');
pointCounter.textContent = `${points}`;

function addPoint(element) {
    points++;
    localStorage.setItem('points', points);
    pointCounter.textContent = `${points}`;

    const spanElement = document.createElement('span');
    spanElement.textContent = '+1 Reassurance Point';
    spanElement.classList.add(
        'text-green', 'font-body', 'text-xs',
        'font-medium', 'absolute', '-translate-x-1/2',
        'left-1/2', '-top-1/2', 'whitespace-nowrap',
        'block', 'z-[-5]', 'opacity-0',
        'point-span', 'animate-point'
    );

    spanElement.addEventListener('animationend', () => {
        spanElement.remove();
    }, { once: true });

    element.appendChild(spanElement);
}
