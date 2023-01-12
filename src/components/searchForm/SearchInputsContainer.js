import { useRef, useContext } from 'react';

import Button from '../UI/Button';
import SearchInput from '../UI/SearchInput';
import MoviesContext from '../../store/context';

const SearchBox = () => {
    const moviesCTX = useContext(MoviesContext);

    const inputValue = useRef();

    const submitHandler = e => {
        e.preventDefault();

        moviesCTX.search(inputValue.current.value);
    };

    return (
        <form onSubmit={submitHandler} className='flex flex-col gap-y-5 items-center justify-start xs:flex-row flex-wrap px-18'>
            <SearchInput ref={inputValue} id='name' type='text' placeHolder={`Movie's Name`} />
            <Button type='submit'>
                Search
            </Button>
        </form>
    );
};

export default SearchBox;