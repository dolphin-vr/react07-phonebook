import { GlobalStyle } from "./GlobalStyle";
import { Layout, Title } from "./Layout";
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { MdOutlineContactPhone } from "react-icons/md";
import { Toaster } from 'react-hot-toast';
import { fetchContacts } from "redux/operations";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectError, selectIsLoading } from "redux/selectors";


export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

    return (
      <Layout>
        <Title><MdOutlineContactPhone size={48} /> Phonebook</Title>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
        <GlobalStyle />
        <Toaster />
      </Layout>
    );
}

