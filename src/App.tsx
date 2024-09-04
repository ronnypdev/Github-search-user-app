import Form from "./components/Form"
import Moon from "./assets/icon-moon.svg"

function App() {

  return (
    <main className="h-full flex justify-center items-center">
      <div className="max-container">
        <header>
          <h1 className="heading-1">devfinder</h1>
          <div>
            <p>dark</p>
            <img src={Moon} alt="Moon icon" />
          </div>
        </header>
        <Form />
      </div>
   </main>
  )
}

export default App
