import { Habit } from "./components/Habit"
import './styles/global.css';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <Habit completed={3}/>
      <Habit completed={6}/>
      <Habit completed={2}/>
      <Habit completed={11}/>
    </div>
    )
}

export default App
