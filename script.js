const noBtn = document.getElementById('noBtn');
const noBtnPlease = document.getElementById('noBtnPlease');
const mainPage = document.getElementById('mainPage');
const yesPage = document.getElementById('yesPage');
const pleasePages = document.getElementById('pleasePages');
const pleaseMessage = document.getElementById('pleaseMessage');

let clickCount = 0;
const messages = [
    "Pleaseee! 🥺",
    "Pleaseee pleaseee! I am your baby naa! 🥺💕",
    "Last chance... Only Yes remains! 🥺💝"
];

function moveButton(button) {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;
    
    const maxX = windowWidth - buttonWidth;
    const maxY = windowHeight - buttonHeight;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    button.style.position = 'fixed';
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
}

function handleNoButton(button, shouldMove) {
    if (shouldMove) {
        button.addEventListener('mouseover', () => moveButton(button));
    }
    button.addEventListener('click', () => {
        clickCount++;
        mainPage.classList.add('hidden');
        pleasePages.classList.remove('hidden');
        
        if (clickCount >= messages.length - 1) {
            // Hide the No button on the last page
            noBtnPlease.style.display = 'none';
            pleaseMessage.textContent = messages[messages.length - 1];
        } else {
            pleaseMessage.textContent = messages[clickCount];
            moveButton(noBtnPlease);
        }
    });
}

function yesClicked() {
    mainPage.classList.add('hidden');
    pleasePages.classList.add('hidden');
    yesPage.classList.remove('hidden');
}

handleNoButton(noBtn, false); // First page no button - doesn't move
handleNoButton(noBtnPlease, true); // Second and third page no button - moves away
