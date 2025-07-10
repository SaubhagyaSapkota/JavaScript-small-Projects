import Button from "./components/button";
import Counter from "./components/counter";
import  SideBar  from "./components/SideBar";
import { BrowserRouter } from "react-router-dom";

const App = () => {

  // return (
  //   <BrowserRouter>
  //         <SideBar />
  //   </BrowserRouter>
  // );
  return (
    <div>
      <Button variant="primary" size="md">
        Primary
      </Button>

      <Button variant="secondary" size="sm">
        Secondary
      </Button>

      <Button variant="outline" size="lg">
        Outline
      </Button>

      <Button variant="text" size="sm">
        Text
      </Button>

      <Button variant="rounded" size="lg">
        Rounded
      </Button>

      <Button variant="squared" size="md">
        Squared
      </Button>

      <Button variant="primary" disabled>
        Disabled
      </Button>
    </div>
  );
};

export default App;
