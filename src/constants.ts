export const BUSINESS_INFO = {
  name: "Seamless Gutters 4 Less",
  phone: "253-498-5575",
  phoneRaw: "2534985575",
  address: "10202 Pacific Ave S Ste 211, Tacoma, WA 98444",
  facebook: "https://www.facebook.com/seattletacomagutters",
  googleReviews: "https://www.google.com/maps/place/Seamless+Gutters+4+Less/@47.1641961,-122.4347992,17z/data=!3m1!4b1!4m6!3m5!1s0x549103e95acd6981:0x949b0f687ccdf3fe!8m2!3d47.1641961!4d-122.4347992!16s%2Fg%2F11rfph4pdq?entry=ttu&g_ep=EgoyMDI2MDQwNi4wIKXMDSoASAFQAw%3D%3D",
  experience: "30+ years",
  tagline: "Quality & Value",
  description: "Seamless Gutters 4 Less is your top local choice for all gutter services in the Puget Sound area, from Marysville in the north to Shelton in the south, including Seattle, Tacoma, Bellevue, and Everett. We are locally owned and operated, with over 30 years of experience in gutter installation, maintenance, and repair.",
};

export const SERVICES = [
  {
    slug: "seamless-gutter-installation",
    title: "Seamless Gutter Installation",
    description: "Custom-made seamless gutters fit perfectly to your home, providing superior protection and a clean look.",
    detailedDescription: "Our seamless gutters are roll-formed on-site to the exact dimensions of your home. This eliminates the seams that are common in traditional gutter systems, which are the primary points where leaks and rust develop. We use heavy-gauge aluminum and high-quality hangers to ensure your system can withstand the heavy rainfall common in the Pacific Northwest.",
    features: [
      "Custom roll-formed on-site",
      "Heavy-gauge .032 aluminum",
      "Hidden hangers for a clean look",
      "Wide variety of colors available",
      "Lifetime leak-free guarantee"
    ],
    icon: "Droplets",
    primary: true,
    image: "/gutterinstall.jpg",
  },
  {
    slug: "gutter-repair",
    title: "Gutter Repair",
    description: "Fix leaks, sagging, and damage to ensure your gutter system functions correctly.",
    detailedDescription: "Don't let a small leak turn into a major foundation problem. We specialize in identifying and fixing common gutter issues such as sagging sections, leaking corners, loose downspouts, and damaged hangers. Our repair services extend the life of your existing system and prevent costly water damage to your home's exterior.",
    features: [
      "Leak sealing and caulking",
      "Re-pitching sagging gutters",
      "Downspout repair and replacement",
      "Corner miter replacement",
      "Structural reinforcement"
    ],
    icon: "Wrench",
    image: "/gutters4.jpg",
  },
  {
    slug: "gutter-replacement",
    title: "Gutter Replacement",
    description: "Full replacement of old, damaged systems with high-quality modern solutions.",
    detailedDescription: "If your gutters are beyond repair, a full replacement is the best way to protect your home. We carefully remove your old system, inspect the fascia boards for rot, and install a brand-new, high-performance seamless gutter system. We offer a range of styles including K-style and Half-round to match your home's architecture.",
    features: [
      "Complete system removal and disposal",
      "Fascia board inspection and repair",
      "Modern high-flow designs",
      "Improved curb appeal",
      "Increased property value"
    ],
    icon: "RefreshCw",
    image: "/gutters8.jpg",
  },
  {
    slug: "soffit-fascia-repair",
    title: "Soffit & Fascia Repair",
    description: "Repair and maintain the critical structural elements behind your gutters.",
    detailedDescription: "The soffit and fascia are the backbone of your gutter system. If these boards are rotted or damaged, your gutters won't stay secure. We provide expert wood and composite repair to ensure your home's eaves are structurally sound and aesthetically pleasing. This is a critical step in any gutter project to prevent long-term structural issues.",
    features: [
      "Rotten wood replacement",
      "Vinyl and aluminum soffit installation",
      "Fascia board wrapping",
      "Ventilation improvement",
      "Paint-ready finishes"
    ],
    icon: "Home",
    image: "/gutters19.jpg",
  },
  {
    slug: "gutter-cleaning",
    title: "Gutter Cleaning",
    description: "Professional cleaning to prevent clogs and water damage to your foundation.",
    detailedDescription: "Clogged gutters are the #1 cause of basement flooding and foundation damage. Our professional cleaning service includes the removal of all debris from gutters and downspouts, followed by a full system flush to ensure everything is flowing perfectly. We also perform a complimentary multi-point inspection of your entire system.",
    features: [
      "Manual debris removal",
      "Downspout snake and flush",
      "Roof debris clearing",
      "System inspection included",
      "Safe and efficient service"
    ],
    icon: "Wind",
    image: "/gutters3.jpg",
  },
  {
    slug: "gutter-guards",
    title: "Gutter Guards",
    description: "Keep debris out and water flowing with our premium gutter protection systems.",
    detailedDescription: "Tired of climbing ladders every fall? Our premium gutter guards are designed to keep leaves, pine needles, and debris out while allowing maximum water flow. We offer several types of protection, including micro-mesh and surface tension systems, tailored to the specific tree coverage around your home.",
    features: [
      "Micro-mesh technology",
      "Low-profile design",
      "Handles heavy PNW rainfall",
      "Prevents pest nesting",
      "Reduces maintenance by 90%"
    ],
    icon: "ShieldCheck",
    image: "/gutterguard.jpg",
  },
];

export const SERVICE_AREAS = [
  { name: "Tacoma", coords: [47.2529, -122.4443] as [number, number] },
  { name: "Seattle", coords: [47.6062, -122.3321] as [number, number] },
  { name: "Bellevue", coords: [47.6101, -122.2015] as [number, number] },
  { name: "Everett", coords: [47.9790, -122.2021] as [number, number] },
  { name: "Marysville", coords: [48.0518, -122.1771] as [number, number] },
  { name: "Shelton", coords: [47.2151, -123.1007] as [number, number] },
  { name: "Olympia", coords: [47.0379, -122.9007] as [number, number] },
  { name: "Puyallup", coords: [47.1854, -122.2929] as [number, number] },
  { name: "Renton", coords: [47.4829, -122.2170] as [number, number] },
  { name: "Kent", coords: [47.3809, -122.2348] as [number, number] },
];

export const COUNTY_AREAS = [
  "King County",
  "Thurston County",
  "Pierce County",
  "Snohomish County",
  "Mason County",
  "Kitsap County",
];

export const REVIEWS = [
  {
    name: "Sarah M.",
    location: "Seattle, WA",
    text: "Seamless Gutters 4 Less did an amazing job on our home. The price was significantly lower than other quotes we received, and the quality is top-notch. Highly recommend!",
    rating: 5,
  },
  {
    name: "John D.",
    location: "Tacoma, WA",
    text: "Professional, on time, and very efficient. They replaced our old leaking gutters in just a few hours. The new seamless system looks great and works perfectly.",
    rating: 5,
  },
  {
    name: "Emily R.",
    location: "Bellevue, WA",
    text: "Excellent service from start to finish. The team was very knowledgeable and helped us choose the right color to match our trim. Very happy with the result.",
    rating: 5,
  },
  {
    name: "Michael B.",
    location: "Everett, WA",
    text: "I've used them for both cleaning and a small repair. They are always reliable and do a thorough job. Best gutter service in the Puget Sound area.",
    rating: 5,
  },
  {
    name: "Jessica K.",
    location: "Olympia, WA",
    text: "Great experience! They were very careful around my landscaping and left everything spotless. The gutters look beautiful and the price was exactly as quoted.",
    rating: 5,
  },
  {
    name: "David L.",
    location: "Renton, WA",
    text: "Fast, affordable, and high quality. You can tell they have a lot of experience. I wouldn't go anywhere else for gutter work.",
    rating: 5,
  },
];
