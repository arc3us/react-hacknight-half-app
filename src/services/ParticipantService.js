import axios from 'axios';

const client = axios.create({
  baseURL: `http://localhost:3000/participants/`,
});

const getAll = async () => {
  const response = await client.get();
  const reversedData = response.data.reverse();
  return reversedData;
};

const register = async participant => {
  const options = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const response = await client.post('', participant, options);
  return response.data;
};

const NoteService = {
  getAll,
  register,
};

export default NoteService;
