import { selectContacts, selectFilter } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/slice';
import css from './ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const setFilter = useSelector(selectFilter);

  const filtered = setFilter.toLocaleLowerCase();
  const contactsFilter = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filtered)
  );

  return (
    <ul className={css.list}>
      {contactsFilter.map(({ id, name, number }) => (
        <li key={id} className={css.item}>
          {name}: {number}
          <button
            className={css.btn_delete}
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
