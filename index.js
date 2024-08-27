const textElement = document.querySelector(".animated-text");
const texts = [
    "I love you very very much",
    "You make me happy :)",
    "Bibo is a beacon of joy",
    "Bibo is a rare bloom in life's garden.",
    "Bibo’s energy is contagious",
    "Bibo brightens every day.",
    "Bibo is one of a kind",
    "Bibo is the sunshine on a cloudy day",
    "Bibo is the cutest",
    "Bibo’s courage is unmatched",
    "Bibo turns the ordinary into extraordinary",
    "Bibo makes everything better",
    "Everything crumbles against bibo",
    "Yay bibo"
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
