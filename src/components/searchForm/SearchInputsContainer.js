import Button from '../UI/Button';
import SearchInput from '../UI/SearchInput';

const SearchBox = () => {
    return (
        <div className='flex flex-col gap-y-5 items-center justify-start xs:flex-row flex-wrap px-18'>
            {/* <div className='absolute top-[14px] right-3'>
                <svg width='25' height='25' fill='currentColor' className='bi bi-search text-black' viewBox='0 0 16 16'>
                    <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
                </svg>
            </div> */}
            <SearchInput id='name' type='text' placeHolder={`Movie's Name`} />
            <SearchInput id='name' type='text' placeHolder={`Movie's Name`} />
            <Button type='button'>
                Search
            </Button>
        </div>
    );
};

export default SearchBox;