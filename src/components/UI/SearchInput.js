import React from "react";

const SearchInput = props => {
    return (
        <div className='flex flex-col items-start w-full xs:w-1/2 md:w-1/3 lg:w-1/4 px-2'>
            <label htmlFor={props.id} className='text-xl text-white ml-1 mb-1'>
                {props.label}
            </label>
            <input
                placeholder={props.placeHolder}
                type={props.type}

                onChange={props.onChange}
                className='w-full rounded-3xl pl-3 bg-gray-100 text-black h-12'
            />
        </div>
    );

}

export default SearchInput;