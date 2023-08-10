import Feed from "./component/Feed";
import Header from "./component/Header";
import RightSidebar from "./component/RightSidebar";
import Sidebar from "./component/Sidebar";

function App() {
  return (
    <div className="App">
        {/*Hearder*/}
          <Header/>

          <div className="app_body">
            <Sidebar/>
            <Feed/>
            <RightSidebar/>
          </div>
        {/*App Body*/}
            {/*Sidebar*/}
            {/*Post*/}
            {/*Right*/}
    </div>
  );
}

export default App;
