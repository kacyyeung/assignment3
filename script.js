let allMovies = [];

//Define a movie class with parameters title (string), rating (number) and haveWatched (boolean)
class Movie {
    constructor(t, r, h) {
        this.title = t;
        this.rating = r;
        this.haveWatched = h;
    }
}

//add a movie OBJECT to the allMovies array
let addMovie = (movie) => {
    allMovies = allMovies.concat(movie);
    console.log("a new movie is added");
}

//iterate through all elements of allMovies array
//print out to console in a correct format
//print out the total number of movies in allMovies array
let printMovies = () => {
    console.log("Printing all movies....");
    for (const a of allMovies) {
        console.log(a.title + ", rating of " + a.rating + ", havewatched: " + a.haveWatched);
    }
    console.log("\nYou have "+ allMovies.length + " movies in total");
}


//print out to console, only the movies that has a rating higher than rating(argument)
//print out the total number of matches
let highRatings = (rating) => {
    console.log("printing movie that has a rating higher than " + rating);
    var count = 0;
    for (const a of allMovies) {
        if (a.rating > rating) {
            console.log(a.title + " has a rating of " + a.rating);
            count++;
        }
    }
    console.log("\nIn total, there are " + count + " matches");
}


//Toggle the 'haveWatched' property of the specified movie 
let changeWatched = (title) => {
    console.log("changing the status of the movie...");
    for (const a of allMovies) {
        if (a.title === title) {
            a.haveWatched = !a.haveWatched;
            break;
        }
    }
}



////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE OR EDIT
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

console.log("----------------");
console.log("running program......");
console.log("----------------");
printMovies();


let movie1 = new Movie("Parasite", 2, false);


console.log("----------------");
addMovie(movie1);
console.log("----------------");



changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

highRatings(3.5);