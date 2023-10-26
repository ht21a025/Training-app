import Sidebar from "./components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Menus/Home/Home";
import Profile from "./components/Menus/Profile/Profile";
import TrainingMenu from "./components/Menus/TrainingMenu/TrainingMenu";
import Schedule from "./components/Menus/Schedule/Schedule";
import Chat from "./components/Menus/Chat/Chat";
import Daikyoukin from "./components/Menus/TrainingMenu/Detail/Daikyoukin";
import Sankakukin from "./components/Menus/TrainingMenu/Detail/Sankakukin";
import Jyouwannitoukin from "./components/Menus/TrainingMenu/Detail/Jyouwannitoukin";

function Training() {
  return (
    <div className="App">
      <Sidebar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/menu" element={<TrainingMenu />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/menu/daikyoukin" element={<Daikyoukin />} />
          <Route path="/menu/sankakukin" element={<Sankakukin />} />
          <Route path="/menu/jyouwannitoukin" element={<Jyouwannitoukin />} />
        </Routes>
      </div>
    </div>
  );
}

export default Training;