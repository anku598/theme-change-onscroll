
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import LocomotiveScroll from 'locomotive-scroll';
gsap.registerPlugin(ScrollTrigger)

const scrolElm = document.querySelector('#main-container'); 

let scroll = new LocomotiveScroll({
    el: scrolElm,
    smooth: true,
    multiplier:1,
    class: "is-reveal"
});

scroll.on("scroll", () => {
    ScrollTrigger.update();
});

ScrollTrigger.scrollerProxy(scrolElm, {
    scrollTop(value) {
        if(scroll) {
            return arguments.length ? scroll.scrollTop(value, 0, 0) : scroll.scroll.instance.scroll.y
        }
        // this.kill()
    },

    scrollLeft(value) {
        if(scroll) {
            return arguments.length ? scroll.scrollTop(value, 0, 0) : scroll.scroll.instance.scroll.x
           
        }
        // this.kill ()
    },

   
})

const lsUpdate = () => {
    if(scroll) {
        scroll.update()
    }
}

ScrollTrigger.addEventListener('refresh', lsUpdate);
ScrollTrigger.refresh()

const kill = () => {
    if(scroll) {
        ScrollTrigger.removeEventListener('refresh', lsUpdate);
        scroll.destroy()
        scroll = null
    }
}