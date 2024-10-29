import { Home, Menu, Search } from '@mui/icons-material'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
      <br></br>
       <h1>Table</h1>
        <AppBar sx={{
            background: 'rgb(152,16,73)',
            background: 'linear-gradient(133deg, rgba(152,16,73,1) 7%, rgba(140,25,75,1) 22%, rgba(179,11,81,1) 93%)'
        }}>
            <Toolbar>
                <IconButton>
                   <Menu/> 
                </IconButton>
                <div id="ba">
                    <Typography variant='h5'>Diet</Typography>
                    </div>
                    <div id="se">

                    <Link to='/f'><Home/></Link>&nbsp;&nbsp;&nbsp;&nbsp;
                       <Link to='/table'><Search/></Link>
                    
                        </div>
                    
                    

            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar