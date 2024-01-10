import React, { useEffect, useState } from 'react';
import lightPng from '../../assets/website/light-mode-button.png';
import darkPng from '../../assets/website/dark-mode-button.png';
const DarkMode = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const element = document.documentElement;
    
    useEffect(()=>{
        if(theme === 'dark'){
            element.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
        else{
            element.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [theme]);
    
    const handleDarkBtn = () => {
        if(theme === 'dark'){
            setTheme('light');
        }
        else{
            setTheme('dark');
        }
    }

   
    return(
        <div className='relative' onClick={handleDarkBtn}>
            {theme==='light' && <img src={lightPng} alt="dark-mode-btn"
            className='w-16 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.5)]
            transition-all duration-300 absolute right-0 z-10 min-w-16'
            />}
            <img src={darkPng} alt="dark-mode-btn"
            className='w-16 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.5)]
            transition-all duration-300 min-w-16'
            />
        </div>
    )
} 

export default DarkMode