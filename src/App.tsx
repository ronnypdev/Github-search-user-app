import { useState } from "react";
import Form from "./components/Form"
import MoonIcon from "./components/icons/MoonIcon"

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <main className="h-full flex justify-center items-start">
      <div className="max-container md:w-5/12">
        <header className="flex justify-between items-center my-9">
          <h1 className="heading-1">devfinder</h1>
          <div className="flex justify-center items-center gap-4 cursor-pointer">
            <h4 className="heading-4 uppercase font-bold tracking-[2.5px] hover:text-black">dark</h4>
            <MoonIcon fillColor="#697C9A"/>
          </div>
        </header>
        <Form toogleDarkMode={darkMode} />
      </div>
   </main>
  )
}

export default App
