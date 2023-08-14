import Feed from "./component/Feed";
import Header from "./component/Header";
import Login from "./component/Login";
import RightSidebar from "./component/RightSidebar";
import Sidebar from "./component/Sidebar";
import { useStateValue } from "./component/StateProvider";

function App() {
  const [{user}, dispatch ] = useStateValue();
  console.log("Sujen",user)
  // const user = null;
  return (
    <>
      {
        !user ? (<Login/>) : (
          <div className="App">
            <Header/>

            <div className="app_body">
              <Sidebar/>
              <Feed/>
              <RightSidebar/>
            </div> 
          </div>
        )
      }
      
    </>
  );
}

export default App;
