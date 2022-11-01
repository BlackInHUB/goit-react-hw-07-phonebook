import { Box } from "utils/Box";
import { MainTitle, Title } from './Contacts/Titles.styled';
import ContactForm from "./Contacts/ContactForm/ContactForm";
import { ContactsList } from './Contacts/ContactsList/ContactsList'
import {ContactsFilter} from "./Contacts/ContactsFilter/ContactsFilter";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "redux/operations";
import { selectState } from "redux/selectors";
import Loader from "./Loader/Loader";

export default function App() {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(selectState);

  useEffect(() => {
      dispatch(fetchContacts())
    }, [dispatch])
  
    return (
      <Box width="20%" m="0 auto" mt={[4]} p={[4]} border="1px solid" borderColor="teal" borderRadius={[4]}>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm />
        <Title>Contacts</Title>
        <ContactsFilter />
        {isLoading && <Loader />}
        {error && <p>Sorry, shit happens... Try again.</p>}
        {!isLoading && !error && <ContactsList />}
      </Box>
    )
};