const animatedScrollObserver = new IntersectionObserver(
    (entries, animatedScrollObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('enter');
          animatedScrollObserver.unobserve(entry.target);
        }
      });
    }
  );
  
const scrollanimation = {
    mounted(el) {
        el.classList.add('before-enter');
        animatedScrollObserver.observe(el);
    },
    unmounted(el) {
        animatedScrollObserver.unobserve(el);
    }
};
  
export default scrollanimation;  