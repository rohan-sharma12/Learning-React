import './App.css'
import Card from './components/Card'

function App() {
  return (
    <>
    <h1 className="text-5xl font-bold">
          Tailwind & Props
    </h1>
    
    <div className="flex items-center justify-center p-3 ">
      <Card title="Lenovo Ideapad" description="8 RAM i7 10th Gen"/>
      <Card title="Asus Vivobook"/>
    </div>
    </>
  );
}


export default App
