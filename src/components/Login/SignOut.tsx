import { auth } from "../../firebase";
import "./SignOut.css";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

function SignOut() {
  return (
    <div className="signOutContainer">
      <button onClick={() => auth.signOut()} className="signOutButton">
        <ExitToAppIcon />
        <div id="title">サインアウト</div>
      </button>
    </div>
  );
}

export default SignOut;
