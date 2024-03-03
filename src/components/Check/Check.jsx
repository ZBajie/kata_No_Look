import { useState } from "react"

const Check = () => {
  const [cat, setCat] = useState(false)
  const [dog, setDog] = useState(false)
  const handleCat = () => {
    if (cat) {
      setCat(false)
    } else {
      setCat(true)
    }
  }
  const handleDog = () => {
    if (dog) {
      setDog(false)
    } else {
      setDog(true)
    }
  }
  return (
    <section className="check">
      <h3>
        <label htmlFor="cat">Cat</label>
        <input type="checkbox" value="Cat" id="cat" onChange={handleCat} />

        <label htmlFor="dog"> or Dog</label>
        <input type="checkbox" value="Dog" id="dog" onChange={handleDog} />
      </h3>
      <div>
        {cat && !dog && <p>Cat</p>}
        {cat && dog && <p>Cat and dog</p>}
        {!cat && dog && <p>Dog</p>}
      </div>
    </section>
  )
}
export default Check
