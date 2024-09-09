const imagGallery = [
    {
      src: "https://burst.shopifycdn.com/photos/person-in-athletic-wear-with-a-mug-with-both-hands.jpg?width=373&format=pjpg&exif=0&iptc=0",
      alt: "руки и кофе" ,
      date: "1111-01-01"
    },
    {
      src: "https://burst.shopifycdn.com/photos/laptop-from-above.jpg?width=373&format=pjpg&exif=0&iptc=0",
      alt: "ноутбук" ,
      date: "1111-01-01"
    },
    {
      src: "https://burst.shopifycdn.com/photos/graphic-designer-at-work.jpg?width=373&format=pjpg&exif=0&iptc=0",
      alt: "графический дизайн" ,
      date: "1111-01-01"
    },
    {
      src: "https://burst.shopifycdn.com/photos/lenses-lattes.jpg?width=373&format=pjpg&exif=0&iptc=0",
      alt: "фотоапарат и кофе" ,
      date: "1111-01-01"
    },
    {
      src: "https://burst.shopifycdn.com/photos/iced-latte-at-coffee-shop-window.jpg?width=373&format=pjpg&exif=0&iptc=0",
      alt: "холодное кофе" ,
      date: "1111-01-01"
    },
    {
      src: "https://burst.shopifycdn.com/photos/skincare-treatment-and-a-nice-coffee.jpg?width=373&format=pjpg&exif=0&iptc=0",
      alt: "утренний кофе" ,
      date: "1111-01-01"
    },
    {
      src: "https://burst.shopifycdn.com/photos/macbook-air-on-desk.jpg?width=373&format=pjpg&exif=0&iptc=0",
      alt: "удаленная работа " ,
      date: "1111-01-01"
    },
    {
      src: "https://burst.shopifycdn.com/photos/croissant-coffee.jpg?width=373&format=pjpg&exif=0&iptc=0",
      alt: "кругасан" ,
      date: "1111-01-01"
    },
    {
      src: "https://burst.shopifycdn.com/photos/coffee-with-milk.jpg?width=373&format=pjpg&exif=0&iptc=0",
      alt: "кофе" ,
      date: "1111-01-01"
    },
    {
      src: "https://burst.shopifycdn.com/photos/hand-full-of-roasted-coffee.jpg?width=373&format=pjpg&exif=0&iptc=0",
      alt: "зерна кофе" ,
      date: "1111-01-01"
    },
    {
      src: "https://burst.shopifycdn.com/photos/coffee-from-above.jpg?width=373&format=pjpg&exif=0&iptc=0",
      alt: "приготовление кофе" ,
      date: "1111-01-01"
    },
    {
      src: "https://burst.shopifycdn.com/photos/metal-coffee-tamp.jpg?width=373&format=pjpg&exif=0&iptc=0",
      alt: "кофе тамп" ,
      date: "1111-01-01"
    },
    {
      src: "https://burst.shopifycdn.com/photos/side-hustler-coffee-cup.jpg?width=373&format=pjpg&exif=0&iptc=0",
      alt: alt="кофе с собой" ,
      date: "1111-01-01"
    },
    {
      src: "https://burst.shopifycdn.com/photos/purchased-favorite-coffee.jpg?width=373&format=pjpg&exif=0&iptc=0",
      alt: alt="женщина и кофе" ,
      date: "1111-01-01"
    },
    {
      src: "https://burst.shopifycdn.com/photos/kettle-and-cup-in-front-of-tent.jpg?width=373&format=pjpg&exif=0&iptc=0",
      alt: "согревающий кофе" ,
      date: "1111-01-01"
    },
    {
      src: "https://burst.shopifycdn.com/photos/pouring-an-espresso.jpg?width=373&format=pjpg&exif=0&iptc=0",
      alt: "еспрессо" ,
      date: "1111-01-01"
    },
  ];

  const div = document.createElement('div');
  const wrap = document.querySelector(".links-container");
  wrap.after(div);
  div.classList.add("wrapper");

  const newGallery = imagGallery.map(({ src, alt, date }) => {
    const img = document.createElement('img');
    img.setAttribute('src', src);
    img.setAttribute('alt', alt);
    img.setAttribute('data-date', date);
    img.classList.add('image');
    return img;
  });

  div.append(...newGallery);

  newGallery.forEach(img => {
    img.addEventListener('click', (e) => {
      const modal = document.getElementById('modal');
      const modalImage = document.getElementById('modal-image');
      const modalText = document.getElementById('modal-text');
      const modalDate = document.getElementById('modal-date');

      modalImage.src = img.src;
      modalText.textContent = img.alt;
      modalDate.textContent = `Дата публикации: ${img.getAttribute('data-date')}`;
      modal.style.display = 'flex';
    });
  });

  const modalClose = document.getElementById('modal-close');
  modalClose.addEventListener('click', () => {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
  });