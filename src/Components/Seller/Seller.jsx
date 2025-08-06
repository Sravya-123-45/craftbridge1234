import React, { useState } from 'react';
import './Seller.css';

const Seller = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Handcrafted Pottery",
      category: "pottery",
      price: 1200,
      stock: 15,
      status: "active",
      image: "/States/Rajasthan/BLUE POTTERY/bp1.jpg",
      description: "Beautiful handcrafted blue pottery from Jaipur",
      sales: 8
    },
    {
      id: 2,
      name: "Silk Saree",
      category: "textiles",
      price: 3500,
      stock: 5,
      status: "active",
      image: "/States/Karnataka/ILKAL SARIS/i1.jpg",
      description: "Traditional Ilkal silk saree with intricate designs",
      sales: 12
    }
  ]);

  const [newProduct, setNewProduct] = useState({
    name: '',
    category: '',
    price: '',
    stock: '',
    description: '',
    image: ''
  });

  const [sellerProfile, setSellerProfile] = useState({
    name: 'Rajesh Kumar',
    email: 'rajesh.kumar@email.com',
    phone: '+91 98765 43210',
    state: 'Rajasthan',
    city: 'Jaipur',
    experience: '15 years',
    specialization: 'Blue Pottery',
    bio: 'Master artisan specializing in traditional blue pottery techniques passed down through generations.'
  });

  const totalSales = products.reduce((sum, product) => sum + (product.sales * product.price), 0);
  const totalProducts = products.length;
  const activeProducts = products.filter(p => p.status === 'active').length;

  const addProduct = (e) => {
    e.preventDefault();
    const product = {
      id: Date.now(),
      ...newProduct,
      price: parseInt(newProduct.price),
      stock: parseInt(newProduct.stock),
      status: 'active',
      sales: 0
    };
    setProducts([...products, product]);
    setNewProduct({
      name: '',
      category: '',
      price: '',
      stock: '',
      description: '',
      image: ''
    });
    alert('Product added successfully!');
  };

  const updateProduct = (id, field, value) => {
    setProducts(products.map(product => 
      product.id === id ? { ...product, [field]: value } : product
    ));
  };

  const deleteProduct = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(product => product.id !== id));
    }
  };

  const renderDashboard = () => (
    <div className="dashboard-section">
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">💰</div>
          <div className="stat-content">
            <h3>₹{totalSales.toLocaleString()}</h3>
            <p>Total Sales</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">📦</div>
          <div className="stat-content">
            <h3>{totalProducts}</h3>
            <p>Total Products</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">✅</div>
          <div className="stat-content">
            <h3>{activeProducts}</h3>
            <p>Active Products</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">⭐</div>
          <div className="stat-content">
            <h3>4.8</h3>
            <p>Rating</p>
          </div>
        </div>
      </div>

      <div className="recent-activity">
        <h3>Recent Activity</h3>
        <div className="activity-list">
          <div className="activity-item">
            <span className="activity-icon">🛒</span>
            <div className="activity-content">
              <p><strong>New order received</strong> for Handcrafted Pottery</p>
              <small>2 hours ago</small>
            </div>
          </div>
          <div className="activity-item">
            <span className="activity-icon">📦</span>
            <div className="activity-content">
              <p><strong>Product added</strong> - Silk Saree</p>
              <small>1 day ago</small>
            </div>
          </div>
          <div className="activity-item">
            <span className="activity-icon">💰</span>
            <div className="activity-content">
              <p><strong>Payment received</strong> ₹4,200</p>
              <small>2 days ago</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderProducts = () => (
    <div className="products-section">
      <div className="section-header">
        <h3>My Products</h3>
        <button 
          className="add-product-btn"
          onClick={() => setActiveTab('add-product')}
        >
          + Add New Product
        </button>
      </div>

      <div className="products-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Sales</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id}>
                <td>
                  <div className="product-info">
                    <img src={product.image} alt={product.name} />
                    <div>
                      <strong>{product.name}</strong>
                      <small>{product.description}</small>
                    </div>
                  </div>
                </td>
                <td>{product.category}</td>
                <td>₹{product.price}</td>
                <td>
                  <input
                    type="number"
                    value={product.stock}
                    onChange={(e) => updateProduct(product.id, 'stock', parseInt(e.target.value))}
                    className="stock-input"
                  />
                </td>
                <td>{product.sales}</td>
                <td>
                  <select
                    value={product.status}
                    onChange={(e) => updateProduct(product.id, 'status', e.target.value)}
                    className="status-select"
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </td>
                <td>
                  <button 
                    onClick={() => deleteProduct(product.id)}
                    className="delete-btn"
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderAddProduct = () => (
    <div className="add-product-section">
      <h3>Add New Product</h3>
      <form onSubmit={addProduct} className="product-form">
        <div className="form-row">
          <div className="form-group">
            <label>Product Name</label>
            <input
              type="text"
              value={newProduct.name}
              onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
              required
            />
          </div>
          <div className="form-group">
            <label>Category</label>
            <select
              value={newProduct.category}
              onChange={(e) => setNewProduct({...newProduct, category: e.target.value})}
              required
            >
              <option value="">Select Category</option>
              <option value="pottery">Pottery</option>
              <option value="textiles">Textiles</option>
              <option value="toys">Toys</option>
              <option value="art">Art</option>
              <option value="jewelry">Jewelry</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Price (₹)</label>
            <input
              type="number"
              value={newProduct.price}
              onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
              required
            />
          </div>
          <div className="form-group">
            <label>Stock Quantity</label>
            <input
              type="number"
              value={newProduct.stock}
              onChange={(e) => setNewProduct({...newProduct, stock: e.target.value})}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            value={newProduct.description}
            onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
            required
            rows="3"
          />
        </div>

        <div className="form-group">
          <label>Image URL</label>
          <input
            type="text"
            value={newProduct.image}
            onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
            placeholder="/path/to/image.jpg"
            required
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-btn">Add Product</button>
          <button 
            type="button" 
            className="cancel-btn"
            onClick={() => setActiveTab('products')}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );

  const renderProfile = () => (
    <div className="profile-section">
      <h3>Artisan Profile</h3>
      <div className="profile-content">
        <div className="profile-header">
          <div className="profile-avatar">
            <span>👨‍🎨</span>
          </div>
          <div className="profile-info">
            <h2>{sellerProfile.name}</h2>
            <p>{sellerProfile.specialization} • {sellerProfile.experience} experience</p>
            <p>📍 {sellerProfile.city}, {sellerProfile.state}</p>
          </div>
        </div>

        <div className="profile-details">
          <div className="detail-group">
            <label>Email</label>
            <input
              type="email"
              value={sellerProfile.email}
              onChange={(e) => setSellerProfile({...sellerProfile, email: e.target.value})}
            />
          </div>
          <div className="detail-group">
            <label>Phone</label>
            <input
              type="tel"
              value={sellerProfile.phone}
              onChange={(e) => setSellerProfile({...sellerProfile, phone: e.target.value})}
            />
          </div>
          <div className="detail-group">
            <label>Bio</label>
            <textarea
              value={sellerProfile.bio}
              onChange={(e) => setSellerProfile({...sellerProfile, bio: e.target.value})}
              rows="4"
            />
          </div>
          <button className="save-profile-btn">Save Profile</button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="seller-container">
      <div className="seller-header">
        <h1>👨‍🎨 Artisan Dashboard</h1>
        <p>Manage your products, track sales, and grow your business</p>
      </div>

      <div className="seller-content">
        <div className="sidebar">
          <nav className="seller-nav">
            <button 
              className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
              onClick={() => setActiveTab('dashboard')}
            >
              📊 Dashboard
            </button>
            <button 
              className={`nav-item ${activeTab === 'products' ? 'active' : ''}`}
              onClick={() => setActiveTab('products')}
            >
              📦 Products
            </button>
            <button 
              className={`nav-item ${activeTab === 'add-product' ? 'active' : ''}`}
              onClick={() => setActiveTab('add-product')}
            >
              ➕ Add Product
            </button>
            <button 
              className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`}
              onClick={() => setActiveTab('profile')}
            >
              👤 Profile
            </button>
          </nav>
        </div>

        <div className="main-content">
          {activeTab === 'dashboard' && renderDashboard()}
          {activeTab === 'products' && renderProducts()}
          {activeTab === 'add-product' && renderAddProduct()}
          {activeTab === 'profile' && renderProfile()}
        </div>
      </div>
    </div>
  );
};

export default Seller; 