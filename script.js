const userInput = document.getElementById('user-input');
const searchBtn = document.getElementById('search-btn');
const statsContainer = document.getElementById('stats-container');
const statsCard = document.getElementById('stats-card');


const easyCircle = document.querySelector('.progress-item:nth-child(1)');
const mediumCircle = document.querySelector('.progress-item:nth-child(2)');
const hardCircle = document.querySelector('.progress-item:nth-child(3)');


const easyText = document.getElementById('easy-progress-text').querySelector('span');
const mediumText = document.getElementById('medium-progress-text').querySelector('span');
const hardText = document.getElementById('hard-progress-text').querySelector('span');


const API_URL = 'https://leetcode-api-faisalshohag.vercel.app/';


searchBtn.addEventListener('click', handleSearch);
userInput.addEventListener('keyup', (event) => {

    if (event.key === 'Enter') {
        handleSearch();
    }
});


async function handleSearch() {
    const username = userInput.value.trim();
    if (!username) {
        alert('Please enter a username.');
        return;
    }

    statsCard.innerHTML = `<p>Fetching data for ${username}...</p>`;
    statsContainer.style.display = 'block'; 

    try {
        const response = await fetch(API_URL + username);
        const data = await response.json();
        // console.log(data);

       
        if (data.status === 'error') {
            throw new Error(data.message);
        }

        
        updateUI(data);

    } catch (error) {
        
        showError(error.message);
    }
}


function updateUI(data) {
    
    updateCircle(easyCircle, easyText, data.easySolved, data.totalEasy, '#4caf50'); 
    updateCircle(mediumCircle, mediumText, data.mediumSolved, data.totalMedium, '#ffc107'); 
    updateCircle(hardCircle, hardText, data.hardSolved, data.totalHard, '#f44336'); 


    statsCard.innerHTML = `
    <p><strong>Total Solved:</strong> ${data.totalSolved} / ${data.totalQuestions}</p>
    <p><strong>Acceptance Rate:</strong> ${data.acceptance_rate}</p>
    <p><strong>Ranking:</strong> ${data.ranking}</p>
    <p><strong>Reputation:</strong> ${data.reputation}</p>
`;
}

function updateCircle(circleElement, textElement, solved, total, color) {

    textElement.textContent = `${solved} / ${total}`;

    const percentage = total > 0 ? (solved / total) : 0;
    const angle = percentage * 360;

    
    circleElement.style.setProperty('--angle', `${angle}deg`);
    circleElement.style.setProperty('--color', color);
}


function showError(message) {
    statsContainer.style.display = 'block'; 
    statsCard.innerHTML = `<p class="error">Error: ${message}</p>`;
    
    updateCircle(easyCircle, easyText, 0, 1, '#4caf50');
    updateCircle(mediumCircle, mediumText, 0, 1, '#ffc107');
    updateCircle(hardCircle, hardText, 0, 1, '#f44336');
}