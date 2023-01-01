import './App.css';

import MoviesContainer from './components/movies/MoviesContainer';
import SearchInputsContainer from './components/searchForm/SearchInputsContainer';
import FilterInput from './components/searchForm/FilterInput';
import ContextProvider from './store/ContextProvider';

function App() {
  return (
    <div className='w-full md:max-w-[1000px] mx-auto flex flex-col justify-start gap-y-10 p-8 xs:p-16'>
      <ContextProvider>
        <SearchInputsContainer />
        <FilterInput />
        <MoviesContainer />
      </ContextProvider>
    </div>
  );
}

export default App;
