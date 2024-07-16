import React from 'react';

interface ColoredTextProps {
  text: string;
  color: string;
}

const ColoredText: React.FC<ColoredTextProps> = ({ text, color }) => {
  return <span style={{ color }}>{text}</span>;
};

export default ColoredText;
    