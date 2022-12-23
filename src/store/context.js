import React from "react";

const MoviesContext = React.createContext({
    movies: [],
    filter(inputVlaue) { },
    search(inputVlaue){}
});

export default MoviesContext;