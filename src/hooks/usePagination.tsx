import { useState, useMemo } from "react";
import type { Project } from "../type";

// Define a generic type T for the items in the data array

/**
 * A custom hook for client-side pagination.
 * * @template T The type of the items in the data array (e.g., Project).
 * @param {T[]} data The full array of items to paginate.
 * @param {number} initialItemsPerPage The initial number of items to show.
 * @param {number} [incrementBy=initialItemsPerPage] The number of items to add on 'show more'.
 * @returns {{
 * itemsForShow: T[],
 * showMore: () => void,
 * canShowMore: boolean
 * }}
 */

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

  const canShowMore: boolean = itemsToShow < data.length;

  return {
    itemsForShow,
    showMore,
    resetItems,
    canShowMore,
  };
};

export default usePagination;
