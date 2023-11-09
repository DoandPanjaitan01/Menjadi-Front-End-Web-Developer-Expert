import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (resto) => `
  <h2 class="resto_title">${resto.name}</h2>
  <img class="resto_poster lazyload" data-src="${CONFIG.BASE_IMAGE_URL}${resto.pictureId}" alt="${resto.name}" />
  <div class="resto_info">
    <h3 class="info-list">Adress</h3>
        <p class="p-detail">${resto.address}, ${resto.city}</p><br>
    <h3 class="info-list">Rating</h3>
        <i title="ratings" class="fa fa-star checked"></i>
        <p class="rating-name p-detail">${resto.rating}</p><br>
    <br><h3 class="info-list">Category</h3>
    <p class="categories p-detail">${resto.categories.map((category) => `
            <span class="category">${category.name}</span>`).join('')}</p>
  </div>
  <div class="resto_overview">
    <br><h3 class="info-list">Description</h3>
    <p class="p-detail">${resto.description}</p>
  </div>

  <br><br><h2>Menu</h2>
  <div class="menu-detail">
      <div class="food">
        <h4>Food</h4><br>
        <ul>${resto.menus.foods.map((food, i) => `
                <li><p>${i + 1}) ${food.name}</p></li>`).join('')}
        <ul>
      </div>
      <div class="drink">
        <h4>Drink</h4><br>
        <ul>
          ${resto.menus.drinks.map((drink, i) => `
                <li><p>${i + 1}) ${drink.name}</p></li>`).join('')}
        <ul>
      </div>
    </div>

    <br><br><h2>Reviews</h2><br>
    <div class="review-detail">${resto.customerReviews.map((review) => `
          <div class="review-detail-item">
            <div class="header-review">
              <p class="namereview">${review.name}</p>
              <p class="date-rev">${review.date}</p>
            </div>
            <div class="bodyrev">
              ${review.review}
            </div>
          </div>`).join('')}
    </div>
`;

const createRestoItemTemplate = (resto) => `
    <div class="list_item">
        <img class="list_item_thumb lazyload" data-src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}" title="${resto.name}">
        <div class="city">${resto.city}</div>
        <div class="list_item_content">
            <p class="list_item_rating"> rating :
            <i title="ratings" class="fa fa-star"></i>
            <span>${resto.rating}</span>    
            </p>
            <h1 class="list_item_title">
                <span class="span_title">
                    <a class="restaurant-item_link" href="#/detail/${resto.id}" >${resto.name}</a>
                </span>
            </h1>
            <div class="list_item_desc">${resto.description.slice(0, 200)}...</div>
        </div>
    </div>
  `;

const createLikeButtonTemplate = () => `
<button aria-label='like this restaurant' id='likeButton' class='like'>
    <i class='fa fa-heart-o' aria-hidden='true'></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label='unlike this restaurant' id='likeButton' class='like'>
    <i class='fa fa-heart' aria-hidden='true'></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
