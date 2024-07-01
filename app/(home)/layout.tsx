import React, {ReactNode} from 'react'

import { Metadata } from "next"; 
import NavBar from '@/components/NavBar';

export const metadata: Metadata = {
    title: "PI-Remake",
    description: "Rebuilding Integration Project",
  };
  
const HomeLayout = ({children}: {children: ReactNode}) => {
  return (
    <main className="relative">
        <NavBar />
        {children}
    </main>
  )
}

export default HomeLayout