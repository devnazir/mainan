const eventWindow = window.addEventListener;

function onScroll() {
    const introText = document.querySelector(".intro");
    const otIntro = introText.offsetTop / 2;

    const freeToys = document.querySelector(".free-toys");
    const offices = document.querySelector(".offices");
    const otFreeToys = freeToys.offsetTop / 1.3;
    const otOffices = offices.offsetTop - 200;

    let scrollY = this.scrollY;
    if (scrollY > otIntro) {
        let pIntro = introText.querySelectorAll("p");
        pIntro.forEach((p, index) => {
            setTimeout(() => {
                p.style.cssText = fadeInTop.fadeInTop();
            }, 500 * index);
        });
    }

    if (scrollY > otFreeToys) {
        let pFreeToys = freeToys.querySelector("p");
        setTimeout(() => {
            pFreeToys.style.cssText = fadeInTop.fadeInTop();
        }, 500);
    }

    if (scrollY > otOffices) {
        let pOffices = offices.querySelector("p");
        setTimeout(() => {
            pOffices.style.cssText = fadeInTop.fadeInTop();
        }, 500);
    }
}

function onLoad() {
    const h1 = document.querySelector("h1");
    h1.style.cssText = fadeInTop.fadeInTop();
}

eventWindow("scroll", onScroll);
eventWindow("load", onLoad);
