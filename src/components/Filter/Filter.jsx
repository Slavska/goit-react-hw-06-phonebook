import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/slice';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatcher = useDispatch();

  const onChange = e => {
    dispatcher(setFilter(e.target.value));
  };

  return (
    <form className={css.form}>
      <label className={css.label}>
        Find contacts by name
        <input
          className={css.input}
          type="text"
          name="name"
          onChange={onChange}
          pattern="[A-Za-zА-Яа-яЁё]{2,20}"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
    </form>
  );
};
