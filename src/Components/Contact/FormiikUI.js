import React from 'react';
import {useFromik} from 'formik'
import * as 'yup'
import {contactFormApi} from '../endPoints'
import{TextField,Grid,Button} from '@material-ui/core'
import axios from 'axios'

const validationSchema = yup.object({
    name:yup.string
})

const FormiikUI = () => {
    return (
        <div>
            
        </div>
    );
};

export default FormiikUI;