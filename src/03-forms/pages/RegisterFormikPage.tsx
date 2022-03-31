import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { MyTextInput } from '../components/MyTextInput';
import '../styles/styles.css';


export const RegisterFormikPage = () => {

    return (
        <div>
            <h1>Register Formik Page</h1>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2: '',
                }}
                onSubmit={ ( values ) => {
                    console.log(values);
                }}

                validationSchema={Yup.object({
                    name: Yup.string()
                                    .min(2, 'Debe tener minimo 2 caracteres')
                                    .max(15, 'Debe tener 15 caracteres o menos')
                                    .required('Requerido'),
                    email: Yup.string()
                                    .email('Email no tiene un formato valido')
                                    .required('Requerido'),
                    password1: Yup.string()
                                    .min(6, 'Debe tener minimo 6 caracteres')
                                    .required('Requerido'),
                    password2: Yup.string()
                                    .oneOf([ Yup.ref('password1')], 'Las contraseñas no son iguales')
                                    .required('Requerido')
                })}
            >
                {
                    ({handleReset})=>(

                        <Form noValidate >
                            <MyTextInput
                                // label='name'
                                placeholder="name"
                                name='name'
                            />
                            <MyTextInput 
                                    // label="Email" 
                                    name="email" 
                                    placeholder='email'    
                                    type='email'
                            />
                            <MyTextInput
                                // label='password'
                                placeholder="password"
                                name='password1'
                                type='password'
                            />
                            <MyTextInput
                                // label='password'
                                placeholder="Repeat password"
                                name='password2'
                                type='password'
                            />

                            <button type="submit"> Create </button>
                            <button type="submit" onClick={ handleReset }> Reset form </button>

                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}
