import Form from "./components/Form"
import Moon from "./assets/icon-moon.svg"

function App() {

  return (
    <main className="h-full flex justify-center items-start">
      <div className="max-container w-5/12">
        <header className="flex justify-between items-center my-9">
          <h1 className="heading-1">devfinder</h1>
          <div className="flex justify-center items-center gap-4">
            <h4 className="heading-4 uppercase font-bold tracking-[2.5px]">dark</h4>
            <img src={Moon} alt="Moon icon" />
          </div>
        </header>
        <Form />
      </div>
   </main>
  )
}

export default App
