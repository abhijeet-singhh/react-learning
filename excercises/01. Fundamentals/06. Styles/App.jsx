import IconComponent from "./Components/IconComponent";
import ProfileCard from "./Components/ProfileCard";
import StyleCard from "./Components/StyleCard";

function App() {

  return (
    <div className="min-h-screen flex flex-col justify-center gap-8 items-center ">
      <StyleCard />
      <ProfileCard />
      <IconComponent />
    </div>
  )
}

export default App
