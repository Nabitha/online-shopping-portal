/* Your code goes here */
      const navSlide = function(){
          const nav = document.querySelector('.nav')
          const navigation = document.querySelector('.navigation')
          const navLinks = document.querySelectorAll('.navigation li')
          //Toggle nav
          nav.addEventListener('click',()=>{
              navigation.classList.toggle('navigation-active')
          })
          navigation.addEventListener('click',()=>{
            navigation.classList.toggle('navigation-active')

          })
          //Animate links
          navLinks.forEach((link, index)=>{
            link.style.animation = `navLinkFade 0.5s ease forwards`
          })
      }
      navSlide()