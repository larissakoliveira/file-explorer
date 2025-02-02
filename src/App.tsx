import './App.css'
import File from './components/File/File'
import Folder from './components/Folder/Folder'
import Project from './components/Project/Project'

function App() {

  return (
    <div className="container">
      <Project />
      <Folder />
      <File />
    </div>
  )
}

export default App
