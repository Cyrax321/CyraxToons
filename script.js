document.addEventListener('DOMContentLoaded', getCartoons);

async function getCartoons() {
    const apiKey = 'ae09d400a9mshbb53f39d230ad93p16280bjsn8868bc3aa21a';
    const apiUrl = 'https://webtoonapi.p.rapidapi.com/api/v1/webtoons';

    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': apiKey,
                'X-RapidAPI-Host': 'webtoonapi.p.rapidapi.com'
            }
        });

        const data = await response.json();
        displayCartoons(data.data);
    } catch (error) {
        console.error('Error fetching cartoons:', error);
    }
}

function displayCartoons(cartoons) {
    const cartoonList = document.getElementById('cartoon-list');
    cartoonList.innerHTML = '';

    cartoons.forEach(cartoon => {
        const cartoonCard = document.createElement('div');
        cartoonCard.classList.add('cartoon-card');
        cartoonCard.innerHTML = `
            <h2>${cartoon.title}</h2>
            <img src="${cartoon.thumbnail}" alt="${cartoon.title}">
            <p>${cartoon.description}</p>
            <a href="${cartoon.url}" target="_blank">Read More <i class="fas fa-external-link-alt"></i></a>
        `;
        cartoonList.appendChild(cartoonCard);
    });
}
