import {Container} from "react-bootstrap";
import Header from "./component/Header";
import Footer from "./component/Footer";
import HomeScreen from "./screens/HomeScreen"
import "./index.css";
function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
        <h1>Welcome To ProShop</h1>
        <HomeScreen/>
        </Container>
      </main>
      <Footer/>
    </>
  );
}

export default App;
