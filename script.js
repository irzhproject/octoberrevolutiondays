document.querySelectorAll('a[href^="#"]').forEach(link=>{link.addEventListener('click',e=>{const t=document.querySelector(link.getAttribute('href'));if(!t)return;e.preventDefault();t.scrollIntoView({behavior:'smooth',block:'start'});});});
const items=document.querySelectorAll('.poster-tabs article,.paper-card,.day-grid article,.chapter-section,.word-cloud span');
const obs=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');obs.unobserve(entry.target);}});},{threshold:.12});
items.forEach((item,i)=>{item.style.opacity='0';item.style.transform='translateY(28px)';item.style.transition=`opacity .65s ease ${Math.min(i*.025,.22)}s, transform .65s ease ${Math.min(i*.025,.22)}s`;obs.observe(item);});
const st=document.createElement('style');st.textContent='.is-visible{opacity:1!important;transform:translateY(0)!important}';document.head.appendChild(st);

// Archive strip: auto-scroll by CSS, manual drag with pause
const archiveMarquee = document.querySelector(".archive-marquee");
const archiveTrack = document.querySelector(".archive-track");

if (archiveMarquee && archiveTrack) {
  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  const pause = () => archiveMarquee.classList.add("is-dragging");
  const resume = () => archiveMarquee.classList.remove("is-dragging");

  archiveMarquee.addEventListener("pointerdown", (event) => {
    isDown = true;
    pause();
    archiveMarquee.setPointerCapture(event.pointerId);
    startX = event.clientX;
    scrollLeft = archiveMarquee.scrollLeft;
  });

  archiveMarquee.addEventListener("pointermove", (event) => {
    if (!isDown) return;
    event.preventDefault();
    const walk = (event.clientX - startX) * 1.25;
    archiveMarquee.scrollLeft = scrollLeft - walk;
  });

  archiveMarquee.addEventListener("pointerup", () => {
    isDown = false;
    setTimeout(resume, 500);
  });

  archiveMarquee.addEventListener("pointercancel", () => {
    isDown = false;
    resume();
  });
}
