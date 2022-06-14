Feature('Review restarant');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('customer review show', async ({ I }) => {
  I.seeElement('.to-detail');
  I.click(locate('.to-detail').first());

  I.seeElement('#customerReview');
  const nameReviwer = await I.grabTextFrom('.review_name');
  I.see(nameReviwer);
});

Scenario('add customer review', async ({ I }) => {
  I.seeElement('.to-detail');
  I.click(locate('.to-detail').first());

  I.seeElement('#customerReview');
  I.seeElement('#btn_review');
  I.click(locate('#btn_review'));

  const nameNewReviewer = 'abc';
  const reviewNew = 'lorem ipsum bla bala bala ';

  I.fillField('#name_reviewer', nameNewReviewer);
  I.fillField('#review_new', reviewNew);

  I.click('#send_review');

  I.seeElement('#customerReview');
});
