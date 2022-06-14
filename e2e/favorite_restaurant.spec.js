Feature('favorite restaurant');

const assert = require('assert');

const contentEmpty = 'You don\'t have any item favorite in here';

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('show empty favorite', ({ I }) => {
  I.seeElement('.favorite_item__not_found');
  I.see(contentEmpty, '.favorite_item__not_found');
});

Scenario('show header', ({ I }) => {
  I.seeElement('.header');
});

Scenario('favorite one restaurant', async ({ I }) => {
  I.seeElement('.favorite_item__not_found');
  I.see(contentEmpty, '.favorite_item__not_found');

  I.amOnPage('/');

  const firstTitle = await I.grabTextFrom('.name_resto');
  I.seeElement('#to-detail__page');
  I.click(locate('#to-detail__page').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.list-resto');
  I.seeElement('#to-detail__page');
  const favoriteTitle = await I.grabTextFrom('.name_resto');
  assert.strictEqual(firstTitle, favoriteTitle);
});

Scenario('Unfavorite one Restaurant', async ({ I }) => {
  I.seeElement('.favorite_item__not_found');
  I.see(contentEmpty, '.favorite_item__not_found');

  I.amOnPage('/');
  I.seeElement('#to-detail__page');
  const firstTitle = await I.grabTextFrom('.name_resto');
  I.click(locate('#to-detail__page').first());

  I.seeElement('#likeButton');
  I.click(locate('#likeButton'));

  I.amOnPage('/#/favorite');
  I.seeElement('#to-detail__page');
  const favoriteTitle = await I.grabTextFrom('.name_resto');
  assert(firstTitle, favoriteTitle);
  I.click(locate('#to-detail__page'));

  I.seeElement('#likeButton');
  I.click(locate('#likeButton'));

  I.amOnPage('/#/favorite');
  I.seeElement('.favorite_item__not_found');
  I.see(contentEmpty, '.favorite_item__not_found');
});
