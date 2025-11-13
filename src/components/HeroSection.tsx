import profile from "../assets/profile-pic.png";
import SocialLinks from "./SocialLinks";

const HeroSection = () => {
  return (
    <div
      id="home"
      className={`relative min-h-screen mt-20 bg-[#00000022] backdrop-blur-3xl`}
    >
      {/* Central Content Wrapper (Prevents w-screen overflow) */}
      <div
        className="
        w-full px-4 py-12 sm:px-8 md:px-16 lg:px-24 xl:px-23 font-sans
        grid grid-cols-1 lg:grid-cols-2 
        gap-12 lg:gap-20 
        items-center
      "
      >
        {/* Content Section (Col 1) */}
        <div className="h-full relative text-center lg:text-start">
          {/* Div for Only Effect (Translated bg-primary to BG_COLOR_ACCENT) */}
          <div
            className={`h-4/5 w-full bg-primary rounded-full opacity-10 left-0 -translate-x-1/2 absolute blur-3xl`}
            style={{ zIndex: -1 }}
          ></div>

          {/* Name/Title Block */}
          <div className="flex flex-col gap-2">
            {/* Kept user's text sizing but used standard opacity */}
            <h3 className="text-xl sm:text-2xl font-semibold opacity-70">
              Hi I am
            </h3>
            <h2 className="text-3xl sm:text-4xl font-semibold opacity-90">
              Akhlas Ahmed
            </h2>
          </div>

          {/* Big Text (Translated text-primary and sized responsively) */}
          <div className="py-6 sm:py-10">
            <h1
              className={`
              text-6xl sm:text-6xl md:text-7xl lg:text-8xl 
              font-bold text-primary leading-tight
            `}
            >
              Flutter Developer
            </h1>
          </div>

          {/* Social Links */}
          <div className="flex justify-center lg:justify-start mb-10">
            <SocialLinks />
          </div>

          {/* Actions Buttons (Translated custom button classes) */}
          <div className="flex gap-4 sm:gap-6 py-8 justify-center lg:justify-start">
            <button
              className={`px-6 py-3 rounded-xl font-bold bg-primary transition-opacity hover:opacity-80 cursor-pointer`}
            >
              Hire Me
            </button>
            <button className="px-6 py-3 cursor-pointer rounded-xl font-bold border-2 border-white/30 transition-opacity hover:opacity-80">
              Download CV
            </button>
          </div>

          <div className="mt-8">
            <div
              className="
              flex flex-wrap 
              bg-[#83838325] backdrop-blur-2xl p-4 sm:p-6 rounded-xl 
              text-lg sm:text-xl font-semibold justify-around
            "
            >
              <div className="flex flex-col items-center gap-1 p-2">
                <h4 className={`text-2xl sm:text-3xl text-primary`}>5+</h4>
                <p>Experience</p>
              </div>
              {/* Divider (border opacity-50) */}
              <div className="border-r border-white/20 my-2"></div>
              <div className="flex flex-col items-center gap-1 p-2">
                <h4 className={`text-2xl sm:text-3xl text-primary`}>20+</h4>
                <p>Project done</p>
              </div>
              {/* Divider (border opacity-50) */}
              <div className="border-r border-white/20 my-2 hidden sm:block"></div>
              <div className="flex flex-col items-center gap-1 p-2">
                <h4 className={`text-2xl sm:text-3xl text-primary`}>80+</h4>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Image Section (Col 2) */}
        <div className="flex justify-center lg:justify-end py-12 lg:py-0 -translate-y-19">
          <figure className="w-full max-w-xl flex justify-center aspect-4/5 object-cover">
            <img
              className="w-full h-full object-cover rounded-3xl"
              src={profile}
              alt="profile photo"
              onError={(e) => {
                e.currentTarget.src =
                  "https://placehold.co/400x500/1C1917/A8A29E?text=PROFILE+IMAGE";
              }}
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
