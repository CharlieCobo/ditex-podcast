import { useState, useMemo, ChangeEvent } from 'react';
import Budge from '../components/Budge';
import GridCard from '../components/GridCard';
import Search from '../components/Search';
import { usePodcasts } from '../hooks';
import { Main, Navbar } from '../layout';
import { CloseIcon } from '../components/Icons';

const Home = () => {
  const [term, setTerm] = useState<string>('');
  const { data } = usePodcasts();

  const podcasts = useMemo(() => {
    if (term.trim() === '') return data;
    return data.filter(
      podcast => podcast.name.toLocaleLowerCase().includes(term) || podcast.author.toLowerCase().includes(term)
    );
  }, [data, term]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => setTerm(e.target.value.toLowerCase());

  const handleCleanSearch = () => setTerm('');

  return (
    <>
      <Navbar />
      <Main>
        <div className="flex flex-col gap-4 w-full">
          <div className="flex justify-end items-center gap-3">
            <Budge label={podcasts.length} />
            <Search
              placeholder="Search & Enter..."
              onChange={handleSearch}
              value={term}
              renderIcon={() => (
                <button
                  className="rounded-full cursor-pointer hover:bg-background p-0 ml-2"
                  onClick={handleCleanSearch}
                >
                  <CloseIcon size={20} />
                </button>
              )}
            />
          </div>

          <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {podcasts.map(podcast => (
              <GridCard key={podcast.id} {...podcast} />
            ))}
          </section>
        </div>
      </Main>
    </>
  );
};

export default Home;
