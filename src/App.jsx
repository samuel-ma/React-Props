import './App.css'
import Profile from './profile/Profile'

function App() {

  return (
    <div className="App" style={{backgroundColor: "#fafafa", margin: "0", padding: "0", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "600px"}}>
      <Profile handleName profession="FrontEnd Developer" bio="Hello there👋, am an aspiring 10X Dev" fullName="Samuel Ma" image="https://img.freepik.com/free-photo/angry-hate-rage-emotional-angry-afro-man-pink-studio-background-emotional-young-face-profile-male-half-length-portrait-human-emotions-facial-expression-concept-trendy-colors_155003-17606.jpg?w=2000" />
    </div>
  )
}

export default App
