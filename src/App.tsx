import { useState } from "react";
import Form from "./components/Form";
import MoonIcon from "./components/icons/MoonIcon";
import SunIcon from "./components/icons/SunIcon";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  function toggleMode() {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  return (
    <main className={`h-full flex justify-center items-start ${darkMode ? "bg-black" : "bg-white" }`}>
      <div className="max-container md:w-5/12">
        <header className="flex justify-between items-center my-9">
          <h1 className={`${darkMode ? "heading-1-white" : "heading-1"}`}>devfinder</h1>
          <div className="flex justify-center items-center gap-4 cursor-pointer" onClick={toggleMode}>
            {darkMode ? (
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
        <Form toogleDarkMode={darkMode} />
      </div>
   </main>
  )
}

export default App
