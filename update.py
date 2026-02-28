import re

# 1. Update index.html
html_path = 'c:/Users/Usuario/OneDrive/Escritorio/Proyectos Profesional/oa/oa/index.html'
js_path = 'c:/Users/Usuario/OneDrive/Escritorio/Proyectos Profesional/oa/oa/languaje.js'

with open(html_path, 'r', encoding='utf-8') as f:
    html = f.read()

# Carousel
html = html.replace('alt="Framing"', 'alt="Exterior residential paint installation"')
html = html.replace('alt="Decks"', 'alt="Residential exterior painting installation"')
html = html.replace('alt="Roofing"', 'alt="Laminate flooring installation"')

# Services Tabs H3
html = re.sub(r'(id="laminate_painting".*?<img src="4\.jpeg".*?<h3>)[^<]+(</h3>)', r'\g<1>Exterior paint\2', html, flags=re.DOTALL)
html = re.sub(r'(id="psyren_painting".*?<img src="5\.jpeg".*?<h3>)[^<]+(</h3>)', r'\g<1>Exterior residential paint installation\2', html, flags=re.DOTALL)
html = re.sub(r'(id="commercial_exterior".*?<img src="6\.jpeg".*?<h3>)[^<]+(</h3>)', r'\g<1>Residential exterior painting installation\2', html, flags=re.DOTALL)
html = re.sub(r'(id="residential_exterior".*?<img src="7\.jpeg".*?<h3>)[^<]+(</h3>)', r'\g<1>Exterior paint installation\2', html, flags=re.DOTALL)
html = re.sub(r'(id="ceramic".*?<img src="8\.jpeg".*?<h3>)[^<]+(</h3>)', r'\g<1>Laminate flooring installation\2', html, flags=re.DOTALL)
html = re.sub(r'(id="laminate".*?<img src="22\.jpeg".*?<h3>)[^<]+(</h3>)', r'\g<1>Laminate flooring installation\2', html, flags=re.DOTALL)

# Services Tabs Nav (fallback English text in HTML)
html = html.replace('>Laminate Flooring &amp; Painting<', '>Exterior paint<').replace('>Laminate Flooring & Painting<', '>Exterior paint<')
html = html.replace('>Psyren &amp; Painting<', '>Exterior residential paint installation<').replace('>Psyren & Painting<', '>Exterior residential paint installation<')
html = html.replace('>Commercial Exterior Painting<', '>Residential exterior painting installation<')
html = html.replace('>Exterior Painting<', '>Exterior paint installation<')
html = html.replace('>Ceramic Install<', '>Laminate flooring installation<')
html = html.replace('>Laminate<', '>Laminate flooring installation<')

# Services Grid H3
html = re.sub(r'(<img src="9\.jpeg".*?<h3>)[^<]+(</h3>)', r'\g<1>Drywall installation and insulation\2', html, flags=re.DOTALL)
html = re.sub(r'(<img src="10\.jpeg".*?<h3>)[^<]+(</h3>)', r'\g<1>Tile installation\2', html, flags=re.DOTALL)
html = re.sub(r'(<img src="11\.jpeg".*?<h3>)[^<]+(</h3>)', r'\g<1>Tile installation\2', html, flags=re.DOTALL)
html = re.sub(r'(<img src="12\.jpeg".*?<h3>)[^<]+(</h3>)', r'\g<1>Exterior painting\2', html, flags=re.DOTALL)
html = re.sub(r'(<img src="13\.jpeg".*?<h3>)[^<]+(</h3>)', r'\g<1>Interior painting\2', html, flags=re.DOTALL)
html = re.sub(r'(<img src="14\.jpeg".*?<h3>)[^<]+(</h3>)', r'\g<1>Interior painting\2', html, flags=re.DOTALL)

# Gallery Filters
filters = """<button class="filter-btn active" data-filter="all">All</button>
                <button class="filter-btn" data-filter="ext_paint">Exterior Paint</button>
                <button class="filter-btn" data-filter="res_ext_paint_inst">Res. Exterior</button>
                <button class="filter-btn" data-filter="ext_res_paint_inst">Ext. Residential</button>
                <button class="filter-btn" data-filter="ext_paint_inst">Ext. Paint Inst.</button>
                <button class="filter-btn" data-filter="comm_ext_paint">Comm. Paint</button>
                <button class="filter-btn" data-filter="comm_ext_paint_inst">Comm. Paint Inst.</button>
                <button class="filter-btn" data-filter="lam_floor_inst">Laminate</button>"""
html = re.sub(r'<button class="filter-btn active" data-filter="all">All</button>.*?(?=</div>)', filters + '\n            ', html, flags=re.DOTALL)

# Gallery Items mapping
gallery_replacements = [
    ('16.jpeg', 'Commercial exterior painting', 'comm_ext_paint'),
    ('4.jpeg', 'Exterior paint', 'ext_paint'),
    ('piso-laminado.jpeg', 'Laminate flooring installation', 'lam_floor_inst'),
    ('3.jpeg', 'Laminate flooring installation', 'lam_floor_inst'),
    ('7.jpeg', 'Exterior paint installation', 'ext_paint_inst'),
    ('18.jpeg', 'Commercial exterior painting installation', 'comm_ext_paint_inst'),
    ('20.jpeg', 'Commercial exterior painting', 'comm_ext_paint'),
    ('5.jpeg', 'Exterior residential paint installation', 'ext_res_paint_inst'),
    ('1.jpeg', 'Exterior residential paint installation', 'ext_res_paint_inst'),
    ('19.jpeg', 'Commercial exterior painting installation', 'comm_ext_paint_inst'),
    ('8.jpeg', 'Laminate flooring installation', 'lam_floor_inst'),
    ('2.jpeg', 'Residential exterior painting installation', 'res_ext_paint_inst'),
    ('22.jpeg', 'Laminate flooring installation', 'lam_floor_inst'),
    ('6.jpeg', 'Residential exterior painting installation', 'res_ext_paint_inst'),
    ('21.png', 'Residential exterior painting installation', 'res_ext_paint_inst'),
    ('17.jpeg', 'Commercial exterior painting installation', 'comm_ext_paint_inst'),
]

for img_name, new_title, new_cat in gallery_replacements:
    pattern = r'(<div class="gallery-item" data-category=")[^"]+(">\s*<img src="' + re.escape(img_name) + r'"[^>]*>\s*<div class="gallery-overlay">\s*<h3>)[^<]+(</h3>)'
    def repl(m):
        return m.group(1) + new_cat + m.group(2) + new_title + m.group(3)
    html = re.sub(pattern, repl, html)

with open(html_path, 'w', encoding='utf-8') as f:
    f.write(html)


# 2. Update languaje.js
with open(js_path, 'r', encoding='utf-8') as f:
    js = f.read()

# Remove old gallery keys in EN and ES, add new ones

en_new_keys = """
    // New Services Card Keys
    services_card_1: "Drywall installation and insulation",
    services_card_2: "Tile installation",
    services_card_3: "Tile installation",
    services_card_4: "Exterior painting",
    services_card_5: "Interior painting",
    services_card_6: "Interior painting",

    // New Gallery Keys
    gallery_comm_ext_paint_inst: "Commercial exterior painting installation",
    gallery_comm_ext_paint: "Commercial exterior painting",
    gallery_res_ext_paint_inst: "Residential exterior painting installation",
    gallery_ext_res_paint_inst: "Exterior residential paint installation",
    gallery_ext_paint_inst: "Exterior paint installation",
    gallery_ext_paint: "Exterior paint",
    gallery_lam_floor_inst: "Laminate flooring installation",
    gallery_int_paint: "Interior painting",
    gallery_tile_inst: "Tile installation",
    gallery_drywall_inst: "Drywall installation and insulation",
    gallery_concrete: "Concrete Work",
"""

es_new_keys = """
    // New Services Card Keys
    services_card_1: "Instalación de drywall y aislamiento",
    services_card_2: "Instalación de azulejos",
    services_card_3: "Instalación de azulejos",
    services_card_4: "Pintura exterior",
    services_card_5: "Pintura interior",
    services_card_6: "Pintura interior",

    // New Gallery Keys
    gallery_comm_ext_paint_inst: "Instalación de pintura exterior comercial",
    gallery_comm_ext_paint: "Pintura exterior comercial",
    gallery_res_ext_paint_inst: "Instalación de pintura exterior residencial",
    gallery_ext_res_paint_inst: "Instalación de pintura residencial exterior",
    gallery_ext_paint_inst: "Instalación de pintura exterior",
    gallery_ext_paint: "Pintura exterior",
    gallery_lam_floor_inst: "Instalación de piso laminado",
    gallery_int_paint: "Pintura interior",
    gallery_tile_inst: "Instalación de azulejos",
    gallery_drywall_inst: "Instalación de drywall y aislamiento",
    gallery_concrete: "Trabajo de Concreto",
"""

# Insert into `en` block right before `// Reviews`
js = js.replace('// Reviews\\n    reviews_title', en_new_keys + '\\n    // Reviews\\n    reviews_title', 1)

# Modify es safely as the replace count might be different
parts = js.split('// Reviews\\n    reviews_title')
if len(parts) >= 3:
    js = parts[0] + '// Reviews\\n    reviews_title' + parts[1] + es_new_keys + '\\n    // Reviews\\n    reviews_title' + parts[2]

# Update JS Services Tabs Definitions
js = js.replace('services_laminate_painting: "Laminate Flooring & Painting"', 'services_laminate_painting: "Exterior paint"')
js = js.replace('services_psyren_painting: "Psyren & Painting"', 'services_psyren_painting: "Exterior residential paint installation"')
js = js.replace('services_commercial_exterior: "Commercial Exterior Painting"', 'services_commercial_exterior: "Residential exterior painting installation"')
js = js.replace('services_residential_exterior: "Exterior Painting"', 'services_residential_exterior: "Exterior paint installation"')
js = js.replace('services_ceramic: "Ceramic"', 'services_ceramic: "Laminate flooring installation"')
js = js.replace('services_laminate: "Laminate"', 'services_laminate: "Laminate flooring installation"')

js = js.replace('services_laminate_painting: "Instalación de piso laminado y pintura en este paquete"', 'services_laminate_painting: "Pintura exterior"')
js = js.replace('services_psyren_painting: "Instalación de Psyren y pintura"', 'services_psyren_painting: "Instalación de pintura residencial exterior"')
js = js.replace('services_commercial_exterior: "Instalación de pintura exterior comercial"', 'services_commercial_exterior: "Instalación de pintura exterior residencial"')
js = js.replace('services_residential_exterior: "Instalación de pintura exterior"', 'services_residential_exterior: "Instalación de pintura exterior"')
js = js.replace('services_ceramic: "Instalación de cerámica"', 'services_ceramic: "Instalación de piso laminado"')
js = js.replace('services_laminate: "Instalación de piso laminado"', 'services_laminate: "Instalación de piso laminado"')

js = js.replace('service_laminate_painting_title: "Laminate Flooring & Painting Package"', 'service_laminate_painting_title: "Exterior paint"')
js = js.replace('service_psyren_painting_title: "Psyren & Painting"', 'service_psyren_painting_title: "Exterior residential paint installation"')
js = js.replace('service_commercial_exterior_title: "Commercial Exterior Painting"', 'service_commercial_exterior_title: "Residential exterior painting installation"')
js = js.replace('service_residential_exterior_title: "Residential Exterior Painting"', 'service_residential_exterior_title: "Exterior paint installation"')
js = js.replace('service_ceramic_title: "Ceramic Installation"', 'service_ceramic_title: "Laminate flooring installation"')
js = js.replace('service_laminate_title: "Laminate Flooring"', 'service_laminate_title: "Laminate flooring installation"')

js = js.replace('service_laminate_painting_title: "Instalación de piso laminado y pintura"', 'service_laminate_painting_title: "Pintura exterior"')
js = js.replace('service_psyren_painting_title: "Instalación de Psyren y pintura"', 'service_psyren_painting_title: "Instalación de pintura residencial exterior"')
js = js.replace('service_commercial_exterior_title: "Instalación de pintura exterior comercial"', 'service_commercial_exterior_title: "Instalación de pintura exterior residencial"')
js = js.replace('service_residential_exterior_title: "Instalación de pintura exterior"', 'service_residential_exterior_title: "Instalación de pintura exterior"')
js = js.replace('service_ceramic_title: "Instalación de cerámica"', 'service_ceramic_title: "Instalación de piso laminado"')
js = js.replace('service_laminate_title: "Instalación de piso laminado"', 'service_laminate_title: "Instalación de piso laminado"')

# Update logic replacing `serviceKeys`
js = js.replace('const serviceKeys = tabKeys; // Same 6 keys', 'const serviceKeys = ["services_card_1", "services_card_2", "services_card_3", "services_card_4", "services_card_5", "services_card_6"];')

with open(js_path, 'w', encoding='utf-8') as f:
    f.write(js)

print("Updates completed successfully.")
