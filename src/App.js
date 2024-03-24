import './App.css';
import Banner from "./components/banner/Banner"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Container from "./components/Container/Container"

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Container>
        <h1>Hello World!</h1>
        <p>Olá Mundo! Estou aprendendo React JS!</p>
      </Container>
      <Footer />

    </div>
  );
}

export default App;
