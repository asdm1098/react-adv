import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { MyCheckbox, MyTextInput, MySelect } from '../components'

import '../styles/styles.css';

export const FormikAbstraction = () => {

    return (
        <div>
            <h1>Formik Abstraction</h1>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: ''
                }}
                onSubmit={ ( values ) => {
                    console.log(values);
                }}

                validationSchema={Yup.object({
                    firstName: Yup.string()
                                    .max(15, 'Debe tener 15 caracteres o menos')
                                    .required('Requerido'),
                    lastName: Yup.string()
                                    .max(15, 'Debe tener 15 caracteres o menos')
                                    .required('Requerido'),
                    email: Yup.string()
                                    .email('Email no tiene un formato valido')
                                    .required('Requerido'),
                    terms: Yup.boolean().oneOf([true], 'Debe aceptar las condiciones'),
                    jobType: Yup.string()
                                    .notOneOf([ 'it-jr' ], 'Esta opción no es permitida')
                                    .required('Requerido'),
                    })
                }>
                    {
                        (formik) => (
                            <Form noValidate>

                                <MyTextInput 
                                    label="First Name" 
                                    name="firstName" 
                                    placeholder='Stiven'    
                                />

                                <MyTextInput 
                                    label="Last Name" 
                                    name="lastName" 
                                    placeholder='Diaz'    
                                />

                                <MyTextInput 
                                    label="Email" 
                                    name="email" 
                                    placeholder='asdm1098@gmail.com'    
                                    type='email'
                                />

                                <MySelect name="jobType" as="select" label='Job Type' >
                                    <option value=""> Pick something </option>
                                    <option value="developer"> Developer </option>
                                    <option value="designer"> Designer </option>
                                    <option value="it-senior"> IT Senior </option>
                                    <option value="it-jr"> IT Jr. </option>
                                </MySelect>

                                <MyCheckbox label='Termns & Conditions' name='terms' />

                                <button type='submit'>Submit</button>
                            </Form>
                        )
                    }
            </Formik>

        </div>
  )
}
