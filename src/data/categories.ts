export interface Category {
    id: string;
    name: string;
    slug: string;
    subcategories: SubCategory[];
}

export interface SubCategory {
    id: string;
    name: string;
    slug: string;
}

export const CATEGORIES: Category[] = [
    {
        id: 'agri',
        name: 'Agriculture',
        slug: 'agriculture',
        subcategories: [
            { id: 'agri-eq', name: 'Agriculture Equipment', slug: 'agriculture-equipment' },
            { id: 'fresh-flowers', name: 'Fresh Flowers', slug: 'fresh-flowers' },
            { id: 'seeds', name: 'Seeds & Saplings', slug: 'seeds-saplings' },
            { id: 'tractor', name: 'Tractor Parts', slug: 'tractor-parts' },
            { id: 'feed', name: 'Animal Feed', slug: 'animal-feed' },
            { id: 'irrigation', name: 'Irrigation Systems', slug: 'irrigation-systems' },
            { id: 'fert', name: 'Fertilizers & Pesticides', slug: 'fertilizers-pesticides' },
            { id: 'organic', name: 'Organic Farming Tools', slug: 'organic-farming-tools' },
        ]
    },
    {
        id: 'apparel',
        name: 'Apparel & Fashion',
        slug: 'apparel-fashion',
        subcategories: [
            { id: 'sarees', name: 'Sarees', slug: 'sarees' },
            { id: 'sunglasses', name: 'Sunglasses', slug: 'sunglasses' },
            { id: 'unisex', name: 'Unisex Clothing', slug: 'unisex-clothing' },
            { id: 'suitcases', name: 'Suitcases & Briefcases', slug: 'suitcases-briefcases' },
            { id: 'footwear', name: 'Footwear', slug: 'footwear' },
            { id: 'textiles', name: 'Textiles & Fabrics', slug: 'textiles-fabrics' },
            { id: 'sportswear', name: 'Sportswear', slug: 'sportswear' },
            { id: 'access', name: 'Fashion Accessories', slug: 'fashion-accessories' },
        ]
    },
    {
        id: 'auto',
        name: 'Automobile',
        slug: 'automobile',
        subcategories: [
            { id: 'auto-elect', name: 'Auto Electrical Parts', slug: 'auto-electrical-parts' },
            { id: 'engine', name: 'Engine Parts', slug: 'engine-parts' },
            { id: 'commercial', name: 'Commercial Vehicles', slug: 'commercial-vehicles' },
            { id: 'coach', name: 'Coach Building', slug: 'coach-building' },
            { id: 'car-access', name: 'Car Accessories', slug: 'car-accessories' },
            { id: 'tires', name: 'Tires & Tubes', slug: 'tires-tubes' },
            { id: 'lubricants', name: 'Lubricants & Greases', slug: 'lubricants-greases' },
        ]
    },
    {
        id: 'ayurveda',
        name: 'Ayurveda & Herbal Products',
        slug: 'ayurveda-herbal',
        subcategories: [
            { id: 'henna', name: 'Herbal Henna', slug: 'herbal-henna' },
            { id: 'extracts', name: 'Ayurvedic Extracts', slug: 'ayurvedic-extracts' },
            { id: 'herbal-food', name: 'Herbal Foods', slug: 'herbal-foods' },
            { id: 'medicines', name: 'Ayurvedic Medicines', slug: 'ayurvedic-medicines' },
            { id: 'herbal-oils', name: 'Herbal Oils', slug: 'herbal-oils' },
            { id: 'skincare', name: 'Natural Skincare', slug: 'natural-skincare' },
        ]
    },
    {
        id: 'business',
        name: 'Business Services',
        slug: 'business-services',
        subcategories: [
            { id: 'turnkey', name: 'Turnkey Project Services', slug: 'turnkey-project-services' },
            { id: 'env', name: 'Environmental Services', slug: 'environmental-services' },
            { id: 'consultants', name: 'Business Consultants', slug: 'business-consultants' },
            { id: 'import', name: 'Import/Export Documentation', slug: 'import-export-documentation' },
            { id: 'financial', name: 'Financial Consulting', slug: 'financial-consulting' },
            { id: 'legal', name: 'Legal & Compliance Services', slug: 'legal-compliance-services' },
        ]
    },
    {
        id: 'chemical',
        name: 'Chemical',
        slug: 'chemical',
        subcategories: [
            { id: 'catalysts', name: 'Catalysts', slug: 'catalysts' },
            { id: 'pet', name: 'PET Granules', slug: 'pet-granules' },
            { id: 'dyes', name: 'Dyes & Pigments', slug: 'dyes-pigments' },
            { id: 'agro', name: 'Agrochemicals', slug: 'agrochemicals' },
            { id: 'specialty', name: 'Specialty Chemicals', slug: 'specialty-chemicals' },
            { id: 'gases', name: 'Industrial Gases', slug: 'industrial-gases' },
            { id: 'detergent', name: 'Detergent Chemicals', slug: 'detergent-chemicals' },
        ]
    },
    {
        id: 'computers',
        name: 'Computers and Internet',
        slug: 'computers-internet',
        subcategories: [
            { id: 'software', name: 'Software Development', slug: 'software-development' },
            { id: 'data', name: 'Data Entry Services', slug: 'data-entry-services' },
            { id: 'web', name: 'Web Development', slug: 'web-development' },
            { id: 'cloud', name: 'Cloud Computing Solutions', slug: 'cloud-computing-solutions' },
            { id: 'ecommerce', name: 'E-commerce Platforms', slug: 'e-commerce-platforms' },
            { id: 'cyber', name: 'Cybersecurity Services', slug: 'cybersecurity-services' },
            { id: 'hardware', name: 'IT Hardware & Peripherals', slug: 'it-hardware-peripherals' },
        ]
    },
    {
        id: 'electronics',
        name: 'Consumer Electronics',
        slug: 'consumer-electronics',
        subcategories: [
            { id: 'surveillance', name: 'Surveillance Equipment', slug: 'surveillance-equipment' },
            { id: 'photo', name: 'Photography Supplies', slug: 'photography-supplies' },
            { id: 'mobile', name: 'Mobile Accessories', slug: 'mobile-accessories' },
            { id: 'tv', name: 'Televisions & Home Audio', slug: 'televisions-home-audio' },
            { id: 'laptops', name: 'Laptops & Tablets', slug: 'laptops-tablets' },
            { id: 'wearables', name: 'Wearables', slug: 'wearables' },
        ]
    },
    {
        id: 'cosmetics',
        name: 'Cosmetics & Personal Care',
        slug: 'cosmetics-personal-care',
        subcategories: [
            { id: 'body', name: 'Body Care', slug: 'body-care' },
            { id: 'oils', name: 'Ayurvedic Oils', slug: 'ayurvedic-oils' },
            { id: 'fragrances', name: 'Fragrances', slug: 'fragrances' },
            { id: 'hair', name: 'Hair Care Products', slug: 'hair-care-products' },
            { id: 'makeup', name: 'Makeup & Beauty Products', slug: 'makeup-beauty-products' },
            { id: 'organic-skin', name: 'Organic Skincare', slug: 'organic-skincare' },
            { id: 'hygiene', name: 'Personal Hygiene Products', slug: 'personal-hygiene-products' },
        ]
    },
    {
        id: 'electrical',
        name: 'Electronics & Electrical',
        slug: 'electronics-electrical',
        subcategories: [
            { id: 'cables', name: 'Cables & Wires', slug: 'cables-wires' },
            { id: 'active', name: 'Active Devices', slug: 'active-devices' },
            { id: 'testing', name: 'Testing Devices', slug: 'testing-devices' },
            { id: 'transformers', name: 'Electrical Transformers', slug: 'electrical-transformers' },
            { id: 'batteries', name: 'Batteries & Energy Storage', slug: 'batteries-energy-storage' },
            { id: 'switches', name: 'Switches & Circuit Breakers', slug: 'switches-circuit-breakers' },
        ]
    },
    {
        id: 'food',
        name: 'Food Products & Beverage',
        slug: 'food-products-beverage',
        subcategories: [
            { id: 'veg', name: 'Vegetables', slug: 'vegetables' },
            { id: 'dry-fruits', name: 'Dry Fruits', slug: 'dry-fruits' },
            { id: 'baked', name: 'Baked Goods', slug: 'baked-goods' },
            { id: 'spices', name: 'Cooking Spices', slug: 'cooking-spices' },
            { id: 'dairy', name: 'Dairy Products', slug: 'dairy-products' },
            { id: 'canned', name: 'Canned Foods', slug: 'canned-foods' },
            { id: 'beverages', name: 'Beverages', slug: 'beverages' },
        ]
    },
    {
        id: 'furniture',
        name: 'Furniture & Carpentry Services',
        slug: 'furniture-carpentry',
        subcategories: [
            { id: 'bedroom', name: 'Bedroom Furniture', slug: 'bedroom-furniture' },
            { id: 'kitchen', name: 'Kitchen Furniture', slug: 'kitchen-furniture' },
            { id: 'office', name: 'Office Furniture', slug: 'office-furniture' },
            { id: 'custom', name: 'Custom Carpentry', slug: 'custom-carpentry' },
            { id: 'shelving', name: 'Shelving & Storage Solutions', slug: 'shelving-storage-solutions' },
            { id: 'outdoor', name: 'Outdoor Furniture', slug: 'outdoor-furniture' },
            { id: 'wooden', name: 'Wooden Artifacts', slug: 'wooden-artifacts' },
        ]
    },
    {
        id: 'gifts',
        name: 'Gifts & Crafts',
        slug: 'gifts-crafts',
        subcategories: [
            { id: 'metal', name: 'Metal Handicrafts', slug: 'metal-handicrafts' },
            { id: 'festival', name: 'Festival Items', slug: 'festival-items' },
            { id: 'personalized', name: 'Personalized Gifts', slug: 'personalized-gifts' },
            { id: 'jewelry', name: 'Handmade Jewelry', slug: 'handmade-jewelry' },
            { id: 'ceramics', name: 'Artistic Ceramics', slug: 'artistic-ceramics' },
            { id: 'corporate', name: 'Corporate Gifts', slug: 'corporate-gifts' },
        ]
    },
    {
        id: 'health',
        name: 'Health & Beauty',
        slug: 'health-beauty',
        subcategories: [
            { id: 'supplements', name: 'Dietary Supplements', slug: 'dietary-supplements' },
            { id: 'vet', name: 'Veterinary Medicines', slug: 'veterinary-medicines' },
            { id: 'organic-health', name: 'Organic Health Products', slug: 'organic-health-products' },
            { id: 'enhancers', name: 'Beauty Enhancers', slug: 'beauty-enhancers' },
            { id: 'wellness', name: 'Wellness Products', slug: 'wellness-products' },
        ]
    },
    {
        id: 'furnishings',
        name: 'Home Furnishings',
        slug: 'home-furnishings',
        subcategories: [
            { id: 'linen', name: 'Bed Linen', slug: 'bed-linen' },
            { id: 'rugs', name: 'Rugs', slug: 'rugs' },
            { id: 'mats', name: 'Placemats', slug: 'placemats' },
            { id: 'curtains', name: 'Curtains & Drapes', slug: 'curtains-drapes' },
            { id: 'cushions', name: 'Cushions & Throws', slug: 'cushions-throws' },
            { id: 'tableware', name: 'Tableware', slug: 'tableware' },
        ]
    },
    {
        id: 'home',
        name: 'Home Supplies',
        slug: 'home-supplies',
        subcategories: [
            { id: 'cleaning', name: 'Cleaning Liquids', slug: 'cleaning-liquids' },
            { id: 'pest', name: 'Pest Control Services', slug: 'pest-control-services' },
            { id: 'tools', name: 'Household Tools', slug: 'household-tools' },
            { id: 'sanitary', name: 'Sanitary Products', slug: 'sanitary-products' },
            { id: 'storage', name: 'Storage Solutions', slug: 'storage-solutions' },
        ]
    },
    {
        id: 'industrial',
        name: 'Industrial Machinery',
        slug: 'industrial-machinery',
        subcategories: [
            { id: 'chem-machine', name: 'Chemical Machinery', slug: 'chemical-machinery' },
            { id: 'cnc', name: 'CNC Machines', slug: 'cnc-machines' },
            { id: 'milling', name: 'Milling Tools', slug: 'milling-tools' },
            { id: 'heavy', name: 'Heavy Machinery', slug: 'heavy-machinery' },
            { id: 'hydraulic', name: 'Hydraulic Equipment', slug: 'hydraulic-equipment' },
            { id: 'packaging', name: 'Packaging Machines', slug: 'packaging-machines' },
        ]
    },
    {
        id: 'supplies',
        name: 'Industrial Supplies',
        slug: 'industrial-supplies',
        subcategories: [
            { id: 'pumps', name: 'Pumps', slug: 'pumps' },
            { id: 'insulators', name: 'Insulators', slug: 'insulators' },
            { id: 'trolleys', name: 'Trolleys & Pallets', slug: 'trolleys-pallets' },
            { id: 'bearings', name: 'Bearings', slug: 'bearings' },
            { id: 'conveyor', name: 'Conveyor Belts', slug: 'conveyor-belts' },
        ]
    },
    {
        id: 'jewelry',
        name: 'Jewelry & Jewelry Designers',
        slug: 'jewelry',
        subcategories: [
            { id: 'stones', name: 'Precious Stones', slug: 'precious-stones' },
            { id: 'diamond', name: 'Diamond Jewelry', slug: 'diamond-jewelry' },
            { id: 'custom-jewel', name: 'Custom Jewelry', slug: 'custom-jewelry' },
            { id: 'gold', name: 'Gold & Silver Accessories', slug: 'gold-silver-accessories' },
            { id: 'fashion-jewel', name: 'Fashion Jewelry', slug: 'fashion-jewelry' },
        ]
    },
    {
        id: 'minerals',
        name: 'Mineral & Metals',
        slug: 'mineral-metals',
        subcategories: [
            { id: 'mica', name: 'Mica', slug: 'mica' },
            { id: 'steel', name: 'Steel', slug: 'steel' },
            { id: 'scrap', name: 'Non-Ferrous Scrap', slug: 'non-ferrous-scrap' },
            { id: 'alum', name: 'Aluminum', slug: 'aluminum' },
            { id: 'copper', name: 'Copper', slug: 'copper' },
            { id: 'rare', name: 'Rare Earth Elements', slug: 'rare-earth-elements' },
        ]
    },
    {
        id: 'office',
        name: 'Office Supplies',
        slug: 'office-supplies',
        subcategories: [
            { id: 'stationery', name: 'Stationery', slug: 'stationery' },
            { id: 'printer', name: 'Printer Consumables', slug: 'printer-consumables' },
            { id: 'off-furn', name: 'Office Furniture', slug: 'office-furniture' },
            { id: 'paper', name: 'Paper Products', slug: 'paper-products' },
            { id: 'filing', name: 'Filing Solutions', slug: 'filing-solutions' },
        ]
    },
    {
        id: 'packaging',
        name: 'Packaging & Paper',
        slug: 'packaging-paper',
        subcategories: [
            { id: 'bags', name: 'Bulk Bags', slug: 'bulk-bags' },
            { id: 'pallets', name: 'Pallets', slug: 'pallets' },
            { id: 'food-pack', name: 'Food Packaging', slug: 'food-packaging' },
            { id: 'ind-pack', name: 'Industrial Packaging', slug: 'industrial-packaging' },
            { id: 'paper-prod', name: 'Paper Products', slug: 'paper-products' },
            { id: 'sustainable', name: 'Sustainable Packaging', slug: 'sustainable-packaging' },
        ]
    },
    {
        id: 'real-estate',
        name: 'Real Estate, Building & Construction',
        slug: 'real-estate-building',
        subcategories: [
            { id: 'bricks', name: 'Bricks', slug: 'bricks' },
            { id: 'sanitary-ware', name: 'Sanitary Ware', slug: 'sanitary-ware' },
            { id: 'tiles', name: 'Tiles', slug: 'tiles' },
            { id: 'materials', name: 'Building Materials', slug: 'building-materials' },
            { id: 'cement', name: 'Cement & Concrete', slug: 'cement-concrete' },
            { id: 'construction', name: 'Construction Equipment', slug: 'construction-equipment' },
        ]
    },
    {
        id: 'security',
        name: 'Security Products & Services',
        slug: 'security-products',
        subcategories: [
            { id: 'alarms', name: 'Alarms', slug: 'alarms' },
            { id: 'safety', name: 'Safety Systems', slug: 'safety-systems' },
            { id: 'surveillance-sec', name: 'Surveillance Equipment', slug: 'surveillance-equipment' },
            { id: 'fire', name: 'Fire Protection Systems', slug: 'fire-protection-systems' },
            { id: 'access', name: 'Access Control Systems', slug: 'access-control-systems' },
        ]
    },
    {
        id: 'sports',
        name: 'Sports Goods & Entertainment',
        slug: 'sports-entertainment',
        subcategories: [
            { id: 'sporting', name: 'Sporting Goods', slug: 'sporting-goods' },
            { id: 'exercise', name: 'Exercise Accessories', slug: 'exercise-accessories' },
            { id: 'fitness', name: 'Fitness Equipment', slug: 'fitness-equipment' },
            { id: 'gaming', name: 'Gaming Consoles', slug: 'gaming-consoles' },
            { id: 'outdoor-games', name: 'Outdoor Games', slug: 'outdoor-games' },
        ]
    },
    {
        id: 'telecom',
        name: 'Telecommunication',
        slug: 'telecommunication',
        subcategories: [
            { id: 'equip', name: 'Equipment', slug: 'equipment' },
            { id: 'wifi', name: 'Wi-Fi Solutions', slug: 'wi-fi-solutions' },
            { id: 'voip', name: 'VOIP Systems', slug: 'voip-systems' },
            { id: 'mobile-net', name: 'Mobile Networks', slug: 'mobile-networks' },
            { id: 'satellite', name: 'Satellite Communication', slug: 'satellite-communication' },
        ]
    },
    {
        id: 'textiles',
        name: 'Textiles, Yarn & Fabrics',
        slug: 'textiles-yarn-fabrics',
        subcategories: [
            { id: 'cotton', name: 'Cotton Fabrics', slug: 'cotton-fabrics' },
            { id: 'leather', name: 'Leather Materials', slug: 'leather-materials' },
            { id: 'embroidery', name: 'Embroidery Tools', slug: 'embroidery-tools' },
            { id: 'synthetic', name: 'Synthetic Fibers', slug: 'synthetic-fibers' },
            { id: 'organic-text', name: 'Organic Textiles', slug: 'organic-textiles' },
        ]
    },
    {
        id: 'tools',
        name: 'Tools & Equipment',
        slug: 'tools-equipment',
        subcategories: [
            { id: 'saw', name: 'Saw Blades', slug: 'saw-blades' },
            { id: 'hydraulic-tools', name: 'Hydraulic Tools', slug: 'hydraulic-tools' },
            { id: 'thermo', name: 'Thermometers', slug: 'thermometers' },
            { id: 'hand', name: 'Hand Tools', slug: 'hand-tools' },
            { id: 'power', name: 'Power Tools', slug: 'power-tools' },
        ]
    },
    {
        id: 'travel',
        name: 'Tours, Travels & Hotels',
        slug: 'tours-travels',
        subcategories: [
            { id: 'providers', name: 'Tour Providers', slug: 'tour-providers' },
            { id: 'bus', name: 'Bus Rentals', slug: 'bus-rentals' },
            { id: 'hotel', name: 'Hotel Booking', slug: 'hotel-booking' },
            { id: 'holiday', name: 'Holiday Packages', slug: 'holiday-packages' },
            { id: 'accessories', name: 'Travel Accessories', slug: 'travel-accessories' },
        ]
    },
    {
        id: 'toys',
        name: 'Toys & Games',
        slug: 'toys-games',
        subcategories: [
            { id: 'stuffed', name: 'Stuffed Toys', slug: 'stuffed-toys' },
            { id: 'video', name: 'Video Games', slug: 'video-games' },
            { id: 'edu', name: 'Educational Toys', slug: 'educational-toys' },
            { id: 'board', name: 'Board Games', slug: 'board-games' },
            { id: 'outdoor-toys', name: 'Outdoor Games', slug: 'outdoor-games' },
        ]
    },
    {
        id: 'renewable',
        name: 'Renewable Energy Equipment',
        slug: 'renewable-energy',
        subcategories: [
            { id: 'solar', name: 'Solar Panels', slug: 'solar-panels' },
            { id: 'wind', name: 'Wind Turbines', slug: 'wind-turbines' },
            { id: 'energy-st', name: 'Energy Storage Solutions', slug: 'energy-storage-solutions' },
            { id: 'hydro', name: 'Hydroelectric Equipment', slug: 'hydroelectric-equipment' },
        ]
    },
    {
        id: 'ai',
        name: 'Artificial Intelligence & Automation Tools',
        slug: 'ai-automation',
        subcategories: [
            { id: 'software', name: 'AI Software', slug: 'ai-software' },
            { id: 'robotics', name: 'Robotics', slug: 'robotics' },
            { id: 'ml', name: 'Machine Learning Tools', slug: 'machine-learning-tools' },
            { id: 'ai-hard', name: 'AI Hardware', slug: 'ai-hardware' },
        ]
    },
    {
        id: 'sustainable-prods',
        name: 'Sustainable & Eco-Friendly Products',
        slug: 'sustainable-eco-friendly',
        subcategories: [
            { id: 'recycle', name: 'Recyclable Materials', slug: 'recyclable-materials' },
            { id: 'eco-pack', name: 'Eco-Friendly Packaging', slug: 'eco-friendly-packaging' },
            { id: 'organic-cloth', name: 'Organic Clothing', slug: 'organic-clothing' },
            { id: 'zero', name: 'Zero-Waste Products', slug: 'zero-waste-products' },
        ]
    },
    {
        id: 'healthcare',
        name: 'Healthcare Equipment & Technology',
        slug: 'healthcare-equipment',
        subcategories: [
            { id: 'tele', name: 'Telemedicine Devices', slug: 'telemedicine-devices' },
            { id: 'wearables-h', name: 'Health Wearables', slug: 'health-wearables' },
            { id: 'medical', name: 'Medical Devices', slug: 'medical-devices' },
            { id: 'informatics', name: 'Health Informatics', slug: 'health-informatics' },
        ]
    },
    {
        id: 'ecommerce-sol',
        name: 'E-commerce & Digital Platforms Solutions',
        slug: 'ecommerce-solutions',
        subcategories: [
            { id: 'market', name: 'Online Marketplaces', slug: 'online-marketplaces' },
            { id: 'payment', name: 'Payment Gateways', slug: 'payment-gateways' },
            { id: 'ecom-soft', name: 'E-commerce Software', slug: 'e-commerce-software' },
            { id: 'drop', name: 'Dropshipping Platforms', slug: 'dropshipping-platforms' },
        ]
    },
    {
        id: 'gaming-hw',
        name: 'Gaming & Esports Hardware',
        slug: 'gaming-esports',
        subcategories: [
            { id: 'consoles', name: 'Gaming Consoles', slug: 'gaming-consoles' },
            { id: 'vr', name: 'VR & AR Devices', slug: 'vr-ar-devices' },
            { id: 'esports', name: 'Esports Equipment', slug: 'esports-equipment' },
            { id: 'game-soft', name: 'Gaming Software', slug: 'gaming-software' },
        ]
    },
    {
        id: 'ev',
        name: 'Electric Vehicles (EVs) & Charging Solutions',
        slug: 'ev-charging',
        subcategories: [
            { id: 'bat', name: 'EV Batteries', slug: 'ev-batteries' },
            { id: 'stations', name: 'Charging Stations', slug: 'charging-stations' },
            { id: 'cars', name: 'Electric Cars', slug: 'electric-cars' },
            { id: 'acc', name: 'EV Accessories', slug: 'ev-accessories' },
        ]
    },
    {
        id: 'drones',
        name: 'Drones & UAVs',
        slug: 'drones-uavs',
        subcategories: [
            { id: 'manuf', name: 'UAV Manufacturing', slug: 'uav-manufacturing' },
            { id: 'soft', name: 'Drone Software', slug: 'drone-software' },
            { id: 'photo', name: 'Drone Photography', slug: 'drone-photography' },
            { id: 'map', name: 'Aerial Mapping Services', slug: 'aerial-mapping-services' },
        ]
    },
    {
        id: 'wearable-tech',
        name: 'Wearable Technology',
        slug: 'wearable-technology',
        subcategories: [
            { id: 'smart', name: 'Smartwatches', slug: 'smartwatches' },
            { id: 'track', name: 'Fitness Trackers', slug: 'fitness-trackers' },
            { id: 'med', name: 'Medical Wearables', slug: 'medical-wearables' },
            { id: 'ar', name: 'AR Glasses', slug: 'ar-glasses' },
        ]
    },
    {
        id: 'logistics',
        name: 'Logistics & Supply Chain Solutions',
        slug: 'logistics-supply-chain',
        subcategories: [
            { id: 'warehouse', name: 'Warehouse Automation', slug: 'warehouse-automation' },
            { id: 'fleet', name: 'Fleet Management', slug: 'fleet-management' },
            { id: 'freight', name: 'Freight Forwarding', slug: 'freight-forwarding' },
            { id: 'analytics', name: 'Supply Chain Analytics', slug: 'supply-chain-analytics' },
        ]
    },
    {
        id: 'print3d',
        name: '3D Printing Equipment',
        slug: '3d-printing',
        subcategories: [
            { id: 'printers', name: '3D Printers', slug: '3d-printers' },
            { id: 'materials', name: 'Printing Materials', slug: 'printing-materials' },
            { id: 'proto', name: 'Prototyping Services', slug: 'prototyping-services' },
            { id: 'custom', name: 'Custom Manufacturing', slug: 'custom-manufacturing' },
        ]
    },
    {
        id: 'food-tech',
        name: 'Food Tech & Agri-Tech',
        slug: 'food-tech-agri-tech',
        subcategories: [
            { id: 'vertical', name: 'Vertical Farming', slug: 'vertical-farming' },
            { id: 'delivery', name: 'Food Delivery Platforms', slug: 'food-delivery-platforms' },
            { id: 'lab', name: 'Lab-Grown Meat', slug: 'lab-grown-meat' },
            { id: 'prec', name: 'Precision Agriculture', slug: 'precision-agriculture' },
        ]
    },
    {
        id: 'iron',
        name: 'Iron & Steel Industry',
        slug: 'iron-steel',
        subcategories: [
            { id: 'steel-prod', name: 'Steel Production', slug: 'steel-production' },
            { id: 'smelt', name: 'Iron Smelting', slug: 'iron-smelting' },
            { id: 'ferrous', name: 'Ferrous Metals', slug: 'ferrous-metals' },
            { id: 'foundry', name: 'Foundries', slug: 'foundries' },
        ]
    },
    {
        id: 'mining',
        name: 'Mining & Raw Materials',
        slug: 'mining-raw-materials',
        subcategories: [
            { id: 'ore', name: 'Iron Ore', slug: 'iron-ore' },
            { id: 'bauxite', name: 'Bauxite', slug: 'bauxite' },
            { id: 'coal', name: 'Coal Mining', slug: 'coal-mining' },
            { id: 'precious', name: 'Precious Metals', slug: 'precious-metals' },
        ]
    },
    {
        id: 'recycling',
        name: 'Metal Recycling',
        slug: 'metal-recycling',
        subcategories: [
            { id: 'scrap-iron', name: 'Scrap Iron', slug: 'scrap-iron' },
            { id: 'steel-rec', name: 'Recycled Steel', slug: 'recycled-steel' },
            { id: 'non-ferrous', name: 'Non-Ferrous Scrap', slug: 'non-ferrous-scrap' },
            { id: 'process', name: 'Metal Processing', slug: 'metal-processing' },
        ]
    },
    {
        id: 'metallurgy',
        name: 'Metallurgy & Metalworking',
        slug: 'metallurgy',
        subcategories: [
            { id: 'forge', name: 'Metal Forging', slug: 'metal-forging' },
            { id: 'cast', name: 'Casting', slug: 'casting' },
            { id: 'alloy', name: 'Alloy Production', slug: 'alloy-production' },
            { id: 'heat', name: 'Heat Treatment', slug: 'heat-treatment' },
        ]
    },
    {
        id: 'heavy-mach',
        name: 'Heavy Machinery & Mining Equipment',
        slug: 'heavy-machinery-mining',
        subcategories: [
            { id: 'trucks', name: 'Mining Trucks', slug: 'mining-trucks' },
            { id: 'excavator', name: 'Excavators', slug: 'excavators' },
            { id: 'drill', name: 'Drilling Machines', slug: 'drilling-machines' },
            { id: 'crush', name: 'Crushing Equipment', slug: 'crushing-equipment' },
        ]
    },
    {
        id: 'metals',
        name: 'Ferrous and Non-Ferrous Metals',
        slug: 'ferrous-non-ferrous',
        subcategories: [
            { id: 'steel-m', name: 'Steel', slug: 'steel' },
            { id: 'alum-m', name: 'Aluminum', slug: 'aluminum' },
            { id: 'copper-m', name: 'Copper', slug: 'copper' },
            { id: 'zinc', name: 'Zinc', slug: 'zinc' },
        ]
    },
    {
        id: 'safety-mining',
        name: 'Mining Safety & Environmental Solutions',
        slug: 'mining-safety',
        subcategories: [
            { id: 'gear', name: 'Mining Safety Gear', slug: 'mining-safety-gear' },
            { id: 'env', name: 'Environmental Monitoring', slug: 'environmental-monitoring' },
            { id: 'dust', name: 'Dust Control Solutions', slug: 'dust-control-solutions' },
            { id: 'rehab', name: 'Mine Rehabilitation', slug: 'mine-rehabilitation' },
        ]
    },
    {
        id: 'precious-mining',
        name: 'Precious Metals & Mining',
        slug: 'precious-metals-mining',
        subcategories: [
            { id: 'gold', name: 'Gold', slug: 'gold' },
            { id: 'silver', name: 'Silver', slug: 'silver' },
            { id: 'plat', name: 'Platinum', slug: 'platinum' },
            { id: 'explore', name: 'Mining Exploration', slug: 'mining-exploration' },
        ]
    },
];
