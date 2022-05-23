import React from 'react';
import '../../App.css'
import {useLocation ,Link , useNavigate,Navigate} from 'react-router-dom'
import { Formik } from 'formik';
import { TextField, Input, Grid } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const Contact = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const buttonhandler = () =>{

        setTimeout(() => {   
            navigate("/products/1")
        }, 1000);
    }
    return (
        <div>
          <section id="contact-section">
            <div>
              <h1 id="h1">
                Feel Free to <br /> <span style={{ color: "green" }}>Connect</span>{" "}
                us
              </h1>
            </div>
          </section>
          <h1 id="h1" style={{ color: "black" }}>
            If you have any questions <br /> fill the form and send message
          </h1>
          <div>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              {/* <TextField
                label="Filled success"
                type="number"
                inputProps={{ min: 10, max: 10 }}
                min={10}
                max={10}
                variant="filled"
                color="success"
                focused
              /> */}

              {/* <input
              className ="px-2" 
              placeholder ="Name"
              type="text"
              maxlength="50"
              >
              
              </input>
              <input></input> */}
              <TextField
                label="Please Enter Your Name"
                variant="standard"
                color="warning"
                focused
              />
              <TextField
                label="Please Enter Phone Number"
                variant="standard"
                color="warning"
                focused
              />
              
              
            </Box>
            <Button fullWidth xs={8} variant="outlined">
              Outlined
            </Button>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField>xs=8</TextField>
              </Grid>
              {/* <Grid item xs={4}>
        <Item>xs=4</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>xs=4</Item>
      </Grid>
      <Grid item xs={8}>
        <Item>xs=8</Item>
      </Grid> */}
            </Grid>
          </div>
        </div>
      );
};

export default Contact;