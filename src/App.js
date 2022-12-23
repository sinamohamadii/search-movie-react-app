import './App.css';

import MoviesContainer from './components/movies/MoviesContainer';
import SearchBox from './components/SearchBox';
import FilterInput from './components/FilterInput';
import ContextProvider from './store/ContextProvider';

function App() {
  return (
    <div className='w-full h-screen overflow-y-auto bg-[#095971] px-10 xs:px-28 py-10 flex flex-col gap-y-10'>
      <ContextProvider>
        <SearchBox />
        <FilterInput />
        <MoviesContainer />
      </ContextProvider>
    </div>
  );
}

export default App;
