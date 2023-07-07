import { Header } from "./components/Header/Header.jsx"
import "./app.css"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx"

const App = () => {
  return (
    <div>
      <Header />
      <ItemListContainer />
    </div>
  )
}

export default App