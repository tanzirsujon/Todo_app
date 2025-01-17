import "./App.css";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
      </div>

      <header className="bg-slate-400">
        <Navbar />
      </header>
      <main>
        <Main />
      </main>
      <footer className="  fixed bottom-0 left-[45%] font-roboto text-center font-bold">
        &copy; Tanzir_Sujon
      </footer>
    </>
  );
}

export default App;
