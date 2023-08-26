// type Props = {};
import { useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import { SelectedPage } from "../../shared/types";
import Link from "./Link";
import Logo from "/src/assets/Logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import ActionButton from "../../shared/ActionButton";
type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isTopOfPage: boolean;
};
const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const [isMenu, setIsMenu] = useState<boolean>(false);
  const flexBetween = "flex items-center justify-between ";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBg = isTopOfPage ? "" : "bg-primary-100 drop-shadow";
  return (
    <nav className={`${navbarBg} ${flexBetween} fixed top-0 z-30 w-full p-6`}>
      <div className={`${flexBetween} max-auto w-5/6`}>
        <div className={`${flexBetween} w-full gap-16`}>
          {/* Left side */}
          <img alt="logo" src={Logo} />
          {/* right side */}
          {isAboveMediumScreens ? (
            <div className={`${flexBetween} w-full`}>
              <div className={`${flexBetween} gap-8 text-sm`}>
                <Link
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Benefits"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Our classes"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Contact"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
              <div className={`${flexBetween} gap-8`}>
                <p>Sign In</p>
                <ActionButton setSelectedPage={setSelectedPage}>
                  Become a member
                </ActionButton>
              </div>
            </div>
          ) : (
            <button
              className="rounded-full bg-secondary-500 p-2 text-white"
              onClick={() => setIsMenu(!isMenu)}
            >
              <AiOutlineMenu />
            </button>
          )}
        </div>
      </div>

      {/* Mobile Modal */}
      {!isAboveMediumScreens && isMenu && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          {/* close icon */}
          <div className="flex justify-end p-12">
            <button
              onClick={() => setIsMenu(!isMenu)}
              className="text-gray-600"
            >
              <AiOutlineClose />
            </button>
          </div>
          {/* menu item */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Our classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
