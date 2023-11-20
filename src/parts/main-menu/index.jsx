import './index.css';

function MainMenu() {
  return (
    <div className="main-menu">
      <a href="#" className="main-menu__item main-menu__item_search"></a>
      <a href="#" className="main-menu__item main-menu__item_home main-menu__item_active"></a>
      <a href="#" className="main-menu__item main-menu__item_tv-shows"></a>
      <a href="#" className="main-menu__item main-menu__item_movies"></a>
      <a href="#" className="main-menu__item main-menu__item_genres"></a>
      <a href="#" className="main-menu__item main-menu__item_watch-later"></a>
    </div>
  );
}

export default MainMenu;
