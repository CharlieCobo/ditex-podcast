import { useLocation } from 'react-router-dom';
import { DetailCard } from '../../components/DetailCard';

const Episode = () => {
  const { state } = useLocation();

  return (
    <div className="flex flex-row gap-24 w-full">
      <DetailCard {...state?.podcast} clickeable />

      <section className="flex flex-1 flex-col gap-5 bg-white px-5 py-3 border rounded shadow">
        <h1 className="text-3xl font-bold">{state.episode.name}</h1>
        <p>{state.episode.description}</p>
        <audio controls className="w-full mt-4">
          <source src={state.episode.audio} type="audio/mpeg" />
        </audio>
      </section>
    </div>
  );
};

export default Episode;
