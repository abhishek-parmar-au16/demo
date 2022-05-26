import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { contactFormApi } from '../endPoints'
import { TextField, Grid, Button, FormGroup, FormControl, FormLabel, FormControlLabel, Radio, RadioGroup, FormHelperText, Checkbox, MenuItem, CircularProgress, Typography } from '@mui/material'
import Axios from 'axios'
import { CheckCircle } from '@mui/icons-material'

const validationSchema = yup.object({
    name: yup.string().required("Name is required!"),
    phone: yup.string().required("Phone is required").matches(/^[0-9]{10}$/, "Should be 10 digits"),
    // email: yup.string().email("Invalid Email").required("Email is required"),
    // subject: yup.string().required("Subject is required"),
    // message: yup.string(),
    // gender: yup.string().required("Gender is required"),
    // country: yup.string().required("Country is required"),
    // categories: yup.array().min(1, "Please choose a category").max(2, 'Only 2 categories allowed')
})

function FormikForm() {
    const [saveStatus, setSaveStatus] = React.useState('pending')
    const [loading, setLoading] = React.useState(false)
    const formik = useFormik({
        initialValues: {
            name: "", phone: "",
            // Fbject: "", message: "", gender: "", country: "",
            // categories: []
        },
        validate: () => { },
        validationSchema: validationSchema,
        validateOnChange: true,
        validateOnBlur: true,
        onSubmit: async (values) => {
            console.log("form is submittted with values", JSON.stringify(values))
            setLoading(true)
            // try {
            //     const res = await Axios.post(contactFormApi, { name: values.name })
            //     console.log(res.data)
            //     setSaveStatus('success')
            // } catch (err) {
            //     setSaveStatus('error')
            // }
            setLoading(false)
        }
    })
    let genderOptions = [
        { id: "male", label: "Male" },
        { id: "female", label: "Female" }
    ]

    let countryOptions = [
        { id: "india", label: "India" },
        { id: "usa", label: "USA" },
        { id: "uk", label: "UK" }
    ]
    let categoryOptions = [
        { id: "fruits", label: "Fruits" },
        { id: "vegitables", label: "Vegitables" },
        { id: "herbs", label: "Herbs" },
        { id: "dairy", label: "Dairy" },
        { id: "meat", label: "Meat" }
    ]

    let inputs = [
        { id: 'name', label: "Name", xs: 12, sm: 6, type: "input" },
        { id: "phone", label: "Phone", xs: 12, sm: 6, type: "input" },
        // { id: "email", label: "Email", xs: 12, sm: 6, type: "input" },
        // { id: "country", label: "Country", xs: 12, sm: 6, type: "dropdown", options: countryOptions },
        // { id: 'gender', label: "Gender", xs: 12, sm: 12, type: "radio", options: genderOptions },
        // // { id: "categories", label: "Categories", xs: 12, sm: 12, type: "checkbox", options: categoryOptions },
        // { id: "subject", label: "Subject", xs: 12, sm: 12, type: "input" },
        // { id: "message", label: "Message", xs: 12, sm: 12, type: "textarea" }
    ]
    console.log(formik.values)
    return <form onSubmit={(e) => {
        e.preventDefault()
        formik.handleSubmit()
    }}>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                {
                    saveStatus === 'success' ?
                        <Typography>
                            {/* <CheckCircle fontSize='large' sx={{
                                color: 'green'
                            }} /> */}
                            Message sent successfully</Typography> :
                        <Grid container spacing={2}>
                            {
                                inputs.map(item => {
                                    return <Grid item key={item.id} xs={item.xs} sm={item.sm}>
                                        <TextField
                                            name={item.id} label={item.label}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            error={formik.touched[item.id] && Boolean(formik.errors[item.id])}
                                            helperText={formik.touched[item.id] && formik.errors[item.id]}
                                        />
                                        {/* {
                           (item.type === 'input' || item.type === 'textarea') ?
                               <TextField
                                   name={item.id} label={item.label}
                                   onChange={formik.handleChange}
                                   multiline={item.type === 'textarea'}
                                   rows={3}
                                   onBlur={formik.handleBlur}
                                   error={formik.touched[item.id] && Boolean(formik.errors[item.id])}
                                   helperText={formik.touched[item.id] && formik.errors[item.id]}
                               /> :
                               item.type === 'radio' ?
                                   <FormControl error={formik.touched[item.id] && Boolean(formik.errors[item.id])}>
                                       <FormLabel>{item.label}</FormLabel>
                                       <RadioGroup name={item.id} value={formik.values[item.id]} row={true}
                                           onChange={formik.handleChange}
                                           onBlur={formik.handleBlur}
                                       >
                                           {
                                               item.options.map(option => {
                                                   return <FormControlLabel
                                                       key={option.id}
                                                       label={option.label}
                                                       control={<Radio value={option.id} />}
                                                   />
                                               })
                                           }
                                       </RadioGroup>
                                       <FormHelperText >{formik.touched[item.id] && formik.errors[item.id]}</FormHelperText>
                                   </FormControl> :
                                   item.type === 'checkbox' ?
                                       <FormControl error={formik.touched[item.id] && Boolean(formik.errors[item.id])}>
                                           <FormLabel>{item.label}</FormLabel>
                                           <FormGroup row>
                                               {
                                                   item.options.map(option => {
                                                       return <FormControlLabel
                                                           key={option.id}
                                                           label={option.label}
                                                           control={<Checkbox value={option.id} name={item.id} onChange={formik.handleChange} onBlur={formik.handleBlur} />}
                                                       />
                                                   })
                                               }
                                           </FormGroup>
                                           <FormHelperText >{formik.touched[item.id] && formik.errors[item.id]}</FormHelperText>
                                       </FormControl> :
                                       <TextField select name={item.id} value={formik.values[item.id]}
                                           onChange={formik.handleChange} onBlur={formik.handleBlur}
                                           error={formik.touched[item.id] && Boolean(formik.errors[item.id])}
                                           helperText={formik.touched[item.id] && formik.errors[item.id]}
                                           label={item.label}
                                       >
                                           {
                                               item.options.map(option => {
                                                   return <MenuItem key={option.id} value={option.id}>{option.label}</MenuItem>
                                               })
                                           }
                                       </TextField>

                       } */}
                                    </Grid>
                                })
                            }
                            <Grid item xs={12}>
                                {
                                    loading ?
                                        <CircularProgress />
                                        :
                                        <>
                                            <Button type='submit'
                                                disabled={!(formik.isValid && formik.dirty)}
                                            >
                                                Submit
                                            </Button>
                                            {
                                                saveStatus === 'error' &&
                                                <Typography>Something went wrong! Please try again</Typography>
                                            }
                                        </>
                                }
                            </Grid>
                        </Grid>
                }

            </Grid>

        </Grid>

    </form >
}

export default FormikForm;