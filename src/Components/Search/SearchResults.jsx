import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSearch } from './SearchContext';
import { useAuth } from '../Auth/AuthContext';
import './SearchResults.css';
import '../Shared/LoginPrompt.css';

const SearchResults = () => {
  const { searchResults, isSearching, searchQuery, clearSearch } = useSearch();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);

  const handleBuyNow = () => {
    if (!user) {
      setShowLoginPrompt(true);
      return;
    }
    // Handle buy now logic for logged in users
    alert('Buy Now functionality coming soon!');
  };

  const handleLoginRedirect = () => {
    setShowLoginPrompt(false);
    navigate('/login');
  };

  if (!searchQuery.trim()) {
    return null;
  }

  if (isSearching) {
    return null;
  }

  if (searchResults.length === 0) {
    return null;
  }

  return (
    <div className="search-results-container">
      {/* Login Prompt Popup */}
      {showLoginPrompt && (
        <div className="login-prompt-overlay">
          <div className="login-prompt-modal">
            <div className="login-prompt-content">
              <h3>🔐 Login Required</h3>
              <p>Please sign in to purchase this item.</p>
              <div className="login-prompt-buttons">
                <button onClick={handleLoginRedirect} className="btn btn-primary">Sign In</button>
                <button onClick={() => setShowLoginPrompt(false)} className="btn btn-secondary">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="search-header">
        <h4>Search Results</h4>
        <button className="btn btn-outline-secondary btn-sm" onClick={clearSearch}>
          Clear
        </button>
      </div>
      
      <div className="search-results-grid">
        {searchResults.map((result, index) => (
          <div key={index} className="search-result-card">
            <div className="result-image">
              <img src={result.imagePath} alt={result.type === 'state' ? result.stateName : result.craftName} />
            </div>
            <div className="result-content">
              {result.type === 'state' ? (
                <>
                  <h5 className="result-title">{result.stateName}</h5>
                  <p className="result-description">{result.description}</p>
                  <Link to={`/${result.stateCode}`} className="btn btn-primary">
                    Explore {result.stateName}
                  </Link>
                </>
              ) : (
                <>
                  <h5 className="result-title">{result.craftName}</h5>
                  <p className="result-state">From {result.stateName}</p>
                  <p className="result-description">{result.description}</p>
                  <p className="result-price">{result.price}</p>
                                     <div className="result-actions">
                     <Link to={`/${result.stateCode}`} className="btn btn-outline-primary">
                       View State
                     </Link>
                     <button className="btn btn-warning" onClick={handleBuyNow}>
                       Buy Now
                     </button>
                   </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults; 