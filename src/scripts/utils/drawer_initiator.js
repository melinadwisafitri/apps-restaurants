const drawerButton = {
  init({ buttons, drawer, content }) {
    buttons.addEventListener('click', (event) => {
      this._openDrawer(event, drawer, content);
    });

    // content.addEventListener('click', (event) => {
    //   this._closeDrawer(event, drawer);
    // });
  },

  _openDrawer(event, drawer, content) {
    event.stopPropagation();
    drawer.classList.toggle('side_bar-active');
    content.classList.toggle('header__button--side_bar-active');
    event.currentTarget.classList.toggle('menu--active');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },
};

export default drawerButton;
