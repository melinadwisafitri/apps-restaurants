/* eslint-disable no-console */
import restaurantdbSource from '../../data/theRestaurantdb_source';

const Home = {
  async render() {
    return `
    <a href="#content" class="skip_content">Menuju ke Kontent</a>
    <jumbotron-elements id='jumbotron'></jumbotron-elements>
    <info-elements></info-elements>
    <content-main-elements></content-main-elements>
    <section class="container_list">
        <list-resto class="list-resto"></list-resto>
    </section>
    `;
  },

  async afterRender() {
    const resto = await restaurantdbSource.home();

    const restaurantsContainer = document.querySelector('list-resto');

    const render = (data) => {
      restaurantsContainer.dataResto = data;
    };

    if (resto.error === false) {
      const dataRestaurant = resto.restaurants;
      render(dataRestaurant);
    }

    let jumbotronImage = ['../images/heros/hero-image_4.jpg', '../images/heros/hero-image_1.jpg', '../images/heros/hero-image_2.jpg', '../images/heros/hero-image_3.jpg'];
    let numImage = 0;
    const jumbotron = document.querySelector('.jumbotron');

    const mediaQuery = window.matchMedia('(min-width: 800px)');
    function handleMediaQuery(event) {
      if (event.matches) {
        jumbotronImage = ['../images/heros/hero-image_4-large.jpg', '../images/heros/hero-image_1-large.jpg', '../images/heros/hero-image_2-large.jpg', '../images/heros/hero-image_3-large.jpg'];
      } else {
        jumbotronImage = ['../images/heros/hero-image_4-small.jpg', '../images/heros/hero-image_1-small.jpg', '../images/heros/hero-image_2-small.jpg', '../images/heros/hero-image_3-small.jpg'];
      }
    }
    handleMediaQuery(mediaQuery);

    function slideShowJumbotron() {
      if (numImage >= jumbotronImage.length) {
        numImage = 0;
      }
      jumbotron.style.backgroundImage = `url("${jumbotronImage[numImage]}")`;
      jumbotron.style.transition = '2s ease-in-out';
      numImage += 1;
      setTimeout(slideShowJumbotron, 10000);
    }
    slideShowJumbotron();

    window.onscroll = () => {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.querySelector('.header').style.backgroundColor = '#333946ff';
        document.querySelector('.header_1').style.padding = 0;
      } else {
        document.querySelector('.header').style.backgroundColor = 'transparent';
        document.querySelector('.header_1').style.padding = '3%';
      }
    };
  },
};

export default Home;
