import Header from "./components/Header/Header"
import ListAnimals from "./components/ListAnimals/ListAnimals"

import animalList from "./components/ListAnimals/animalList.json"
import Check from "./components/Check/Check"

function App() {
  return (
    <>
      <Header />
      <ListAnimals animalList={animalList} />
      <Check />
    </>
  )
}

export default App
