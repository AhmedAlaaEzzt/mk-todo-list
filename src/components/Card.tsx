import "./card.css";

interface CardProps {
  title: string;
  value: number;
  details: { status: string; label: string; count: number }[];
}

function Card({ title, value, details }: CardProps) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title">{title}</div>
        <div className="card-value">{value}</div>
      </div>
      <div className="card-details">
        {details.map((detail, index) => (
          <div key={index} className="card-detail">
            <span className={`status ${detail.status}`}></span>
            {detail.label} {detail.count}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
