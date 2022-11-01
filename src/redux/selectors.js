export const selectContacts = ({ contacts }) => contacts.items;
export const selectFilter = ({ filter }) => filter.value;
export const selectState = ({ contacts }) => ({
  isLoading: contacts.isLoading,
  error: contacts.error,
});

export const selectFilteredContacts = ({ filter, contacts }) => {
  const filterValue = filter.value;
  const contactItems = contacts.items;

  if (filterValue === '') {
    return contactItems;
  }

  return contactItems.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );
};
