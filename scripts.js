// Configuration
const CONFIG = {
  // Set a form endpoint (set to 'NETLIFY' to submit to Netlify Forms on deploy).
  // If empty, client will fall back to a mailto: link.
  FORM_ENDPOINT: "NETLIFY",
  EMAIL: "brianayieke@gmail.com",
  GITHUB: "https://github.com/your-username",
  LINKEDIN: "https://www.linkedin.com/in/brian-omondi-491a1b1a4",
  WHATSAPP: "https://wa.me/254725501428",
  CV: "cv/Brian-Resume.pdf"
};

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();
  initContactLinks();
  loadProjects();
  loadMedia();
  initContactForm();
  initLightbox();
});

function initContactLinks(){
  document.getElementById('contact-email').setAttribute('href', `mailto:${CONFIG.EMAIL}`);
  document.getElementById('contact-github').setAttribute('href', CONFIG.GITHUB);
  document.getElementById('contact-linkedin').setAttribute('href', CONFIG.LINKEDIN);
  if(document.getElementById('contact-whatsapp')) document.getElementById('contact-whatsapp').setAttribute('href', CONFIG.WHATSAPP);
  if(document.getElementById('footer-github')) document.getElementById('footer-github').setAttribute('href', CONFIG.GITHUB);
  if(document.getElementById('footer-linkedin')) document.getElementById('footer-linkedin').setAttribute('href', CONFIG.LINKEDIN);
  if(document.getElementById('footer-whatsapp')) document.getElementById('footer-whatsapp').setAttribute('href', CONFIG.WHATSAPP);
  if(document.getElementById('cv-download')) document.getElementById('cv-download').setAttribute('href', CONFIG.CV);
}

async function loadProjects(){
  try{
    const res = await fetch('./projects/projects.json');
    console.log('Fetch response status:', res.status);
    if(!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    console.log('Projects loaded:', data);
    const grid = document.getElementById('projects-grid');
    grid.innerHTML = '';
    if(data && Array.isArray(data) && data.length > 0){
      data.forEach(p => {
        try{
          grid.appendChild(renderProjectCard(p));
        }catch(cardErr){
          console.error('Error rendering project card:', cardErr, p);
        }
      });
    } else {
      console.warn('No projects found');
      grid.textContent = 'No projects available.';
    }
  }catch(e){
    console.error('Failed to load projects:', e.message, e);
    document.getElementById('projects-grid').textContent = 'No projects available.';
  }
}

function renderProjectCard(p){
    const card = document.createElement('article');
    card.className = 'project-card';

  // Image container
  const thumb = document.createElement('div');
  thumb.className = 'project-thumb';
  
  if(p.media && p.media.length && p.media[0].type === 'image' && p.media[0].src){
    const img = document.createElement('img');
    // Convert ../media/file.png to media/file.png
    let imgSrc = p.media[0].src;
    imgSrc = imgSrc.replace(/^\.\.\//, '');
    img.src = imgSrc;
    img.alt = p.media[0].alt || p.title;
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'cover';
    thumb.appendChild(img);
  } else {
    thumb.textContent = 'Screenshot placeholder';
  }

  const content = document.createElement('div');
  content.className = 'project-content';

  // Title
  const title = document.createElement('h3');
  title.className = 'project-title';
  title.textContent = p.title;

  // Description
  const desc = document.createElement('p');
  desc.className = 'project-meta';
  desc.textContent = p.description;

  // Badges (tech stack)
  const badges = document.createElement('div');
  badges.className = 'badges';
  (p.tech||[]).forEach(t => {
    const b = document.createElement('span');
    b.className = 'badge';
    b.textContent = t;
    badges.appendChild(b);
  });

  // Footer with left/right layout
  const footer = document.createElement('div');
  footer.className = 'project-footer';

  // Left side: Live Demo link (if available)
  const left = document.createElement('div');
  if(p.live){
    const liveLink = document.createElement('a');
    liveLink.className = 'live-link';
    liveLink.href = p.live;
    liveLink.target = '_blank';
    liveLink.rel = 'noopener';
    liveLink.textContent = 'Live Demo';
    left.appendChild(liveLink);
  }

  // Right side: View Details link
  const right = document.createElement('div');
  const details = document.createElement('a');
  details.className = 'details-link';
  details.href = `projects/project.html?slug=${encodeURIComponent(p.slug)}`;
  details.textContent = 'View Details';
  right.appendChild(details);

  footer.appendChild(left);
  footer.appendChild(right);

  content.appendChild(title);
  content.appendChild(desc);
  content.appendChild(badges);
  content.appendChild(footer);

  card.appendChild(thumb);
  card.appendChild(content);
  return card;
}

async function loadMedia(){
  try{
    const res = await fetch('projects/projects.json');
    const data = await res.json();
    const gallery = document.getElementById('media-gallery');
    gallery.innerHTML = '';
    // Collect media entries from projects
    data.forEach(p => {
      (p.media||[]).forEach(m => {
        const el = document.createElement('div');
        el.className = 'media-card';
        if(m.type === 'video' && m.embed){
          const thumb = document.createElement('div');
          thumb.className = 'media-thumb';
          thumb.innerHTML = m.embed;
          el.appendChild(thumb);
        } else if(m.type === 'image' && m.src){
          const thumb = document.createElement('div');
          thumb.className = 'media-thumb';
          const img = document.createElement('img');
          // Convert ../media/file.png to media/file.png
          let imgSrc = m.src;
          imgSrc = imgSrc.replace(/^\..\//, '');
          img.src = imgSrc;
          img.alt = m.alt || p.title;
          img.style.cssText = 'width:100%;height:100%;object-fit:cover;border-radius:8px;';
          thumb.appendChild(img);
          el.appendChild(thumb);
        } else {
          const thumb = document.createElement('div');
          thumb.className = 'media-thumb';
          thumb.textContent = 'Media placeholder';
          el.appendChild(thumb);
        }
        gallery.appendChild(el);
      })
    })
  }catch(e){
    console.warn('No media available', e);
  }
}

function initContactForm(){
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  form.addEventListener('submit', async (ev)=>{
    ev.preventDefault();
    status.textContent = '';
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    if(CONFIG.FORM_ENDPOINT === 'NETLIFY'){
      // Submit as form-encoded POST so Netlify Forms can capture the submission after deploy.
      try{
        const data = new URLSearchParams();
        data.append('form-name','contact');
        for(const [k,v] of Object.entries(payload)) data.append(k,v);
        const res = await fetch('.', {method:'POST', headers:{'Content-Type':'application/x-www-form-urlencoded'}, body: data.toString()});
        // Netlify accepts the form (200/201/202) or may return 404 if not in production
        if(res.ok || res.status === 404){ status.textContent = 'Message sent successfully. Thank you!'; form.reset(); }
        else { status.textContent = 'Unexpected response. Please try again or use email below.'; }
      }catch(err){
        console.warn('Netlify submission error:', err);
        status.textContent = 'Submission failed. Falling back to email.';
        // fallback to mailto
        const subject = encodeURIComponent('Portfolio contact: ' + payload.name);
        const body = encodeURIComponent(`${payload.message}\n\n— ${payload.name} <${payload.email}>`);
        window.location.href = `mailto:${CONFIG.EMAIL}?subject=${subject}&body=${body}`;
      }
    } else if(CONFIG.FORM_ENDPOINT){
      try{
        const res = await fetch(CONFIG.FORM_ENDPOINT,{
          method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)
        });
        if(res.ok){status.textContent = 'Message sent. Thank you.';form.reset()}else{status.textContent='Failed to send message.'}
      }catch(err){console.error(err);status.textContent='Failed to send message.'}
    } else {
      // fallback to mailto
      const subject = encodeURIComponent('Portfolio contact: ' + payload.name);
      const body = encodeURIComponent(`${payload.message}\n\n— ${payload.name} <${payload.email}>`);
      window.location.href = `mailto:${CONFIG.EMAIL}?subject=${subject}&body=${body}`;
    }
  })
}

function initLightbox(){
  const lightbox = document.getElementById('image-lightbox');
  const lightboxImage = document.getElementById('lightbox-image');
  const lightboxClose = document.getElementById('lightbox-close');

  if(!lightbox) return; // No lightbox on this page

  // Handle image clicks
  document.addEventListener('click', (e) => {
    if(e.target.tagName === 'IMG' && (e.target.classList.contains('media-item') || e.target.parentElement?.classList.contains('media-item') || e.target.parentElement?.classList.contains('media-thumb') || e.target.parentElement?.parentElement?.classList.contains('project-thumb'))){
      lightboxImage.src = e.target.src;
      lightbox.classList.add('active');
    }
  });

  // Handle close button
  if(lightboxClose){
    lightboxClose.addEventListener('click', () => {
      lightbox.classList.remove('active');
    });
  }

  // Handle background click to close
  lightbox.addEventListener('click', (e) => {
    if(e.target === lightbox){
      lightbox.classList.remove('active');
    }
  });

  // Handle Escape key
  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape'){
      lightbox.classList.remove('active');
    }
  });
}
