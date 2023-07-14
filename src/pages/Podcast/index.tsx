import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { DetailCard } from '../../components/DetailCard';
import { Table } from '../../components/Table';
import { useEpisodes } from '../../hooks/useEpisodes';
import { PropsHandleNavigate } from '../../interfaces';

const PodcastDetail = () => {
  const { podcastId } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  const handleNavigate = ({ episodeId, episode }: PropsHandleNavigate) =>
    navigate(`/podcast/${podcastId as string}/episode/${episodeId}`, {
      state: {
        podcast: state,
        episode,
      },
    });

  const { count, data, isLoading } = useEpisodes({ id: podcastId ?? '' });

  return (
    <div className="flex flex-row gap-24 w-full">
      <DetailCard {...state} />

      <section className="flex flex-1 flex-col gap-5">
        <div className="bg-white px-5 py-3 border rounded shadow">
          <h1 className="font-bold text-3xl">Episodes: {count}</h1>
        </div>
        <div className="bg-white flex-1 px-5 py-3 border rounded shadow">
          {isLoading ? <p>Loading...</p> : <Table data={data} handleNavigation={handleNavigate} />}
        </div>
      </section>
    </div>
  );
};

export default PodcastDetail;
