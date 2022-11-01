import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from "redux/selectors";
import { addContact } from "redux/operations";
import { Form, FormLabel, FormInput, SubmitBtn } from "./ContactForm.styled";

export default function ContactForm() {
    const contacts = useSelector(selectContacts)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.currentTarget;

        const newContact = {
            name: form.elements.name.value,
            phone: form.elements.number.value
        }
        
        for (let contact of contacts) {
            if (contact.name === newContact.name) {
                return alert(`Contact ${newContact.name} is already in your phonebook!`)
            }
        }
        
        dispatch(addContact(newContact))
        form.reset()
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormLabel htmlFor="name">Name
                <br />
                <FormInput
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </FormLabel>
            <FormLabel htmlFor="number">Number
                <br />
                <FormInput
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </FormLabel>
            <SubmitBtn type="submit">Add contact</SubmitBtn>
        </Form>
    )
}