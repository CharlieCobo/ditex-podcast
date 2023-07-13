import { Budge } from '../components/Budge';
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

      <section className="mt-4 grid grid-cols-4 gap-4">
        {data.map(podcast => (
          <div key={podcast.id}>
            <p>{podcast.author}</p>
          </div>
        ))}
      </section>
    </>
  );
};

export default Home;
