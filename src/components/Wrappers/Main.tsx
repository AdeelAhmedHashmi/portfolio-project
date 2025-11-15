interface MainProps {
  className?: string;
  children?: React.ReactNode;
  id?: string;
}

const Main = ({ className, id, children }: MainProps) => {
  return (
    <div className={`wrapper ${className}`} id={id}>
      {children}
    </div>
  );
};

export default Main;
