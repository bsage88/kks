import React from 'react';
import Andrew from './images/andrew.jpg';
import Anna from './images/anna.jpg';
import Brian from './images/brian.jpg';
import Dorota from './images/dorota.jpg';
import Isabella from './images/isa.jpg';
import Jarek from './images/jarek.jpg';
import Marian from './images/marian.jpg';
import Monika from './images/monika.jpg';
import Peter from './images/peter.jpg';
import Rob from './images/rob.jpg';

export const profilePictures = {
  Andrew,
  Anna,
  Babcia: null,
  Brian,
  Dorota,
  Isabella,
  Jarek,
  Marian,
  Monika,
  Peter,
  Rob
};

export const routes = {
  SIGN_IN: '/',
  HOME: '/default'
};

export const wishlists = {
  Andrew: [
    <a
      target="_blank"
      href="https://www.amazon.ca/24000mAh-Waterproof-Portable-External-Compatible/dp/B07B61Z8V5/ref=sr_1_6?s=wireless&rps=1&ie=UTF8&qid=1542213106&sr=1-6&refinements=p_85%3A5690392011%2Cp_72%3A11192170011%2Cp_36%3A12035762011"
    >
      Solar Charger
    </a>,
    <a
      target="_blank"
      href="https://www.amazon.ca/Luminoodle-Original-Waterproof-Emergencies-Included/dp/B0198VDWMY/ref=pd_bxgy_107_img_3?_encoding=UTF8&pd_rd_i=B0198VDWMY&pd_rd_r=9a7eeda7-e82a-11e8-acef-0dacba850be4&pd_rd_w=zsrcz&pd_rd_wg=LL593&pf_rd_i=desktop-dp-sims&pf_rd_m=A3DWYIK6Y9EEQB&pf_rd_p=cda2b2aa-f379-4b98-b5ff-b78659186dbe&pf_rd_r=2N7EPDSAY5DKKTY78BTX&pf_rd_s=desktop-dp-sims&pf_rd_t=40701&psc=1&refRID=2N7EPDSAY5DKKTY78BTX"
    >
      Light Rope
    </a>
  ],
  Anna: [
    <a
      target="_blank"
      href="https://beistravel.com/products/the-weekender-in-black"
    >
      Beis Weekender Bag
    </a>
  ],
  Babcia: ['Tim Horton\'s Giftcard'],
  Brian: ['Mario Party (Switch Version)', 'Best Buy Giftcard'],
  Dorota: ['None'],
  Isabella: [
    '“All about cake” by Christina Tosi',
    'Amazon Giftcard',
    'Homesense Giftcard',
    'Marc Jacobs “kiss,kiss, bang,bang” Creme Lipstick'
  ],
  Jarek: ['GNC Giftcard', 'Winners Giftcard'],
  Marian: ['Honda Ridgeline', 'Wallet with Clasp', 'Fireplace Fan (non-electric)', 'Canada Computers Giftcard'],
  Monika: [
    <a
      target="_blank"
      href="https://www.amazon.ca/AmazonBasics-Enameled-Cast-Iron-Dutch/dp/B073Q9QH5Z/ref=mp_s_a_1_1?ie=UTF8&qid=1543441296&sr=8-1-spons&pi=AC_SX236_SY340_FMwebp_QL65&keywords=dutch%2Bovens&psc=1&th=1"
    >
      Dutch Oven
    </a>,
    'Blanket Ladder',
    'Cozy Blanket'
  ],
  Peter: ['None'],
  Rob: ['None']
};
