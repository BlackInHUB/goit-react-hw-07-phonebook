export const selectContacts = ({ contacts }) => contacts.items;
export const selectFilter = ({ filter }) => filter.value;

export const selectFilteredContacts = ({ filter, contacts }) => {
  const filterValue = filter.value;
  const contactItems = contacts.items;

  if (filter === '') {
    return contacts;
  }

  return contactItems.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );
};
