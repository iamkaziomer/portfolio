import React from 'react'
import Image from 'next/image'
const page = () => {
    return (
        <div className='w-[100%] bg-white flex gap-4 justifu-center items-center'>
            <div  className='mask-clip-border'>
                <Image src="/profile-pic.png" alt='Photo' width={4000}  height={4000}/>
            </div>
            <div className='text-[#151515]'>
                <h1 className='text-lg font-bold'>
                    Full Stack Developer
                </h1>
                <p>
                    I’m a Full Stack Developer with 2+ years of experience building fast, scalable web apps using React, Next.js, Node.js, Express, MongoDB, and PostgreSQL. I enjoy working across the stack—from crafting responsive UIs to designing secure, RESTful APIs and deploying on AWS, Vercel, and Render.
                    I’ve built and shipped real-world projects in edtech, AI, and dashboards, often owning features end-to-end. Currently, I’m exploring Web3, AI integrations, and cybersecurity, combining my love for tech and problem-solving to create impactful digital products.
                </p>
            </div>
        </div>
    )
}

export default page
