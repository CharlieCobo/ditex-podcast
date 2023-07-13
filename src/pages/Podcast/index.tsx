import { useParams } from 'react-router-dom';

const PodcastDetail = () => {
  const { podcastId } = useParams();
  return <div>Podcast ID: {podcastId}</div>;
};

export default PodcastDetail;
