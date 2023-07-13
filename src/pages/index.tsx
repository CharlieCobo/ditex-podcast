import { Budge } from '../components/Budge';
import { GridCard } from '../components/GridCard';
import { Search } from '../components/Search';
import { usePodcast } from '../hooks/usePodcast';

const Home = () => {
  const { data } = usePodcast();
  return (
    <>
      <div className="flex justify-end items-center gap-3">
        <Budge label={data.length} />
        <Search placeholder="Search & Enter..." />
      </div>

      <section className="mt-4 grid grid-cols-4 gap-6">
        {data.map(podcast => (
          <GridCard key={podcast.id} {...podcast} />
        ))}
      </section>
    </>
  );
};

export default Home;
