import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Filter from 'components/Filter';
import { selectVisibleContacts, selectStatus } from 'redux/selectors';
import { getContactsThunk } from 'redux/contacts.thunk';

import Loader from 'components/Loader/Loader';

import DeleteContact from 'components/DeleteContact';
import EditContact from 'components/EditContact';
import { STATUS } from 'constants/constants';

import {
  ButtonGroup,
  IconButton,
  Box,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

import { DeleteIcon, EditIcon } from '@chakra-ui/icons';

const ContactsList = () => {
  const [deleteContactId, setDeleteContactId] = useState('');
  const [refreshContactId, setRefreshContactId] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const status = useSelector(selectStatus);
  const visibleContacts = useSelector(selectVisibleContacts);

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);
  const resetId = ()=>{
    setDeleteContactId('');
    setRefreshContactId('');
  }
  if (status === STATUS.success) {
    return (
      <>
        <Filter />
        <Box as="ul" minW="300px" mr="auto" ml="auto">
          {visibleContacts.map(({ id, name, number }) => (
            <Box as="li" display="flex" alignItems="center" mb={2} key={id}>
              <Text fontSize="lg" fontWeight="500">
                {name[0].toUpperCase() + name.substring(1)} :{' '}
              </Text>
              <Text fontSize="lg" ml={2} mr='auto'>
                {number}
              </Text>
              <ButtonGroup  mr={3}>
                <IconButton
                  colorScheme="red"
                  aria-label="Edit contact"
                  icon={<EditIcon size="md" boxSize={4} />}
                  onClick={() => {
                    dispatch(() => {
                      setRefreshContactId(id);
                      onOpen();
                      setContactName(name);
                      setContactNumber(number);
                    });
                  }}
                />
                <IconButton
                  colorScheme="red"
                  aria-label="Delete contact"
                  icon={<DeleteIcon size="md" boxSize={4} />}
                  onClick={() => {
                    dispatch(() => {
                      setDeleteContactId(id);
                      onOpen();
                    });
                  }}
                />
              </ButtonGroup>
            </Box>
          ))}
        </Box>

        {isOpen && deleteContactId && (
          <DeleteContact
            id={deleteContactId}
            isOpen={isOpen}
            onClose={onClose}
            reset={resetId}
          />
        )}
        {isOpen && refreshContactId && (
          <EditContact
            id={refreshContactId}
            name={contactName}
            number={contactNumber}
            isOpen={isOpen}
            onClose={onClose}
            reset={resetId}
          />
        )}
      </>
    );
  }

  if (status === STATUS.error) {
    return <p>Something went wrong ...</p>;
  }
  if (status === STATUS.loading) {
    return <Loader />;
  }
};

export default ContactsList;
