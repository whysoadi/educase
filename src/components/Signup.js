import React from 'react'
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Typography from '@mui/material/Typography';


const Signup = () => {
  return (
    <div className='flex justify-center'>
      <div className='h-[81.2rem] w-[37.5rem] bg-[#F7F8F9]'>
        <div className='mt-[40px] ml-[20px]'>
           <div className='text-[2.8rem] font-medium mr-[167px] leading-[36px] text-[#1D2226]'>
           Create your PopX account
           </div>
           <div className='mt-[28px]'>
           <TextField   fullWidth id="outlined-basic" label={<span>Full Name<span style={{ color: 'red', paddingRight:'38px', fontFamily:'Rubik' }}>*</span></span>} variant="outlined" defaultValue="Marry Doe" className='text-gray-400'
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
                color: '#1D2226',
                fontSize:'13px',
                paddingTop:'10px',
                fontFamily: 'Rubik'
              // Align text vertically in the center
              },
              '& input::deafaultValue': {
                color: 'gray', // Set placeholder color to gray
              },
            },
          }}
          />
</div>
          <div className='mt-[25px]'>
           <TextField   fullWidth id="outlined-basic" label={<span>Phone Number<span style={{ color: 'red', paddingRight:'32px', fontFamily:'Rubik' }}>* </span></span>} variant="outlined" defaultValue="Marry Doe" 
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
                color: '#1D2226',
                fontSize:'13px',
                paddingTop:'10px',
                fontFamily: 'Rubik'
              // Align text vertically in the center
              },
              '& input::deafaultValue': {
                color: 'gray', // Set placeholder color to gray
              },
            },
          }}
          />
          </div>
          <div className='mt-[25px]'>
           <TextField   fullWidth id="outlined-basic" label={<span>Email Address<span style={{ color: 'red', paddingRight:'28px', fontFamily:'Rubik' }}>* </span></span>} variant="outlined" defaultValue="Marry Doe" className='text-gray-400'
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
                color: '#1D2226',
                fontSize:'13px',
                paddingTop:'10px',
                fontFamily: 'Rubik'
              // Align text vertically in the center
              },
              '& input::deafaultValue': {
                color: 'gray', // Set placeholder color to gray
              },
            },
          }}
          />
          </div>
          <div className='mt-[25px]'>
           <TextField   fullWidth id="outlined-basic" label={<span>Password<span style={{ color: 'red', paddingRight:'38px', fontFamily:'Rubik' }}>* </span></span>} variant="outlined" defaultValue="Marry Doe" className='text-gray-400'
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
                color: '#1D2226',
                fontSize:'13px',
                paddingTop:'10px',
                fontFamily: 'Rubik'
              // Align text vertically in the center
              },
              '& input::deafaultValue': {
                color: 'gray', // Set placeholder color to gray
              },
            },
          }}
          />
          </div>
          <div className='mt-[25px]'>
           <TextField   fullWidth id="outlined-basic" label={<span>Company Name<span style={{ color: 'red', paddingRight:'30px', fontFamily:'Rubik' }}> </span></span>} variant="outlined" defaultValue="Marry Doe" className='text-gray-400'
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
                color: '#1D2226',
                fontSize:'13px',
                paddingTop:'10px',
                fontFamily: 'Rubik'
              // Align text vertically in the center
              },
              '& input::deafaultValue': {
                color: 'gray', // Set placeholder color to gray
              },
            },
          }}
          />
          </div>
          <div className='mt-[12px]'>
     <div className='text-[13px]'> Are you an agency?<span className='text-[red]'>*</span></div>
      <RadioGroup row
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
    
        >
        <FormControlLabel value="female" control={<Radio  style={{ color: '#6C25FF'}}  sx={{
    '& .MuiSvgIcon-root': {
      fontSize: 24,
    },
    
  }} />} label={
    <Typography variant="body1" fontSize={13}>Yes</Typography>
  } />  
        <FormControlLabel value="male" control={<Radio  sx={{
    '& .MuiSvgIcon-root': {
      fontSize: 24,
      color: '#919191'
    },
   
  }} />} label={
    <Typography variant="body1" fontSize={13}>No</Typography>
  } />
      </RadioGroup>
          </div>
           
        </div>
        <div className='mt-[200px]'>
        <Link to='/account' className='mt-[0.8rem] ml-[20px] w-[33.9rem] h-[4.6rem] bg-[#6C25FF] rounded-[6px] flex items-center font-medium justify-center text-white '>
            <p >Create Account</p>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default Signup
