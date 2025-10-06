//Task2
let movies = [
    {
        title: "Bahubali",
        imageUrl: "	https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2016/07/aamirkhan-dangal-1467629568.jpg",
        year: 2015
    },

    {
        title: "KGF",
        imageUrl: "",
        year:2018
    },

    {
        title: "Dangal",
        imageUrl: "",
        year: 2016
    }
]


//
function displayMovies()
{
    movies.forEach((e,i) => {
        const movieDiv = document.createElement("div");
        movieDiv.classList.add("movie");

        const image = document.createElement.add("img");
        image.src=e.imageUrl;    image.alt=e.title;

        const title = document.createElement('h2');
        title.textContent = e.title;

        const para = document.createElement('p');
        para.textContent = e.year;

        movieDiv.appendChild(image, title, para);
        document.getElementById('library').appendChild(movieDiv);
    })
}
displayMovies();