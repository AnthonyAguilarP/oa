// Diccionario de traducciones
const translations = {
  en: {
    // Navegación
    nav_home: "Home",
    nav_about: "About Us",
    nav_services: "Services",
    nav_gallery: "Gallery",
    nav_contact: "Contact",

    // Hero
    hero_title: "We build more than structures, <span class='blue-text'>we build dreams</span>",
    hero_subtitle: "Quality that lasts, trust that builds. Your vision, our mission. As a premier construction company, we bring your projects to life.",
    hero_btn_estimate: "Free Estimates",
    hero_btn_services: "Our Services",

    // About
    about_title: "About <span class='blue-text'>Us</span>",
    about_history: "Our History",
    about_p1: "At OA BUILD-OUT CONTRACTORS LLC, we are a dedicated construction company transforming spaces and executing top-tier residential and commercial projects. Serving the greater Houston area including Sugar Land, Missouri City, Stafford, and Fort Bend County.",
    about_p2: "We offer comprehensive construction services, focusing on high-quality finishes and structural integrity. Our team of highly trained professionals works with dedication and attention to detail to ensure exceptional results in every construction and remodeling project.",
    about_languages: "Languages",
    about_languages_spoken: "Spanish and English",
    about_payment: "Payment Methods",
    about_cash: "Cash",
    about_check: "Check",
    about_zelle: "Zelle",
    about_satisfaction: "Satisfaction",
    about_professionalism: "Professionalism",
    about_quality: "Quality",
    about_trust: "Trust",

    // Services
    services_title: "Our <span class='blue-text'>Services</span>",
    services_subtitle: "We offer specialized construction and finishing services for all your needs.",
    services_laminate_painting: "Exterior House Painting",
    services_psyren_painting: "Professional Drywall Setup",
    services_commercial_exterior: "Interior White Painting",
    services_residential_exterior: "White Exterior Coating",
    services_ceramic: "Tile Floor Expert",
    services_laminate: "Exclusive Hallway Tile",

    // Service Descs
    services_laminate_painting_desc: "Specialized in painting beautiful homes with high-quality finishes and elegant white exteriors.",
    services_psyren_painting_desc: "Modern painting solutions that enhance the architectural beauty and curb appeal of your residence.",
    services_commercial_exterior_desc: "Professional exterior painting meticulously applied to give your house a brand-new, premium look.",
    services_residential_exterior_desc: "Durable and brilliant white coating designed to protect your home while keeping it stunning.",
    services_ceramic_desc: "High-quality tile and ceramic installation for a durable, elegant, and low-maintenance interior.",
    services_laminate_desc: "Precision tile installation for hallways and high-traffic areas in luxury homes.",
    services_request: "Request Free Estimate",

    // New Service Detail Card Descriptions (specifically for the cards)
    card_drywall_desc: "Expert drywall installation and structural finishing, providing the perfect base for any interior wall in American homes.",
    card_tile_desc: "High-precision tile installation in interior spaces, creating a seamless and durable floor that enhances your living area.",
    card_ceramic_desc: "Specialized ceramic and tile work focusing on modern aesthetics and long-lasting durability for your home.",
    card_ext_paint_desc: "Durable exterior painting that protects your home from the weather while giving it a fresh, clean look.",
    card_int_paint_desc: "Beautiful white interior painting that brightens up your home, creating a clean and spacious atmosphere.",
    card_premium_int_desc: "Professional interior painting for multi-level homes, including staircases and hallways with a flawless finish.",

    // Service Detailed Descriptions
    service_laminate_painting_title: "Exterior House Painting",
    service_laminate_painting_p1: "We specialize in painting beautiful white houses, common in the USA, providing a clean and elegant look that stands out in any neighborhood.",
    service_laminate_painting_p2: "Our high-quality exterior paint ensures your home stays stunning and protected against the elements for many years.",

    service_psyren_painting_title: "Professional Drywall Setup",
    service_psyren_painting_p1: "Expert drywall installation and structural finishing, providing the perfect base for any interior wall in American homes.",
    service_psyren_painting_p2: "We guarantee structural integrity and a perfectly smooth surface for a flawless paint finish or textured coating.",

    service_commercial_exterior_title: "Interior White Painting",
    service_commercial_exterior_p1: "Transform your home with our bright and pure white interior painting services. We create a clean, luminous atmosphere in every room.",
    service_commercial_exterior_p2: "Our professional painters use premium finishes to ensure that walls, ceilings, and trim look absolutely stunning and modern.",

    service_residential_exterior_title: "White Exterior Coating",
    service_residential_exterior_p1: "Specialized coating and painting for white houses, delivering a bright, clean, and professional appearance that reflects heat and looks amazing.",
    service_residential_exterior_p2: "We protect your investment with weather-resistant materials that keep the white color vibrant and resistant to aging.",

    service_ceramic_title: "Tile Floor Expert",
    service_ceramic_p1: "High-precision tile and ceramic installation in interior spaces",
    service_ceramic_p2: "We ensure proper leveling and high-quality mortar to provide a stable, beautiful surface that lasts for decades.",

    service_laminate_title: "Exclusive Hallway Tile",
    service_laminate_p1: "Expert tile flooring installation specifically designed for hallways and corridors.",
    service_laminate_p2: "Transform your home's transitions with a seamless, high-traffic resistant tile finish.",

    // Gallery
    gallery_title: "Our <span class='blue-text'>Gallery</span>",
    gallery_subtitle: "Explore some of our recent construction and finishing projects.",
    gallery_all: "All",
    gallery_laminate_painting: "Laminate & Painting",
    gallery_psyren_painting: "Psyren",
    gallery_commercial_exterior: "Commercial Paint",
    gallery_residential_exterior: "Exterior Paint",
    gallery_ceramic: "Ceramic",
    gallery_laminate: "Tile Work",
    gallery_location: "Houston, TX",
    gallery_concrete: "Concrete Work",

    // New Services Card Keys
    services_card_1: "Professional Drywall Setup",
    services_card_2: "Master Tile Flooring",
    services_card_3: "Modern Tile Design",
    services_card_4: "Quality Exterior Painting",
    services_card_5: "Pure White Interior",
    services_card_6: "Elegant Staircase Finish",

    // New Gallery Keys
    gallery_item_1_title: "Modern Home Painting",
    gallery_item_1_desc: "Modern exterior finish for a premium residential property",
    gallery_item_2_title: "Premium Exterior Finish",
    gallery_item_2_desc: "Complete protection and elegant look for your home facade",
    gallery_item_3_title: "Tile Flooring",
    gallery_item_3_desc: "Durable and stylish ceramic tiles for modern living spaces",
    gallery_item_4_title: "Exterior House Painting",
    gallery_item_4_desc: "Professional coating with high-quality weather resistance",
    gallery_item_5_title: "Interior Design Paint",
    gallery_item_5_desc: "Bright and clean interior wall transformation and finishing",
    gallery_item_7_title: "White Exterior Coating",
    gallery_item_7_desc: "Specialized heat-reflective coating for American style homes",
    gallery_item_8_title: "Master Tile Finishing",
    gallery_item_8_desc: "Precision tile work with professional leveling and finish",
    gallery_item_16_title: "Commercial Painting",
    gallery_item_16_desc: "Large scale exterior painting for business facilities",
    gallery_item_18_title: "Business Facade Update",
    gallery_item_18_desc: "Modern professional look for commercial properties",
    gallery_item_22_title: "Hallway Tile",
    gallery_item_22_desc: "Elegant transition tile work tailored for high-traffic areas",

    gallery_res_exterior: "Res. Interior/Exterior",
    gallery_comm_exterior: "Comm. Interior/Exterior",
    gallery_tile_work: "Tile Work",

    // Reviews
    reviews_title: "Our <span class='blue-text'>Reviews</span>",
    reviews_subtitle: "See what our clients say about our work.",
    review_1: '"Excellent work on our new flooring. The team was professional and finished on time. Highly recommended!"',
    review_2: '"They painted the exterior of our commercial building and it looks brand new. Great attention to detail."',
    review_3: '"Outstanding ceramic tile installation in our kitchen. The precision and quality are top-notch."',

    // Contact
    contact_title: "Contact <span class='blue-text'>and Location</span>",
    contact_subtitle: "Ready to start your construction project? Contact us today.",
    contact_info: "Contact Information",
    contact_phone: "Phone",
    contact_email: "Email",
    contact_address: "Address",
    contact_hours: "Hours",
    contact_hours_value: "Always available to serve you",
    contact_payment: "Payment Methods",
    contact_follow: "Follow Us",
    contact_find: "Find Us",

    // Estimate Banner
    estimate_title: "Need an estimate for your project?",
    estimate_subtitle: "We offer completely free estimates. Contact us today.",

    // Footer
    footer_slogan: "We build more than structures, we build dreams",
    footer_rights: "All rights reserved.",
  },
  es: {
    // Navegación
    nav_home: "Inicio",
    nav_about: "Nosotros",
    nav_services: "Servicios",
    nav_gallery: "Galería",
    nav_contact: "Contacto",

    // Hero
    hero_title: "Construimos más que estructuras, <span class='blue-text'>construimos sueños</span>",
    hero_subtitle: "Calidad que perdura, confianza que construye. Tu visión, nuestra misión. Como empresa constructora de primer nivel, damos vida a tus proyectos.",
    hero_btn_estimate: "Presupuestos Gratis",
    hero_btn_services: "Nuestros Servicios",

    // About
    about_title: "Sobre <span class='blue-text'>Nosotros</span>",
    about_history: "Nuestra Historia",
    about_p1: "En OA BUILD-OUT CONTRACTORS LLC, somos una empresa constructora dedicada a transformar espacios y ejecutar proyectos residenciales y comerciales de primer nivel. Sirviendo el área metropolitana de Houston incluyendo Sugar Land, Missouri City, Stafford y Fort Bend County.",
    about_p2: "Ofrecemos servicios completos de construcción, enfocándonos en acabados de alta calidad e integridad estructural. Nuestro equipo de profesionales altamente capacitados trabaja con dedicación y atención al detalle para garantizar resultados excepcionales.",
    about_languages: "Idiomas",
    about_languages_spoken: "Español e Inglés",
    about_payment: "Métodos de Pago",
    about_cash: "Efectivo",
    about_check: "Cheque",
    about_zelle: "Zelle",
    about_satisfaction: "Satisfacción",
    about_professionalism: "Profesionalismo",
    about_quality: "Calidad",
    about_trust: "Confianza",

    // Services
    services_title: "Nuestros <span class='blue-text'>Servicios</span>",
    services_subtitle: "Ofrecemos servicios especializados de construcción y acabados.",
    services_laminate_painting: "Pintura de Casa Exterior",
    services_psyren_painting: "Acabado de Drywall",
    services_commercial_exterior: "Pintura Interior Blanca",
    services_residential_exterior: "Recubrimiento Exterior Blanco",
    services_ceramic: "Experto en Azulejos",
    services_laminate: "Pasillos en Azulejo Exclusivos",

    // Service Descs
    services_laminate_painting_desc: "Especializados en pintar casas hermosas con acabados de alta calidad y elegantes exteriores blancos.",
    services_psyren_painting_desc: "Soluciones de pintura modernas que realzan la belleza arquitectónica y el atractivo visual de su residencia.",
    services_commercial_exterior_desc: "Pintura exterior profesional aplicada meticulosamente para darle a su casa un aspecto premium y nuevo.",
    services_residential_exterior_desc: "Recubrimiento blanco brillante y duradero diseñado para proteger su hogar mientras lo mantiene impresionante.",
    services_ceramic_desc: "Instalación de azulejos y cerámica de alta calidad para un interior duradero, elegante y de bajo mantenimiento.",
    services_laminate_desc: "Instalación de precisión de azulejos para pasillos y áreas de mucho tráfico en casas de lujo.",
    services_request: "Solicitar Presupuesto Gratis",

    // New Service Detail Card Descriptions (specifically for the cards)
    card_drywall_desc: "Instalación experta de drywall y acabados estructurales, proporcionando la base perfecta para cualquier pared interior.",
    card_tile_desc: "Instalación de azulejos de alta precisión en espacios interiores, creando un suelo uniforme y duradero.",
    card_ceramic_desc: "Trabajo especializado en cerámica y azulejos enfocándose en la estética moderna y durabilidad para su hogar.",
    card_ext_paint_desc: "Pintura exterior duradera que protege su hogar de la intemperie mientras le da un aspecto fresco y limpio.",
    card_int_paint_desc: "Hermosa pintura interior en blanco que ilumina su hogar, creando una atmósfera limpia y espaciosa.",
    card_premium_int_desc: "Pintura interior profesional para casas de varios niveles, incluyendo escaleras y pasillos con un acabado impecable.",

    // Service Detailed Descriptions
    service_laminate_painting_title: "Pintura de Casa Exterior",
    service_laminate_painting_p1: "Nos especializamos en pintar hermosas casas blancas, comunes en los EE. UU., brindando un aspecto limpio y elegante que destaca en cualquier vecindario.",
    service_laminate_painting_p2: "Nuestra pintura exterior de alta calidad garantiza que su hogar se mantenga impresionante y protegido contra los elementos por muchos años.",

    service_psyren_painting_title: "Acabado de Drywall",
    service_psyren_painting_p1: "Instalación experta de drywall y acabados estructurales, proporcionando la base perfecta para cualquier pared interior.",
    service_psyren_painting_p2: "Garantizamos integridad estructural y una superficie perfectamente lisa para un acabado de pintura impecable o texturizado.",

    service_commercial_exterior_title: "Pintura Interior Blanca",
    service_commercial_exterior_p1: "Transforme su hogar con nuestros servicios de pintura interior en blanco puro y brillante. Creamos una atmósfera limpia y luminosa en cada habitación.",
    service_commercial_exterior_p2: "Nuestros pintores profesionales utilizan acabados premium para asegurar que las paredes, techos y molduras luzcan absolutamente modernos.",

    service_residential_exterior_title: "Recubrimiento Exterior Blanco",
    service_residential_exterior_p1: "Recubrimiento y pintura especializada para casas blancas, brindando una apariencia exterior brillante, limpia y profesional que luce increíble.",
    service_residential_exterior_p2: "Protegemos su inversión con materiales resistentes al clima que mantienen el color blanco vibrante y resistente al paso del tiempo.",

    service_ceramic_title: "Experto en Azulejos",
    service_ceramic_p1: "Instalación de azulejos y cerámica de alta precisión en espacios interiores",
    service_ceramic_p2: "Aseguramos una nivelación adecuada y adhesivos de alta calidad para proporcionar una superficie estable y hermosa.",

    service_laminate_title: "Pasillos en Azulejo Exclusivos",
    service_laminate_p1: "Instalación experta de azulejos específicamente diseñada para pasillos y corredores.",
    service_laminate_p2: "Transforme las transiciones de su hogar con un acabado de azulejo impecable.",

    // Gallery
    gallery_title: "Nuestra <span class='blue-text'>Galería</span>",
    gallery_subtitle: "Explore algunos de nuestros recientes proyectos de construcción y acabados.",
    gallery_all: "Todos",
    gallery_laminate_painting: "Piso laminado y pintura",
    gallery_psyren_painting: "Psyren y pintura",
    gallery_commercial_exterior: "Pintura exterior comercial",
    gallery_residential_exterior: "Pintura exterior",
    gallery_ceramic: "Cerámica",
    gallery_laminate: "Azulejos",
    gallery_location: "Houston, TX",
    gallery_concrete: "Trabajo de Concreto",

    // New Services Card Keys
    services_card_1: "Acabado Profesional de Drywall",
    services_card_2: "Piso de Azulejo Maestro",
    services_card_3: "Diseño Moderno de Azulejo",
    services_card_4: "Pintura Exterior de Calidad",
    services_card_5: "Interior en Blanco Puro",
    services_card_6: "Acabado de Escalera Elegante",

    // New Gallery Keys
    gallery_item_1_title: "Pintura de Hogar Moderno",
    gallery_item_1_desc: "Acabado exterior moderno para una propiedad residencial premium",
    gallery_item_2_title: "Acabado Exterior Premium",
    gallery_item_2_desc: "Protección completa y aspecto elegante para la fachada de su hogar",
    gallery_item_3_title: "Pisos de Azulejo",
    gallery_item_3_desc: "Suelo de cerámica duradero y elegante para espacios modernos",
    gallery_item_4_title: "Pintura de Casa Exterior",
    gallery_item_4_desc: "Recubrimiento profesional con alta resistencia a la intemperie",
    gallery_item_5_title: "Pintura de Diseño Interior",
    gallery_item_5_desc: "Transformación y acabado de paredes interiores brillante y limpia",
    gallery_item_7_title: "Recubrimiento Exterior Blanco",
    gallery_item_7_desc: "Recubrimiento especializado reflectante de calor para casas estilo americano",
    gallery_item_8_title: "Acabado Maestro de Azulejos",
    gallery_item_8_desc: "Trabajo de azulejos de precisión con nivelación profesional",
    gallery_item_16_title: "Pintura Comercial",
    gallery_item_16_desc: "Pintura exterior a gran escala para instalaciones comerciales",
    gallery_item_18_title: "Renovación de Fachada",
    gallery_item_18_desc: "Aspecto profesional moderno para propiedades comerciales",
    gallery_item_22_title: "Azulejo de Pasillo",
    gallery_item_22_desc: "Suelo de transición elegante diseñado para áreas de alto tráfico",

    gallery_res_exterior: "Interior/Exterior Res.",
    gallery_comm_exterior: "Interior/Exterior Com.",
    gallery_tile_work: "Azulejos",

    // Reviews
    reviews_title: "Nuestras <span class='blue-text'>Reseñas</span>",
    reviews_subtitle: "Vea lo que dicen nuestros clientes sobre nuestro trabajo.",
    review_1: '"Excelente trabajo en nuestro nuevo piso. El equipo fue muy profesional y terminó a tiempo. ¡Altamente recomendados!"',
    review_2: '"Pintaron el exterior de nuestro edificio comercial y quedó como nuevo. Gran atención al detalle."',
    review_3: '"Excepcional instalación de cerámica en nuestra cocina. La precisión y calidad son de primera."',

    // Contact
    contact_title: "Contacto <span class='blue-text'>y Ubicación</span>",
    contact_subtitle: "¿Listo para comenzar su proyecto de construcción? Contáctenos hoy.",
    contact_info: "Información de Contacto",
    contact_phone: "Teléfono",
    contact_email: "Correo",
    contact_address: "Dirección",
    contact_hours: "Horario",
    contact_hours_value: "Siempre disponibles para servirle",
    contact_payment: "Métodos de Pago",
    contact_follow: "Síguenos",
    contact_find: "Encuéntranos",

    // Estimate Banner
    estimate_title: "¿Necesita un presupuesto para su proyecto?",
    estimate_subtitle: "Ofrecemos presupuestos completamente gratuitos. Contáctenos hoy.",

    // Footer
    footer_slogan: "Construimos más que estructuras, construimos sueños",
    footer_rights: "Todos los derechos reservados.",
  }
};

// Función para cambiar el idioma
function changeLanguage(lang) {
  // Guardar la preferencia de idioma en localStorage
  localStorage.setItem("preferredLanguage", lang)

  // Actualizar los botones de idioma
  document.querySelectorAll(".language-btn").forEach((btn) => {
    btn.classList.remove("active")
  })
  document.querySelectorAll(`.language-btn[data-lang="${lang}"]`).forEach(btn => btn.classList.add("active"))

  // Actualizar textos de navegación
  document.querySelectorAll(".nav-link").forEach((link, index) => {
    const keys = ["nav_home", "nav_about", "nav_services", "nav_gallery", "nav_contact"]
    if (translations[lang][keys[index % keys.length]]) {
      link.textContent = translations[lang][keys[index % keys.length]]
    }
  })

  // Hero Section
  if (document.querySelector(".hero-text h1")) document.querySelector(".hero-text h1").innerHTML = translations[lang].hero_title
  if (document.querySelector(".hero-text p")) document.querySelector(".hero-text p").textContent = translations[lang].hero_subtitle
  if (document.querySelector(".hero-buttons .btn-primary")) {
    document.querySelector(".hero-buttons .btn-primary").innerHTML =
      `${translations[lang].hero_btn_estimate} <span class="icon-right">&#8250;</span>`
  }
  if (document.querySelector(".hero-buttons .btn-secondary")) document.querySelector(".hero-buttons .btn-secondary").textContent = translations[lang].hero_btn_services

  // About Section
  if (document.querySelector("#about .section-header h2")) document.querySelector("#about .section-header h2").innerHTML = translations[lang].about_title
  if (document.querySelector(".about-text h3")) document.querySelector(".about-text h3").textContent = translations[lang].about_history

  const aboutParagraphs = document.querySelectorAll(".about-text > p")
  if (aboutParagraphs.length >= 2) {
    aboutParagraphs[0].textContent = translations[lang].about_p1
    aboutParagraphs[1].textContent = translations[lang].about_p2
  }

  if (document.querySelector(".language h4")) document.querySelector(".language h4").textContent = translations[lang].about_languages
  if (document.querySelector(".language p")) {
    document.querySelector(".language p").innerHTML =
      `<i class="fas fa-language"></i> ${translations[lang].about_languages_spoken}`
  }
  if (document.querySelector(".payment h4")) document.querySelector(".payment h4").textContent = translations[lang].about_payment

  // Payment methods
  const paymentMethods = document.querySelectorAll(".payment-methods span")
  if (paymentMethods.length >= 3) {
    paymentMethods[0].innerHTML = `<i class="fas fa-money-bill-wave"></i> ${translations[lang].about_cash}`
    paymentMethods[1].innerHTML = `<i class="fas fa-money-check"></i> ${translations[lang].about_check}`
    paymentMethods[2].innerHTML = `<i class="fas fa-mobile-alt"></i> ${translations[lang].about_zelle}`
  }

  const statItems = document.querySelectorAll(".stat-item p")
  const statKeys = ["about_satisfaction", "about_professionalism", "about_quality", "about_trust"]
  statItems.forEach((item, index) => {
    if (index < statKeys.length) {
      item.textContent = translations[lang][statKeys[index]]
    }
  })

  // Services Section
  if (document.querySelector("#services .section-header h2")) document.querySelector("#services .section-header h2").innerHTML = translations[lang].services_title
  if (document.querySelector("#services .section-header p")) document.querySelector("#services .section-header p").textContent = translations[lang].services_subtitle

  // Tabs
  const tabButtons = document.querySelectorAll(".tab-btn")
  const tabKeys = [
    "services_laminate_painting",
    "services_psyren_painting",
    "services_commercial_exterior",
    "services_residential_exterior",
    "services_ceramic",
    "services_laminate"
  ]
  tabButtons.forEach((btn, index) => {
    if (index < tabKeys.length) {
      btn.textContent = translations[lang][tabKeys[index]]
    }
  })

  // Tab content titles and paragraphs
  const tabPanes = document.querySelectorAll(".tab-pane")
  const serviceIds = [
    "laminate_painting",
    "psyren_painting",
    "commercial_exterior",
    "residential_exterior",
    "ceramic",
    "laminate"
  ]

  tabPanes.forEach((pane, index) => {
    if (index < serviceIds.length) {
      const serviceId = serviceIds[index]
      const titleKey = `service_${serviceId}_title`

      // Update title
      const titleElement = pane.querySelector(".service-text h3")
      if (titleElement && translations[lang][titleKey]) {
        titleElement.textContent = translations[lang][titleKey]
      }

      // Update paragraphs
      const paragraphs = pane.querySelectorAll(".service-text p")
      paragraphs.forEach((p, pIndex) => {
        const paragraphKey = `service_${serviceId}_p${pIndex + 1}`
        if (translations[lang] && translations[lang][paragraphKey]) {
          p.textContent = translations[lang][paragraphKey]
        } else {
          p.textContent = ""; // clear unused
        }
      })
    }
  })

  // Service Cards
  const serviceCards = document.querySelectorAll(".service-card")
  const serviceKeys = ["services_card_1", "services_card_2", "services_card_3", "services_card_4", "services_card_5", "services_card_6"];
  const serviceDescKeys = [
    "card_drywall_desc",
    "card_tile_desc",
    "card_ceramic_desc",
    "card_ext_paint_desc",
    "card_int_paint_desc",
    "card_premium_int_desc"
  ]

  serviceCards.forEach((card, index) => {
    if (index < serviceKeys.length) {
      card.querySelector("h3").textContent = translations[lang][serviceKeys[index]]
      card.querySelector("p").textContent = translations[lang][serviceDescKeys[index]]
    }
  })

  if (document.querySelector("#services .btn-primary")) {
    document.querySelector("#services .btn-primary").innerHTML =
      `${translations[lang].services_request} <span class="icon-right">&#8250;</span>`
  }

  // Gallery Section
  if (document.querySelector("#gallery .section-header h2")) document.querySelector("#gallery .section-header h2").innerHTML = translations[lang].gallery_title
  if (document.querySelector("#gallery .section-header p")) document.querySelector("#gallery .section-header p").textContent = translations[lang].gallery_subtitle

  // Gallery filter buttons
  const filterButtons = document.querySelectorAll(".filter-btn")
  if (filterButtons.length > 0) {
    filterButtons[0].textContent = translations[lang].gallery_all
    for (let i = 1; i < filterButtons.length; i++) {
      const category = filterButtons[i].getAttribute("data-filter")
      if (translations[lang][`gallery_${category}`]) {
        filterButtons[i].textContent = translations[lang][`gallery_${category}`]
      }
    }
  }

  // Gallery items - Use unique keys for title and description
  const galleryItems = document.querySelectorAll(".gallery-item")

  galleryItems.forEach((item) => {
    const titleKey = item.getAttribute("data-title-key");
    const descKey = item.getAttribute("data-desc-key");

    if (titleKey && translations[lang][titleKey]) {
      const h3 = item.querySelector("h3");
      if (h3) h3.textContent = translations[lang][titleKey];
    }

    if (descKey && translations[lang][descKey]) {
      const p = item.querySelector("p");
      if (p) p.textContent = translations[lang][descKey];
    }
  });

  // Reviews Section
  if (document.querySelector("#reviews .section-header h2")) document.querySelector("#reviews .section-header h2").innerHTML = translations[lang].reviews_title;
  if (document.querySelector("#reviews .section-header p")) document.querySelector("#reviews .section-header p").textContent = translations[lang].reviews_subtitle;

  const reviewParagraphs = document.querySelectorAll(".review-card p");
  if (reviewParagraphs.length >= 3) {
    reviewParagraphs[0].textContent = translations[lang].review_1;
    reviewParagraphs[1].textContent = translations[lang].review_2;
    reviewParagraphs[2].textContent = translations[lang].review_3;
  }

  // Contact Section
  if (document.querySelector("#contact .section-header h2")) document.querySelector("#contact .section-header h2").innerHTML = translations[lang].contact_title
  if (document.querySelector("#contact .section-header p")) document.querySelector("#contact .section-header p").textContent = translations[lang].contact_subtitle

  if (document.querySelector(".contact-info > h3")) document.querySelector(".contact-info > h3").textContent = translations[lang].contact_info

  const contactLabels = document.querySelectorAll(".contact-item h4")
  const contactKeys = ["contact_phone", "contact_email", "contact_address", "contact_hours"]
  contactLabels.forEach((label, index) => {
    if (index < contactKeys.length) {
      label.textContent = translations[lang][contactKeys[index]]
    }
  })

  // Actualizar el texto de horario
  const hoursItem = document.querySelector(".contact-item:nth-child(4) p")
  if (hoursItem) {
    hoursItem.textContent = translations[lang].contact_hours_value
  }

  // Payment methods in contact section
  const contactPaymentHeading = document.querySelectorAll(".contact-info h3");
  if (contactPaymentHeading.length >= 2) contactPaymentHeading[1].textContent = translations[lang].contact_payment;

  const paymentMethodsLarge = document.querySelectorAll(".payment-method span")
  if (paymentMethodsLarge.length >= 3) {
    paymentMethodsLarge[0].textContent = translations[lang].about_cash
    paymentMethodsLarge[1].textContent = translations[lang].about_check
    paymentMethodsLarge[2].textContent = translations[lang].about_zelle
  }

  if (contactPaymentHeading.length >= 3) contactPaymentHeading[2].textContent = translations[lang].contact_follow;
  if (document.querySelector(".map-container h3")) document.querySelector(".map-container h3").textContent = translations[lang].contact_find

  // Estimate Banner
  if (document.querySelector(".estimate-content h2")) document.querySelector(".estimate-content h2").textContent = translations[lang].estimate_title
  if (document.querySelector(".estimate-content p")) document.querySelector(".estimate-content p").textContent = translations[lang].estimate_subtitle

  // Footer
  if (document.querySelector(".footer-logo p")) document.querySelector(".footer-logo p").textContent = translations[lang].footer_slogan
  const footerCopyright = document.querySelector(".footer-copyright p")
  if (footerCopyright) {
    const year = footerCopyright.querySelector("#currentYear")
      ? document.getElementById("currentYear").textContent
      : new Date().getFullYear()
    footerCopyright.innerHTML = `&copy; <span id="currentYear">${year}</span> OA BUILD-OUT CONTRACTORS LLC. ${translations[lang].footer_rights}`
  }
}
