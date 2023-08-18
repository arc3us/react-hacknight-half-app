import PropTypes from "prop-types";
import Item from "./Item";
import NoteService from "../services/ParticipantService";
import { useEffect } from "react";

const List = ({ participants, getAllParticipants, loading }) => {
  useEffect(() => {
    const getParticipants = async () => {
      try {
        loading(true);

        const data = await NoteService.getAll();
        getAllParticipants(data);
      } catch (error) {
        window.alert("Something went wrong");
      } finally {
        loading(false);
      }
    };

    getParticipants();
  }, []);

  return (
    <>
      {participants &&
        participants.map((participant) => (
          <Item participant={participant} key={participant.id}></Item>
        ))}
    </>
  );
};

export default List;

List.propTypes = {
  participants: PropTypes.array,
  getAllParticipants: PropTypes.func,
  loading: PropTypes.func,
};
