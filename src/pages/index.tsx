import { Budge } from '../components/Budge';
import { Search } from '../components/Search';

const Home = () => {
  return (
    <>
      <div className="flex justify-end items-center gap-3">
        <Budge label="100" />
        <Search placeholder="Search & Enter..." />
      </div>

      <section className="mt-4 grid grid-cols-4 gap-4">
        <div>
          <p>Hello</p>
        </div>
        <div>
          <p>Wolrd</p>
        </div>
        <div>
          <p>Hello</p>
        </div>
        <div>
          <p>Wolrd</p>
        </div>
        <div>
          <p>Hello</p>
        </div>
        <div>
          <p>Wolrd</p>
        </div>
        <div>
          <p>Hello</p>
        </div>
        <div>
          <p>Wolrd</p>
        </div>
      </section>
    </>
  );
};

export default Home;
