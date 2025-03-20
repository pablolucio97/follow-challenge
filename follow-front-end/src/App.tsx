import { Button } from "@/components/buttons/Button";
import "./styles/index.css";
import { Loading } from "@/components/miscellaneous/Loading";

function App() {
  return (
    <main className="w-full h-full">
      <h1>Follow Challenge</h1>
      <Button title="Cadastrar" isLoading />
      <Loading />
    </main>
  );
}

export default App;
