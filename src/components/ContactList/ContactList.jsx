import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
export default function ContactList({ contArr, onDelete }) {
  const phoneBook = useSelector((state) => state.number);

  return (
    <ul>
      {phoneBook.map((contact) => {
        return (
          <li className={css.item} key={contact.id}>
            <Contact contact={contact} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
}
