import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import MoviesContext from "./context";


const ContextProvider = props => {
    const navigate = useNavigate();

    const [movies, setmovies] = useState([]);

    useEffect(
        () => {
            const getData = async () => {
                const response = await fetch('http://localhost:3001/movies');

                if (!response.ok) {
                    throw new Error('Oops! something went wrong.');
                }

                const result = await response.json();

                setmovies(result);
            };

            getData().catch(error => console.log(error.message));
        },
        []
    );

    const search = (inputVlaue) => {
        navigate(`/?search=${inputVlaue}`);
    };

    const moviesValue = {
        movies: movies,
        filter(inputVlaue) { },
        search: search
    };

    return (
        <MoviesContext.Provider value={moviesValue}>
            {props.children}
        </MoviesContext.Provider>
    );

};

export default ContextProvider;