import React from 'react';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='flex justify-center'>
      <div className='h-[81.2rem] w-[37.5rem] bg-[#F7F8F9]'>
        <div className='mt-[40px] ml-[20px]'>
          <div className='font-medium text-[#1D2226] text-[2.8rem] leading-[3.6rem] mr-[16.7rem]'>
          Signin to your PopX account
          </div>
          <div className='mt-[1.4rem] mr-[12.3rem] text-[#1D2226] text-[1.8rem] opacity-60 leading-[2.6rem]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </div>
     

        </div>
           
        <div className='ml-[20px] mt-[24px]'>
          <TextField   fullWidth id="outlined-basic" label={<span>Email Address<span style={{ color: 'red', paddingRight:'38px', fontFamily:'Rubik' }}> </span></span>} variant="outlined" defaultValue="Enter email address" className='text-gray-400'
          InputProps={{
            readOnly: true,
          }}
          sx={{
            '& .MuiInputLabel-root': {
              color: '#6C25FF',
              // Change label color to #6C25FF
             fontSize:'16px',
          
            fontFamily:'Rubik'
             // Change label size to 13px
            },
            '& .MuiOutlinedInput-root': {
              display: 'flex', // Make the input container a flexbox
              alignItems: 'center',
             // Align text vertically in the center
              '& fieldset': {
                borderColor: '#CBCBCB',
                borderWidth: '2px',
                height: '44px',
                width:'335px',
                borderRadius:'6px',
                paddingLeft:'1rem',
               
                 // Change input field height to 40px
              },
              '&:hover fieldset': {
                borderColor: '#CBCBCB',
               
              },
              '&.Mui-focused fieldset': {
                borderColor: '#CBCBCB',
               
              },'& input': {
                color: '#919191',
                fontSize:'13px',
                paddingTop:'10px'
              // Align text vertically in the center
              },
              '& input::deafaultValue': {
                color: 'gray', // Set placeholder color to gray
              },
            },
          }}
          />
         </div>
          <div className='ml-[20px] mt-[14px]'>
          <TextField   fullWidth id="outlined-basic" label={<span>Password<span style={{ color: 'red', paddingRight:'53px', fontFamily:'Rubik' }}> </span></span>} variant="outlined" defaultValue="Enter password" className='text-gray-400'
          InputProps={{
            readOnly: true,
          }}
          sx={{
            '& .MuiInputLabel-root': {
              color: '#6C25FF',
              // Change label color to #6C25FF
             fontSize:'16px',
          
            fontFamily:'Rubik'
             // Change label size to 13px
            },
            '& .MuiOutlinedInput-root': {
              display: 'flex', // Make the input container a flexbox
              alignItems: 'center',
             // Align text vertically in the center
              '& fieldset': {
                borderColor: '#CBCBCB',
                borderWidth: '2px',
                borderRadius:'6px',
                height: '44px',
                width:'335px',
                paddingLeft:'1rem',
               
                 // Change input field height to 40px
              },
              '&:hover fieldset': {
                borderColor: '#CBCBCB',
               
              },
              '&.Mui-focused fieldset': {
                borderColor: '#CBCBCB',
               
              },'& input': {
                color: '#919191',
                fontSize:'13px',
                paddingTop:'10px'
              // Align text vertically in the center
              },
              '& input::deafaultValue': {
                color: 'gray', // Set placeholder color to gray
              },
            },
          }}
          />
          </div>
          <Link to='/account' className='mt-[0.8rem] ml-[20px] w-[33.9rem] h-[4.6rem] bg-[#CBCBCB] rounded-[6px] flex items-center font-medium justify-center text-white '>
            <p >Login</p>
        </Link>
      </div>
    </div>
  )
}

export default Login

