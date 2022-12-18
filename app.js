function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');

    for (i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false');
    }

    if (itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');
    }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));

const linear_items = document.querySelectorAll(".linear-faq-selector");
const linear_items_cont = document.querySelectorAll(".linear-faq-selector-cont");

function toggleLinearFaq() {
    const faqToggle = this.getAttribute('data-tab');
    if (this.classList.contains('active')) {
        return false;
    } else {
        for (i = 0; i < items.length; i++) {
            linear_items[i].classList.remove('active');
            if (linear_items_cont[i].classList.contains('open')) {
                linear_items_cont[i].classList.remove('open');
                linear_items_cont[i].classList.add('close-tab-faq');
            }
        }

        this.classList.add('active');
        document.querySelector("#" + faqToggle).classList.remove('close-tab-faq');
        document.querySelector("#" + faqToggle).classList.add('open');
    }
}

linear_items.forEach(item => item.addEventListener('click', toggleLinearFaq));