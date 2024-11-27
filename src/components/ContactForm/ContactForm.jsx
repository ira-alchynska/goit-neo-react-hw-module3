import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';

const validationSchema = Yup.object({
    name: Yup.string().min(3).max(50).required('Required'),
    number: Yup.string().min(3).max(50).required('Required'),
});

const ContactForm = ({ onAddContact }) => {
    const initialValues = { name: '', number: '' };

    const handleSubmit = (values, { resetForm }) => {
        const newContact = { id: nanoid(), ...values };
        onAddContact(newContact);
        resetForm();
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form className={styles.form}>
                <label>
                    Name
                    <Field name="name" type="text" />
                    <ErrorMessage name="name" component="div" />
                </label>
                <label>
                    Number
                    <Field name="number" type="text" />
                    <ErrorMessage name="number" component="div" />
                </label>
                <button type="submit">Add contact</button>
            </Form>
        </Formik>
    );
};

export default ContactForm;
