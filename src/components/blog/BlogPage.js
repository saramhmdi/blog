import React from 'react';
import Loader from '../shared/Loader';
import sanitizeHtml from 'sanitize-html';
import {GET_BLOG_INFO} from '../../graphql/queries'
import { useQuery } from '@apollo/client';
import { useNavigate, useParams } from 'react-router-dom';
import {  Avatar, Box, Container, Grid, Typography } from '@mui/material';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import CommentForm from '../comment/CommentForm';

import Comments from '../comment/Comments';

const BlogPage = () => {
    const {slug} = useParams()
    const navigate = useNavigate()
    const {loading , data , errors} = useQuery(GET_BLOG_INFO , { variables:{slug}})
    if(loading) return  <Loader />
    if(errors) return <p>Error...</p>

    return (
        <Container maxWidth='lg'>
            <Grid container >
                <Grid item xs={12} mt={9}  display='flex'  justifyContent='space-between'>
                    <Typography component='h2' variant='h4' color='primary' fontWeight={700}>{data.post.title}</Typography>
                    <ArrowBackOutlinedIcon onClick={ () => navigate(-1) } color='primary' sx={{fontSize:'40px'}}/>
                </Grid>
                <Grid item xs={12} mt={6}>
                    <img src={data.post.coverPhoto.url} alt={data.post.name} width='100%' style={{borderRadius : 15}}/>
                </Grid>
                <Grid item xs={12} mt={7} display='flex' flexDirection='colum' alignItems='center'>
                    <Avatar src={data.post.author.avatar.url} alt={data.post.author.name} sx={{width : 80 , height : 80 , marginLeft : 2}} />
                    <Box component='div'>
                    <Typography component='p' variant='h5' fontWeight={700} >{data.post.author.name}</Typography>
                    <Typography component='p' variant='p' color='text.secondary' >{data.post.author.field}</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} mt={5}>
                    <div dangerouslySetInnerHTML={{__html : sanitizeHtml(data.post.content.html)} }>
                    </div>
                </Grid>
                <Grid item xs={12} mt={7}> 
                    <CommentForm slug={slug}/>
                </Grid>
                <Grid item xs={12} mt={7}> 
                    <Comments slug={slug}/>

                </Grid>

            </Grid>
        </Container>
    );
};

export default BlogPage