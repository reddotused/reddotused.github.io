document.addEventListener('DOMContentLoaded', function() {
  const carousels = document.querySelectorAll('.glide');
  
  carousels.forEach(function(carousel) {
    new Glide(carousel, {
      type: 'carousel',
      perView: 1,
      focusAt: 'center',
      gap: 20,
      autoplay: 3000,
      hoverpause: true
    }).mount();
  });
});
