'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Books', [
        {
        title: 'Life Will Be the Death of Me',
        author: 'Chelsea Handler',
        cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1552494925l/43885930._SX98_.jpg'
      },
      {
        title: 'Things That Make White People Uncomfortable',
        author: 'Michael Bennet',
        cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1516988339l/37823157._SX98_.jpg'
      },
        {
          title: 'The Heartbeat of Wounded Knee',
          author: 'David Treuer',
          cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1513714679l/36620482._SX98_.jpg'
      },
        {
          title: 'Between the World and Me',
          author: 'Ta-Nehisi Coates',
          cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1451435027l/25489625._SX98_.jpg'
      },
        {
          title: 'The Sympathize',
          author: 'Viet Thanh Nguyen',
          cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1423543886l/23168277._SX98_.jpg'
      },
        {
          title: 'Harry Potter and the Goblet of Fire',
          author: "J.K. Rowling",
          cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1554006152l/6._SX98_.jpg'
      },
        {
          title: 'Harry Potter and the Order of the Phoenix',
          author: 'J.K. Rowling',
          cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546910265l/2._SX98_.jpg'
      },
        {
          title: 'The 7 Habits of Highly Effective People',
          author: 'Stephen R. Covey',
          cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1421842784l/36072._SX98_.jpg'
      },
        {
          title: 'The Puzzle of Polynesia: Sea People',
          author: 'Christina Thompson',
          cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1542039373l/40536236._SX98_.jpg'
      },
        {
          title: 'Harry Potter and the Half-Blooded Prince',
          author: 'J.K. Rowling',
          cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1587697303l/1._SX98_.jpg'
      },
        {
          title: 'The Soul of an Octopus',
          author: 'Sy Montgomery',
          cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1425611143l/22609485._SX98_.jpg'
      },
        {
          title: "Girl, Stop Apologizing",
          author: 'Rachel Hollis',
          cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1550607364l/40591267._SX98_.jpg'
      },
        {
          title: 'Verity',
          author: 'Colleen Hoover',
          cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1537519686l/41957126._SX98_.jpg'
      },
        {
          title: 'Cutting for Stone',
          author: 'Abraham Verghese',
          cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1553715166l/3591262._SX98_.jpg'
      },
        {
          title: 'Stamped: Racism, Antiracism, and You',
          author: 'Ibram X. Kendi',
          cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1568739320l/52220686._SX98_SY160_.jpg'
      },
        {
          title: 'Women Race & Class',
          author: 'Angela Y. Davis',
          cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1359985746l/635635._SX98_.jpg'
      },
        {
          title: 'Killers of the Flower Moon',
          author: 'David Grann',
          cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1470699853l/29496076._SX98_.jpg'
      },
        {
          title: 'City of Girls',
          author: 'Elizabeth Gilbert',
          cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1583203648l/51918871._SX98_.jpg'
      },
        {
          title: "White Fragility: Why It's So Hard for White People to Talk About Racism",
          author: 'Robin DiAngelo',
          cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1548478235l/43708708._SY75_.jpg'
      },
        {
          title: 'Daughter of Molokai',
          author: 'Alan Brennert',
          cover: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1525487679l/32854324._SY75_.jpg'
      },
    
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('Books', null, {});
    
  }
};
