console.log('Vue OK', Vue);

//Array con url immagini
const pictures = [
    {
      image: 'img/01.webp',
      title: 'Marvel\'s Spiderman Miles Morale',
      text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
      image: 'img/02.webp',
      title: 'Ratchet & Clank: Rift Apart',
      text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
      image: 'img/03.webp',
      title: 'Fortnite',
      text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
      image: 'img/04.webp',
      title: 'Stray',
      text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
      image: 'img/05.webp',
      title: "Marvel's Avengers",
      text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
  ];
  
const app = Vue.createApp({
    data () {
        return {

        }
    }
});

app.mount('#root');






//   //FUNZIONI
//   function changePic(target) {
//     images[currentActiveIndex].classList.remove('active');
//     thumbs[currentActiveIndex].classList.remove('active');
  
//   if (target === 'next') {
//     currentActiveIndex++;
  
//     if (currentActiveIndex === images.length) currentActiveIndex = 0;
  
//   } else if (target === 'prev') {
//     currentActiveIndex--;
  
//     if (currentActiveIndex < 0) currentActiveIndex = images.length - 1;
//   } else {
//     currentActiveIndex = target;
//   }
  
//   images[currentActiveIndex].classList.add('active');
//   thumbs[currentActiveIndex].classList.add('active');
//   }
  
  
  
  
//   //Prendo gli elementi dal DOM
//   const gallery = document.querySelector('#carousel .gallery');
//   const thumbGallery = document.getElementById('thumbnails');
  
//   //Dato che le immagini di galley e thumbnails sono le stesse, unifico il processo
//   let galleryElements = '';
//   let thumbsElements = '';
  
//    for (let i = 0; i < pictures.length; i++) {
//     const img = `<img src="${pictures[i].image}" alt=""></img>`
//     thumbsElements += img;
  
//     galleryElements += `
//           <figure>
//             <img src="${pictures[i].image}" alt="">
//             <figcaption>
//               <h2>${pictures[i].title}</h2>
//               <h3>${pictures[i].text}</h3>
//             </figcaption>
//           </figure>
//     `;
//    }
  
//    //Stampo in pagina
//    gallery.innerHTML = galleryElements;
//    thumbGallery.innerHTML = thumbsElements;
  
//   //Recupero immagini e thumbnails
//   const images = document.querySelectorAll('.gallery figure');
//   const thumbs = document.querySelectorAll('#thumbnails img');
  
//   //Aggiungo la classe Active alla prima immagine/thumbnails
//   let currentActiveIndex = 0;
//   images[currentActiveIndex].classList.add('active');
//   thumbs[currentActiveIndex].classList.add('active');
  
//   //Recupero i bottoni 
//   const prev = document.getElementById('prev');
//   const next = document.getElementById('next');
  
//   //Aggancio evento al bottone next
//   next.addEventListener('click', function() {
//     changePic('next');
//   });
  
//   //Aggancio evento al bottone prev
//   prev.addEventListener('click', function() {
//     changePic('prev');
//   });