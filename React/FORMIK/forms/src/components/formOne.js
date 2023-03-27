import { Formik, useField } from "formik";
import * as Yup from "yup";

const MyTextField = ({ label, ...props }) => {
  // console.log(props);
  const [field, meta, helpers] = useField(props);
  console.log(field, meta, helpers);
  return (
    <>
      <label>
        {label}
        <input {...field} {...props} />
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const FormOne = () => {
  return (
    <Formik
      initialValues={{
        firstname: "",
        lastname: "",
        email: "",
        country: "",
        state: "",
        zip: "",
        dummyname: "",
      }}
      // validate={(values) => {
      //   console.log(values);
      //   const errors = {};
      //   if (values.firstname.trim().length <= 0) {
      //     errors.firstname = "First name is required";
      //   }
      //   if (values.lastname.trim().length <= 0) {
      //     errors.lastname = "First name is required";
      //   }
      //   return errors;
      // }}
      validationSchema={Yup.object({
        firstname: Yup.string().required("first name is required "),
        email: Yup.string().required().email("VAlid email"),
        dummyname: Yup.string().required(),
      })}
      onSubmit={(values) => {
        console.log(values, "FOrm is submitted");
      }}
    >
      {({
        values,
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        touched,
      }) => {
        return (
          <div className="container">
            <div className="col-md-12 mt-5">
              <form onSubmit={handleSubmit}>
                <h4 className="mb-3">Personal information</h4>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <MyTextField
                      name="dummyname"
                      type="text"
                      label="dummy label"
                      id="dummyname"
                    />
                    <label htmlFor="firstname">First name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstname"
                      name="firstname"
                      value={values.firstname}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    {/* {} */}
                    {errors.firstname && touched.firstname && (
                      <p style={{ color: "red" }}>{errors.firstname}</p>
                    )}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="lastname">Last name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastname"
                      name="lastname"
                      onBlur={handleBlur}
                      value={values.lastname}
                      onChange={handleChange}
                    />
                    {errors.lastname && touched.lastname && (
                      <p style={{ color: "red" }}>{errors.lastname}</p>
                    )}
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email && (
                    <p style={{ color: "red" }}>{errors.email}</p>
                  )}
                </div>

                <div className="row">
                  <div className="col-md-5 mb-3">
                    <label htmlFor="country">Country</label>
                    <select
                      className="custom-select d-block w-100"
                      id="country"
                      name="country"
                      value={values.country}
                      onChange={handleChange}
                    >
                      <option value="">Choose...</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="NL">Netherlands</option>
                    </select>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="state">State</label>
                    <select
                      className="custom-select d-block w-100"
                      id="state"
                      name="state"
                      value={values.state}
                      onChange={handleChange}
                    >
                      <option value="">Choose...</option>
                      <option value="california">California</option>
                      <option value="toronto">Toronto</option>
                      <option value="utrech">Utrech</option>
                    </select>
                  </div>
                  <div className="col-md-3 mb-3">
                    <label htmlFor="zip">Zip</label>
                    <input
                      type="text"
                      className="form-control"
                      id="zip"
                      name="zip"
                      value={values.zip}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <hr className="mb-4" />
                <button
                  className="btn btn-primary btn-lg btn-block"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

export default FormOne;
