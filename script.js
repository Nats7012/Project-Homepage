// TO OPEN & CLOSE THE NAV MENU
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const menu = document.querySelector("nav .container ul");

// OPEN THE SIDEBAR
menuBtn.addEventListener('click', () => {
    menu.style.display= 'block';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'inline-block';
})

// CLOSE THE SIDEBAR
closeBtn.addEventListener('click', () => {
    menu.style.display= 'none';
    closeBtn.style.display = 'none';
    menuBtn.style.display = 'inline-block';
})

// CHANGE THE ACTIVE CLASS TO CLICKED NAV ITEM
const navItems = document.querySelectorAll('nav ul li');

// REMOVE THE ACTIVE CLASS FROM OTHER ITEMS
const removeActiveClass = () => {
    navItems.forEach(item => {
        const link = item.querySelector('a');
        link.classList.remove('active');
    })
}

// ADD THE ACTIVE CLASS TO CLICKED NAV ITEM
navItems.forEach(item => {
    const link = item.querySelector('a');
    link.addEventListener('click', () => {
        removeActiveClass();
        link.classList.add('active');
    })
})

// FAQS OPEN AND CLOSE
const faqs = document.querySelectorAll('section#faqs article');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
    faq.classList.toggle('open');

    //TO CHANGE THE OPEN AND CLOSE ICON
        const icon = faq.querySelector('.icon i');
        if(icon.className === 'uil uil-plus') {
            icon.className = 'uil uil-minus';
        } else {
            icon.className = 'uil uil-plus';
        }
    })
})

// CHANGE NAVBAR STYLE WHEN SCROLLING
window.addEventListener("scroll", () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})