import { useParams, useLocation, useNavigate } from 'react-router-dom';
import DetailCard from '../../components/DetailCard';
import Table from '../../components/Table';
import { useEpisodes, usePodcasts } from '../../hooks';
import { PropsHandleNavigate } from '../../interfaces';
import { Main, Navbar } from '../../layout';

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

  const { count, data, loading } = useEpisodes({ id: podcastId ?? '' });
  const { data: podcasts } = usePodcasts();

  let podcast = state;

  if (!state) {
    podcast = podcasts.find(podcast => podcast.id === podcastId);
  }

  if (!podcast) return <h1>The podcast you are looking for has not been found</h1>;

  return (
    <>
      <Navbar loading={loading} />
      <Main>
        <div className="flex flex-row gap-24 w-full">
          <DetailCard {...podcast} />

          <section className="flex flex-1 flex-col gap-5">
            <div className="bg-white px-5 py-3 border rounded shadow">
              <h1 className="font-bold text-3xl">Episodes: {count}</h1>
            </div>
            <div className="bg-white flex-1 px-5 py-3 border rounded shadow">
              <Table data={data} handleNavigation={handleNavigate} />
            </div>
          </section>
        </div>
      </Main>
    </>
  );
};

export default PodcastDetail;
