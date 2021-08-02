import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

// import { Link } from "react-router-dom";

const validationSchema = yup.object({
  name: yup
    .string("Enter your Name")
    .min(3, "Name should be of minimum 3 character in length")
    .max(20, "Name should be of maximum 20 character in length")
    .required("Name is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const EditProfile = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="container-fluid" >
      <div className="row justify-content-center p-3">
        <form onSubmit={formik.handleSubmit} className="col-sm-12 col-md-6">
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Update Your Name"
            className="pb-3"
            // value={formik.values.name}
            // onChange={formik.handleChange}
            // error={formik.touched.name && Boolean(formik.errors.name)}
            // helperText={formik.touched.name && formik.errors.name}
          />
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Update Your Email"
            className="pb-3"
            // value={formik.values.email}
            // onChange={formik.handleChange}
            // error={formik.touched.email && Boolean(formik.errors.email)}
            // helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            fullWidth
            id="city"
            name="city"
            label="Update Your City"
            type="text"
            className="pb-3"
            // value={formik.values.city}
            // onChange={formik.handleChange}
            // error={formik.touched.city && Boolean(formik.errors.city)}
            // helperText={formik.touched.city && formik.errors.city}
          />
          <TextField
            fullWidth
            id="state"
            name="state"
            label="Update Your state"
            type="text"
            className="pb-3"
            // value={formik.values.state}
            // onChange={formik.handleChange}
            // error={formik.touched.state && Boolean(formik.errors.state)}
            // helperText={formik.touched.state && formik.errors.state}
          />
          <TextField
            fullWidth
            id="country"
            name="country"
            label="Update Your country"
            type="text"
            className="pb-3"
            // value={formik.values.country}
            // onChange={formik.handleChange}
            // error={formik.touched.country && Boolean(formik.errors.country)}
            // helperText={formik.touched.country && formik.errors.country}
          />
          <TextField
            fullWidth
            id="background"
            name="background"
            label="Update Your Background Details"
            type="text"
            className="pb-3"
            multiline
            rows={3}
          />
          <TextField
            fullWidth
            id="startupidea"
            name="startupidea"
            label="Update Your Startup Idea Details"
            type="text"
            className="pb-3 mb-2"
            multiline
            rows={3}
          />

          <label htmlFor="pimghead" className="pb-2">
            Update Your Image
          </label>
          <TextField
            fullWidth
            id="userimage"
            name="userimage"
            type="file"
            className="pb-3 mb-2"
            // value={formik.values.password}
            // onChange={formik.handleChange}
            // error={formik.touched.password && Boolean(formik.errors.password)}
            // helperText={formik.touched.password && formik.errors.password}
          />

          <label htmlFor="theme" style={{fontWeight: 'bold'}}>Update Your Themes</label>
          <br />
          <FormControlLabel
            control={
              <Checkbox
                // checked={state.checkedB}
                // onChange={handleChange}
                name="checkedB"
                color="primary"
              />
            }
            label="Fintech"
          />
          <FormControlLabel
            control={
              <Checkbox
                // checked={state.checkedB}
                // onChange={handleChange}
                name="checkedB"
                color="primary"
              />
            }
            label="Healthcare"
          />

          <br />

          <label htmlFor="skills" className="mt-2" style={{fontWeight: 'bold'}}>
            Update Your Skills
          </label>
          <br />
          <FormControlLabel
            control={
              <Checkbox
                // checked={state.checkedB}
                // onChange={handleChange}
                name="checkedB"
                color="primary"
              />
            }
            label="Software Engineering"
          />
          <FormControlLabel
            control={
              <Checkbox
                // checked={state.checkedB}
                // onChange={handleChange}
                name="checkedB"
                color="primary"
              />
            }
            label="Growth"
          />
          <FormControlLabel
            control={
              <Checkbox
                // checked={state.checkedB}
                // onChange={handleChange}
                name="checkedB"
                color="primary"
              />
            }
            label="Product"
          />
          <FormControlLabel
            control={
              <Checkbox
                // checked={state.checkedB}
                // onChange={handleChange}
                name="checkedB"
                color="primary"
              />
            }
            label="Analytics"
          />
          <FormControlLabel
            control={
              <Checkbox
                // checked={state.checkedB}
                // onChange={handleChange}
                name="checkedB"
                color="primary"
              />
            }
            label="Operations"
          />
          <br />

          <label htmlFor="expertise" className="mt-2 " style={{fontWeight: 'bold'}}>
            Update Your Expertises
          </label>
          <br />
          <FormControlLabel
            control={
              <Checkbox
                // checked={state.checkedB}
                // onChange={handleChange}
                name="checkedB"
                color="primary"
              />
            }
            label="Blockchain"
          />
          <FormControlLabel
            control={
              <Checkbox
                // checked={state.checkedB}
                // onChange={handleChange}
                name="checkedB"
                color="primary"
              />
            }
            label="Ecommerce"
          />
          <FormControlLabel
            control={
              <Checkbox
                // checked={state.checkedB}
                // onChange={handleChange}
                name="checkedB"
                color="primary"
              />
            }
            label="Product"
          />
          <FormControlLabel
            control={
              <Checkbox
                // checked={state.checkedB}
                // onChange={handleChange}
                name="checkedB"
                color="primary"
              />
            }
            label="Analytics"
          />
          <FormControlLabel
            control={
              <Checkbox
                // checked={state.checkedB}
                // onChange={handleChange}
                name="checkedB"
                color="primary"
              />
            }
            label="Operations"
          />

          <Button
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
            className="mt-4"
          >
            Update Profile
          </Button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
