import './App.scss';
import { GetDataProvider } from "./contexts/GetDataContext";
import Table from "./components/Table/Table";

function App() {
  return (
    <GetDataProvider>
      <Table />
    </GetDataProvider>
  );
}

export default App;
