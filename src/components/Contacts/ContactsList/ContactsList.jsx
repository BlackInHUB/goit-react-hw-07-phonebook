import React from "react";
import { List, ListItem, ListItemText, DeleteBtn } from "./ContactsList.styled";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "redux/operations";
import { selectFilteredContacts } from "redux/selectors";

export const ContactsList = () => {
    const filteredContacts = useSelector(selectFilteredContacts)
    const dispatch = useDispatch()

    const onDeleteBtn = (e) => {
        dispatch(deleteContact(e.target.id))
    }

    return (
        <List>
        {filteredContacts.map(({ name, phone, id }) => (<ListItem key={id}>
            <ListItemText>{name}: {phone}</ListItemText>
            <DeleteBtn type="button" id={id} onClick={onDeleteBtn}>Delete</DeleteBtn>
        </ListItem>))}
        </List>
    )
}