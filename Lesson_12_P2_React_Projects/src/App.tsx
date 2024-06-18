import Heading from "./components/Heading"
import Section from "./components/Section"
import Counter from "./components/Counter"
import List from "./components/List"


function App() {

  return<>
    <Heading title= {"Heaidng"} />
    <Section subHeading= {"Choti Heading"}>Childeren</Section> 
    {/* subHeading is prop while 'Childeren' is children */}
    <Counter />
    <List items = {["Tea, Coffee, Coldrink"]} render={(item: string) => <span className="gold">{item}</span>}/>
  </> 

}

export default App
