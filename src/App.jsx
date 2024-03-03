import Header from "./components/Header/Header"
import ListAnimals from "./components/ListAnimals/ListAnimals"

import animalList from "./components/ListAnimals/animalList.json"
function App() {
  return (
    <>
      <Header />
      <ListAnimals animalList={animalList} />
    </>
  )
}

export default App
