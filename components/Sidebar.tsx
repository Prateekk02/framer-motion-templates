'use client'
import React, { useState } from 'react'
import { motion } from 'motion/react'
import { ChartBarIcon, ChevronLeftIcon, ChevronRightIcon, HomeIcon, SettingsIcon, UserIcon } from 'lucide-react';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const toggleSidebar = () => {
        setIsOpen(prev => !prev);
    };
    const links = [
        {
            name: "Home" ,
            href: "/" ,
            icon: <HomeIcon />,
        },
        {
            name: "Analytics" ,
            href: "/analytics",
            icon: <ChartBarIcon />,
        },
        {
            name: "Users",
            href: "/users",
            icon: <UserIcon />,
        },
        {
            name: "Settings",
            href: "/settings",
            icon: <SettingsIcon />,
        }
    ]

    const sidebarVariant = {
        open: {
            width: "16rem"
        },
        closed: {
            width: "4.5rem"
        }
    }

    const childVariant = {
        open:{
            opacity: 1,
            y: 0
        },
        closed:{
            opacity: 0,
            y: -10 
        }
    }

    const parantVariant = {
        open:{
            transition:{
                staggerChildren: 0.07,
                delayChildren: 0.2
            }
        }, 
        closed:{
            transition:{
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        }
    }
  return (
    <motion.div 
        initial={false}
        animate={isOpen ? "open" : "closed"}  
        exit="closed"
        transition={{duration: 0.3}}
        className='border border-neutral-100 h-full'>
        <motion.nav 
            variants={sidebarVariant}
            className="bg-white shadow-md h-full">
            <div className="p-4 flex justify-between items-center">
                <h2 className={`text=xl font-semibold mr-2 ${!isOpen && 'sr-only'}`}>
                    Dashboard
                </h2>
                {/* Toggle Button */}
                <button 
                    className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200 hover:cursor-pointer focus:outline-none "
                    aria-label={isOpen ? "Close Sidebar" : "Open Sidebar"}
                    onClick={toggleSidebar}
                >
                    {isOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </button>
            </div>

            <div className="relative">
                {/* Sidebar Content */}
                <nav className="p-4">
                    <motion.ul variants={parantVariant} className="space-y-2">
                        {links.map((link) => (
                            <motion.li variants={childVariant} key={link.name}>
                                <a href={link.href}
                                    className='flex items-center p-2 text-gray-700 hover:bg-gray-200'
                                    title={isOpen ? link.name : ""}
                                >
                                    
                                    {link.icon}
                                    <span className='ml-2'>{isOpen && link.name}</span>
                                </a>
                            </motion.li>
                        ))}
                    </motion.ul>
                </nav>
            </div>

        </motion.nav>

    </motion.div>
  )
}

export default Sidebar