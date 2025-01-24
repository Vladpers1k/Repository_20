import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const MyForm = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Ім'я є обов'язковим").min(2, "Ім'я має містити щонайменше 2 символи"),
    email: Yup.string().email('Невірний формат електронної пошти').required("Електронна пошта є обов'язковою"),
    password: Yup.string().required("Пароль є обов'язковим").min(6, 'Пароль має містити щонайменше 6 символів')
  })

  const initialValues = {
    name: '',
    email: '',
    password: ''
  }

  const handleSubmit = (values) => {
    console.log('Дані форми:', values)
    alert('Форма успішно відправлена!')
  }

  return (
    <div className="form-container">
      <h2 className="form-title">Реєстраційна форма</h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form className="form">
            <div className="form-group">
              <label htmlFor="name">Ім'я:</label>
              <Field type="text" name="name" placeholder="Введіть ім'я" id="name" />
              <ErrorMessage name="name" component="div" className="error-message" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Електронна пошта:</label>
              <Field type="email" name="email" placeholder="Введіть email" id="email" />
              <ErrorMessage name="email" component="div" className="error-message" />
            </div>

            <div className="form-group">
              <label htmlFor="password">Пароль:</label>
              <Field type="password" name="password" placeholder="Введіть пароль" id="password" />
              <ErrorMessage name="password" component="div" className="error-message" />
            </div>

            <button type="submit" disabled={isSubmitting} className="submit-button">
              Відправити
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default MyForm
