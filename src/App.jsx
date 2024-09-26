import { Sidebar } from "./components/sidebar/sidebar";
import HeroSreen from "./hero-screen";

function App() {
  return (
    <div className="lato-regular h-full flex main">
      
      <Sidebar/>

      <div className="grid-screen">

      <HeroSreen />
      </div>
    </div>
  );
}

export default App;
