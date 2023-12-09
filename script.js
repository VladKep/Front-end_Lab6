document.getElementById('fetchButton').addEventListener('click', () => {
    // Fetch data for 5 users
    for (let i = 1; i <= 10; i++) {
        fetch('https://randomuser.me/api')
            .then(response => response.json())
            .then(data => {
                const user = data.results[0];

                const picture = user.picture.large;
                const city = user.location.city;
                const country = user.location.country;
                const postcode = user.location.postcode;
                const email = user.email;

                // Construct dynamic IDs for the elements
                const pictureId = `picture${i}`;
                const cityId = `city${i}`;
                const countryId = `country${i}`;
                const postcodeId = `postcode${i}`;
                const emailId = `email${i}`;

                // Display information on the page
                document.getElementById(pictureId).innerHTML = `<img src="${picture}" alt="Фото">`;
                document.getElementById(cityId).innerText = `Місто: ${city}`;
                document.getElementById(countryId).innerText = `Країна: ${country}`;
                document.getElementById(postcodeId).innerText = `Поштовий індекс: ${postcode}`;
                document.getElementById(emailId).innerText = `Email: ${email}`;
            })
            .catch(error => console.error('Помилка при отриманні даних:', error));
    }
});