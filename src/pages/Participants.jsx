import List from './../components/List';
import Empty from './../components/Empty';
import Loader from '../components/Loader';

const Participants = () => {
  return (
    <>
      <div className="row">
        <div className="col">
          <List participants={[]} />
          <Empty notes={[]} />
          {false && <Loader />}
        </div>
      </div>
    </>
  );
};

export default Participants;
