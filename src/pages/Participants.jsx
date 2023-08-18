import List from "./../components/List";
import Empty from "./../components/Empty";
import Loader from "../components/Loader";
import { useState } from "react";

const Participants = () => {
  const [participants, setParticipants] = useState();
  const [load, setLoad] = useState();

  const getAllParticipants = (participants) => {
    setParticipants(participants);
  };

  const loading = (state) => {
    setLoad(state);
  };

  return (
    <>
      <div className="row">
        <div className="col">
          <List
            participants={participants}
            getAllParticipants={getAllParticipants}
            loading={loading}
          />
          <Empty notes={participants} />
          {load && <Loader />}
        </div>
      </div>
    </>
  );
};

export default Participants;
