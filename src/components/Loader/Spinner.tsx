const Spinner = () => {
  return (
    <div className="w-full h-full flex justify-center align-middle min-h-screen">
      <div className="flex justify-center items-center align-middle">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary"></div>
      </div>
    </div>
  );
};

export default Spinner;
