import MovieItem from './MovieItem';

const MoviesContainer = () => {
    return (
        <div className='flex flex-col items-center justify-center bg-[#4361EE] p-5 rounded-3xl'>
            <h3 className='font-bold text-2xl text-white mb-5'>Movies List</h3>
            <div className='w-full flex flex-col xs:flex-row flex-wrap gap-y-4'>
                <MovieItem />
                <MovieItem />
                <MovieItem />
                <MovieItem />
            </div>
        </div>
    );
};

export default MoviesContainer;