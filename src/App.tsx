import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";


function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  function toggleMode() {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  return (
    <main className={`h-full flex justify-center items-start ${darkMode ? "bg-black" : "bg-white" }`}>
      <div className="max-container w-full p-4 md:p-0 md:w-5/12">
        <Header
          toggleDarkMode={darkMode}
          toggleOnClick={toggleMode}
        />
        <Form toggleDarkMode={darkMode} />
      </div>
   </main>
  )
}

export default App
