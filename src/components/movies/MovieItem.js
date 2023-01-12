import classes from './MovieItem.module.css';

const MovieItem = props => {
    return (
        <div className='relative w-[170px] xs:w-1/2 md:w-1/3 lg:w-1/4 h-52 xs:h-64 px-2'>
            <div className='w-full h-full overflow-hidden rounded-3xl flex flex-col'>
                <div
                    className={`${classes.glassEffect} text-sm font-bold w-[80%] h-1/3 px-2 flex justify-between items-center absolute z-50`}>
                    <div className='w-1/2'>
                        <p>{props.name}</p>
                    </div>
                    <div className='text-left'>
                        <span>
                            {props.IMDB}
                        </span>
                    </div>
                </div>
                <div className='w-full h-full'>
                    <img
                        className='w-full h-full'
                        alt="Movie's Poster"
                        src={props.poster}
                    />
                </div>
            </div>
        </div>
    );
};

export default MovieItem;