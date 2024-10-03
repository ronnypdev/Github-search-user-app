import MoonIcon from "./icons/MoonIcon";
import SunIcon from "./icons/SunIcon";

type FormProps = {
  toggleDarkMode: boolean;
  toggleOnClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

export default function Header({
  toggleDarkMode,
  toggleOnClick
}: FormProps) {
  return (
    <>
      <header className="flex justify-between items-center my-9">
      <h1 className={`${toggleDarkMode ? "heading-1-white" : "heading-1"}`}>devfinder</h1>
      <div className="flex justify-center items-center gap-4 cursor-pointer" onClick={toggleOnClick}>
        {toggleDarkMode ? (
          <>
            <h4 className="heading-4-white uppercase font-bold tracking-[2.5px] hover:text-white">light</h4>
            <SunIcon fillColor="#FFFFFF" />
          </>
        ) : (
          <>
            <h4 className="heading-4 uppercase font-bold tracking-[2.5px] hover:text-black">dark</h4>
            <MoonIcon fillColor="#697C9A" />
          </>
        )}
      </div>
    </header>
    </>
  )
}
