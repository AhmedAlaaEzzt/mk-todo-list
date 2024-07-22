import Card from "./Card";
import "./Dashboard.css";

function Dashboard() {
  const cardsData = [
    {
      title: "Assets",
      value: 90,
      details: [
        { status: "active", label: "Active", count: 2 },
        { status: "inactive", label: "Inactive", count: 3 },
        { status: "unassigned", label: "Unassigned", count: 84 },
        { status: "offline", label: "Offline", count: 1 },
      ],
    },
    {
      title: "Gateways",
      value: 7,
      details: [
        { status: "online", label: "Online", count: 0 },
        { status: "offline", label: "Offline", count: 7 },
        { status: "unapproved", label: "Unapproved", count: 0 },
      ],
    },
    {
      title: "Anchors",
      value: 16,
      details: [
        { status: "online", label: "Online", count: 4 },
        { status: "offline", label: "Offline", count: 9 },
        { status: "unapproved", label: "Unapproved", count: 3 },
      ],
    },
  ];

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
