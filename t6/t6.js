'use strict';
const movies = [];

let more = true;

while (more) {
  const title = prompt('Elokuvan nimi');
  const rating = prompt('Arvosana (asteikolla 1-5)');
  const movie = {title, rating};
  movies.push(movie);
  more = confirm('Haluatko arvioida lisää elokuvia?');
}

/*
const movies = [
  {title: 'Shrek', rating: '5'},
  {title: 'Shrek 2', rating: '4'},
  {title: 'Shrek the Third', rating: '4'},
  {title: 'Shrek Forever After', rating: '3'},
];
*/

function sortMovies(a, b) {
  const compare = b.rating - a.rating;
  return compare;
}

movies.sort(sortMovies);

console.log(movies);
for (const movie of movies) {
  const td1 = document.createElement('td');
  td1.innerText = movie.title;

  const td2 = document.createElement('td');
  td2.innerText = movie.rating;

  const tr = document.createElement('tr');
  tr.append(td1);
  tr.append(td2);

  document.getElementById('kohde').append(tr);
}

/* const favourite = movies[0]; */
document.getElementById('fav').innerText = movies[0].title;
