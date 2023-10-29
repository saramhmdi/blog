import React, { useState } from 'react';
import { Button, Grid, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import {SEND_COMMENT_POST} from '../../graphql/mutations'
import { useMutation } from '@apollo/client';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const CommentForm = ({slug}) => {
    const [name , setName] = useState("")
    const [email , setEmail] = useState("")
    const [text , setText] = useState("")
    const [pressed , setPressed] = useState(false)
    const [sendComment , {data, loading , errors}] = useMutation(SEND_COMMENT_POST , {
        variables : {
            name , email , text , slug
        }
    })
    if(errors) return <p>errors</p>
    const sendHandler = () => {
        if(name && email && text){
            sendComment()
            setPressed(true)
        }else{
            toast.warn("لطفا تمامی فیلد ها را پر کنید" , {
                position: 'top-center'
            })
        }
    }
    if(data && pressed) {
        toast.success("کامنت شما ارسال شد و پس از تایید نمایش داده میشود", {
            position: 'top-center'
        })
        setPressed(false)
    }

    return (
   
            <Grid container 
            sx={{
                boxShadow : 'rgba(0,0,0,0.1) 0px 4px 12px', 
                borderRadius: 4 , 
                py:1,
                mt:5,
            }}>
                <Grid item xs={12} m={2}>
                    <Typography component='p' variant='h6' fontWeight={700} color='primary' >فرم ارسال کامنت</Typography>
                </Grid>
                <Grid item xs={12} m={2}>
                    <TextField placeholder='مثلا سارا'  label="نام کاربری" variant="outlined" sx={{width:"100%"}}
                    value={name} onChange={(e) => setName(e.target.value)} />
                </Grid>

                <Grid item xs={12} m={2}>
                    <TextField  label="ایمیل" variant="outlined" sx={{width:"100%"}}
                    type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </Grid>
                <Grid item xs={12} m={2}>
                    <TextField  label="متن کامنت" variant="outlined" sx={{width:"100%"}}
                    value={text} onChange={(e) => setText(e.target.value)} multiline minRows={4}/>
                </Grid>
                <Grid item xs={12} m={2}> 
                {
                    loading ? (
                        <Button variant='contained' disabled >در حال ارسال...</Button>
                    ):
                    <Button onClick={sendHandler} variant='contained' >ارسال</Button>
                }

                </Grid>
                <ToastContainer />
            </Grid>

    );
};

export default CommentForm;

