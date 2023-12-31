import { SelectedPage } from "../../shared/types";
import HomePageText from "../../assets/HomePageText.png";
import HomePageGraphic from "../../assets/HomePageGraphic.png";
import SponsorRedbull from "../../assets/SponsorRedBull.png";
import SponsorForbes from "../../assets/SponsorForbes.png";
import SponsorRFortune from "../../assets/SponsorFortune.png";

import useMediaQuery from "../../hooks/useMediaQuery";
import ActionButton from "../../shared/ActionButton";
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6">
        {/* Main header */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* haeding */}
          <div className="md:-mt-20">
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <img src={HomePageText} alt="homepagetext" />
              </div>
            </div>
            <p className="mt-8 text-sm ">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </div>
          {/* action */}
          <div className="mt-8 flex items-center gap-8 ">
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
          </div>
        </div>
        {/* image */}
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
          <img src={HomePageGraphic} alt="homepage" />
        </div>
      </div>
      {/* Sponsors */}
      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <img src={SponsorRedbull} alt="redbull" />
              <img src={SponsorForbes} alt="force" />
              <img src={SponsorRFortune} alt="fortune" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
