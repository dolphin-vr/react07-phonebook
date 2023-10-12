import axios from "axios";

axios.defaults.baseURL = "https://651e840444a3a8aa4768816b.mockapi.io/v1/";

export const serviceGetContacts = ()=>axios.get("/contacts");
export const serviceAddContact = contact=>axios.post("/contacts", contact);
export const serviceDeleteContact = id=>axios.delete(`/contacts/${id}`);
export const serviceChangeContact = contact=>axios.put(`/contacts/${contact.id}`, {contact});