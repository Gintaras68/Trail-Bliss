// Галерея и лайтбоксы от Fancybox
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

Fancybox.bind('[data-fancybox]', {
  // Your custom options
});

// Мобильная навигация
import mobileNav from './modules/mobile-nav.js';
mobileNav();

// Initialize all Swiper's
import swiperInit from './modules/init-swipers.js';
swiperInit();
