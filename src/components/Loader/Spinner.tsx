const Spinner = () => {
  return (
    <div className="w-full h-full flex justify-center align-middle min-h-screen">
      <div className="flex justify-center items-center align-middle">
        <div className="animate-spin rounded-full size-16 lg:size-20 border-b-4 border-primary"></div>
      </div>
    </div>
  );
};

export default Spinner;
