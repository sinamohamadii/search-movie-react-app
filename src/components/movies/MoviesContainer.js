import MovieItem from './MovieItem';

const MoviesContainer = () => {
    return(
        <div className='w-full md:max-w-[66%] mx-auto flex flex-col items-center justify-center bg-[#4361EE] p-5 rounded-3xl'>
            <h3 className='font-bold text-2xl text-white mb-5'>Movies List</h3>
            <MovieItem />
        </div>
    );
};

export default MoviesContainer;