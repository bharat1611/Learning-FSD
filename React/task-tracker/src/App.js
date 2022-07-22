import Header from "./components/Header";
import Title from "./components/Title";

function App() {
  return (
    <div className="App">
        <h1>Welcome to React</h1>
        <Header title = "This is using props"/>
        {/* <Header title = {100}/> */}
        <Header title = "Actual Heading"/>
        
        <Title/>


    </div>
  );
}

export default App;
