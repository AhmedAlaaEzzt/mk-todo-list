import blueprint from "../assets/imgs/blueprint.png";
function Sidebar(props: { id: string }) {
  const { id } = props;

  return (
    <div
      id={id}
      className="absolute top-0 left-0 h-full bg-white shadow-md p-4 w-[50px]"
    >
      <img src={blueprint} className="cursor-pointer h-[30px] " />
    </div>
  );
}

export default Sidebar;
