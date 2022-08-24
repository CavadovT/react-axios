import axios from "axios"
import React, {useState} from 'react'
import {Field, Form, Formik} from "formik";
import {Requestlogin} from "../../Api/login";

export default function Test() {

    const [userData,setUserData]=useState()
    const request=async ()=>{
        const {data}=await axios.post("http://localhost:44346/api/account/login");
        localStorage.setItem("userToken",JSON.stringify(data.token));
        Requestlogin();
    };

    return (
        <div>
            <Formik
                initialValues={{ userName: '', password: '' }}
                onSubmit={(values)=>{
                    setUserData(values);
                }}

            >
                <Form>
                    <label htmlFor="userName">userName</label>
                    <Field name="userName" type="text" />


                    <label htmlFor="password">password</label>
                    <Field name="password" type="text" />

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    )
}
