import React from 'react';

const themeNames = ['Light', 'Medium', 'Dark'];

export default function ThemePicker(props) {
    
    return (
        <div>
            
            {themeNames.map((themeName)=>(
                <button 
                onClick={() => props.setTheme(themeName)}
                key={themeName}>
                    {themeName}
                </button>
            ))}
        </div>
    );
}