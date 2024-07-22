import { useState, useEffect } from "react";
import Card from "./Card";
import "./Dashboard.css";

interface CardData {
  title: string;
  value: number;
  details: { status: string; label: string; count: number }[];
}

function Dashboard() {
  const [cardsData, setCardsData] = useState<CardData[]>([]);

  useEffect(() => {
    fetch("/cardData.json")
      .then((response) => response.json())
      .then((data) => setCardsData(data));
  }, []);

  return (
    <div className="dashboard">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          value={card.value}
          details={card.details}
        />
      ))}
    </div>
  );
}

export default Dashboard;
