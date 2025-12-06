import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

function accordionInit() {
  const faqSection = document.querySelector('.faq');
  if (faqSection) {
    new Accordion('#faq-accodion', {
      duration: 400,
      showMultiple: false,
    });
  }
}

export default accordionInit;
