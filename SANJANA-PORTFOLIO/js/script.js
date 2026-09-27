document.addEventListener('DOMContentLoaded', () => {
  // animated hero name, letter by letter
  const nameEl = document.getElementById('nameHeading');
  if (nameEl) {
    const name = "SANJANA";
    [...name].forEach((ch, i) => {
      const s = document.createElement('span');
      s.textContent = ch;
      s.style.animationDelay = (0.25 + i * 0.045) + 's';
      nameEl.appendChild(s);
    });
  }

  const roleEl = document.getElementById('roleLine');
  if (roleEl) {
    const roles = ["MARKETING", "ANALYTICS", "RESEARCH", "CREATIVE"];
    roles.forEach((r, i) => {
      const s = document.createElement('span');
      s.textContent = r + (i < roles.length - 1 ? '  •  ' : '');
      s.style.animationDelay = (0.9 + i * 0.12) + 's';
      roleEl.appendChild(s);
    });
  }

  // cursor glow
  const glow = document.getElementById('glow');
  if (glow) {
    window.addEventListener('mousemove', e => {
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
    });
  }

  // subtle hero parallax
  const heroPhoto = document.getElementById('heroPhoto');
  const hero = document.getElementById('hero');
  if (hero && heroPhoto) {
    hero.addEventListener('mousemove', e => {
      const r = hero.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      heroPhoto.style.transform = `scale(1.06) translate(${x * -14}px, ${y * -10}px)`;
    });
    hero.addEventListener('mouseleave', () => {
      heroPhoto.style.transform = 'scale(1.02) translate(0,0)';
    });
  }

  // scroll reveals
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
});
