import Navbar from "./Navbar";
import MainContent from "./MainContent";
import "./index.css";
import SocialContextProvider from "../Store/store-social";

function App() {
  return (
    <SocialContextProvider>
      <Navbar />
      <div className="exm">
        <MainContent />
      </div>
    </SocialContextProvider>
  );
}

export default App;
