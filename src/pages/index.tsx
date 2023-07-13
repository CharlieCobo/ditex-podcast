import { useState, useMemo, ChangeEvent } from 'react';
import { Budge } from '../components/Budge';
import { GridCard } from '../components/GridCard';
import { Search } from '../components/Search';
import { usePodcast } from '../hooks/usePodcast';

const Home = () => {
  const [term, setTerm] = useState<string>('');
  const { data } = usePodcast();

  const podcasts = useMemo(() => {
    if (term.trim() === '') return data;
    return data.filter(
      podcast => podcast.name.toLocaleLowerCase().includes(term) || podcast.author.toLowerCase().includes(term)
    );
  }, [data, term]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => setTerm(e.target.value.toLowerCase());

  return (
    <>
      <div className="flex justify-end items-center gap-3">
        <Budge label={podcasts.length} />
        <Search placeholder="Search & Enter..." onChange={handleSearch} value={term} />
      </div>

      <section className="mt-4 grid grid-cols-4 gap-6">
        {podcasts.map(podcast => (
          <GridCard key={podcast.id} {...podcast} />
        ))}
      </section>
    </>
  );
};

export default Home;
