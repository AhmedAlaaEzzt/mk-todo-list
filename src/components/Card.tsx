import "./card.css";

interface CardProps {
  title: string;
  value: number;
  details: { status: string; label: string; count: number }[];
}

function Card({ title, value, details }: CardProps) {
  return (
    <div className="card">
      <div className="card-section">
        <div className="card-header">
          <div className="card-title">{title}</div>
          <div className="card-value">{value}</div>
        </div>
      </div>
      <div className="card-section">
        <div className="card-details">
          {details.map((detail, index) => (
            <div key={index}>
              <span className={`status ${detail.status}`}></span> {detail.label}{" "}
              {detail.count}
            </div>
          ))}
        </div>
      </div>
      <div className="card-section"></div>
    </div>
  );
}

export default Card;
