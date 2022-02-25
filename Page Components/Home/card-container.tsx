import React from 'react'
import Grid from '@mui/material/Grid';
import BlogCard from '../../Components/Cards/blog-card';
function Cardcontainer() {
  return (
    <Grid container spacing={2}>
    <Grid item xs={8}>
        <BlogCard image='' heading='' body='' link=''/>
    </Grid>
    </Grid>
  )
}
export default Cardcontainer