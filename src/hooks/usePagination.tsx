import { useState, useMemo } from "react";
import type { Project } from "../type";

const usePagination = <T extends Project | undefined>(
  data: T[],
  initialItemsPerPage: number,
  incrementBy: number = initialItemsPerPage
) => {
  const [itemsToShow, setItemsToShow] = useState<number>(initialItemsPerPage);

  const showMore = (): void => {
    setItemsToShow((prevCount) => prevCount + incrementBy);
  };

  const resetItems = (): void => {
    setItemsToShow(initialItemsPerPage);
  };

  const itemsForShow = useMemo<T[]>(() => {
    const endIndex = Math.min(itemsToShow, data.length);
    return data.slice(0, endIndex);
  }, [data, itemsToShow]);

  // Use useMemo to derive canShowMore from itemsToShow and data.length
  const canShowMore: boolean = useMemo<boolean>(() => {
    return itemsToShow < data.length;
  }, [itemsToShow, data.length]);

  return {
    itemsForShow,
    showMore,
    resetItems,
    canShowMore,
  };
};

export default usePagination;
