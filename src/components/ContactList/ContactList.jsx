import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList() {
  const phoneBook = useSelector((state) => state.contacts);

  return (
    <ul>
      {phoneBook.map((contact) => {
        return (
          <li className={css.item} key={contact.id}>
            <Contact contacts={contact} />
          </li>
        );
      })}
    </ul>
  );
}
