import { useState } from "react";
// import { HiArrowLeft } from "react-icons/hi";
// import { TbArrowRightFromArc } from "react-icons/tb";

const CardCarousel = ({ items }: { items: string[] }) => {
  const [index, setIndex] = useState<number>(0);
  const [startX, setStartX] = useState<number>(0);
  const [isDraging, setIsDraging] = useState<boolean>(false);

  function jump(e: React.PointerEvent<HTMLElement>) {
    const index = (e.target as HTMLElement).id;
    setIndex(Number(index));
  }

  // function next() {
  //   setIndex(index == items.length - 1 ? 0 : index + 1);
  // }

  // function prev() {
  //   setIndex(index == 0 ? items.length - 1 : index - 1);
  // }

  function detectPointerStart(e: React.PointerEvent<HTMLDivElement>) {
    e.preventDefault();
    e.currentTarget.setPointerCapture(e.pointerId);
    setStartX(e.clientX);
    setIsDraging(true);
  }

  function detectPointerMove() {
    if (!isDraging) return;
  }

  function detectPointerEnd(e: React.PointerEvent<HTMLDivElement>) {
    if (!isDraging) return;
    const endX = e.clientX;
    const deltaX = endX - startX;
    const MIN_DISTANCE = 150;
    e.currentTarget.releasePointerCapture(e.pointerId);

    if (deltaX < 0 && Math.abs(deltaX) > MIN_DISTANCE) {
      setIndex(index == items.length - 1 ? 0 : index + 1);
    } else if (deltaX > 0 && Math.abs(deltaX) > MIN_DISTANCE) {
      setIndex(index == 0 ? items.length - 1 : index - 1);
    }

    setIsDraging(false);
    setStartX(0);
  }

  return (
    <div>
      <div
        className="w-full h-full relative m-5 -translate-4 left-1/2 -translate-x-1/2"
        draggable="false"
        onPointerDown={detectPointerStart}
        onPointerMove={detectPointerMove}
        onPointerUp={detectPointerEnd}
      >
        <input type="text" className="bg-primary input input-xl" />
        {/* {typeof items[0] === "string" ?  */}
        <img src={items[index]} className="h-full w-full" />

        {/* navigation button  */}
        <div className=" w-full -translate-y-2 bottom-0 border absolute transition-colors flex gap-1 justify-center">
          {items.map((_, i) => {
            return (
              <div
                id={i.toString()}
                onPointerDown={jump}
                className={`${i == index ? "bg-white" : "bg-transparent"} size-2 border rounded-full cursor-pointer`}
              ></div>
            );
          })}
        </div>
      </div>
      {/* Next Prev buttons */}
    </div>
  );
};

export default CardCarousel;
