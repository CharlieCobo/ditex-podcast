import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { DetailCard } from '../../components/DetailCard';
import { Table } from '../../components/Table';
import { useEpisodes } from '../../hooks/useEpisodes';

const PodcastDetail = () => {
  const { podcastId } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  const handleNavigate = (episodeId: string) => navigate(`/podcast/${podcastId as string}/episode/${episodeId}`);

  const { count, data } = useEpisodes({ id: podcastId ?? '' });

  return (
    <div className="flex flex-row gap-24 w-full">
      <DetailCard {...state} />

      <section className="flex flex-1 flex-col gap-5">
        <div className="bg-white px-5 py-3 border rounded shadow">
          <h1 className="font-bold text-3xl">Episodes: {count}</h1>
        </div>
        <div className="bg-white flex-1 px-5 py-3 border rounded shadow">
          <Table data={data} handleNavigation={handleNavigate} />
        </div>
      </section>
    </div>
  );
};

export default PodcastDetail;
