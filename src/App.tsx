import React from 'react';

interface ColoredTextProps {
  text: string;
  color: string;
}

const ColoredText: React.FC<ColoredTextProps> = ({ text, color }) => {
  return <span style={{ color }}>{text}</span>;
};

const App: React.FC = () => {
  const texts = [
    { text: "Hello, World!", color: "red" },
    { text: "Hello, World!", color: "blue" },
    { text: "Hello, World!", color: "green" },
  ];

  return (
    <div>
      {texts.map((item, index) => (
        <ColoredText key={index} text={item.text} color={item.color} />
      ))}
    </div>
  );
};

export default App;
