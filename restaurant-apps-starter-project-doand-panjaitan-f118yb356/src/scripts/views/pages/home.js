/* eslint linebreak-style: ["error", "windows"] */
import RestaurantSource from '../../data/restaurant-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <section class="content">
        <div class="latest">
            <h1>Explore Restaurant</h1>
            <div class="list" id="resto"></div>
        </div>
      </section>
      `;
  },

  async afterRender() {
    const restoContainer = document.querySelector('#resto');
    const data = await RestaurantSource.getRestaurantList();
    data.restaurants.forEach((resto) => {
      restoContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Home;
