import { auth } from "../../firebase";
import { useAuthState } from 'react-firebase-hooks/auth';

function SidebarIcon() {
  const [user] = useAuthState(auth);

  // user.displayNameがnullの場合、デフォルト値を設定
  const displayName = user?.displayName || "ユーザー名なし";

  return (
    <div className='SidebarIcon'>
      {user && user.photoURL ? (
        <img src={user.photoURL} alt={displayName} />
      ) : (
        <p>プロフィール画像がありません</p>
      )}
      <p>{displayName}</p>
    </div>
  );
}

export default SidebarIcon;
