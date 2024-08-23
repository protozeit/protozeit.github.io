const textElement = document.querySelector(".animated-text");
const texts = [
    "Bibo is one of a kind",
    "Bibo is the cutest",
    "Bibo makes everything better",
    "Yay bibo",
    "The world is better with Bibo in it",
    "Everything crumbles against bibo",
    "Bibo always wins",
    "Bibo shines brighter than the stars",
    "Bibo is legendary",
    "Bibo is the coolest",
    "Bibo is a true superstar",
    "Bibo is pure magic",
    "Bibo is the best",
    "Bibo is unstoppable",
    "Nothing can bring Bibo down",
    "Bibo is the greatest",
    "Bibo is the most beautiful",
    "Bibo’s smile lights up the room",
    "Bibo is the definition of awesome",
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
