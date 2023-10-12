import { GlobalStyle } from "./GlobalStyle";
import { ErrMsg, Layout, Title } from "./Layout";
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { MdOutlineContactPhone } from "react-icons/md";
import { Toaster } from 'react-hot-toast';
import { fetchContacts } from "redux/operations";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectError, selectIsLoading } from "redux/selectors";
import { Loader } from "./Loader/Loader";


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
         {isLoading && <Loader />}
        <ContactList />
         {error && <ErrMsg>Sorry, something went wrong. Try reload page</ErrMsg>}
        <GlobalStyle />
        <Toaster />
      </Layout>
    );
}

