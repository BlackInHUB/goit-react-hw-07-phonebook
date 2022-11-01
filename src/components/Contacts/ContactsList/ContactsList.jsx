import React from "react";
import { List, ListItem, ListItemText, DeleteBtn } from "./ContactsList.styled";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "redux/operations";
import { selectContacts } from "redux/selectors";

export const ContactsList = () => {
    const contacts = useSelector(selectContacts)
    const dispatch = useDispatch()
    // // const filter = useSelector(getFilter)

    const onDeleteBtn = (e) => {
        dispatch(deleteContact(e.target.id))
    }

    // // const contactsToRender = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))

    return (
        <List>
        {contacts.map(({ name, phone, id }) => (<ListItem key={id}>
            <ListItemText>{name}: {phone}</ListItemText>
            <DeleteBtn type="button" id={id} onClick={onDeleteBtn}>Delete</DeleteBtn>
        </ListItem>))}
        </List>
    )
}