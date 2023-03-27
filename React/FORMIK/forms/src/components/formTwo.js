import { useFormik } from "formik";
import * as Yup from "yup";

const FormTwo = () => {
  const formik = useFormik({
    initialValues: {
      firstname: "",
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required().min(5, "Min 5").max(10, "max 10"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="container">
      <div className="col-md-12 mt-5">
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="firstname">First name</label>
          <input
            className="form-control"
            type="text"
            name="firstname"
            value={formik.values.firstname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.firstname && formik.touched && (
            <p style={{ color: "red" }}>{formik.errors.firstname}</p>
          )}

          <hr className="mb-4" />
          <button className="btn btn-primary btn-lg btn-block" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormTwo;
