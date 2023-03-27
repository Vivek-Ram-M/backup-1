import { Field, Formik, Form } from "formik";
import React from "react";
import * as Yup from "yup";
const myCustomComponent = ({ field, form: { touched, errors }, ...props }) => {
  console.log(props, field, errors[field.name], errors, field.name);
  return (
    <>
      <label htmlFor={field.name || props.id}>{props.label} </label>
      <input name={field.name} {...props} />
      <span className="text-danger">{errors[field.name]}</span>
    </>
  );
};
const FormThree = () => {
  return (
    
    <Formik
      initialValues={{ firstname: "" }}
      validationSchema={Yup.object({
        firstname: Yup.string().required("This is mandatory"),
        lastname: Yup.string().required("This is mandatory"),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <div className="container">
        <div className="col-md-12 mt-5">

          <Form>
            <label htmlFor="firstname">First name</label>
            <input className="form-control" type="text" name="lastname" />
            <Field
              component={myCustomComponent}
              label="mylabel"
              name="lastname"
              id="dummyid"
              className="form-control"
            />
            <hr className="mb-4" />
            <button className="btn btn-primary btn-lg btn-block" type="submit">
              Submit
            </button>
          </Form>
        </div>
      </div>
    </Formik>
  );
};

export default FormThree;
