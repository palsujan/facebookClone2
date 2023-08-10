import Feed from "./component/Feed";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";

function App() {
  return (
    <div className="App">
        {/*Hearder*/}
          <Header/>

          <div className="app_body">
            <Sidebar/>
            <Feed/>
          </div>
        {/*App Body*/}
            {/*Sidebar*/}
            {/*Post*/}
            {/*Right*/}
    </div>
  );
}

export default App;
