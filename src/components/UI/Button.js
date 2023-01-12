const Button = props => {
    return (
        <div className='w-full xs:w-1/2 md:w-1/3 lg:w-1/4 px-2'>
            <button
                type={props.type}
                className='w-full h-12 flex items-center justify-center px-4 rounded-2xl bg-[#280972] text-white hover:bg-[#401b97]
         active:bg-[#351286] hover:shadow-lg shadow-[#280972] transition-all duration-75'>
                {props.children}
            </button>
        </div>
    );
};

export default Button;