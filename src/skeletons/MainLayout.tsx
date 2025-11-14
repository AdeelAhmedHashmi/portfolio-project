const ShimmerBlock = ({ className = "h-4 rounded" }) => (
  <div className={`animate-pulse bg-gray-700 ${className}`}></div>
);
const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gray-900 font-sans">
      {/* 1. HEADER / NAVBAR SHIMMER */}
      <header className="navbar container mx-auto px-4 sm:px-8 py-4">
        {/* Logo (Left) */}
        <div className="navbar-start">
          <ShimmerBlock className="w-20 h-6" />
        </div>

        {/* Navigation Links (Center) - Desktop only */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-6">
            <ShimmerBlock className="w-16 h-4" />
            <ShimmerBlock className="w-20 h-4" />
            <ShimmerBlock className="w-24 h-4" />
            <ShimmerBlock className="w-20 h-4" />
            <ShimmerBlock className="w-28 h-4" />
          </ul>
        </div>

        {/* Hire Me Button (Right) */}
        <div className="navbar-end">
          <ShimmerBlock className="w-24 h-10 rounded-lg" />
        </div>
      </header>

      {/* 2. HERO SECTION SHIMMER */}
      <section className="container mx-auto px-4 sm:px-8 pt-16 pb-24">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          {/* Shimmer Left Column (Text, CTAs, Stats) */}
          <div className="lg:w-1/2 w-full order-2 lg:order-1 text-center lg:text-left space-y-4">
            {/* Intro Text Shimmer */}
            <ShimmerBlock className="h-6 w-32 mx-auto lg:mx-0" />

            {/* Name Shimmer */}
            <ShimmerBlock className="h-10 w-3/4 mx-auto lg:mx-0" />

            {/* Title Shimmer */}
            <ShimmerBlock className="h-10 w-2/3 mx-auto lg:mx-0" />

            {/* Social Icons Placeholder */}
            <div className="flex justify-center lg:justify-start space-x-5 mb-8 pt-4">
              <ShimmerBlock className="size-6 rounded-full" />
              <ShimmerBlock className="size-6 rounded-full" />
              <ShimmerBlock className="size-6 rounded-full" />
              <ShimmerBlock className="size-6 rounded-full" />
            </div>

            {/* CTA Buttons Placeholder */}
            <div className="flex justify-center lg:justify-start space-x-4 mb-10">
              <ShimmerBlock className="h-12 w-32 rounded-lg" />
              <ShimmerBlock className="h-12 w-32 rounded-lg" />
            </div>

            {/* Stats Block Placeholder */}
            <div className="flex justify-center lg:justify-start space-x-6 sm:space-x-10 mt-8 border-t border-gray-700 pt-6">
              <div className="text-center space-y-2">
                <ShimmerBlock className="h-8 w-12 mx-auto" />
                <ShimmerBlock className="h-4 w-16 mx-auto" />
              </div>
              <div className="text-center space-y-2">
                <ShimmerBlock className="h-8 w-12 mx-auto" />
                <ShimmerBlock className="h-4 w-16 mx-auto" />
              </div>
              <div className="text-center space-y-2">
                <ShimmerBlock className="h-8 w-12 mx-auto" />
                <ShimmerBlock className="h-4 w-16 mx-auto" />
              </div>
            </div>
          </div>

          {/* Shimmer Right Column (Image Placeholder) */}
          <div className="lg:w-1/2 w-full order-1 lg:order-2 flex justify-center lg:justify-end">
            {/* Circular shimmer for the portrait image */}
            <ShimmerBlock className="w-80 h-80 sm:w-96 sm:h-96 rounded-full" />
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION SHIMMER */}
      <section className="bg-gray-800 py-20">
        <div className="container mx-auto px-4 sm:px-8">
          {/* Section Header Shimmer */}
          <div className="text-center mb-16 space-y-3">
            <ShimmerBlock className="h-10 w-64 mx-auto mb-4" />
            <ShimmerBlock className="h-4 w-96 mx-auto" />
            <ShimmerBlock className="h-4 w-80 mx-auto" />
          </div>

          {/* Service Cards Grid Shimmer */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Shimmer Card Template (Repeated 3 times) */}
            {[1, 2, 3].map((id) => (
              <div
                key={id}
                className="bg-gray-900 p-8 rounded-lg shadow-xl border-t-4 border-gray-700"
              >
                {/* Icon Placeholder */}
                <ShimmerBlock className="size-10 rounded-full mx-auto md:mx-0 mb-6" />

                {/* Title Placeholder */}
                <ShimmerBlock className="h-6 w-1/2 mx-auto md:mx-0 mb-4" />

                {/* Text Placeholder */}
                <ShimmerBlock className="h-4 w-full mb-2" />
                <ShimmerBlock className="h-4 w-3/4" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainLayout;
