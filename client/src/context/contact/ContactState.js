import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import { 
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from "../types";


const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: "John Doe",
                email: "john_doe@gmail.com",
                phone: "555-555-5555",
                type: "personal"
            },
            {
                id: 2,
                name: "Mary Jane",
                email: "mary_jane@gmail.com",
                phone: "444-444-4444",
                type: "personal"
            },
            {
                id: 3,
                name: "Ola Olusola",
                email: "ola_olu@gmail.com",
                phone: "111-111-1111",
                type: "personal"
            }
        ]
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);

    // Add Contact

    // Delete Contact

    // Set Current Contact

    // Clear Current Contact

    // Update Contact

    // Filter Contacts

    // Clear Filter

    return(
        <ContactContext.Provider value={{
            contacts: state.contacts

        }}>
            {props.children}
        </ContactContext.Provider>
    );
};

export default ContactState;