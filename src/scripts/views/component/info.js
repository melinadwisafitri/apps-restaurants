class infoElements extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <section class="ingredient">
        <h2>Food Ingredients</h2>
        <div class="ingredients">
        <div class="ingredients-1">
            <img src="../images/food.png" alt="">
            <h4>Fresh</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem dignissimos labore illo maxime debitis quam, ipsum amet aliquid. Autem sequi ratione ducimus dolor maiores blanditiis velit repellat. Beatae, facilis sint.</p>
        </div>
        <div class="ingredients-1">
            <img src="../images/ingredients.png" alt="">
            <h4>Best ingredients</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium tenetur necessitatibus ipsum labore expedita? Voluptatem, doloremque nisi culpa dicta labore nihil! Mollitia dolorem perspiciatis culpa nulla impedit dignissimos ipsum praesentium.</p>
        </div>
        <div class="ingredients-1">
            <img src="../images/food.png" alt="">
            <h4>Quality</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab dolor, quis beatae ex quia, cupiditate consequatur error sint praesentium ad ea ipsum temporibus iste dolore in debitis alias quisquam eaque?</p>
        </div>
        </div>
    </section>
        `;
  }
}

customElements.define('info-elements', infoElements);
