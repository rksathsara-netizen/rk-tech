export type Product = {
  id: string;
  name: string;
  category: string;
  subcategory?: string;
  price: number;
  stock?: 'in-stock' | 'out-of-stock';
  oldPrice?: number;
  image: string;
  rating: number;
  badge?: 'new' | 'Used' | 'warranty';
  warranty: string;
  description: string;
  specs: string[];
};

export type Service = {
  id: string;
  name: string;
  slug: string;
  icon: string;
  tagline: string;
  description: string;
  features: string[];
  startingPrice: string;
  duration: string;
};

export type Review = {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
  service: string;
  avatar: string;
};

export const business = {
  name: 'RK Tech Solutions',
  tagline: 'Your Trusted Tech Partner',
  phone: '+94 75 678 9046',
  phoneRaw: '94756789046',
  email: 'rksolution.lk@gmail.com',
  address: 'Piliyandala, Sri Lanka',
  addressShort: 'Piliyandala, Sri Lanka',
  hours: 'Mon–Sat: 9AM – 8PM | Sun: 10AM – 5PM',
  mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31686.5!2d79.92!3d6.80!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNDgnMDYuNCJOIDc5wrA1NSc0MS43IkU!5e0!3m2!1sen!2slk!4v1700000000000',
  social: {
    facebook: 'https://www.facebook.com/rktechsolutions',
    instagram: 'https://www.instagram.com/rktechsolutions',
    whatsapp: 'https://wa.me/94756789046',
    youtube: 'https://www.youtube.com/@rktechsolutions',
  },
};

export const services: Service[] = [
  {
    id: 'laptop-repair',
    name: 'Laptop Repair',
    slug: 'laptop-repair',
    icon: 'Laptop',
    tagline: 'Expert diagnostics and repair for all laptop brands',
    description: 'From cracked screens to dead motherboards, our certified technicians repair all major laptop brands including Dell, HP, Lenovo, ASUS, Acer, and Apple. We use genuine parts and back every repair with a warranty.',
    features: ['Screen replacement', 'Keyboard repair', 'Battery replacement', 'Charging port fix', 'Hinge repair', 'Liquid damage recovery', 'Motherboard-level repair', 'BIOS/UEFI flashing'],
    startingPrice: 'Contact for Pricing',
    duration: 'Same day – 3 days',
  },
  {
    id: 'desktop-repair',
    name: 'Desktop Repair',
    slug: 'desktop-repair',
    icon: 'Monitor',
    tagline: 'Comprehensive desktop PC repair and upgrades',
    description: 'Whether your desktop won\'t boot, keeps crashing, or just needs a performance boost, we diagnose and fix it fast. Hardware and software issues, component upgrades, thermal repasting, and full system optimization.',
    features: ['Power supply replacement', 'RAM upgrades', 'SSD/HDD installation', 'GPU installation', 'Thermal repasting', 'Dust cleaning', 'POST diagnostics', 'Driver troubleshooting'],
    startingPrice: 'Contact for Pricing',
    duration: 'Same day – 2 days',
  },
  {
    id: 'gaming-pcs',
    name: 'Gaming PC Builds',
    slug: 'gaming-pcs',
    icon: 'Gamepad2',
    tagline: 'Custom gaming rigs built for your budget and dreams',
    description: 'Tell us your budget and favorite games — we\'ll build the perfect gaming PC. From entry-level 1080p rigs to 4K ultra beasts, every build is cable-managed, stress-tested, and benchmarked before delivery.',
    features: ['Custom part selection', 'RGB lighting setup', 'Cable management', 'Liquid cooling install', 'Overclocking & tuning', 'Stress testing', '3DMark benchmarking', 'Game optimization'],
    startingPrice: 'Contact for Pricing',
    duration: '3 – 5 days',
  },
  {
    id: 'networking',
    name: 'Networking',
    slug: 'networking',
    icon: 'Network',
    tagline: 'Home and office network setup and troubleshooting',
    description: 'Wi-Fi dead zones? Slow internet? Need a wired office network? We design, install, and configure networks that just work. From mesh Wi-Fi to enterprise switches, we handle it all.',
    features: ['Wi-Fi mesh setup', 'Router configuration', 'LAN cabling', 'Network switch install', 'Firewall setup', 'VPN configuration', 'Bandwidth optimization', 'Network security audit'],
    startingPrice: 'Contact for Pricing',
    duration: '1 – 2 days',
  },
  {
    id: 'cctv',
    name: 'CCTV Installation',
    slug: 'cctv',
    icon: 'Cctv',
    tagline: 'Professional security camera installation and monitoring',
    description: 'Protect your home or business with professional CCTV systems. We supply, install, and configure HD and IP camera systems with remote viewing, night vision, and motion alerts — all accessible from your phone.',
    features: ['HD/IP camera install', 'DVR/NVR setup', 'Remote mobile viewing', 'Night vision cameras', 'Motion detection alerts', 'Cloud storage setup', 'Wiring & mounting', 'Annual maintenance'],
    startingPrice: 'Contact for Pricing',
    duration: '1 – 3 days',
  },
  {
    id: 'data-recovery',
    name: 'Data Recovery',
    slug: 'data-recovery',
    icon: 'HardDriveDownload',
    tagline: 'Recover lost files from any drive, any condition',
    description: 'Accidentally deleted files? Corrupted drive? Dropped your external HDD? Our data recovery specialists use advanced tools to recover data from HDDs, SSDs, USB drives, and memory cards — even from physically damaged drives.',
    features: ['Logical recovery', 'Physical recovery', 'Partition repair', 'RAW drive recovery', 'Formatted drive recovery', 'Photo & video recovery', 'Encrypted drive recovery', 'Confidential handling'],
    startingPrice: 'Contact for Pricing',
    duration: '1 – 5 days',
  },
  {
    id: 'printer-repair',
    name: 'Printer Repair',
    slug: 'printer-repair',
    icon: 'Printer',
    tagline: 'Fast fixes for inkjet and laser printers',
    description: 'Paper jams, streaky prints, connectivity issues — we repair all printer types and brands. Inkjet, laser, all-in-one, and thermal printers serviced with genuine parts and consumables.',
    features: ['Paper jam fix', 'Print head cleaning', 'Ink system flush', 'Roller replacement', 'Network printer setup', 'Driver installation', 'Toner refill', 'Maintenance kit service'],
    startingPrice: 'Contact for Pricing',
    duration: 'Same day – 2 days',
  },
  {
    id: 'software-install',
    name: 'Software Installation',
    slug: 'software-install',
    icon: 'Download',
    tagline: 'Clean installs and setup of any software',
    description: 'Operating systems, office suites, design tools, development environments — we install and configure everything properly, with genuine licenses and proper activation.',
    features: ['Windows installation', 'Microsoft Office setup', 'Antivirus installation', 'Driver packs', 'Design software setup', 'Development tools', 'Software activation', 'System optimization'],
    startingPrice: 'Contact for Pricing',
    duration: 'Same day',
  },
  {
    id: 'tv-repair',
    name: 'TV-Repair',
    slug: 'tv-repair',
    icon: 'Tv',
    tagline: 'Professional TV repair and troubleshooting',
    description: 'Is your TV not turning on, showing a blank screen, having sound problems, or displaying unusual lines and colors? We provide professional TV repair and troubleshooting services for common hardware and display issues. Our technicians diagnose the problem carefully and provide a reliable repair solution to get your TV working properly again.',
    features: ['TV power issue repair', 'Blank screen troubleshooting', 'Display and picture problem repair', 'Sound problem troubleshooting', 'HDMI and input issue repair', 'Backlight problem repair', 'TV motherboard troubleshooting', 'Professional TV diagnostics'],
    startingPrice: 'Contact for Pricing',
    duration: 'Same day – 2 days',
  },
  {
    id: 'windows-install',
    name: 'Windows Installation',
    slug: 'windows-install',
    icon: 'MonitorSmartphone',
    tagline: 'Clean, genuine Windows installation with full setup',
    description: 'Fresh Windows 10/11 installation with all drivers, essential software, and optimization. We back up your data first, install genuine OS, and configure everything for peak performance.',
    features: ['Windows 10/11 install', 'Genuine activation', 'Driver installation', 'Data backup & transfer', 'Essential software setup', 'System optimization', 'Partition management', 'Boot repair'],
    startingPrice: 'Contact for Pricing',
    duration: 'Same day',
  },
  {
    id: 'motherboard-repair',
    name: 'Motherboard Repair',
    slug: 'motherboard-repair',
    icon: 'CircuitBoard',
    tagline: 'Component-level motherboard diagnostics and repair',
    description: 'Our advanced technicians perform component-level motherboard repair using micro-soldering, thermal imaging, and oscilloscope diagnostics. We fix what others call "unrepairable."',
    features: ['Micro-soldering', 'Chip replacement', 'Power circuit repair', 'Thermal imaging diag', 'BGA reflow/reballing', 'Capacitor replacement', 'Short circuit detection', 'POST code analysis'],
    startingPrice: 'Contact for Pricing',
    duration: '2 – 7 days',
  },
];

export const products: Product[] = [
 // ### OLD ###
      //  { id: 'p2', name: 'Laptop DVD-RW Drive', stock: "in-stock", category: 'Components & Accessories', subcategory: 'Components', price: 0, image: '/products/dvd.jpeg', rating: 5, badge: 'Used', warranty: '3-Month Warranty', description: 'Ultra Slim SATA DVD-RW drive for compatible laptops and compact systems.', specs: ['Ultra Slim 9.5mm Design', 'SATA Interface', 'Laptop Compatible', 'CD / DVD Read & Write'] },
      //  { id: 'p4', name: 'Samsung 990 Pro 2TB SSD', category: 'Components', price: 45000, image: 'ssd', rating: 5, badge: 'warranty', warranty: '5-Year Warranty', description: 'PCIe 4.0 NVMe, up to 7450 MB/s read, 6900 MB/s write', specs: ['2TB Capacity', 'PCIe 4.0 x4', '7450 MB/s Read', '6900 MB/s Write', 'M.2 2280'] },
      //  { id: 'p5', name: 'Logitech G Pro X Keyboard', category: 'Accessories', price: 28500, image: 'keyboard', rating: 4, badge: 'new', warranty: '2-Year Warranty', description: 'Wireless mechanical gaming keyboard with GX Blue switches', specs: ['Wireless / Wired', 'GX Blue Switches', 'RGB LIGHTSYNC', 'Aircraft-grade aluminum', '30M keystroke life'] },
      //  { id: 'p6', name: 'HP 24" FHD Monitor', category: 'Monitors', price: 40000, oldPrice: 38000, image: 'monitor', rating: 4, badge: 'new', warranty: '3-Year Warranty', description: '24" IPS panel, 1080p, 75Hz, built-in speakers, VESA mount', specs: ['24" IPS Display', '1920x1080', '75Hz Refresh', 'Built-in Speakers', 'VESA 100x100'] },
      //  { id: 'p7', name: 'Razer DeathAdder V3 Pro', category: 'Accessories', price: 19500, image: 'mouse', rating: 5, badge: 'warranty', warranty: '2-Year Warranty', description: 'Ultra-light wireless gaming mouse, 30K DPI optical sensor', specs: ['63g Ultralight', '30,000 DPI Sensor', '90hr Battery', 'Optical Gen-3 Switches', 'HyperSpeed Wireless'] },
      //  { id: 'p10', name: 'Corsair RM850e PSU', category: 'Components', price: 28000, image: 'psu', rating: 5, badge: 'warranty', warranty: '7-Year Warranty', description: '850W 80+ Gold, fully modular, ATX 3.0, PCIe 5.0', specs: ['850W', '80 PLUS Gold', 'Fully Modular', 'ATX 3.0', 'PCIe 5.0 12VHPWR'] },
      //  { id: 'p11', name: 'Samsung 27" 4K Monitor', category: 'Monitors', price: 95000, oldPrice: 110000, image: 'monitor-4k', rating: 5, badge: 'Used', warranty: '3-Year Warranty', description: '27" UHD IPS, HDR400, 60Hz, USB-C 90W charging', specs: ['27" UHD IPS', '3840x2160', 'HDR400', 'USB-C 90W', 'Height Adjustable'] },
      //  { id: 'p9', name: 'Lenovo Legion 5 Pro', category: 'Gaming Laptops', price: 365000, image: 'gaming-laptop-2', rating: 5, badge: 'new', warranty: '2-Year Warranty', description: 'Ryzen 7, RTX 4060, 16GB DDR5, 1TB SSD, 16" QHD 165Hz', specs: ['Ryzen 7 7745HX', 'RTX 4060 8GB', '16GB DDR5', '1TB NVMe SSD', '16" QHD 165Hz'] },
      //  { id: 'p12', name: 'Acer Aspire 3', category: 'Laptops', price: 125000, image: 'budget-laptop', rating: 4, badge: 'warranty', warranty: '1-Year Warranty', description: 'Intel i5, 8GB, 512GB SSD, 15.6" FHD — great for everyday use', specs: ['Intel Core i5-1235U', '8GB DDR4', '512GB SSD', '15.6" FHD', 'Intel Iris Xe'] },
      //  { id: 'p3', name: 'Custom RTX 4070 Gaming PC', category: 'Gaming PCs', price: 295000, oldPrice: 320000, image: 'gaming-pc', rating: 5, badge: 'Used', warranty: '3-Year Warranty', description: 'Ryzen 7 7800X3D, RTX 4070 Super, 32GB DDR5, 2TB NVMe', specs: ['Ryzen 7 7800X3D', 'RTX 4070 Super 12GB', '32GB DDR5 6000MHz', '2TB NVMe SSD', '850W Gold PSU'] },
      //  { id: 'p8', name: 'Custom RTX 4090 4K Beast', category: 'Gaming PCs', price: 850000, image: 'gaming-pc-beast', rating: 5, badge: 'warranty', warranty: '3-Year Warranty', description: 'Ryzen 9 7950X3D, RTX 4090, 64GB DDR5, 4TB NVMe, liquid cooled', specs: ['Ryzen 9 7950X3D', 'RTX 4090 24GB', '64GB DDR5 6000MHz', '4TB NVMe SSD', '1000W Platinum + Liquid Cooling'] },

      // { id: 'p13', name: 'DDR4 8GB Desktop RAM', stock: "in-stock", category: 'Laptops', price: 0, image: '/products/ddr4 8gb desktop.jpeg', rating: 5, badge: 'Used', warranty: '3-Month Warranty', description: 'Reliable 8GB DDR4 desktop RAM, suitable for compatible desktop computers and PC upgrades.', specs: ['8GB DDR4 RAM', 'Desktop DIMM', '2Rx8 Memory', 'Compatible with DDR4 Motherboards', 'PC4-2133P'] },
      // { id: 'p14', name: 'HDD 1TB', category: 'Components & Accessories', subcategory: 'Components', price: 1500, oldPrice: 100, image: '/products/1tb.jpeg', rating: 5, badge: 'Used', warranty: '2-Year Warranty', description: 'Intel i9, RTX 4070, 16GB DDR5, 1TB SSD, 16" QHD 240Hz', specs: ['Intel Core i9-14900HX', 'RTX 4070 8GB', '16GB DDR5', '1TB NVMe SSD', '16" QHD 240Hz'] },
 
 // ##### *Mobile & Accessories* #####
  
 // ##### *Electronics & Accessories* ###
 
 // ##### *Coponents & Accessories* #####
    // #Coponents#
       { id: 'p1', name: 'Kim MID 128GB mSATA SSD', category: 'Components & Accessories', subcategory: 'Components', price: 0, image: '/products/msata.jpeg', rating: 5, badge: 'Used', warranty: '3-Month Warranty', description: 'Kim MID 128GB mSATA SSD, 3.3V 1A interface, suitable for compatible laptops and compact systems.', specs: ['128GB Capacity', 'mSATA Interface', '3.3V / 1A', 'Kim MID Brand', 'Model: T900-128GB'] },
       { id: 'p13', name: 'DDR4 8GB Desktop RAM', category: 'Components & Accessories', subcategory: 'Components', price: 0, image: '/products/ddr4 8gb desktop.jpeg', rating: 5, badge: 'Used', warranty: '3-Month Warranty', description: 'Reliable 8GB DDR4 desktop RAM, suitable for compatible desktop computers and PC upgrades.', specs: ['8GB DDR4 RAM', 'Desktop DIMM', '2Rx8 Memory', 'Compatible with DDR4 Motherboards', 'PC4-2133P'] },
       { id: 'p14', name: 'HDD 1TB',  category: 'Components & Accessories', subcategory: 'Components', price: 0, image: '/products/1tb.jpeg', rating: 5, badge: 'Used', warranty: '2-Year Warranty', description: 'Intel i9, RTX 4070, 16GB DDR5, 1TB SSD, 16" QHD 240Hz', specs: ['Intel Core i9-14900HX', 'RTX 4070 8GB', '16GB DDR5', '1TB NVMe SSD', '16" QHD 240Hz'] },
 
    // #Accessories#


  // ##### *Desktop & Monitors* #####
  
 // ##### *Laptop* #####
 
 // ##### *CCTV* #####
       { id: 'p15', name: '4G 3-Lens CCTV Camera', category: 'CCTV', price: 0, image: '/products/4g 3lens camera.jpeg', rating: 5, badge: 'new', warranty: '6-Month Warranty', description: '4G 3-Lens Outdoor CCTV Camera with PTZ rotation, night vision, motion detection and remote mobile monitoring.', specs: ['4G SIM Supported', '3-Lens Camera System', 'Remote Mobile Monitoring', 'Full-Color Night Vision', 'Motion Detection', 'Two-Way Audio'] },
 
// ##### TV #####
  
];

export const reviews: Review[] = [
  { id: 'r1', name: 'Dinusha Perera', rating: 5, text: 'My laptop had a completely dead motherboard and three other shops said it was unrepairable. RK Tech fixed it in two days for a fair price. Absolute lifesavers!', date: '2024-12-15', service: 'Laptop Repair', avatar: 'DP' },
  { id: 'r2', name: 'Saman Silva', rating: 5, text: 'Built me a gaming PC that runs everything on ultra at 1440p. The cable management is a work of art. Highly recommend for any gamer in Piliyandala.', date: '2024-12-10', service: 'Gaming PC Build', avatar: 'SS' },
  { id: 'r3', name: 'Nadeesha Fernando', rating: 5, text: 'They came to my home to set up the entire CCTV system. Professional, on time, and the mobile app makes checking cameras so easy. Very happy.', date: '2024-11-28', service: 'CCTV Installation', avatar: 'NF' },
  { id: 'r4', name: 'Kasun Rajapaksa', rating: 5, text: 'Recovered all my wedding photos from a corrupted USB drive. I thought they were gone forever. Worth every rupee. Thank you RK Tech!', date: '2024-11-20', service: 'Data Recovery', avatar: 'KR' },
  { id: 'r5', name: 'Pubudu Nayanamini', rating: 5, text: 'Fast and honest service. They diagnosed my desktop issue for free and the repair was done same-day. No unnecessary upselling like other shops.', date: '2024-11-15', service: 'Desktop Repair', avatar: 'AW' },
  { id: 'r6', name: 'Tharindu Madushanka', rating: 5, text: 'Set up mesh Wi-Fi across my entire house. No more dead zones in any room. The team really knows their stuff with networking.', date: '2024-11-08', service: 'Networking', avatar: 'TM' },
];

export const brands = [
  'ASUS', 'Dell', 'HP', 'Lenovo', 'Acer', 'Apple', 'Samsung', 'MSI', 'Logitech', 'Razer', 'Corsair', 'Intel', 'AMD', 'NVIDIA',
];

export const productCategories = ['All', 'Mobile & Accessories', 'Electronics & Accessories', 'Components & Accessories', 'Desktop & Monitors', 'Laptops', 'CCTV', 'TV'];

export const faqs = [
  
  
  { q: 'Do you offer same-day TV repairs?', a: 'Yes! Many common TV issues can be diagnosed and repaired the same day. Simple problems such as power issues, sound problems, HDMI/input issues, and some display or backlight problems may be completed within the same day. More complex repairs, such as motherboard or panel-related issues, may take longer depending on the problem and availability of replacement parts.' },
  { q: 'Do you provide a warranty on repairs?', a: 'Absolutely. Every repair comes with a minimum 30-day service warranty. Parts replacements carry the manufacturer warranty (typically 1–5 years). We stand behind every repair we do.' },
  { q: 'Do you offer home/office visits?', a: 'Yes, we provide on-site service for networking, CCTV installation, and certain desktop/printer issues within Colombo and nearby areas. Call us to schedule a visit.' },
  { q: 'How much does a diagnostic cost?', a: 'Diagnostics are completely free. We\'ll assess your device, identify the problem, and give you a transparent quote before any work begins. No hidden charges.' },
  { q: 'Can you recover data from a physically damaged drive?', a: 'In most cases, yes. We use advanced tools for both logical and physical data recovery. For severely damaged drives, we partner with specialized clean-room facilities. Bring it in for a free assessment.' },
  { q: 'Do you sell genuine products with warranty?', a: 'Yes. All products we sell are 100% genuine with manufacturer warranty. We are authorized dealers for many major brands and every product receipt includes full warranty details.' },
  { q: 'Can I get a quote before bringing my device?', a: 'Of course! You can call us, message us on WhatsApp, or use the online quote request form on our website. We\'ll give you an estimated cost range based on your described issue.' },
  { q: 'What payment methods do you accept?', a: 'We accept cash, bank transfer, and all major credit/debit cards. For large purchases like gaming PC builds, we also offer installment plans through partner banks.' },
];

export const offers = [
  { id: 'o1', title: 'New Year Mega Used', desc: 'Up to 20% off all gaming laptops & components', code: 'NEWYEAR20', expiry: 'Limited Time', icon: 'Sparkles' },
  { id: 'o2', title: 'Free Diagnostic Month', desc: 'Free diagnostics for all repair services — no hidden fees', code: 'FREECHECK', expiry: 'This Month', icon: 'Search' },
  { id: 'o3', title: 'Gaming PC Bundle', desc: 'Free RGB keyboard & mouse with any custom build over Rs. 200K', code: 'RGBBUNDLE', expiry: 'While stocks last', icon: 'Gamepad2' },
];

export const whyChooseUs = [
  { icon: 'Zap', title: 'Same-Day Service', desc: 'Most repairs completed within 24 hours so you\'re never without your device for long.' },
  { icon: 'ShieldCheck', title: 'Genuine Parts & Warranty', desc: 'Only genuine parts, every repair backed by our service warranty. No shortcuts.' },
  { icon: 'Home', title: 'We Come To You', desc: 'On-site service for networking, CCTV, and desktop issues across Piliyandala.' },
  { icon: 'Award', title: 'Certified Technicians', desc: 'Our team holds certifications from CompTIA, Microsoft, and major hardware vendors.' },
  { icon: 'Wallet', title: 'Transparent Pricing', desc: 'Free diagnostics, upfront quotes, and no hidden fees. You approve before we start.' },
  { icon: 'Clock', title: '7 Days a Week', desc: 'Open Monday through to Saturday 9AM–8PM, and Sundays 10AM–5PM for your convenience.' },
];
