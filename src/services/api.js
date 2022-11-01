import axios from 'axios';

const instanceContacts = axios.create({
  baseURL: 'https://635a764838725a1746c6ccf6.mockapi.io/api/contacts',
  params: {},
});

export const getContacts = async () => {
  const { data } = await instanceContacts.get('/');
  return data;
};

export const addContact = async newContact => {
  const { data: result } = await instanceContacts.post('/', newContact);
  return result;
};

export const deleteContact = async id => {
  await instanceContacts.delete(`/${id}`);
  return id;
};
