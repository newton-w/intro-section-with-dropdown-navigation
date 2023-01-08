// dropdown 
const features = document.querySelector('#drr');
const company = document.querySelector('#srr');
const dropdownfeatures = document.querySelector('#drr .dropdown-content');
const dropdownCompany = document.querySelector('#srr .dropdown-content');
const featuresarrow = document.querySelector('#drr .arrow');
const companyarrow = document.querySelector('#srr .arrow');
const sticky = document.querySelector('.nav-container');
const body = document.querySelector('body')
const html = document.querySelector('html');

features.addEventListener('click', () => {
  dropdownfeatures.classList.toggle('active');
  featuresarrow.classList.toggle('active');
});

company.addEventListener('click', () => {
    dropdownCompany.classList.toggle('active');
    companyarrow.classList.toggle('active');
  });


// slider navigation
const toggleMenu = document.querySelector('.toggle');
const menu = document.querySelector('.mobile');

toggleMenu.addEventListener('click', () => {
    toggleMenu.classList.toggle('active');
    menu.classList.toggle('active');

    if(toggleMenu.classList.contains('active')){
      html.style.overflowY = "hidden";
      body.style.background = "hsl(0, 0%, 31%)";
      sticky.style.background = "hsl(0, 0%, 31%)";
    }else{
      html.style.overflowY = "visible";
      body.style.background = "hsl(0, 0%, 98%)";
      sticky.style.background = "hsl(0, 0%, 98%)";
    }
    
});

// overflow hidden when nav is active


// nav box shadow
window.addEventListener('scroll', () => {
  sticky.classList.toggle('sticky', scrollY > 0);
})



