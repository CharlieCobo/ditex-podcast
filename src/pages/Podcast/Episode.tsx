import { useLocation, useParams } from 'react-router-dom';
import { DetailCard } from '../../components/DetailCard';
import { useEpisodes, usePodcasts } from '../../hooks';
import { Main, Navbar } from '../../layout';

const Episode = () => {
  const { podcastId, episodeId } = useParams();
  const { state } = useLocation();

  const { data: episodes, loading: episodeLoading } = useEpisodes({ id: podcastId ?? '' });
  const { data: podcasts, loading: podcastLoading } = usePodcasts();

  let podcast = state?.podcast;
  let episode = state?.episode;

  if (!podcast || !episode) {
    podcast = podcasts.find(podcast => podcast.id === podcastId);
    episode = episodes.find(episode => episode.id === episodeId);
  }

  const emptyData = [!podcast, !episode].some(data => data === true);
  const isLoading = [episodeLoading, podcastLoading].some(loading => loading === true);

  return (
    <>
      <Navbar loading={isLoading} />
      <Main>
        <div className="flex flex-row gap-24 w-full">
          {(!podcast || !episode) && <></>}
          {emptyData ? (
            <></>
          ) : (
            <>
              <DetailCard {...podcast} clickeable />

              <section className="flex flex-1 flex-col gap-5 bg-white px-5 py-3 border rounded shadow">
                <h1 className="text-3xl font-bold">{episode.name}</h1>
                <p>{episode.description}</p>
                <audio controls className="w-full mt-4">
                  <source src={episode.audio} type="audio/mpeg" />
                </audio>
              </section>
            </>
          )}
        </div>
      </Main>
    </>
  );
};

export default Episode;
