import '../scss/App.scss'
import Header from './basic/Header/Header'
import Navigation from './basic/Navigation/Navigation'
import Incidents from './modules/Incidents/Incidents'


function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Incidents />
      {/* <ModuleOptions /> */}
      {/* <Table /> */}
    </div>
  );
}

export default App;
