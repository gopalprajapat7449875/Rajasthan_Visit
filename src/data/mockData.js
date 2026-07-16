// Mock Data for Royal Rajasthan Travels with actual vehicle and tour images

export const destinations = [
  {
    id: "jaipur",
    name: "Jaipur",
    tagline: "The Pink City",
    description: "Immerse yourself in the grandeur of the Amer Fort, Hawa Mahal, and City Palace. Jaipur offers a majestic blend of royal culture and vibrant historic bazaars.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRZaNqGC4HJbIIdKMTIjJXW73VlRR0HsXYYVYuw_m-nobS93JYOsM_eVdC&s=10",
    popularSpots: ["Amer Fort", "Hawa Mahal", "City Palace", "Jantar Mantar", "Chokhi Dhani"],
    bestTimeToVisit: "October to March",
    durationRecommended: "2-3 Days",
    rating: 4.9,
  },
  {
    id: "udaipur",
    name: "Udaipur",
    tagline: "The City of Lakes",
    description: "Often called the Venice of the East, Udaipur is surrounded by the tranquil waters of Lake Pichola and the majestic Aravalli Range. Perfect for romantic getaways.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcu-VitP7zZxtEWpeDFp_F1qnfAF0JeOCgk0whnv6I_A&s=10",
    popularSpots: ["City Palace", "Lake Pichola", "Jag Mandir", "Fateh Sagar Lake", "Sajjangarh Monsoon Palace"],
    bestTimeToVisit: "September to March",
    durationRecommended: "3 Days",
    rating: 4.8,
  },
  {
    id: "jaisalmer",
    name: "Jaisalmer",
    tagline: "The Golden City",
    description: "Rise above the rolling sand dunes of the Thar Desert. Explore the living sandstone Jaisalmer Fort and spend a night under the stars in a luxury desert camp.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxulZ_8C2D68kehfnT0s1FmCT35KCyxnFzSSusqKmJ_QRW_fxqyBDajcM&s=10",
    popularSpots: ["Jaisalmer Fort", "Sam Sand Dunes", "Patwon Ki Haveli", "Gadisar Lake", "Tanot Mata Temple"],
    bestTimeToVisit: "November to February",
    durationRecommended: "2-3 Days",
    rating: 4.9,
  },
  {
    id: "jodhpur",
    name: "Jodhpur",
    tagline: "The Blue City",
    description: "Guarded by the colossal Mehrangarh Fort, the blue-hued houses of Jodhpur stretch across the desert landscape. Discover rich warrior history and exquisite handicrafts.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_nALFZFN1yP0j2JKVSxIgSUt7SxOPzq1uEbAgDkO6Sh4_PTGaj2LP4Dk4&s=10",
    popularSpots: ["Mehrangarh Fort", "Jaswant Thada", "Umaid Bhawan Palace", "Mandore Gardens", "Clock Tower Market"],
    bestTimeToVisit: "October to March",
    durationRecommended: "2 Days",
    rating: 4.7,
  },
  {
    id: "pushkar",
    name: "Pushkar",
    tagline: "The Sacred Town",
    description: "A tranquil pilgrimage town wrapped around a holy lake. Famous for the rare Brahma Temple, spiritual ghats, and the world-renowned Pushkar Camel Fair.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSKlnCkHAXkX6yrHPPQJe0n0IXy0c5YGMrnUfzs4yImYAQYObCrVaE_UdH&s=10",
    popularSpots: ["Brahma Temple", "Pushkar Lake & Ghats", "Savitri Temple (Ropeway)", "Desert Camping", "Varaha Temple"],
    bestTimeToVisit: "October to March (Camel Fair in Nov)",
    durationRecommended: "1-2 Days",
    rating: 4.6,
  },
  {
    id: "mount-abu",
    name: "Mount Abu",
    tagline: "The Oasis in the Hills",
    description: "Rajasthan's only hill station, nestled in the Aravalli Range. It offers cool breezes, the exquisite Dilwara Jain Temples, and sunset views over Nakki Lake.",
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=1200&q=8https://i.pinimg.com/736x/ac/49/de/ac49deeef8ba79f5e5bf3238fcd8008a.jpg",
    popularSpots: ["Dilwara Temples", "Nakki Lake", "Guru Shikhar", "Sunset Point", "Achalgarh Fort"],
    bestTimeToVisit: "Year-round (particularly July to February)",
    durationRecommended: "2 Days",
    rating: 4.5,
  },
];

export const fleet = [
  {
    id: "swift-dzire",
    name: "Maruti Swift Dzire",
    type: "Sedan (Standard)",
    image: "https://www.carblogindia.com/wp-content/uploads/2017/05/2017-maruti-dzire-review-images-4.jpg",
    capacity: "4 Passengers",
    luggage: "2 Bags",
    pricePerKm: 11,
    dayRate: 2500,
    features: ["AC & Heater", "Bluetooth Audio", "Sanitized Cab", "Carrier for Luggage"],
    popularFor: "Budget-friendly family travel and local sightseeing.",
  },
  {
    id: "etios-sedan",
    name: "Toyota Etios / Dzire Premium",
    type: "Sedan (Premium)",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKlIcTMALU7u-w3uX0mf3pUTAD_NEohuaHGZxvAhMRf64zIYiZarBn_ls&s=10",
    capacity: "4 Passengers",
    luggage: "3 Bags",
    pricePerKm: 12,
    dayRate: 2800,
    features: ["Ample Legroom", "Airbags & ABS", "Mineral Water Provided", "Experienced Driver"],
    popularFor: "Corporate business trips and comfortable airport transfers.",
  },
  {
    id: "ertiga",
    name: "Maruti Ertiga",
    type: "SUV (Standard)",
    image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Ertiga-Tour/9617/1762858404297/front-left-side-47.jpg",
    capacity: "6 Passengers",
    luggage: "3 Bags",
    pricePerKm: 15,
    dayRate: 3500,
    features: ["AC with Rear Vents", "Flexible Seating", "USB Chargers", "Vetted Driver"],
    popularFor: "Small groups, budget tours, and family holidays.",
  },
  {
    id: "innova-crysta",
    name: "Toyota Innova Crysta",
    type: "SUV (Luxury)",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNpx4CkVOqWgvJqFELgfOOpGiAG4bdW1a0c7EY87qfQ3bij3bgSSadXCY&s=10",
    capacity: "7 Passengers",
    luggage: "4 Bags",
    pricePerKm: 18,
    dayRate: 4500,
    features: ["Captain Seats", "Dual AC", "Premium Audio", "WiFi Hotspot (On Request)", "Newspapers & Water"],
    popularFor: "Premium long-distance tours, family travel, and ultimate comfort.",
  },
  {
    id: "toyota-hycross",
    name: "Toyota Innova Hycross",
    type: "Hybrid Luxury MUV",
    image: "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/115025/innova-hycross-exterior-right-front-three-quarter-72.jpeg?isig=0&q=80&q=80",
    capacity: "7 Passengers",
    luggage: "4 Bags",
    pricePerKm: 21,
    dayRate: 5500,
    features: ["Silent Hybrid Engine", "Sunroof", "Reclining Ottoman Seats", "Premium Ride Quality", "Premium Bottled Water"],
    popularFor: "High-end luxury travels, VIP guests, and environment-friendly tours.",
  },
  {
    id: "tempo-traveller-standard",
    name: "Tempo Traveller (Standard)",
    type: "Minivan / Luxury Coach",
    image: "https://5.imimg.com/data5/SELLER/Default/2023/4/300430254/XB/KB/IX/99917163/12-seater-tempo-traveller-rental-service.jpeg",
    capacity: "12 - 17 Passengers",
    luggage: "10 Bags",
    pricePerKm: 26,
    dayRate: 6800,
    features: ["Pushback Seats", "Stereo System with LED Screen", "Spacious Aisle", "Roof Carrier"],
    popularFor: "Group tour packages, joint families, and wedding transport.",
  },
  {
    id: "tempo-traveller-maharaja",
    name: "Maharaja Tempo Traveller",
    type: "Ultra Luxury Coach",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Hslg4qeyyjaeNE66BDBJVGrz4JLvXJATSdoPhdfhn-HgiT-UShfGRds&s=10",
    capacity: "9 - 12 Passengers",
    luggage: "8 Bags",
    pricePerKm: 32,
    dayRate: 8500,
    features: ["Maharaja Reclining Seats", "LED TV & Music System", "Ambient Lighting", "Fully Air Conditioned", "Individual Charging Points"],
    popularFor: "Luxury group tours, corporate delegates, and destination weddings.",
  },
];

export const packages = [
  {
    id: "desert-safari-jaisalmer",
    name: "Desert Safari & Golden City Tour",
    duration: "3 Days / 2 Nights",
    destinations: ["Jaisalmer", "Thar Desert"],
    price: 8999,
    rating: 4.9,
    highlights: ["Sunset Camel Safari", "Luxury Desert Glamping", "Traditional Rajasthani Folk Dance & Dinner", "Jaisalmer Fort Walk"],
    description: "Experience the magic of the golden dunes of Jaisalmer. Ride camelback into the sunset, camp under a star-studded sky, and enjoy heritage Rajasthani food and music.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcJJ1piiM-rfotKma3CYPsoD1btN5Vh6Xt4tNSVroL89yG64HKbBt7LWU2&s=10",
  },
  {
    id: "rajasthan-heritage-tour",
    name: "Royal Rajasthan Heritage Tour",
    duration: "7 Days / 6 Nights",
    destinations: ["Jaipur", "Jodhpur", "Udaipur"],
    price: 24999,
    rating: 4.8,
    highlights: ["Amer Fort Elephant/Jeep Ride", "Mehrangarh Fort Guided Tour", "Lake Pichola Boat Cruise", "Chokhi Dhani Heritage Village"],
    description: "Travel through the historic golden triangle of Rajasthan. Marvel at magnificent fortresses, stroll through blue-washed streets, and sail along the lakes of Udaipur.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXPQoARFC7NvbW9LNZW4XFWekc7GCYMPqfXBq3M_tUyo235HwcZ4AbNQ8&s=10",
  },
  {
    id: "luxury-palace-tour",
    name: "Grand Palace & Wellness Tour",
    duration: "5 Days / 4 Nights",
    destinations: ["Udaipur", "Mount Abu"],
    price: 19999,
    rating: 4.9,
    highlights: ["Stay at Premium Lake Palace", "Dilwara Temple Architectural Walk", "Sunset Cruise at Lake Pichola", "Aravalli Spa Session"],
    description: "A luxury holiday combining the romantic palace vibes of Udaipur with the refreshing green hills of Mount Abu. Tailored for those looking for peace and opulence.",
    image: "https://lockyourtrip.com/lytimages/rajasthan/r702.jpg",
  },
  {
    id: "honeymoon-package",
    name: "Romantic Rajasthan Honeymoon Special",
    duration: "6 Days / 5 Nights",
    destinations: ["Udaipur", "Jodhpur", "Jaisalmer Dunes"],
    price: 22499,
    rating: 5.0,
    highlights: ["Candlelit Lakeside Dinner", "Private Jeep Safari in Desert", "Traditional Welcome Ceremonies", "Couple Wellness Spa"],
    description: "Celebrate love in the land of kings and queens. Exquisite luxury hotel stays, private transfers in premium cars, and romantic dinners overlooking illuminated palaces.",
    image: "https://www.tourmyindia.com/states/rajasthan/image/honeymoon-banner-m.webp",
  },
  {
    id: "family-rajasthan-explorer",
    name: "Complete Rajasthan Explorer",
    duration: "10 Days / 9 Nights",
    destinations: ["Jaipur", "Ajmer", "Pushkar", "Jodhpur", "Jaisalmer", "Udaipur"],
    price: 34999,
    rating: 4.7,
    highlights: ["Brahma Temple Puja", "Desert Camping with Camel rides", "Sound & Light show at forts", "Art & Craft shopping guides"],
    description: "The ultimate family holiday. A comfortable chauffeur-driven SUV will take your family on a mesmerizing tour across Rajasthan's legendary shrines, forts, and sand dunes.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS7lluBJ-WDbtpVmPkYvWWd013AbtuhXngGP4kkQyjLXImonGUnBMr4OnU&s=10",
  },
];

export const faqs = [
  {
    question: "How do I book a taxi with Royal Rajasthan Travels?",
    answer: "You can book directly via our online Taxi Booking form, contact us on WhatsApp, or call our customer service hotline at +91 98765 43210. Once confirmed, you will receive an SMS and email with booking details."
  },
  {
    question: "Are your drivers professional and knowledgeable about Rajasthan routes?",
    answer: "Absolutely. All our drivers have at least 5+ years of driving experience, hold commercial licenses, and are local residents of Rajasthan who know the routes, shortcuts, and history of tourist spots inside out."
  },
  {
    question: "Is the price per km inclusive of toll tax, state tax, and driver allowance?",
    answer: "Our standard pricing excludes toll taxes, state border permits, parking charges, and driver night allowances unless specified. On our Booking page, we offer both a transparent per-km rate and a fully-inclusive fixed package rate so there are no surprises."
  },
  {
    question: "Can I customize my tour package?",
    answer: "Yes, customization is our specialty. You can contact our tour planner team directly via the contact form or WhatsApp. We can adjust destinations, duration, vehicle type, and hotel preferences according to your needs."
  },
  {
    question: "What is your cancellation policy?",
    answer: "We offer free cancellations up to 24 hours prior to the scheduled pickup time. Cancellations made within 24 hours may attract a small processing fee equivalent to 10% of the booking value. Refund processing takes 3-5 business days."
  },
  {
    question: "Do you provide sanitised vehicles?",
    answer: "Yes, safety and hygiene are our highest priorities. Every vehicle goes through deep sanitisation and vacuuming before every trip. We provide complimentary hand sanitiser, fresh wet wipes, and masks inside all fleet vehicles."
  },
  {
    question: "Do you offer airport transfer services?",
    answer: "Yes, we cover major airports in Rajasthan including Jaipur (JAI), Udaipur (UDR), Jodhpur (JDH), and also provide airport pick-ups from Delhi (DEL) or Ahmedabad (AMD) direct to any Rajasthan destination."
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Aarav Sharma",
    location: "Mumbai",
    rating: 5,
    comment: "Excellent service! We booked the Innova Crysta for a 7-day family tour covering Jaipur, Jodhpur, and Udaipur. The car was spotless, and our driver Rajesh was incredibly polite, knowledgeable, and safe.",
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    location: "London, UK",
    rating: 5,
    comment: "Royal Rajasthan Travels made my solo trip to India unforgettable. The booking process was seamless over WhatsApp. My driver spoke good English and made me feel safe and respected throughout the Jaisalmer tour.",
  },
  {
    id: 3,
    name: "Vikram & Neha Patel",
    location: "Ahmedabad",
    rating: 5,
    comment: "We chose the Luxury Palace Honeymoon Tour. From the rose petal welcome to the romantic candlelit dinners and the premium Hycross taxi, everything felt grand, premium, and extremely well-organized.",
  },
  {
    id: 4,
    name: "Dr. Aditya Sen",
    location: "New Delhi",
    rating: 4,
    comment: "Highly recommend their one-way outstation taxi service. I had a sudden meeting in Jaipur and booked a sedan. The driver was on time, drove professionally, and the pricing was very transparent and affordable.",
  },
  {
    id: 5,
    name: "Elena Rostova",
    location: "Moscow, Russia",
    rating: 5,
    comment: "Beautiful Rajasthan! The Maharaja Tempo Traveller we rented for our group was extremely comfortable. The suspension was great, AC worked perfectly, and the reclining seats felt like business class on a plane.",
  }
];

export const blogs = [
  {
    id: "top-things-to-do-in-udaipur",
    title: "10 Most Romantic Things to Do in the Lake City Udaipur",
    excerpt: "Discover the secrets of the Venice of the East, from candlelit lakeside dinners to hidden sunset points and palace tours.",
    author: "Mahipal Singh",
    date: "June 12, 2026",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ39FHuhxVeACvr_msFiklkpJxhxiI7kGzgbsoq-0d2ApO4DuzEFVK9tgs&s=10",
    readTime: "5 min read",
    content: "Udaipur, the City of Lakes, is widely celebrated as India's most romantic destination. Set in the backdrop of the Aravalli hills, its palaces rising from calm lake waters look like something out of a fairy tale. In this blog, we explore the top 10 things you must do with your loved one, including sunset boat rides, dining at Ambrai Ghat, walking the streets of the Old City, and visiting the gorgeous Sajjangarh Monsoon Palace at dusk..."
  },
  {
    id: "jaisalmer-desert-camping-guide",
    title: "The Ultimate Guide to Luxury Desert Camping in Jaisalmer",
    excerpt: "Planning a night under the stars in Thar Desert? Here is everything you need to know about tents, camel safaris, and folk nights.",
    author: "Devendra Singh",
    date: "May 28, 2026",
    image: "https://www.rajasthantourplanner.com/blog/wp-content/uploads/2016/10/Sam-sand-Jaisalmer.png",
    readTime: "6 min read",
    content: "A trip to Jaisalmer is incomplete without experiencing the Thar Desert. Sam and Khuri sand dunes host a wide range of desert camps. In this comprehensive guide, we compare Swiss luxury tents with standard ones, outline the itinerary of a typical desert safari, detail the mesmerizing Kalbelia folk performances, and provide critical tips on packing, desert temperatures, and booking a reliable taxi transfer..."
  },
  {
    id: "rajasthan-road-trip-tips",
    title: "Tips for Planning the Perfect Rajasthan Chauffeur-Driven Road Trip",
    excerpt: "Roads, tolls, travel times, and vehicle choices. A guide to making your Rajasthan journey comfortable and hassle-free.",
    author: "Rohan Sharma",
    date: "April 15, 2026",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNy_El-1OJf0-IgXnvqpFyZWB18TQ0AM2pr7VZvckwmWZcABN1-uKCBB0&s=10",
    readTime: "8 min read",
    content: "Rajasthan is a large state, and the distances between cities can range from 4 to 8 hours of driving. While trains and flights exist, the best way to witness the changing landscape, stop at highway dhabas, and explore heritage temples is by road. We share expert advice on selecting the right SUV or sedan, managing travel schedules, packing snacks, and why hiring a professional driver is much safer than self-driving on Indian highways..."
  }
];
