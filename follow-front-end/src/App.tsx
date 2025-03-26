import { Toaster } from "react-hot-toast";
import AuthContextProvider from "./contexts/AuthContext";
import Router from "./routes";
import "./styles/index.css";

function App() {
  return (
    <AuthContextProvider>
      <main className="w-full h-full">
        <Toaster />
        <Router />
      </main>
    </AuthContextProvider>
  );
}

export default App;
