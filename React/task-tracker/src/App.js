import Header from "./components/Header";
import Title from "./components/Title";

function App() {
  return (
    <div className="App">
        <h1>Welcome to React</h1>
        <Header/>
        <Header title = "This is using props"/>
        <Title/>

    </div>
  );
}

export default App;
