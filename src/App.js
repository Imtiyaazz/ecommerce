import logo from "./logo.svg";
import "./App.css";
import Landing from "./component/Landing";
import { Card, CardContent } from "@mui/material";
import Shadab from "./Shadab";

function App() {
  return (
    <Card>
      <CardContent>
        {/* <Landing /> */}
        <Shadab />
      </CardContent>
    </Card>
  );
}

export default App;
