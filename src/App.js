// src/App.js
import React from 'react';
import { ThemeProvider } from './ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';
import ThemedComponent from './ThemedComponent';
import './App.css';

const App = () => {
    return (
        <ThemeProvider>
            <div>
                <ThemedComponent />
            </div>
        </ThemeProvider>
    );
};

export default App;