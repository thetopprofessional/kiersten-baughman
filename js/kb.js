(function(){
  var links = document.querySelectorAll('a[href^="#"]');
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(e){
      var id = this.getAttribute('href');
      if (id.length < 2) return;
      var el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      var nav = document.querySelector('.kb-nav');
      var off = (nav && getComputedStyle(nav).position === 'fixed') ? nav.offsetHeight : 0;
      window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - off, behavior: 'smooth' });
    });
  }
})();
