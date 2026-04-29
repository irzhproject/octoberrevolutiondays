const reveal = document.querySelectorAll(".paper-card, .day-grid article, .chapter, .word, .mini-panels article");
const io = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show");
      io.unobserve(entry.target);
    }
  });
},{threshold:.12});

reveal.forEach((el, index)=>{
  el.style.opacity = "0";
  el.style.transform = "translateY(34px)";
  el.style.transition = `opacity .65s ease ${Math.min(index*0.025,.25)}s, transform .65s ease ${Math.min(index*0.025,.25)}s`;
  io.observe(el);
});

const style = document.createElement("style");
style.textContent = ".show{opacity:1!important;transform:translateY(0)!important}";
document.head.appendChild(style);
