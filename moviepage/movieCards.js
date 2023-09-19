
document.addEventListener('DOMContentLoaded', function() {
    let userToken = localStorage.getItem('userToken'); 
    axios.get('http://localhost:3000', {
        headers: {
            authorization: 'Bearer ' + userToken
        }
    })
        .then(function(response) {
            console.log('Request sent from movieCards.js:', response.config);
            let moviesData = response.data;

            let moviesContainer = document.getElementById('movies-container');

            for (let i = 0; i < moviesData.length; i++) {
                let movie = moviesData[i];

                let movieContainer = document.createElement('div');
                movieContainer.classList.add('movie-container-cards');

                let rating = document.createElement('div');
                rating.classList.add('rating');

                let movieImage = document.createElement('div');
                movieImage.classList.add('movie-image');

                let movieContent = document.createElement('div');
                movieContent.classList.add('movie-content');

                let year = document.createElement('div');
                year.classList.add('year');

                let movieName = document.createElement('div');
                movieName.classList.add('movie-name');

                movieContent.appendChild(year);
                movieContent.appendChild(movieName);

                movieContainer.appendChild(rating);
                movieContainer.appendChild(movieImage);
                movieContainer.appendChild(movieContent);

                moviesContainer.appendChild(movieContainer);
            }
        })
        .catch(function(error) {
            console.log(error);
        });
});
