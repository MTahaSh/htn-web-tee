
import React from 'react'
import { auth } from '@clerk/nextjs'
import Link from 'next/link';
import { Router } from 'lucide-react';
import NotifCli from './NotifCli';
// import { useRouter } from 'next/router';


const Notifcation = () => {

  const {userId} = auth();
  return (
    <div className={`w-full ${!userId?"flex":"hidden"} `}>
        <NotifCli/>
    </div>  
  )
}

export default Notifcation