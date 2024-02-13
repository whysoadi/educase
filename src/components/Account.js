import React from 'react'
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import pic2 from '../assets/pic2.png';
import cam2 from '../assets/cam2.png';
const Account = () => {
  return (
    <div className='flex justify-center '>
      <div className='h-[81.2rem] w-[37.5rem] bg-[#F7F8F9]'>
       <div className='h-[68px] w-[375px] bg-white pt-[2.7rem]'>
        <span className='text-[18px]  ml-[15px]'>Account Settings</span>
       </div>
       <div className='mt-[30px] ml-[20px] flex'>
        <div>
       <Badge
  overlap="circular"
  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
  badgeContent={
    <Avatar alt="Remy Sharp" src={cam2} style={{height:'23px', width:'21px'}} />
  }
>

  <Avatar alt="Travis Howard" src={pic2} style={{height:'76px', width:'76px'}} />
</Badge>
</div>
<div className='pl-[20px]'>
  <p className='text-[15px] font-medium'>Marry Doe</p>
  <p className='pt-[2px] text-[14px]'>Marry@Gmail.Com</p>
</div>
       </div>
       <div className='mt-[30px]'>
<div  className='text-[14px] px-[18px]'>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam </div>
       </div>
       <div className='mt-[20px]'>
   <div className='h-[1px] w-full bg-[#CBCBCB] border-dashed border'></div>
       </div>
       <div className='mt-[489px]'>
       <div className='h-[1px] w-full bg-[#CBCBCB] border-dashed border'></div>
       </div>
       </div>
    </div>
  )
}

export default Account
