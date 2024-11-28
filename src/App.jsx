import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopBar from "./components/MyTopBar";
import Footer from "./components/MyFooter";
import BooksList from "./components/BooksList";
//import Main from "./components/AllTheBooks";

function App() {
  return (
    <>
      <TopBar />
      {/* Creare l'alert */}
      <BooksList />

      <Footer />
    </>
  );
}

export default App;
