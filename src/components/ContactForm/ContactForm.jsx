import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { addContact } from "../../redux/store";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
const UserScheme = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short! Not less than 3 symbols.")
    .max(50, "Too many! No more than 50 symbols.")
    .required("This field is required!"),
  number: Yup.string()
    .matches(/^\d+$/, "Must be a valid number.")
    .min(3, "Too short! Not less than 3 symbols.")
    .max(50, "Too many! No more than 50 symbols.")
    .required(),
});
export default function ContactForm() {
  const id = useId();
  const dispatch = useDispatch();
  const handleAddContact = (contactInfo) => {
    dispatch(addContact({ id: nanoid(), ...contactInfo }));
  };
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={UserScheme}
      onSubmit={(values, actions) => {
        handleAddContact(values);
        actions.resetForm();
      }}
    >
      <Form className={css.form}>
        <label htmlFor={`${id}-name`}>Name</label>
        <Field type="text" id={`${id}-name`} name="name" />
        <ErrorMessage name="name" component="span" className={css.errText} />
        <label htmlFor={`${id}-number`}>Number</label>
        <Field type="text" id={`${id}-number`} name="number" />
        <ErrorMessage name="number" component="span" className={css.errText} />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
