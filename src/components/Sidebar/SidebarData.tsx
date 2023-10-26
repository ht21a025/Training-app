import HomeIcon from "@mui/icons-material/Home";
import Person2Icon from '@mui/icons-material/Person2';
import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import ChatIcon from '@mui/icons-material/Chat';

export const SidebarData = [
  {
    title: "ホーム",
    icon: <HomeIcon />,
    link: "/home",
  },
  {
    title: "プロフィール",
    icon: <Person2Icon/>,
    link: "/profile",
  },
  {
    title: "筋トレメニュー",
    icon: <SportsMartialArtsIcon />,
    link: "/menu",
  },
  {
    title: "予定",
    icon: <EditCalendarIcon />,
    link: "/schedule",
  },
  {
    title: "交流",
    icon: <ChatIcon />,
    link: "/chat",
  },
];