import { useContext, useState } from 'react';

import Button from '../UI/Button';
import SearchInput from '../UI/SearchInput';
import MoviesContext from '../../store/context';

const SearchBox = () => {
    const moviesCTX = useContext(MoviesContext);

    const [inputValue, setInputvalue] = useState();

    const changeInputHnadler = e => {
        setInputvalue(e.target.value);
    };

    const submitHandler = e => {
        e.preventDefault();

        moviesCTX.search(inputValue);
    };

    return (
        <form onSubmit={submitHandler} className='flex flex-col gap-y-5 items-center justify-start xs:flex-row flex-wrap px-18'>
            <SearchInput value={inputValue} onChange={changeInputHnadler} id='name' type='text' placeHolder={`Movie's Name`} />
            <Button disabled={inputValue ? true : false} type='submit'>
                Search
            </Button>
        </form>
    );
};

export default SearchBox;