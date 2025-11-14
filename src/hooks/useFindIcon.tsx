import useIcons from "./useIcons";

const useFindIcon = (name: string) => {
  const icons = useIcons();
  return icons.filter((icon) => icon.name === name)[0];
};

export default useFindIcon;
