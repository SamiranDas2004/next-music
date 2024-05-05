import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { Button } from './ui/moving-border'
function Herosection() {
  return (
    <div
    className='h-auto md:h-[40rem] w-full rounded flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-80'
    >
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="black"
      />
        <div className='p-4 relative z-10 w-full text-center'>
            <p className=' mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 to-neutral-300'>
                Master the art of Love
    
    
            </p>
            <div className=' pt-8'>
<p>
What is love?
Baby, don't hurt me
Don't hurt me, no more
</p>

<p >
Baby, don't hurt me
Don't hurt me, no more
What is love? Yeah-yeah
</p>
</div>

<div className=' pt-7'>
     <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Borders are cool
      </Button></div>
        </div>
    </div>
    
  )
}

export default Herosection