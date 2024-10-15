// src/ThemeSwitcher.js
import React from 'react';
import { useTheme } from './ThemeContext';
import './ThemeSwitcher.css'; // Import CSS for styling

const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="toggle-container">
            <label className="toggle-switch">
                <input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} />
                <span className="slider"></span>
            </label>
        </div>
    );
};

export default ThemeSwitcher;