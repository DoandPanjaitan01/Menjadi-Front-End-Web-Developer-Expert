/* eslint linebreak-style: ["error", "windows"] */
import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestoDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import FavoriteRestoIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
      <section class="content">
        <div id="main-container">
          <section id="detail"></section>
        </div>
        <div id="likeButtonContainer"></div>
      </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestaurantSource.getRestaurantDetail(url.id);
    const restaurantContainer = document.querySelector('#detail');
    restaurantContainer.innerHTML = createRestoDetailTemplate(resto.restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteResto: FavoriteRestoIdb,
      resto: {
        id: url.id,
        name: resto.restaurant.name,
        description: resto.restaurant.description,
        city: resto.restaurant.city,
        adress: resto.restaurant.adress,
        rating: resto.restaurant.rating,
        pictureId: resto.restaurant.pictureId,
      },
    });
  },
};

export default Detail;
