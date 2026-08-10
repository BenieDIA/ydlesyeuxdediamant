const WHATSAPP_NUMBER = "242065284490"; // +242 06 528 44 90
function waLink(message){
  return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
}

// ---- generic WhatsApp buttons ----
const GENERIC_MSG = "Bonjour YD, je souhaite en savoir plus sur vos lunettes.";
["navWa","heroWa","bannerWa","boutiqueWa","fabWa","footerWa"].forEach(id => {
  const el = document.getElementById(id);
  if(el) el.href = waLink(GENERIC_MSG);
});
document.getElementById("waEngraveFrame").href = waLink("Bonjour YD, je souhaite personnaliser la monture d'une paire de lunettes avec une gravure laser (initiales/phrase).");
document.getElementById("waEngravePouch").href = waLink("Bonjour YD, je souhaite personnaliser un étui en rafia avec mon nom.");

// ---- placeholder glasses icon ----
function glassesSVG(){
  return '<svg viewBox="0 0 200 90" fill="none" stroke="#3d3b36" stroke-width="2.5"><circle cx="52" cy="45" r="34"/><circle cx="148" cy="45" r="34"/><path d="M86 40 Q100 28 114 40"/><path d="M18 42 L4 36"/><path d="M182 42 L196 36"/></svg>';
}

const PRODUCTS = [
  {id:1, name:"Éclat d'Orion", ref:"YD-001", cat:"femme", image:"assets/img/1.jpeg"},
  {id:2, name:"Cristal Royal", ref:"YD-002", cat:"homme", image:"assets/img/2.jpeg"},
  {id:3, name:"Lueur Éternelle", ref:"YD-003", cat:"mixte", image:"assets/img/3.jpeg"},
  {id:4, name:"Étoile d'Azur", ref:"YD-004", cat:"femme", image:"assets/img/4.jpeg"},
  {id:5, name:"Flamme Blanche", ref:"YD-005", cat:"soleil", image:"assets/img/5.jpeg"},
  {id:6, name:"Éclat Impérial", ref:"YD-006", cat:"homme", image:"assets/img/6.jpeg"},
  {id:7, name:"Perle de Lumière", ref:"YD-007", cat:"femme", image:"assets/img/7.jpeg"},
  {id:8, name:"Aube Cristalline", ref:"YD-008", cat:"soleil", image:"assets/img/8.jpeg"},
  {id:9, name:"Saphir de Lune", ref:"YD-009", cat:"mixte", image:"assets/img/9.jpeg"},
  {id:10, name:"Joyau Céleste", ref:"YD-010", cat:"femme", image:"assets/img/10.jpeg"},
  {id:11, name:"Éclat Majestueux", ref:"YD-011", cat:"homme", image:"assets/img/11.jpeg"},
  {id:12, name:"Cristal d'Éden", ref:"YD-012", cat:"mixte", image:"assets/img/12.jpeg"},
  {id:13, name:"Lumière Royale", ref:"YD-013", cat:"femme", image:"assets/img/13.jpeg"},
  {id:14, name:"Couronne de Givre", ref:"YD-014", cat:"soleil", image:"assets/img/14.jpeg"},
  {id:15, name:"Cœur de Cristal", ref:"YD-015", cat:"homme", image:"assets/img/15.jpeg"},
  {id:16, name:"Goutte d'Étoile", ref:"YD-016", cat:"mixte", image:"assets/img/16.jpeg"},
  {id:17, name:"Horizon de Diamant", ref:"YD-017", cat:"femme", image:"assets/img/17.jpeg"},
  {id:18, name:"Éclat Solaire", ref:"YD-018", cat:"soleil", image:"assets/img/18.jpeg"},
  {id:19, name:"Nocturne Précieux", ref:"YD-019", cat:"homme", image:"assets/img/19.jpeg"},
  {id:20, name:"Rayon d'Éternité", ref:"YD-020", cat:"mixte", image:"assets/img/20.jpeg"},
  {id:21, name:"Poussière d'Étoile", ref:"YD-021", cat:"femme", image:"assets/img/21.jpeg"},
  {id:22, name:"Trésor Céleste", ref:"YD-022", cat:"soleil", image:"assets/img/22.jpeg"},
  {id:23, name:"Rose de Cristal", ref:"YD-023", cat:"homme", image:"assets/img/23.jpeg"},
  {id:24, name:"Reflet d'Argent", ref:"YD-024", cat:"mixte", image:"assets/img/24.jpeg"},
  {id:25, name:"Diamant d'Aurore", ref:"YD-025", cat:"femme", image:"assets/img/25.jpeg"},
];


const CAT_LABEL = {femme:"Femme", homme:"Homme", mixte:"Mixte", soleil:"Solaire"};

const grid = document.getElementById('productGrid');
function renderProducts(filter){
  grid.innerHTML = "";
  PRODUCTS.filter(p => filter === "tous" || p.cat === filter).forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card';
    const msg = "Bonjour YD, je suis intéressé(e) par le modèle " + p.name + " (Réf. " + p.ref + "). Est-il disponible en boutique ?";
    card.innerHTML =
      '<div class="product-media"><div class="facet-corner"></div><img src="' + p.image + '" alt="' + p.name + '"><span class="ph-tag">Photo du modèle</span></div>' +
      '<div class="product-info">' +
        '<span class="product-cat">' + CAT_LABEL[p.cat] + '</span>' +
        '<span class="product-name">' + p.name + '</span>' +
        '<span class="product-ref">Réf. ' + p.ref + '</span>' +
        '<a class="order-btn" href="' + waLink(msg) + '" target="_blank" rel="noopener"><svg><use href="#ic-wa"/></svg>Commander sur WhatsApp</a>' +
      '</div>';
    grid.appendChild(card);
  });
}
document.querySelectorAll('.chip').forEach(chip => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    renderProducts(chip.dataset.filter);
  });
});
renderProducts('tous');

// ---- lookbook mannequins ----
const lookbook = document.getElementById('lookbookGrid');
const mannequinImages = [
  'assets/img/m8.jpeg',
  'assets/img/m2.jpeg',
  'assets/img/m3.jpeg',
  'assets/img/m4.jpeg',
  'assets/img/m1.jpeg',
  'assets/img/m6.jpeg'
];
const mannequinTiles = ["t1","t2","t3","t4","t5","t6"];
mannequinTiles.forEach((t, i) => {
  const div = document.createElement('div');
  div.className = 'look-tile ' + t;
  div.innerHTML = '<img src="' + mannequinImages[i] + '" alt="Mannequin ' + (i+1) + '">';
  lookbook.appendChild(div);
});

// ---- video source ----
const video = document.getElementById('brandVideo');
video.src = 'assets/video/videoetui.mp4';
const playBadge = document.getElementById('playBadge');
if(!video.currentSrc){ playBadge.style.display = 'flex'; } else { playBadge.style.display = 'none'; }
video.addEventListener('play', () => { playBadge.style.display = 'none'; });

// ---- scroll reveal ----
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold:0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));