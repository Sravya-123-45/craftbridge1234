import React, { useState } from 'react';
import './Buyer.css';

const Buyer = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState([]);

  // Sample product data
  const products = [
    {
      id: 1,
      name: "Handcrafted Pottery",
      category: "pottery",
      price: 1200,
      artisan: "Rajesh Kumar",
      state: "Rajasthan",
      image: "/States/Rajasthan/BLUE POTTERY/bp1.jpg",
      description: "Beautiful handcrafted blue pottery from Jaipur"
    },
    {
      id: 2,
      name: "Silk Saree",
      category: "textiles",
      price: 3500,
      artisan: "Lakshmi Devi",
      state: "Karnataka",
      image: "/States/Karnataka/ILKAL SARIS/i1.jpg",
      description: "Traditional Ilkal silk saree with intricate designs"
    },
    {
      id: 3,
      name: "Wooden Toys",
      category: "toys",
      price: 800,
      artisan: "Mohan Singh",
      state: "Karnataka",
      image: "/States/Karnataka/CHANNAPATNA TOYS/c1.jpg",
      description: "Eco-friendly wooden toys from Channapatna"
    },
    {
      id: 4,
      name: "Warli Painting",
      category: "art",
      price: 2500,
      artisan: "Sunita Patil",
      state: "Maharashtra",
      image: "/States/Maharashtra/Warli Paintings/mp1.jpg",
      description: "Traditional Warli tribal art painting"
    }
  ];

  const categories = ['all', 'pottery', 'textiles', 'toys', 'art', 'jewelry'];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.artisan.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.state.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="buyer-container">
      <div className="buyer-header">
        <h1>🛍️ Buyer's Marketplace</h1>
        <p>Discover authentic handcrafted treasures from Indian artisans</p>
      </div>

      {/* Search and Filter Section */}
      <div className="search-filter-section">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search products, artisans, or states..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <button className="search-btn">🔍</button>
        </div>
        
        <div className="category-filter">
          <select 
            value={selectedCategory} 
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="category-select"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Cart Section */}
      {cart.length > 0 && (
        <div className="cart-section">
          <h3>🛒 Your Cart ({cart.length} items)</h3>
          <div className="cart-items">
            {cart.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h4>{item.name}</h4>
                  <p>₹{item.price}</p>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="remove-btn"
                >
                  ❌
                </button>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <h4>Total: ₹{getTotalPrice()}</h4>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </div>
      )}

      {/* Products Grid */}
      <div className="products-section">
        <h2>Available Products ({filteredProducts.length})</h2>
        <div className="products-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <div className="product-overlay">
                  <button 
                    onClick={() => addToCart(product)}
                    className="add-to-cart-btn"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-meta">
                  <span className="artisan">👨‍🎨 {product.artisan}</span>
                  <span className="state">📍 {product.state}</span>
                </div>
                <div className="product-price">
                  <span className="price">₹{product.price}</span>
                  <span className="category-tag">{product.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <h2>Why Choose CraftBridge?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>Authentic Handcrafted</h3>
            <p>Every product is handcrafted by skilled artisans</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💝</div>
            <h3>Direct from Artisans</h3>
            <p>Support artisans directly, no middlemen</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🚚</div>
            <h3>Secure Delivery</h3>
            <p>Safe and reliable shipping across India</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔄</div>
            <h3>Easy Returns</h3>
            <p>7-day return policy for your peace of mind</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buyer; 