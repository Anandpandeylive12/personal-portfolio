/**
My Script
*/
(function() {
  "use strict";

  //easy slector helper funtion 

  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  //easy event listener function 

  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

   //easy on scroll event listener 

  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  //Navbar links Active state on scroll 
document.addEventListener('contextmenu', event => event.preventDefault());

  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos,
      behavior: 'smooth'
    })
  }

  //Mobile Nav Toggle 

  on('click', '.mobile-nav-toggle', function(e) {
    select('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  //Scroll to an Element with header offset 

  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let body = select('body')
      if (body.classList.contains('mobile-nav-active')) {
        body.classList.remove('mobile-nav-active')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  //scroll with offset on page load with hash in URL 

  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  //skill animation 

  let skillsContent=select('.skill-content')
  if(skillsContent)
  {
    new Waypoint(
      {
        element:skillsContent,
        offset:'80%',
        handler:function(direction)
        {
          let progress=select('.progress .progress-bar',true)
          progress.forEach((el)=>
          {
            el.style.width=el.getAttribute('aria-valuenow') + '%'
          });
        }
      }
    )
  };
  //Portfolio isotops and filters 

  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flter li', true);

      on('click', '#portfolio-flter li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
      },true);
    }
  });
  //Inializing Glightbox
  const portfolioLightbox=GLightbox(
    {
      selector:'.portfolio-lightbox'
    }
  )


  //Testimonial Slider 

  new Swiper('.testimonial-slider',{
    speed:600,
    loop:true,
    autoplay:{
      delay:5000,
      disableOnInteraction:false
    },
    slidePerView:'auto',
    pagination:{
      el:'.swiper-pagination',
      type:'bullets',
      clickable:true
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }
  })
  //Back to Top Button 

  let backtotop=select('.back-to-top')
  if(backtotop)
  {
    const toggleBacktotop=()=>
    {
      if(window.scrollY > 100)
      {
        backtotop.classList.add('active')
      }
      else
      {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load',toggleBacktotop)
    onscroll(document,toggleBacktotop)
  }
  //Initializing Pure Counter 
  new PureCounter();
})()

  // Form Submit Spinner and Toast

  const form = select('form');
  const submitBtn = select('#submitBtn');
  const btnText = select('#btnText');
  const btnSpinner = select('#btnSpinner');

  if (form) {
    form.addEventListener('submit', function () {
      // Show loading state
      btnText.textContent = 'Sending...';
      btnSpinner.classList.remove('d-none');
      submitBtn.disabled = true;
    });
  }

  // Show toast if status=success in URL
  window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('status') === 'success') {
      const successToastEl = document.getElementById('successToast');
      if (successToastEl) {
        const toast = new bootstrap.Toast(successToastEl);
        toast.show();
      }
    }
  });
document.addEventListener('keydown', function (e) {
  if (
    e.key === "F12" ||
    (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J" || e.key === "C")) ||
    (e.ctrlKey && e.key === "U")
  ) {
    e.preventDefault();
    return false;
  }
});
setInterval(function () {
  if (window.outerWidth - window.innerWidth > 100 || window.outerHeight - window.innerHeight > 100) {
    document.body.innerHTML = "<h1>DevTools is disabled!</h1>";
  }
}, 1000);
