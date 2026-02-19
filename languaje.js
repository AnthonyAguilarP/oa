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
    hero_title: "We build more than structures, <span class='gold-text'>we build dreams</span>",
    hero_subtitle:
      "Quality that lasts, trust that builds. Your vision, our mission. Where others see blueprints, we see the future.",
    hero_btn_estimate: "Free Estimates",
    hero_btn_services: "Our Services",

    // About
    about_title: "About <span class='gold-text'>Us</span>",
    about_history: "Our History",
    about_p1:
      "At OA BUILD-OUT CONTRACTORS LLC, we are dedicated to transforming spaces and creating dream homes. Our passion for construction and commitment to excellence has positioned us as leaders in the industry. Serving the greater Houston area including Sugar Land, Missouri City, Stafford, and Fort Bend County.",
    about_p2:
      "We offer complete construction and remodeling services, from initial design to project completion. Our team of highly trained professionals works with dedication and attention to detail to ensure exceptional results in every project.",
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
    services_title: "Our <span class='gold-text'>Services</span>",
    services_subtitle: "We offer a wide range of construction services to meet all your needs.",
    services_framing: "Framing",
    services_decks: "Decks",
    services_siding: "Siding",
    services_windows: "Windows",
    services_roofing: "Roofing",
    services_construction: "Construction",
    services_framing_desc:
      "Solid and precise structures that form the foundation of your project. We build with safety and durability.",
    services_decks_desc:
      "Custom outdoor spaces that combine style, functionality, and durability for outdoor enjoyment.",
    services_siding_desc:
      "Coverings that protect and beautify your home, offering weather resistance and low maintenance.",
    services_windows_desc: "High-efficiency windows that improve lighting, insulation, and aesthetics of your home.",
    services_construction_desc: "Complete construction services with attention to detail and commitment to quality.",
    services_roofing_desc:
      "Durable and efficient roofs that protect your investment and improve the energy efficiency of your home.",
    services_request: "Request Free Estimate",

    // Service Detailed Descriptions
    service_framing_title: "Framing",
    service_framing_p1:
      "We specialize in high-precision structural framing, providing the solid foundation your project needs to grow with safety, efficiency, and durability. In every cut, nail, and measurement, we build trust.",
    service_framing_p2:
      "Framing is not just the skeleton of a construction, it's the heart that supports every plan, every idea and every dream. Our commitment is to provide resistant, exact structures made to last.",
    service_framing_p3:
      "From the first nail to the last panel, our framing team transforms blueprints into real, solid, and safe structures. We work with passion, precision, and professionalism to ensure your project is built on an impeccable foundation.",

    service_decks_title: "Decks",
    service_decks_p1:
      "We transform your outdoor space into a place for gathering, relaxation, and style. Our decks combine design, durability, and impeccable finishes so you can enjoy every corner of your outdoor home.",
    service_decks_p2:
      "We build custom decks that not only beautify your property but also add value, functionality, and warmth to your lifestyle. We design with comfort, aesthetics, and resistance to the passage of time in mind.",
    service_decks_p3:
      "A good deck is not just built, it's designed to be lived in. With high-quality materials and expert craftsmanship, we create durable outdoor spaces that invite sharing, relaxation, and maximum enjoyment.",

    service_siding_title: "Siding",
    service_siding_p1:
      "We protect what's most important: your home. Our siding service not only improves the appearance of your home but also guarantees an efficient barrier against weather, moisture, and the passage of time. Style and resistance in every panel.",
    service_siding_p2:
      "Siding is much more than a covering; it's an investment in durability, efficiency, and beauty. With high-quality materials and precise installation, we transform your facade into a statement of style and protection.",
    service_siding_p3:
      "Every home has a story to tell from the outside. With our siding service, we ensure that first impression is impeccable, modern, and lasting. Because every detail matters, we start from the outside in.",
    service_siding_p4:
      "We offer siding solutions that combine aesthetics, resistance, and low maintenance. Whether you're looking to renovate your home or protect a new construction, we have the ideal option for every style and need.",

    service_windows_title: "Windows",
    service_windows_p1:
      "Our windows not only illuminate your home but also protect it. Designed to offer thermal insulation, energy efficiency, and elegance, our window solutions provide comfort, savings, and style in every corner.",
    service_windows_p2:
      "Replacing your windows is more than an aesthetic improvement: it's an investment in efficiency, security, and well-being. With high-performance technology, durable materials, and custom finishes, we transform your home from the inside out.",
    service_windows_p3:
      "We create spaces full of light, comfort, and tranquility. Our window installation service offers customized solutions that combine modern design, energy efficiency, and weather resistance.",
    service_windows_p4:
      "Installing new windows is renewing the way your home breathes, illuminates, and protects itself. We offer innovative systems that improve energy efficiency, reduce outside noise, and increase the value of your property.",

    service_roofing_title: "Roofing",
    service_roofing_p1:
      "A quality roof not only protects your home, it defines it. Our roofing service combines premium materials, professional installation, and attention to every detail to provide you with peace of mind, efficiency, and impeccable aesthetics.",
    service_roofing_p2:
      "Your roof is the first line of defense against the weather. That's why, in every roofing project, we offer resistant, durable solutions adapted to the most demanding conditions. Safety, efficiency, and style, all in one structure.",
    service_roofing_p3:
      "Every roof we install is designed to last, resist, and beautify. We use advanced technology and certified materials to ensure your investment is protected for decades.",
    service_roofing_p4:
      "Roofing is not just a necessity, it's an opportunity to elevate the value, efficiency, and appearance of your property. Whether it's a new installation or replacement, we work with precision and commitment in every layer.",
    service_roofing_p5:
      "We know that a good roof is not noticed, but felt. Our specialized roofing team offers solutions that insulate, protect, and improve home comfort, without compromising design.",

    // Gallery
    gallery_title: "Our <span class='gold-text'>Gallery</span>",
    gallery_subtitle: "Explore some of our recent projects that showcase our expertise and quality of work.",
    gallery_all: "All",
    gallery_residential_framing: "Residential Framing",
    gallery_custom_deck: "Custom Deck",
    gallery_modern_siding: "Modern Siding",
    gallery_efficient_windows: "Efficient Windows",
    gallery_residential_roof: "Residential Roof",
    gallery_commercial_framing: "Commercial Framing",
    gallery_deck_pergola: "Deck",
    gallery_classic_siding: "Classic Siding",
    gallery_location: "Richmond, VA",

    // Contact
    contact_title: "Contact <span class='gold-text'>and Location</span>",
    contact_subtitle: "Ready to start your project? Contact us today for a free consultation and estimate.",
    contact_info: "Contact Information",
    contact_phone: "Phone",
    contact_email: "Email",
    contact_address: "Address",
    contact_hours: "Hours",
    contact_hours_value: "3311 RITTER ST RICHMOND VA 23234",
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
    hero_title: "Construimos más que estructuras, <span class='gold-text'>construimos sueños</span>",
    hero_subtitle:
      "Calidad que perdura, confianza que construye. Tu visión, nuestra misión. Donde otros ven planos, nosotros vemos el futuro.",
    hero_btn_estimate: "Presupuestos Gratis",
    hero_btn_services: "Nuestros Servicios",

    // About
    about_title: "Sobre <span class='gold-text'>Nosotros</span>",
    about_history: "Nuestra Historia",
    about_p1:
      "En OA BUILD-OUT CONTRACTORS LLC, nos dedicamos a transformar espacios y crear hogares de ensueño. Nuestra pasión por la construcción y compromiso con la excelencia nos ha posicionado como líderes en la industria. Sirviendo el área metropolitana de Houston incluyendo Sugar Land, Missouri City, Stafford y Fort Bend County.",
    about_p2:
      "Ofrecemos servicios completos de construcción y remodelación, desde el diseño inicial hasta la finalización del proyecto. Nuestro equipo de profesionales altamente capacitados trabaja con dedicación y atención al detalle para garantizar resultados excepcionales en cada proyecto.",
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
    services_title: "Nuestros <span class='gold-text'>Servicios</span>",
    services_subtitle: "Ofrecemos una amplia gama de servicios de construcción para satisfacer todas sus necesidades.",
    services_framing: "Estructuras",
    services_decks: "Terrazas",
    services_siding: "Revestimientos",
    services_windows: "Ventanas",
    services_roofing: "Techos",
    services_construction: "Construcción",
    services_framing_desc:
      "Estructuras sólidas y precisas que forman la base de su proyecto. Construimos con seguridad y durabilidad.",
    services_decks_desc:
      "Espacios exteriores personalizados que combinan estilo, funcionalidad y durabilidad para el disfrute al aire libre.",
    services_siding_desc:
      "Revestimientos que protegen y embellecen su hogar, ofreciendo resistencia a la intemperie y bajo mantenimiento.",
    services_windows_desc:
      "Ventanas de alta eficiencia que mejoran la iluminación, el aislamiento y la estética de su hogar.",
    services_construction_desc:
      "Servicios completos de construcción con atención al detalle y compromiso con la calidad.",
    services_roofing_desc:
      "Techos duraderos y eficientes que protegen su inversión y mejoran la eficiencia energética de su hogar.",
    services_request: "Solicitar Presupuesto Gratis",

    // Service Detailed Descriptions
    service_framing_title: "Estructuras",
    service_framing_p1:
      "Nos especializamos en estructuras de alta precisión, proporcionando la base sólida que su proyecto necesita para crecer con seguridad, eficiencia y durabilidad. En cada corte, clavo y medida, construimos confianza.",
    service_framing_p2:
      "El encuadre no es solo el esqueleto de una construcción, es el corazón que sostiene cada plan, cada idea y cada sueño. Nuestro compromiso es proporcionar estructuras resistentes y exactas hechas para durar.",
    service_framing_p3:
      "Desde el primer clavo hasta el último panel, nuestro equipo de estructuras transforma los planos en estructuras reales, sólidas y seguras. Trabajamos con pasión, precisión y profesionalismo para garantizar que su proyecto se construya sobre una base impecable.",

    service_decks_title: "Terrazas",
    service_decks_p1:
      "Transformamos su espacio exterior en un lugar para reunirse, relajarse y disfrutar con estilo. Nuestras terrazas combinan diseño, durabilidad y acabados impecables para que pueda disfrutar de cada rincón de su hogar al aire libre.",
    service_decks_p2:
      "Construimos terrazas personalizadas que no solo embellecen su propiedad, sino que también agregan valor, funcionalidad y calidez a su estilo de vida. Diseñamos pensando en la comodidad, la estética y la resistencia al paso del tiempo.",
    service_decks_p3:
      "Una buena terraza no solo se construye, se diseña para ser vivida. Con materiales de alta calidad y mano de obra experta, creamos espacios exteriores duraderos que invitan a compartir, relajarse y disfrutar al máximo.",

    service_siding_title: "Revestimiento",
    service_siding_p1:
      "Protegemos lo más importante: su hogar. Nuestro servicio de revestimiento no solo mejora la apariencia de su casa, sino que también garantiza una barrera eficiente contra el clima, la humedad y el paso del tiempo. Estilo y resistencia en cada panel.",
    service_siding_p2:
      "El revestimiento es mucho más que una cubierta; es una inversión en durabilidad, eficiencia y belleza. Con materiales de alta calidad e instalación precisa, transformamos su fachada en una declaración de estilo y protección.",
    service_siding_p3:
      "Cada hogar tiene una historia que contar desde el exterior. Con nuestro servicio de revestimiento, nos aseguramos de que esa primera impresión sea impecable, moderna y duradera. Porque cada detalle importa, comenzamos desde el exterior hacia adentro.",
    service_siding_p4:
      "Ofrecemos soluciones de revestimiento que combinan estética, resistencia y bajo mantenimiento. Ya sea que busque renovar su hogar o proteger una nueva construcción, tenemos la opción ideal para cada estilo y necesidad.",

    service_windows_title: "Ventanas",
    service_windows_p1:
      "Nuestras ventanas no solo iluminan su hogar, sino que también lo protegen. Diseñadas para ofrecer aislamiento térmico, eficiencia energética y elegancia, nuestras soluciones de ventanas proporcionan comodidad, ahorro y estilo en cada rincón.",
    service_windows_p2:
      "Reemplazar sus ventanas es más que una mejora estética: es una inversión en eficiencia, seguridad y bienestar. Con tecnología de alto rendimiento, materiales duraderos y acabados personalizados, transformamos su hogar desde adentro hacia afuera.",
    service_windows_p3:
      "Creamos espacios llenos de luz, comodidad y tranquilidad. Nuestro servicio de instalación de ventanas ofrece soluciones personalizadas que combinan diseño moderno, eficiencia energética y resistencia a la intemperie.",
    service_windows_p4:
      "Instalar nuevas ventanas es renovar la forma en que su hogar respira, se ilumina y se protege. Ofrecemos sistemas innovadores que mejoran la eficiencia energética, reducen el ruido exterior y aumentan el valor de su propiedad.",

    service_roofing_title: "Techos",
    service_roofing_p1:
      "Un techo de calidad no solo protege su hogar, lo define. Nuestro servicio de techado combina materiales premium, instalación profesional y atención a cada detalle para brindarle tranquilidad, eficiencia y estética impecable.",
    service_roofing_p2:
      "Su techo es la primera línea de defensa contra el clima. Por eso, en cada proyecto de techado, ofrecemos soluciones resistentes y duraderas adaptadas a las condiciones más exigentes. Seguridad, eficiencia y estilo, todo en una estructura.",
    service_roofing_p3:
      "Cada techo que instalamos está diseñado para durar, resistir y embellecer. Utilizamos tecnología avanzada y materiales certificados para garantizar que su inversión esté protegida durante décadas.",
    service_roofing_p4:
      "El techado no es solo una necesidad, es una oportunidad para elevar el valor, la eficiencia y la apariencia de su propiedad. Ya sea una nueva instalación o un reemplazo, trabajamos con precisión y compromiso en cada capa.",
    service_roofing_p5:
      "Sabemos que un buen techo no se nota, se siente. Nuestro equipo especializado en techos ofrece soluciones que aíslan, protegen y mejoran la comodidad del hogar, sin comprometer el diseño.",

    // Gallery
    gallery_title: "Nuestra <span class='gold-text'>Galería</span>",
    gallery_subtitle:
      "Explore algunos de nuestros proyectos recientes que muestran nuestra experiencia y calidad de trabajo.",
    gallery_all: "Todos",
    gallery_residential_framing: "Estructura Residencial",
    gallery_custom_deck: "Terraza Personalizada",
    gallery_modern_siding: "Revestimiento Moderno",
    gallery_efficient_windows: "Ventanas Eficientes",
    gallery_residential_roof: "Techo Residencial",
    gallery_commercial_framing: "Estructura Comercial",
    gallery_deck_pergola: "Terraza",
    gallery_classic_siding: "Revestimiento Clásico",
    gallery_location: "Richmond, VA",

    // Contact
    contact_title: "Contacto <span class='gold-text'>y Ubicación</span>",
    contact_subtitle: "¿Listo para comenzar su proyecto? Contáctenos hoy para una consulta y presupuesto gratuitos.",
    contact_info: "Información de Contacto",
    contact_phone: "Teléfono",
    contact_email: "Correo",
    contact_address: "Dirección",
    contact_hours: "Horario",
    contact_hours_value: "3311 RITTER ST RICHMOND VA 23234",
    contact_payment: "Métodos de Pago",
    contact_follow: "Síguenos",
    contact_find: "Encuéntranos",

    // Estimate Banner
    estimate_title: "¿Necesita un presupuesto para su proyecto?",
    estimate_subtitle: "Ofrecemos presupuestos completamente gratuitos. Contáctenos hoy.",

    // Footer
    footer_slogan: "Construimos más que estructuras, construimos sueños",
    footer_rights: "Todos los derechos reservados.",
  },
}

// Función para cambiar el idioma
function changeLanguage(lang) {
  // Guardar la preferencia de idioma en localStorage
  localStorage.setItem("preferredLanguage", lang)

  // Actualizar los botones de idioma
  document.querySelectorAll(".language-btn").forEach((btn) => {
    btn.classList.remove("active")
  })
  document.querySelector(`.language-btn[data-lang="${lang}"]`).classList.add("active")

  // Actualizar textos de navegación
  document.querySelectorAll(".nav-link").forEach((link, index) => {
    const keys = ["nav_home", "nav_about", "nav_services", "nav_gallery", "nav_contact"]
    if (index < keys.length) {
      link.textContent = translations[lang][keys[index]]
    }
  })

  // Hero Section
  document.querySelector(".hero-text h1").innerHTML = translations[lang].hero_title
  document.querySelector(".hero-text p").textContent = translations[lang].hero_subtitle
  document.querySelector(".hero-buttons .btn-primary").innerHTML =
    `${translations[lang].hero_btn_estimate} <span class="icon-right">&#8250;</span>`
  document.querySelector(".hero-buttons .btn-secondary").textContent = translations[lang].hero_btn_services

  // About Section
  document.querySelector("#about .section-header h2").innerHTML = translations[lang].about_title
  document.querySelector(".about-text h3").textContent = translations[lang].about_history
  const aboutParagraphs = document.querySelectorAll(".about-text > p")
  if (aboutParagraphs.length >= 2) {
    aboutParagraphs[0].textContent = translations[lang].about_p1
    aboutParagraphs[1].textContent = translations[lang].about_p2
  }

  document.querySelector(".language h4").textContent = translations[lang].about_languages
  document.querySelector(".language p").innerHTML =
    `<i class="fas fa-language"></i> ${translations[lang].about_languages_spoken}`
  document.querySelector(".payment h4").textContent = translations[lang].about_payment

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
  document.querySelector("#services .section-header h2").innerHTML = translations[lang].services_title
  document.querySelector("#services .section-header p").textContent = translations[lang].services_subtitle

  // Tabs
  const tabButtons = document.querySelectorAll(".tab-btn")
  const tabKeys = ["services_framing", "services_decks", "services_siding", "services_windows", "services_roofing"]
  tabButtons.forEach((btn, index) => {
    if (index < tabKeys.length) {
      btn.textContent = translations[lang][tabKeys[index]]
    }
  })

  // Tab content titles and paragraphs
  const tabPanes = document.querySelectorAll(".tab-pane")
  const serviceIds = ["framing", "decks", "siding", "windows", "roofing"]

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
        if (translations[lang][paragraphKey]) {
          p.textContent = translations[lang][paragraphKey]
        }
      })
    }
  })

  // Service Cards
  const serviceCards = document.querySelectorAll(".service-card")
  const serviceKeys = [
    "services_framing",
    "services_decks",
    "services_siding",
    "services_windows",
    "services_construction",
    "services_roofing",
  ]
  const serviceDescKeys = [
    "services_framing_desc",
    "services_decks_desc",
    "services_siding_desc",
    "services_windows_desc",
    "services_construction_desc",
    "services_roofing_desc",
  ]

  serviceCards.forEach((card, index) => {
    if (index < serviceKeys.length) {
      card.querySelector("h3").textContent = translations[lang][serviceKeys[index]]
      card.querySelector("p").textContent = translations[lang][serviceDescKeys[index]]
    }
  })

  document.querySelector("#services .btn-primary").innerHTML =
    `${translations[lang].services_request} <span class="icon-right">&#8250;</span>`

  // Gallery Section
  document.querySelector("#gallery .section-header h2").innerHTML = translations[lang].gallery_title
  document.querySelector("#gallery .section-header p").textContent = translations[lang].gallery_subtitle

  // Gallery filter buttons
  const filterButtons = document.querySelectorAll(".filter-btn")
  filterButtons[0].textContent = translations[lang].gallery_all
  for (let i = 1; i < filterButtons.length; i++) {
    const category = filterButtons[i].getAttribute("data-filter")
    filterButtons[i].textContent = translations[lang][`services_${category}`]
  }

  // Gallery items
  const galleryItems = document.querySelectorAll(".gallery-item")
  const galleryTitles = [
    "gallery_residential_framing",
    "gallery_custom_deck",
    "gallery_modern_siding",
    "gallery_efficient_windows",
    "gallery_residential_roof",
    "gallery_commercial_framing",
    "gallery_deck_pergola",
    "gallery_classic_siding",
  ]

  galleryItems.forEach((item, index) => {
    if (index < galleryTitles.length) {
      item.querySelector("h3").textContent = translations[lang][galleryTitles[index]]
      item.querySelector("p").textContent = translations[lang].gallery_location
    }
  })

  // Contact Section
  document.querySelector("#contact .section-header h2").innerHTML = translations[lang].contact_title
  document.querySelector("#contact .section-header p").textContent = translations[lang].contact_subtitle

  document.querySelector(".contact-info > h3").textContent = translations[lang].contact_info

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
  document.querySelector(".contact-info h3:nth-of-type(2)").textContent = translations[lang].contact_payment
  const paymentMethodsLarge = document.querySelectorAll(".payment-method span")
  if (paymentMethodsLarge.length >= 3) {
    paymentMethodsLarge[0].textContent = translations[lang].about_cash
    paymentMethodsLarge[1].textContent = translations[lang].about_check
    paymentMethodsLarge[2].textContent = translations[lang].about_zelle
  }

  document.querySelector(".contact-info h3:nth-of-type(3)").textContent = translations[lang].contact_follow
  document.querySelector(".map-container h3").textContent = translations[lang].contact_find

  // Estimate Banner
  document.querySelector(".estimate-content h2").textContent = translations[lang].estimate_title
  document.querySelector(".estimate-content p").textContent = translations[lang].estimate_subtitle

  // Footer
  document.querySelector(".footer-logo p").textContent = translations[lang].footer_slogan
  const footerCopyright = document.querySelector(".footer-copyright p")
  const year = footerCopyright.querySelector("#currentYear")
    ? document.getElementById("currentYear").textContent
    : new Date().getFullYear()
  footerCopyright.innerHTML = `&copy; <span id="currentYear">${year}</span> OA BUILD-OUT CONTRACTORS LLC. ${translations[lang].footer_rights}`
}

document.addEventListener("DOMContentLoaded", () => {
  // Get language buttons
  const languageBtns = document.querySelectorAll(".language-btn")
  
  // Load saved language preference on page load
  const savedLanguage = localStorage.getItem("preferredLanguage") || "en"
  changeLanguage(savedLanguage)

  // Service text translations
  const serviceTranslations = {
    en: {
      // Framing
      framing: {
        title: "Framing",
        p1: "We specialize in high-precision structural framing, providing the solid foundation your project needs to grow with safety, efficiency, and durability. In every cut, nail, and measurement, we build trust.",
        p2: "Framing is not just the skeleton of a construction, it's the heart that supports every plan, every idea, and every dream. Our commitment is to provide resistant, exact structures made to last.",
        p3: "From the first nail to the last panel, our framing team transforms blueprints into real, solid, and safe structures. We work with passion, precision, and professionalism to ensure your project is built on an impeccable foundation.",
      },
      // Decks
      decks: {
        title: "Decks",
        p1: "We transform your outdoor space into a place for gathering, relaxation, and style. Our decks combine design, durability, and impeccable finishes so you can enjoy every corner of your outdoor home.",
        p2: "We build custom decks that not only beautify your property but also add value, functionality, and warmth to your lifestyle. We design with comfort, aesthetics, and resistance to the passage of time in mind.",
        p3: "A good deck is not just built, it's designed to be lived in. With high-quality materials and expert craftsmanship, we create durable outdoor spaces that invite sharing, relaxation, and maximum enjoyment.",
      },
      // Siding
      siding: {
        title: "Siding",
        p1: "We protect what's most important: your home. Our siding service not only improves the appearance of your home but also guarantees an efficient barrier against weather, moisture, and the passage of time. Style and resistance in every panel.",
        p2: "Siding is much more than a covering; it's an investment in durability, efficiency, and beauty. With high-quality materials and precise installation, we transform your facade into a statement of style and protection.",
        p3: "Every home has a story to tell from the outside. With our siding service, we ensure that first impression is impeccable, modern, and lasting. Because every detail matters, we start from the outside in.",
        p4: "We offer siding solutions that combine aesthetics, resistance, and low maintenance. Whether you're looking to renovate your home or protect a new construction, we have the ideal option for every style and need.",
      },
      // Windows
      windows: {
        title: "Windows",
        p1: "Our windows not only illuminate your home but also protect it. Designed to offer thermal insulation, energy efficiency, and elegance, our window solutions provide comfort, savings, and style in every corner.",
        p2: "Replacing your windows is more than an aesthetic improvement: it's an investment in efficiency, security, and well-being. With high-performance technology, durable materials, and custom finishes, we transform your home from the inside out.",
        p3: "We create spaces full of light, comfort, and tranquility. Our window installation service offers customized solutions that combine modern design, energy efficiency, and weather resistance.",
        p4: "Installing new windows is renewing the way your home breathes, illuminates, and protects itself. We offer innovative systems that improve energy efficiency, reduce outside noise, and increase the value of your property.",
      },
      // Roofing
      roofing: {
        title: "Roofing",
        p1: "A quality roof not only protects your home, it defines it. Our roofing service combines premium materials, professional installation, and attention to every detail to provide you with peace of mind, efficiency, and impeccable aesthetics.",
        p2: "Your roof is the first line of defense against the weather. That's why, in every roofing project, we offer resistant, durable solutions adapted to the most demanding conditions. Safety, efficiency, and style, all in one structure.",
        p3: "Every roof we install is designed to last, resist, and beautify. We use advanced technology and certified materials to ensure your investment is protected for decades.",
        p4: "Roofing is not just a necessity, it's an opportunity to elevate the value, efficiency, and appearance of your property. Whether it's a new installation or replacement, we work with precision and commitment in every layer.",
        p5: "We know that a good roof is not noticed, but felt. Our specialized roofing team offers solutions that insulate, protect, and improve home comfort, without compromising design.",
      },
    },
    es: {
      // Framing
      framing: {
        title: "Estructuras",
        p1: "Nos especializamos en estructuras de alta precisión, proporcionando la base sólida que su proyecto necesita para crecer con seguridad, eficiencia y durabilidad. En cada corte, clavo y medida, construimos confianza.",
        p2: "El encuadre no es solo el esqueleto de una construcción, es el corazón que sostiene cada plan, cada idea y cada sueño. Nuestro compromiso es proporcionar estructuras resistentes y exactas hechas para durar.",
        p3: "Desde el primer clavo hasta el último panel, nuestro equipo de estructuras transforma los planos en estructuras reales, sólidas y seguras. Trabajamos con pasión, precisión y profesionalismo para garantizar que su proyecto se construya sobre una base impecable.",
      },
      // Decks
      decks: {
        title: "Terrazas",
        p1: "Transformamos su espacio exterior en un lugar para reunirse, relajarse y disfrutar con estilo. Nuestras terrazas combinan diseño, durabilidad y acabados impecables para que pueda disfrutar de cada rincón de su hogar al aire libre.",
        p2: "Construimos terrazas personalizadas que no solo embellecen su propiedad, sino que también agregan valor, funcionalidad y calidez a su estilo de vida. Diseñamos pensando en la comodidad, la estética y la resistencia al paso del tiempo.",
        p3: "Una buena terraza no solo se construye, se diseña para ser vivida. Con materiales de alta calidad y mano de obra experta, creamos espacios exteriores duraderos que invitan a compartir, relajarse y disfrutar al máximo.",
      },
      // Siding
      siding: {
        title: "Revestimiento",
        p1: "Protegemos lo más importante: su hogar. Nuestro servicio de revestimiento no solo mejora la apariencia de su casa, sino que también garantiza una barrera eficiente contra el clima, la humedad y el paso del tiempo. Estilo y resistencia en cada panel.",
        p2: "El revestimiento es mucho más que una cubierta; es una inversión en durabilidad, eficiencia y belleza. Con materiales de alta calidad e instalación precisa, transformamos su fachada en una declaración de estilo y protección.",
        p3: "Cada hogar tiene una historia que contar desde el exterior. Con nuestro servicio de revestimiento, nos aseguramos de que esa primera impresión sea impecable, moderna y duradera. Porque cada detalle importa, comenzamos desde el exterior hacia adentro.",
        p4: "Ofrecemos soluciones de revestimiento que combinan estética, resistencia y bajo mantenimiento. Ya sea que busque renovar su hogar o proteger una nueva construcción, tenemos la opción ideal para cada estilo y necesidad.",
      },
      // Windows
      windows: {
        title: "Ventanas",
        p1: "Nuestras ventanas no solo iluminan su hogar, sino que también lo protegen. Diseñadas para ofrecer aislamiento térmico, eficiencia energética y elegancia, nuestras soluciones de ventanas proporcionan comodidad, ahorro y estilo en cada rincón.",
        p2: "Reemplazar sus ventanas es más que una mejora estética: es una inversión en eficiencia, seguridad y bienestar. Con tecnología de alto rendimiento, materiales duraderos y acabados personalizados, transformamos su hogar desde adentro hacia afuera.",
        p3: "Creamos espacios llenos de luz, comodidad y tranquilidad. Nuestro servicio de instalación de ventanas ofrece soluciones personalizadas que combinan diseño moderno, eficiencia energética y resistencia a la intemperie.",
        p4: "Instalar nuevas ventanas es renovar la forma en que su hogar respira, se ilumina y se protege. Ofrecemos sistemas innovadores que mejoran la eficiencia energética, reducen el ruido exterior y aumentan el valor de su propiedad.",
      },
      // Roofing
      roofing: {
        title: "Techos",
        p1: "Un techo de calidad no solo protege su hogar, lo define. Nuestro servicio de techado combina materiales premium, instalación profesional y atención a cada detalle para brindarle tranquilidad, eficiencia y estética impecable.",
        p2: "Su techo es la primera línea de defensa contra el clima. Por eso, en cada proyecto de techado, ofrecemos soluciones resistentes y duraderas adaptadas a las condiciones más exigentes. Seguridad, eficiencia y estilo, todo en una estructura.",
        p3: "Cada techo que instalamos está diseñado para durar, resistir y embellecer. Utilizamos tecnología avanzada y materiales certificados para garantizar que su inversión esté protegida durante décadas.",
        p4: "El techado no es solo una necesidad, es una oportunidad para elevar el valor, la eficiencia y la apariencia de su propiedad. Ya sea una nueva instalación o un reemplazo, trabajamos con precisión y compromiso en cada capa.",
        p5: "Sabemos que un buen techo no se nota, se siente. Nuestro equipo especializado en techos ofrece soluciones que aíslan, protegen y mejoran la comodidad del hogar, sin comprometer el diseño.",
      },
    },
  }

  // Function to update service text based on language
  function updateServiceText(language) {
    // Get all tab panes
    const tabPanes = document.querySelectorAll(".tab-pane")

    // Update text for each service tab
    tabPanes.forEach((pane) => {
      const serviceId = pane.id
      if (serviceTranslations[language] && serviceTranslations[language][serviceId]) {
        const serviceData = serviceTranslations[language][serviceId]

        // Update title
        const titleElement = pane.querySelector("h3")
        if (titleElement) {
          titleElement.textContent = serviceData.title
        }

        // Update paragraphs
        const paragraphs = pane.querySelectorAll(".service-text p")
        paragraphs.forEach((p, index) => {
          const paragraphKey = `p${index + 1}`
          if (serviceData[paragraphKey]) {
            p.textContent = serviceData[paragraphKey]
          }
        })
      }
    })
  }

  // Add click event to language buttons
  languageBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Remove active class from all buttons
      languageBtns.forEach((b) => b.classList.remove("active"))

      // Add active class to clicked button
      this.classList.add("active")

      // Get language
      const language = this.getAttribute("data-lang")

      // Update service text
      updateServiceText(language)
    })
  })

  // Initialize with English
  updateServiceText("en")
})


function changeLanguage(lang) {
  // Guardar preferencia
  localStorage.setItem("preferredLanguage", lang);

  // Actualizar estado visual de los botones
  document.querySelectorAll(".language-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });

  // Traducir elementos con data-i18n
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      // Si la traducción contiene HTML (como <span>), usamos innerHTML
      if (translations[lang][key].includes("<span")) {
        el.innerHTML = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });

  // Llamar a la actualización especial de los servicios (tabs)
  if (typeof updateServiceText === 'function') {
    updateServiceText(lang);
  }
}

// Hacer la función disponible para script.js
window.changeLanguage = changeLanguage;