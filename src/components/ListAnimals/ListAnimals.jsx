const ListAnimals = (animalList) => {
  const animals = animalList.animalList.data

  return (
    <aside className="aside-animal-list">
      <ul>
        {animals.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </aside>
  )
}
export default ListAnimals
