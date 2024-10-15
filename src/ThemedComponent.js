// src/ThemedComponent.js
import React from 'react';
import { useTheme } from './ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';
import './ThemedComponent.css'; // Import CSS for styling

const ThemedComponent = () => {
    const { theme } = useTheme();

    return (
        <div className={`themed-component ${theme}`}>
            <h2 className='text-[96px] mb-3 font-extrabold' >Switch the theme</h2>
            <ThemeSwitcher />
        </div>
    );
};

export default ThemedComponent;