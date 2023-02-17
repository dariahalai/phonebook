import Form from 'components/Form';
import ContactsList from 'components/ContactsList';
import Filter from 'components/Filter';
import { Section,Title } from 'components/App.styled';

const ContactsPage = () =>{
    return(
        <>
        <Section>
          <Form />
        </Section>
        <Section>
          <Title>Contacts</Title>
          <Filter />
          <ContactsList />
        </Section>
      </>
    )
}

export default ContactsPage;