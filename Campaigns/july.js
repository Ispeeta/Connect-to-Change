window.addEventListener('scroll', (e) => {
    var elms = document.querySelectorAll('.anim');
    var scrollY = this.scrollY;
    for (let elm of elms) {
      if (elm.offsetTop - 400 >= scrollY) {
        elm.classList.add('hideAnim');
        elm.classList.remove('showAnim');
        
      } else {
        elm.classList.remove('hideAnim');
        elm.classList.add('showAnim');
      }
    }
  });