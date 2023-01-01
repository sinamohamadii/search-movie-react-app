const FilterInput = () => {
    return (
        <div className='w-full flex flex-col items-center xs:items-end max-w-[180px] px-2'>
            <div className='flex flex-col items-start w-full'>
                <label htmlFor='cars' className='text-xl text-white ml-1 mb-1'>Filter</label>
                <select name='cars' id='cars' className='w-full bg-white rounded-3xl h-6'>
                    <option value='Year'>Year</option>
                    <option value='saab'>DIMDB</option>
                    <option value='mercedes'>Mercedes</option>
                    <option value='audi'>Audi</option>
                </select>
            </div>
        </div>
    );
};

export default FilterInput;