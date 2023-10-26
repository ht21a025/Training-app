import "./App.css";
import SignIn from "./components/Login/SignIn";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Training from "./Training";

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return( 
      <div className="loading">
        <div className="loading-text">Loading...</div>
      </div>
    );
  }
  return <div className="App">{user ? <Training /> : <SignIn />}</div>;
}

export default App;
