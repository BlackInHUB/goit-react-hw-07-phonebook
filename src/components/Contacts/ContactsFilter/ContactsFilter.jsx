import React from "react";
import { FilterLabel, Filter } from "./ContactsFilter.styled";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "redux/filterSlice";
import { selectFilter } from "redux/selectors";

export const ContactsFilter = () => {
    const filter = useSelector(selectFilter)
    const dispatch = useDispatch()

    const handleFilterChange = (e) => {
        dispatch(setFilter(e.target.value))
    }

    return (
        <FilterLabel>Find contacts by name
        <br/>
            <Filter value={filter} onChange={handleFilterChange} />
        </FilterLabel>
    )
}
