import Button from "./components/button";

const App = () => {
  return (
    <div className="button-container">
      <Button variant="primary" size="sm">
        Primary
      </Button>

      <Button variant="secondary" size="sm">
        Secondary
      </Button>

      <Button variant="outline" size="sm">
        Outline
      </Button>

      <Button variant="rounded" size="lg">
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
