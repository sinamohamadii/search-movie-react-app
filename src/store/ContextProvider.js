import MoviesContext from "./context";

const moviesDefaultValue = {
    movies: [],
    filter(inputVlaue) { },
    search(inputVlaue) { }
};

const ContextProvider = props => {
    return (
        <MoviesContext.Provider value={moviesDefaultValue}>
            {props.children}
        </MoviesContext.Provider>
    );
};

export default ContextProvider;