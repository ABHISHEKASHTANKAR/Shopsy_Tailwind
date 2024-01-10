import React from 'react'
import Logo from '../../assets/logo.png'
import { IoMdSearch } from 'react-icons/io'
import { FaCaretDown, FaCartShopping } from 'react-icons/fa6'
import DarkMode from './DarkMode'

const Navbar = () => {
    const Menu = [
        {
            id: 1,
            name: 'Home',
            link: '/#'
        },
        {
            id: 2,
            name: 'Top Rated',
            link: '#services'
        },
        {
            id: 3,
            name: 'Kids Wear',
            link: '#'
        },
        {
            id: 4,
            name: 'Mens Wear',
            link: '/#'
        },
        {
            id: 5,
            name: 'Electronics',
            link: '/#'
        }
    ]
    const DropdownItems = [
        {
            id : 1,
            name : 'Trending Products',
            link : '#'
        },
        {
            id : 2,
            name : 'Best Selling',
            link : '#'
        },
        {
            id : 3,
            name : 'Top Rated',
            link : '#'
        }
    ]
    return (
        <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
            {/* Upper Navbar */}
            <div className='shadow-sm bg-primary/40'>
                <div className='container flex justify-between items-center py-2'>
                    <div>
                        <a href="#"
                            className='font-bold text-2xl sm:text-3xl flex gap-2 items-center'
                        >
                            <img src={Logo} alt="Logo"
                                className='w-10' />
                            SHOPSY
                        </a>
                    </div>
                    <div className='flex items-center gap-10'>
                        {/* Search Bar */}
                        <div className='group relative hidden md:block'>
                            <input type="text" placeholder="Search"
                                className='w-[200px] sm:w-[200px] group-hover:w-[300px] 
                        transition-all duraion-300 rounded-full border border-gray-300 px-4 py-2
                        focus:border-1 focus:border-primary focus:outline-none hover:border-primary
                            '/>
                            <IoMdSearch
                                className='text-gray-500 group-hover:text-primary 
                                absolute top-1/2 right-3 -translate-y-1/2'
                            />
                        </div>
                        {/* Order Button */}
                        <button className='bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white
                                            py-1 px-4 rounded-full flex items-center gap-3 group '>
                            <span className='group-hover:block hidden transition-all duration-200'>
                                Order
                            </span>
                            <FaCartShopping
                                className='text-xl text-white drop-shadow-sm cursor-pointer ' />
                        </button>
                        {/* Dark Mode Button */}
                        <div>
                            <DarkMode />
                        </div>
                    </div>
                </div>
            </div>
            {/* Lowe Navbar */}
            <div>
                <ul className='shadow-md justify-center gap-20 py-3 items-center
                text-slate-500 font-[400] hidden sm:flex dark:text-white'>
                    {
                        Menu.map((item)=>{
                            return(
                                <li key={item.id}>
                                    <a href={item.link}
                                    className='hover:text-primary duration-200 transition-all'
                                    >{item.name}</a>
                                </li>
                            )
                        })
                    }
                    {/* Simple Dropdown and Links */}
                    <li className='group relative'>
                        <a href="#"
                        className='hover:text-primary 
                        duration-200 transition-all flex items-center gap-2'>
                            Trending
                            <span>
                                <FaCaretDown className='group-hover:rotate-180 duration-300'/>
                            </span>
                        </a>
                        <div className='absolute hidden group-hover:block w-[150px]
                        right-0 z-999'>
                            <ul className='flex-col items-center bg-white                            text-center rounded-lg 
                            shadow-md'>
                                {
                                    DropdownItems.map((item)=>{
                                        return(
                                            <li key={item.id} 
                                            className={`px-4 py-2 border text-slate-900 duration-200 ${item.id==1 ?'rounded-t-md':item.id==3?'rounded-b-md':'rounded-none'}
                                            hover:bg-primary/30`}>
                                                <a href={item.link}>
                                                    {item.name}
                                                </a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar