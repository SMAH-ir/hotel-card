document.addEventListener('DOMContentLoaded', () => {
     const sliders = document.querySelectorAll('.hotel-card__slider');

     sliders.forEach((sliderEl) => {
          const nextBtn = sliderEl.querySelector('.swiper-button-next');
          const prevBtn = sliderEl.querySelector('.swiper-button-prev');
          const paginationEl = sliderEl.querySelector('.swiper-pagination');

          new Swiper(sliderEl, {
               loop: true,
               navigation: {
                    nextEl: nextBtn,
                    prevEl: prevBtn,
               },
               pagination: {
                    el: paginationEl,
                    clickable: true,
               },
               a11y: {
                    prevSlideMessage: 'تصویر قبلی',
                    nextSlideMessage: 'تصویر بعدی',
                    paginationBulletMessage: 'رفتن به تصویر {{index}}',
                    slideLabelMessage: 'تصویر {{index}} از {{slidesLength}}',
               },
          });
     });

     const favoriteButtons = document.querySelectorAll('.hotel-card__fav-btn');

     favoriteButtons.forEach((btn) => {
          btn.addEventListener('click', () => {
               const isActive = btn.classList.toggle('hotel-card__fav-btn--active');
               btn.setAttribute('aria-pressed', String(isActive));
          });
     });
});