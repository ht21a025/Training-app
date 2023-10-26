import { TariningData } from "./TrainingData";
import "./TrainingMenu.css";

function TrainingMenu() {
  const handleMenuClick = (link: string) => {
    setTimeout(() => {
      window.location.pathname = link;
    }, 500);
  };

  return (
    <div>
      <div className="menu_layout">
        <h1>トレーニングメニュー</h1>
        {TariningData.map((value, key) => {
          return (
            <div
              key={key}
              className="menu"
              onClick={() => handleMenuClick(value.link)}
            >
              <div className="menu_item">
                {value.title}
                <div>
                  <img src={value.img} alt="" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TrainingMenu;
