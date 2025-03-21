import AuthContextProvider from "./contexts/AuthContext";
import Router from "./routes";
import "./styles/index.css";

function App() {
  return (
    <AuthContextProvider>
      <main className="w-full h-full">
        <Router />
      </main>
    </AuthContextProvider>
  );
}

export default App;
