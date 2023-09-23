import LeftSide from "./LeftSide";
import Shelf from "./Shelf";

export default function Body() {
  return (
    <div className="flex">
      <div className="w-[20%] min-h-page border-e-2">
        <LeftSide />
      </div>
      <div>
        <Shelf shelf_name={"somethinmg"} />
      </div>
    </div>
  );
}
