import { useState, useMemo, ChangeEvent } from 'react';
import { Budge } from '../components/Budge';
import { GridCard } from '../components/GridCard';
import { Search } from '../components/Search';
import { usePodcasts } from '../hooks';

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

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-end items-center gap-3">
        <Budge label={podcasts.length} />
        <Search placeholder="Search & Enter..." onChange={handleSearch} value={term} />
      </div>

      <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {podcasts.map(podcast => (
          <GridCard key={podcast.id} {...podcast} />
        ))}
      </section>
    </div>
  );
};

export default Home;
