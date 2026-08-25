/* ========================================================================= */
/* 01. PROPERTIES DATASET (5 ISLAMABAD LISTINGS)                              */
/* ========================================================================= */
const propertiesData = [
  {
    id: 1,
    title: "Modern Designer Villa",
    location: "DHA Phase 2, Islamabad",
    priceFormatted: "PKR 5.85 Crore",
    priceNumber: 58500000,
    type: "House",
    beds: 5,
    baths: 6,
    sqft: "3,200 sq ft (6 Marla Corner)",
    badge: "Featured Exclusive",
    image: "assets/1.jpg",
    fallbackImg: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "assets/1.jpg",
      "assets/2.jpg",
      "assets/3-2.jpg"
    ],
    description: "An architect-designed 5-bedroom luxury corner home situated in DHA Phase 2, Islamabad. Features double-height living room ceilings, imported Spanish porcelain flooring, Italian kitchen with German appliances, rooftop BBQ patio with Margalla views, and covered parking for 3 cars.",
    features: ["5 Ensuite Bedrooms", "Private Rooftop Deck", "Italian Fitted Kitchen", "Covered 3-Car Parking", "Double-Glazed Windows", "Solar Powered (10kW)", "CCTV & Smart Locks", "Servant Quarter with Bath"]
  },
  {
    id: 2,
    title: "Diplomatic Sector Executive Residence",
    location: "Sector F-7/2, Islamabad",
    priceFormatted: "PKR 18.5 Crore",
    priceNumber: 185000000,
    type: "Villa",
    beds: 6,
    baths: 7,
    sqft: "5,400 sq ft (1 Kanal)",
    badge: "Prime Luxury",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
    fallbackImg: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80"
    ],
    description: "An ultra-prestigious 1 Kanal mansion in Sector F-7/2 with direct views of Margalla Hills. Custom built with reinforced security standards, heated private swimming pool, private elevator, automated climate control, and solid Burma teak woodwork throughout.",
    features: ["6 Master Suites", "Heated Swimming Pool", "Private Elevator", "Margalla Hills View", "Teak Woodwork", "Basement Cinema Room", "Guard Room", "Backup Generator 30kVA"]
  },
  {
    id: 3,
    title: "Contemporary Hillside Home",
    location: "Bahria Town Phase 8, Islamabad",
    priceFormatted: "PKR 4.25 Crore",
    priceNumber: 42500000,
    type: "House",
    beds: 4,
    baths: 5,
    sqft: "2,700 sq ft (10 Marla)",
    badge: "Hot Deal",
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80",
    fallbackImg: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=600&q=80"
    ],
    description: "Brand new modern 10 Marla residence in Phase 8 Bahria Town. Open concept floorplan with expansive glass windows, designer false ceilings, Turkish sanitary fixtures, and walking distance to civic center and international schools.",
    features: ["4 Deluxe Bedrooms", "Open Plan Kitchen", "Balcony with Valley Views", "2 Car Garage", "Dedicated Laundry Room", "Underground Water Tank", "Lush Front Lawn"]
  },
  {
    id: 5,
    title: "Modern Golf Estate Residence",
    location: "DHA Phase 2, Islamabad",
    priceFormatted: "PKR 7.5 Crore",
    priceNumber: 75000000,
    type: "Villa",
    beds: 5,
    baths: 6,
    sqft: "4,000 sq ft (14 Marla)",
    badge: "Just Listed",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
    fallbackImg: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=600&q=80"
    ],
    description: "Golf-facing luxury villa constructed by renowned builders. Features imported smart automation, central heating/cooling provisions, and spacious garden patio.",
    features: ["5 Bed Suites", "Golf Course Frontage", "Smart Home Automation", "Granite Island Kitchen", "Private Study Room", "Covered 2-Car Port"]
  },
  {
    id: 6,
    title: "Margalla Vista Luxury Villa",
    location: "Sector F-7/2, Islamabad",
    priceFormatted: "PKR 14.0 Crore",
    priceNumber: 140000000,
    type: "House",
    beds: 5,
    baths: 6,
    sqft: "4,500 sq ft (1 Kanal)",
    badge: "Verified Listing",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
    fallbackImg: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80"
    ],
    description: "Classic contemporary architecture in prime F-7. Serene landscaped lawn, high perimeter security walls, servant annex, and expansive terraces overlooking the mountains.",
    features: ["5 Luxury Ensuite Bedrooms", "Manicured Lawns", "Wide Front Porch", "Double Kitchens (Dirty + Main)", "Solar Backup", "Prime Diplomatic Access"]
  }
];

/* ========================================================================= */
/* 02. SINGLE PAGE APPLICATION (SPA) ROUTER                                  */
/* ========================================================================= */
function navigateTo(viewId) {
  document.querySelectorAll('.page-view').forEach(view => {
    view.classList.remove('active-view');
  });
  const target = document.getElementById(viewId);
  if (target) {
    target.classList.add('active-view');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('data-view') === viewId) {
      link.classList.add('active');
    }
  });
}

// Mobile Drawer Toggle
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});
function closeMobileMenu() {
  mobileMenu.classList.remove('active');
}

/* ========================================================================= */
/* 03. PROPERTY CARD GENERATOR & GRID INITIALIZATION                         */
/* ========================================================================= */
function renderPropertyCard(prop) {
  return `
    <div class="property-card">
      <div class="property-thumb">
        <img src="${prop.image}" onerror="this.src='${prop.fallbackImg}'" alt="${prop.title}">
        <span class="badge-tag">${prop.badge}</span>
        <span class="badge-price">${prop.priceFormatted}</span>
      </div>
      <div class="property-body">
        <h3 class="property-title">${prop.title}</h3>
        <div class="property-loc"><i class="fa-solid fa-location-dot" style="color:var(--color-accent);"></i> ${prop.location}</div>
        <div class="property-specs">
          <span><i class="fa-solid fa-bed"></i> ${prop.beds} Beds</span>
          <span><i class="fa-solid fa-bath"></i> ${prop.baths} Baths</span>
          <span><i class="fa-solid fa-vector-square"></i> ${prop.sqft.split('(')[0]}</span>
        </div>
        <button class="btn btn-outline" style="width: 100%; margin-top: auto;" onclick="openPropertyDetail(${prop.id})">
          View Details <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  `;
}

function initGrids() {
  const featGrid = document.getElementById('featuredGrid');
  if (featGrid) featGrid.innerHTML = propertiesData.slice(0, 3).map(renderPropertyCard).join('');

  const allGrid = document.getElementById('allPropertiesGrid');
  if (allGrid) allGrid.innerHTML = propertiesData.map(renderPropertyCard).join('');

  const countEl = document.getElementById('resultsCount');
  if (countEl) countEl.innerText = `Showing ${propertiesData.length} Properties`;
}
initGrids();

/* ========================================================================= */
/* 04. PROPERTY DETAIL PAGE LOADER                                           */
/* ========================================================================= */
function openPropertyDetail(id) {
  const prop = propertiesData.find(p => p.id === id) || propertiesData[0];
  const container = document.getElementById('detailContainer');
  const similarProps = propertiesData.filter(p => p.id !== id).slice(0, 3);

  container.innerHTML = `
    <div style="background: #fff; border-radius: 24px; padding: 30px; border: 1px solid var(--color-border); box-shadow: var(--shadow-sm);">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 14px; margin-bottom: 20px;">
        <div>
          <span class="eyebrow">${prop.badge}</span>
          <h1 class="section-title" style="margin-bottom: 4px;">${prop.title}</h1>
          <p style="color: var(--color-text-muted); font-size: 15px;">
            <i class="fa-solid fa-location-dot" style="color:var(--color-accent);"></i> ${prop.location}
          </p>
        </div>
        <div style="text-align: right;">
          <div style="font-size: 12px; color: var(--color-text-muted); font-weight: 700;">OFFERED AT</div>
          <div style="font-family: var(--font-display); font-size: 30px; font-weight: 700; color: var(--color-accent);">${prop.priceFormatted}</div>
        </div>
      </div>

      <div class="detail-gallery">
        <div class="detail-main-img">
          <img src="${prop.gallery[0]}" onerror="this.src='${prop.fallbackImg}'" alt="${prop.title}" style="width:100%; height:100%; border-radius:18px;">
        </div>
        <div class="detail-thumbnails">
          <img src="${prop.gallery[1] || prop.gallery[0]}" onerror="this.src='${prop.fallbackImg}'" alt="Interior view" style="width:100%; height:100%; border-radius: 14px;">
          <img src="${prop.gallery[2] || prop.gallery[0]}" onerror="this.src='${prop.fallbackImg}'" alt="Room view" style="width:100%; height:100%; border-radius: 14px;">
        </div>
      </div>

      <div class="detail-grid-layout">
        <div>
          <h3 style="font-family: var(--font-display); font-size: 22px; color: var(--color-primary); margin-bottom: 12px;">Property Overview</h3>
          <p style="color: var(--color-text); line-height: 1.8; font-size: 15px; margin-bottom: 24px;">${prop.description}</p>

          <h3 style="font-family: var(--font-display); font-size: 22px; color: var(--color-primary); margin-bottom: 14px;">Key Specs & Amenities</h3>
          <div class="amenities-grid">
            ${prop.features.map(f => `<div class="amenity-chip"><i class="fa-solid fa-circle-check"></i> ${f}</div>`).join('')}
          </div>

          <div style="background: var(--color-accent-light); border: 1px solid var(--color-accent); border-radius: 16px; padding: 20px; display: flex; align-items: center; justify-content: space-between; margin: 30px 0; gap: 16px;">
            <div>
              <h4 style="color: var(--color-accent); font-size: 16px; font-weight: 700;"><i class="fa-solid fa-sparkles"></i> Have Questions About This Property?</h4>
              <p style="font-size: 13px; color: var(--color-text); margin-top: 4px;">Ask our AI about neighborhood security, rental ROI, or verify CDA documentation.</p>
            </div>
            <button class="btn btn-primary" onclick="askAiAboutProperty('${prop.title}')">
              <i class="fa-solid fa-robot"></i> Ask AI
            </button>
          </div>

          <h3 style="font-family: var(--font-display); font-size: 22px; color: var(--color-primary); margin-top: 30px; margin-bottom: 10px;">Location & Vicinity</h3>
          <div class="map-container">
            <iframe
              title="Location Map"
              src="https://maps.google.com/maps?q=${encodeURIComponent(prop.location)}&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style="border:0;"
              loading="lazy">
            </iframe>
          </div>
        </div>

        <div>
          <div class="inquiry-card">
            <h4 style="font-family: var(--font-display); font-size: 20px; color: var(--color-primary); margin-bottom: 6px;">Schedule A Visit</h4>
            <p style="font-size: 13px; color: var(--color-text-muted); margin-bottom: 20px;">Book a private tour with our authorized broker.</p>

            <form onsubmit="handleVisitSubmit(event, '${prop.title}')">
              <div class="form-group">
                <label>Your Name</label>
                <input type="text" required placeholder="Ali Ahmed">
              </div>
              <div class="form-group">
                <label>Phone / WhatsApp</label>
                <input type="tel" required placeholder="+92 300 1234567">
              </div>
              <div class="form-group">
                <label>Preferred Date</label>
                <input type="date" required>
              </div>
              <button type="submit" class="btn btn-primary" style="width: 100%; height: 46px; margin-top: 6px;">
                <i class="fa-solid fa-calendar-check"></i> Book Viewing
              </button>
            </form>

            <a href="" target="_blank" class="btn" style="background: #25D366; color: #fff; width: 100%; margin-top: 12px; font-size: 13px;">
              <i class="fa-brands fa-whatsapp"></i> Chat With Listing Agent
            </a>
          </div>
        </div>
      </div>

      <div style="margin-top: 60px;">
        <h3 class="section-title" style="font-size: 24px;">Similar AI-Suggested Properties</h3>
        <div class="property-grid" style="margin-top: 20px;">
          ${similarProps.map(renderPropertyCard).join('')}
        </div>
      </div>
    </div>
  `;

  navigateTo('property-detail-view');
}

/* ========================================================================= */
/* 05. MULTI-FILTERING & SEARCH ENGINE                                       */
/* ========================================================================= */
function applyFilters() {
  const loc = document.getElementById('filterLocation').value;
  const type = document.getElementById('filterType').value;
  const beds = document.getElementById('filterBeds').value;
  const price = document.getElementById('filterPrice').value;

  const filtered = propertiesData.filter(item => {
    const matchLoc = (loc === 'all' || item.location === loc);
    const matchType = (type === 'all' || item.type === type);
    const matchBeds = (beds === 'all' || item.beds >= parseInt(beds));
    const matchPrice = (price === 'all' || item.priceNumber <= parseInt(price));
    return matchLoc && matchType && matchBeds && matchPrice;
  });

  const container = document.getElementById('allPropertiesGrid');
  const countEl = document.getElementById('resultsCount');
  if (filtered.length === 0) {
    container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 50px 0; color: var(--color-text-muted);">
      <i class="fa-solid fa-magnifying-glass" style="font-size: 32px; margin-bottom: 12px; color: var(--color-accent);"></i>
      <h3>No properties found matching your criteria</h3>
      <p style="font-size: 14px;">Try resetting filters or ask our AI assistant for custom off-market options.</p>
    </div>`;
  } else {
    container.innerHTML = filtered.map(renderPropertyCard).join('');
  }
  if (countEl) countEl.innerText = `Showing ${filtered.length} Properties`;
}

function resetFilters() {
  document.getElementById('filterLocation').value = 'all';
  document.getElementById('filterType').value = 'all';
  document.getElementById('filterBeds').value = 'all';
  document.getElementById('filterPrice').value = 'all';
  applyFilters();
}

function filterByLocation(locationName) {
  navigateTo('properties-view');
  const sel = document.getElementById('filterLocation');
  if (sel) {
    sel.value = locationName;
    applyFilters();
  }
}

function handleHeroSearch(e) {
  e.preventDefault();
  navigateTo('properties-view');
  document.getElementById('filterLocation').value = document.getElementById('heroLocation').value;
  document.getElementById('filterBeds').value = document.getElementById('heroBeds').value;
  document.getElementById('filterType').value = document.getElementById('heroType').value;
  applyFilters();
}

/* ========================================================================= */
/* 06. INTERACTIVE AI CHATBOT ENGINE                                         */
/* ========================================================================= */
const chatWidget = document.getElementById('aiChatWidget');
const chatMessages = document.getElementById('chatMessages');

function toggleChat(forceOpen) {
  if (forceOpen === true) {
    chatWidget.classList.add('active');
  } else if (forceOpen === false) {
    chatWidget.classList.remove('active');
  } else {
    chatWidget.classList.toggle('active');
  }
  if (chatWidget.classList.contains('active')) {
    setTimeout(() => document.getElementById('chatInput').focus(), 100);
  }
}

function appendMessage(sender, text) {
  const msgDiv = document.createElement('div');
  msgDiv.className = `chat-msg ${sender}`;
  msgDiv.innerHTML = text;
  chatMessages.appendChild(msgDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function handleChatSubmit(e) {
  e.preventDefault();
  const input = document.getElementById('chatInput');
  const q = input.value.trim();
  if (!q) return;

  appendMessage('user', q);
  input.value = '';

  setTimeout(() => {
    const queryLower = q.toLowerCase();
    let reply = "";

    if (queryLower.includes('dha') || queryLower.includes('phase 2')) {
      reply = `We have 2 prime villas listed in DHA Phase 2 right now: A <strong>5 Bed Designer Villa (PKR 5.85 Crore)</strong> and a <strong>Golf Estate Residence (PKR 7.5 Crore)</strong>. Would you like me to book a site visit for you?`;
    } else if (queryLower.includes('f-7') || queryLower.includes('f7') || queryLower.includes('margalla')) {
      reply = `Sector F-7 is Islamabad's highest-appreciated diplomatic zone. We currently have a luxury <strong>1 Kanal Executive Residence (PKR 18.5 Crore)</strong> with full Margalla views and heated pool.`;
    } else if (queryLower.includes('5 crore') || queryLower.includes('budget') || queryLower.includes('under')) {
      reply = `Under PKR 5 Crore, check out our <strong>Contemporary Hillside Home in Bahria Town Phase 8 (PKR 4.25 Crore)</strong>. We also have off-market options in DHA Phase 5.`;
    } else if (queryLower.includes('bahria')) {
      reply = `Bahria Town Phase 8 has strong appreciation potential. Our <strong>Contemporary Hillside Home (PKR 4.25 Crore)</strong> is a hot deal right now, walking distance to the civic center and international schools.`;
    } else if (queryLower.includes('roi') || queryLower.includes('invest')) {
      reply = `For investment purposes, DHA Phase 2 and Sector F-7 have shown the strongest appreciation over the past 5 years. I can walk you through projected rental yields for any specific listing.`;
    } else if (queryLower.includes('visit') || queryLower.includes('schedule') || queryLower.includes('call')) {
      reply = `I can schedule your private tour immediately. Please drop your phone number or click the WhatsApp button to connect directly with our Islamabad field director.`;
    } else {
      reply = `Thank you for your inquiry! I can help you find verified villas in DHA, F-7, or Bahria Town. You can also filter by budget or schedule a chauffeured viewing anytime.`;
    }

    appendMessage('bot', reply);
  }, 500);
}

function sendQuickPrompt(promptText) {
  document.getElementById('chatInput').value = promptText;
  handleChatSubmit(new Event('submit'));
}

function askAiAboutProperty(propName) {
  toggleChat(true);
  sendQuickPrompt(`Tell me more about legal verification, CDA status, and negotiation room for: "${propName}"`);
}

/* ========================================================================= */
/* 07. FORM SUBMISSIONS & TOAST FEEDBACK                                     */
/* ========================================================================= */
function showToast(message) {
  const toast = document.getElementById('toast');
  document.getElementById('toast-text').innerText = message;
  toast.style.display = 'flex';
  setTimeout(() => {
    toast.style.display = 'none';
  }, 4000);
}

function handleContactSubmit(e) {
  e.preventDefault();
  e.target.reset();
  showToast("Thank you! Your message has been sent. An advisor will contact you shortly.");
}

function handleVisitSubmit(e, propTitle) {
  e.preventDefault();
  e.target.reset();
  showToast(`Viewing request confirmed for ${propTitle}! Our agent will call you to confirm time.`);
}