import React, { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  // State and craft data
  const stateData = {
    "AP": {
      name: "Andhra Pradesh",
      crafts: [
        { name: "Cheriyal Paintings", desc: "Traditional scroll paintings from Telangana region", price: "₹2000-5000" },
        { name: "Dharmavaram Silk Sarees", desc: "Luxurious silk sarees with intricate designs", price: "₹5000-15000" },
        { name: "Durgi Stone Carving", desc: "Intricate stone carvings and sculptures", price: "₹3000-8000" },
        { name: "Eluru Carpets", desc: "Hand-woven carpets with traditional patterns", price: "₹4000-12000" },
        { name: "Etikoppaka Toys", desc: "Traditional wooden toys with natural dyes", price: "₹500-2000" },
        { name: "Kondapalli Toys", desc: "Colorful wooden toys and figurines", price: "₹800-3000" },
        { name: "Madhubani Paintings", desc: "Traditional folk paintings with vibrant colors", price: "₹1500-5000" },
        { name: "Mangalagiri Sarees", desc: "Cotton sarees with distinctive designs", price: "₹2000-6000" }
      ]
    },
    "Karnataka": {
      name: "Karnataka",
      crafts: [
        { name: "Banana Fiber Crafts", desc: "Eco-friendly crafts made from banana fiber", price: "₹1000-4000" },
        { name: "Bidriware", desc: "Metal handicraft with silver inlay work", price: "₹3000-10000" },
        { name: "Channapatna Toys", desc: "Traditional wooden toys with natural colors", price: "₹500-2500" },
        { name: "Dhurries", desc: "Hand-woven floor coverings", price: "₹2000-8000" },
        { name: "Ilkal Saris", desc: "Traditional cotton saris with unique borders", price: "₹1500-5000" },
        { name: "Kasuti Embroidery", desc: "Traditional hand embroidery with geometric patterns", price: "₹2500-8000" },
        { name: "Kinhal Wood Carving", desc: "Intricate wood carvings and furniture", price: "₹4000-15000" },
        { name: "Sandalwood Carving", desc: "Fragrant sandalwood sculptures and artifacts", price: "₹5000-20000" }
      ]
    },
    "Kerela": {
      name: "Kerala",
      crafts: [
        { name: "Bamboo Crafts", desc: "Eco-friendly bamboo products and furniture", price: "₹1500-6000" },
        { name: "Bell Metal Crafts", desc: "Traditional metal work with bell metal", price: "₹3000-12000" },
        { name: "Coconut Crafts", desc: "Products made from coconut shells and fiber", price: "₹800-3500" },
        { name: "Nettur Petti", desc: "Traditional wooden jewelry boxes", price: "₹2000-8000" },
        { name: "Peruvemba Musical Instruments", desc: "Traditional musical instruments", price: "₹5000-20000" },
        { name: "Screw Pine Crafts", desc: "Products made from screw pine leaves", price: "₹1000-4000" },
        { name: "Wooden Sculptures", desc: "Traditional wooden carvings and sculptures", price: "₹4000-15000" }
      ]
    },
    "Maharashtra": {
      name: "Maharashtra",
      crafts: [
        { name: "Banjara Embroidery", desc: "Colorful embroidery work by Banjara community", price: "₹2000-7000" },
        { name: "Ganjifa Cards", desc: "Traditional hand-painted playing cards", price: "₹1500-5000" },
        { name: "Jewellery of Kolhapur", desc: "Traditional jewelry designs from Kolhapur", price: "₹5000-25000" },
        { name: "Kolhapuri Chappals", desc: "Traditional leather footwear", price: "₹800-3000" },
        { name: "Narayan Peth Sarees", desc: "Traditional cotton sarees with unique designs", price: "₹2000-6000" },
        { name: "Paithani Sari", desc: "Luxurious silk sarees with gold borders", price: "₹15000-50000" },
        { name: "Warli Paintings", desc: "Traditional tribal paintings with geometric patterns", price: "₹1500-6000" }
      ]
    },
    "Odisha": {
      name: "Odisha",
      crafts: [
        { name: "Applique Art", desc: "Traditional fabric applique work", price: "₹1500-5000" },
        { name: "Brass and Bell Metal Ware", desc: "Traditional metal work and utensils", price: "₹2000-8000" },
        { name: "Golden Grass and Cane Work", desc: "Products made from golden grass and cane", price: "₹1000-4000" },
        { name: "Horn Works", desc: "Products made from animal horns", price: "₹2000-7000" },
        { name: "Jhoti, Chita, Muruja", desc: "Traditional floor art and paintings", price: "₹500-2000" },
        { name: "Silver Filigree", desc: "Intricate silver wire work", price: "₹5000-20000" },
        { name: "Stone and Wood Carving", desc: "Traditional carvings in stone and wood", price: "₹3000-12000" },
        { name: "Terracotta & Pottery", desc: "Traditional clay pottery and figurines", price: "₹800-3000" },
        { name: "Tribal Jewellery", desc: "Traditional tribal jewelry designs", price: "₹2000-8000" }
      ]
    },
    "Rajasthan": {
      name: "Rajasthan",
      crafts: [
        { name: "Bikaner Pottery", desc: "Traditional pottery with unique designs", price: "₹500-2000" },
        { name: "Blue Pottery", desc: "Traditional blue glazed pottery", price: "₹1000-4000" },
        { name: "Kagzi Pottery", desc: "Paper-thin pottery work", price: "₹800-3000" },
        { name: "Kundan Work", desc: "Traditional jewelry with precious stones", price: "₹5000-25000" },
        { name: "Lac Bangles", desc: "Colorful lac bangles and jewelry", price: "₹200-1000" },
        { name: "Marble Work", desc: "Intricate marble carvings and artifacts", price: "₹3000-15000" },
        { name: "Meenakari", desc: "Traditional enamel work on metal", price: "₹4000-20000" },
        { name: "Mojari", desc: "Traditional embroidered footwear", price: "₹1500-6000" },
        { name: "Rajasthani Rajai", desc: "Traditional quilts and blankets", price: "₹2000-8000" },
        { name: "Thewa Kala", desc: "Traditional gold work on glass", price: "₹8000-30000" }
      ]
    },
    "TamilNadu": {
      name: "Tamil Nadu",
      crafts: [
        { name: "Coimbatore Cotton Fabrics", desc: "Traditional cotton fabrics and sarees", price: "₹1500-5000" },
        { name: "Kanchipuram Silk Sarees", desc: "Luxurious silk sarees with gold borders", price: "₹10000-50000" },
        { name: "Pattachitra Art", desc: "Traditional scroll paintings", price: "₹2000-8000" },
        { name: "Patterned Tiles", desc: "Traditional ceramic tiles with designs", price: "₹500-2000" },
        { name: "Poompuhar Pottery", desc: "Traditional clay pottery and figurines", price: "₹800-3000" },
        { name: "Terracotta Figurines", desc: "Clay figurines and sculptures", price: "₹1000-4000" },
        { name: "Thanjavur Paintings", desc: "Traditional paintings with gold leaf work", price: "₹3000-15000" }
      ]
    },
    "Goa": {
      name: "Goa",
      crafts: [
        { name: "Bamboo Crafts", desc: "Traditional bamboo products and furniture", price: "₹1500-6000" },
        { name: "Pottery", desc: "Traditional clay pottery and ceramics", price: "₹800-3000" },
        { name: "Shell Crafts", desc: "Products made from sea shells", price: "₹500-2000" }
      ]
    }
  };

  const performSearch = (query) => {
    if (!query.trim()) {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    const results = [];

    // Search through states and crafts
    Object.entries(stateData).forEach(([stateCode, stateInfo]) => {
      // Search by state name
      if (stateInfo.name.toLowerCase().includes(query.toLowerCase()) || 
          stateCode.toLowerCase().includes(query.toLowerCase())) {
        results.push({
          type: 'state',
          stateCode,
          stateName: stateInfo.name,
          description: `Explore traditional crafts from ${stateInfo.name}`,
          imagePath: `States/${stateCode}/${stateCode}.jpg`
        });
      }

      // Search by craft names
      stateInfo.crafts.forEach(craft => {
        if (craft.name.toLowerCase().includes(query.toLowerCase()) ||
            craft.desc.toLowerCase().includes(query.toLowerCase())) {
          results.push({
            type: 'craft',
            stateCode,
            stateName: stateInfo.name,
            craftName: craft.name,
            description: craft.desc,
            price: craft.price,
            imagePath: `States/${stateCode}/${stateCode}.jpg`
          });
        }
      });
    });

    setSearchResults(results);
    setIsSearching(false);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
    setIsSearching(false);
  };

  const value = {
    searchQuery,
    setSearchQuery,
    searchResults,
    isSearching,
    performSearch,
    clearSearch,
    stateData
  };

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
}; 