import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
import "./SignIn.css";
import Icon from "../../images/training.png";

function SignIn() {
  function SignInButton() {
    const signInWithGoogle = () => {
      signInWithPopup(auth, provider);
    };

    return (
      <button onClick={signInWithGoogle} className="signInButton">
        グーグルでサインイン{" "}
      </button>
    );
  }

  return (
    <div className="SignIn_background">
      <div className="formContainer">
        <h1>筋トレアプリ</h1>
        <img className="logo" src={Icon} alt="" />
        <SignInButton />
      </div>
    </div>
  );
}

export default SignIn;
