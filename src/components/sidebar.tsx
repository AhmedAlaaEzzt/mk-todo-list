import blueprint from "../assets/imgs/blueprint.png";
import construction from "../assets/imgs/construction-worker.png";

function Sidebar(props: { id: string; onIconClick: () => void; onConstructionClick: () => void }) {
  const { id, onIconClick, onConstructionClick } = props;

  return (
    <div id={id} className="absolute top-0 left-0 h-full bg-white shadow-md p-4 w-[70px]">
      <img src={blueprint} className="cursor-pointer h-[50px]" onClick={onIconClick} alt="Sidebar Icon" />
      <img src={construction} className="cursor-pointer h-[50px]" onClick={onConstructionClick} alt="Construction Icon" />
    </div>
  );
}

export default Sidebar;
