import { SelectedPage } from "./types";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <a
      className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
      onClick={() => {
        setSelectedPage(SelectedPage.Contact);
      }}
      href={`#${SelectedPage.Contact}`}
    >
      {children}
    </a>
  );
};

export default ActionButton;
