import { Avatar, Indicator } from '@mantine/core';
import { IconAlien } from '@tabler/icons-react';
import { IconSettings } from '@tabler/icons-react';
import { IconBellRinging } from '@tabler/icons-react';
import NavLinks from './NavLinks';

const Header=()=>{
return(

    <div  className="w-full bg-zinc-900 h-20 text-white flex justify-between px-6 items-center ">
        <div className='flex gap-2 items-center'><IconAlien className="h-10 w-10" stroke={2} />
            <div className='font-semibold text-3xl'>iJobs</div>
        </div>
        <NavLinks></NavLinks>
        <div className='flex gap-3 items-center'>

                <div className='flex gap-2 items-center'>
                    <div >Gaurav</div>
                    <Avatar src="avatar.png" alt="it's me" />
                </div>
                <Indicator color="brightsun.6" offset={5} size={8}  processing >
                    <div className='bg-zinc-800 p-1.5 rounded-full'><IconBellRinging stroke={2} /></div>
            </Indicator>
            <div className='bg-zinc-800 p-1.5 rounded-full'><IconSettings stroke={2} /></div>
        </div>
    </div>

);

}

export default Header;