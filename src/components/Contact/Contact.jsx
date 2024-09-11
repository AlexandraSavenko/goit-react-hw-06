import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { IoMdPerson } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { deleteContact } from "../../redux/store";

export default function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.wrap}>
      <div>
        <div className={css.textPlusIcon}>
          <IoMdPerson />
          <p>{name}</p>
        </div>
        <div className={css.textPlusIcon}>
          <FaPhoneAlt className={css.noMargin} />
          <p className={css.noMargin}>{number}</p>
        </div>
      </div>

      <button className={css.button} type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
