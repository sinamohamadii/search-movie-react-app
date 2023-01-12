import { useContext } from 'react';

import MovieItem from './MovieItem';
import MoviesContext from '../../store/context';

const MoviesContainer = () => {
    const moviesList = useContext(MoviesContext);

    return (
        <div className='flex flex-col items-center justify-center bg-[#4361EE] p-5 rounded-3xl'>
            <h3 className='font-bold text-2xl text-white mb-5'>Movies List</h3>
            <div className='w-full flex flex-col items-center xs:flex-row flex-wrap gap-y-14 pb-14'>
                {moviesList.movies.map(el => {
                    return (
                        <MovieItem key={el.id} name={el.Title} IMDB={el.imdbScore} poster={el.Poster} />
                    );
                })}
            </div>
        </div>
    );
};

export default MoviesContainer;