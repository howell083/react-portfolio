import React, { useState } from 'react';

const colorNames = ['Aquamarine', 'BlueViolet', 'Chartreuse', 'CornflowerBlue', 'Thistle', 'SpringGreen', 'SaddleBrown', 'PapayaWhip', 'MistyRose'];
const coffeeColors = [{green: '#9EB599'}, {light: '#683C2C'}, {city: '#4C352D'}, {vienna: '#352926'}, {italian: '#141212'}];
export default function ColorPicker() {
  const [color, setColor] = useState('Tomato');

 const divStyle = {backgroundColor: color};

  return (
    <div style={divStyle}>
      <p>Selected color: {color}</p>
      {colorNames.map((colorName)=>(
        <button 
          onClick={() => setColor(colorName)} 
          key={colorName}>
       	     {colorName}
      	</button>
      ))}
    </div>
  );
}

/* Roast types 
.green {
    background-color: #9EB599;
  }
  
  .light {
    background-color: #683C2C;
  }
  
  .city {
    background-color: #4C352D;
  }
  
  .vienna {
    background-color: #352926;
  }
  
  .italian {
    background-color: #141212;
  }
  */
  