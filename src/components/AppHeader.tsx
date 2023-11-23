import React from 'react'

const AppHeader = ({ head1, heade2, text }: { head1: string, heade2: string, text: string }) => {
    return (
        <div className=' relative pt-[6rem]'>
            <div className=' bg-vivid-red flex items-center justify-center py-6 h-60'>
                <div className=' container flex items-center justify-center'>
                    <h2 className='text-white text-center font-bold text-4xl w-1/2 mx-auto uppercase'>{head1}</h2>
                </div>
            </div>
            <div className="container relative my-10 min-h-[20rem]">
                <div className=' bg-navy-blue w-1/2 flex items-center justify-center flex-col py-10 absolute bottom-0 z-[2] -top-20 text-white'>
                    <h3 className='text-white text-center font-bold text-4xl w-2/3 mx-auto uppercase'>{heade2}</h3>
                    <p className=' w-2/3 mx-auto mt-5'>{text}</p>
                </div>
            </div>
        </div>
    )
}

export default AppHeader