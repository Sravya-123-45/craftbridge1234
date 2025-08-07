import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../Auth/AuthContext'
import '../Shared/LoginPrompt.css'

export default function ArtworkCard(props) {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [showLoginPrompt, setShowLoginPrompt] = useState(false);
    
    const path=`States/${props.currState}/${props.idx}.jpg`
    const artworkName = props.artName
    const currState=props.currState
    const desc= props.desc
    console.log(artworkName,path)

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
  return (
    <>
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

      <div className="card mx-2 my-2" style={{width: "18rem"}}>
        <div className='row d-flex flex-col justify-content-center align-items-center my-3 ' style={{width:"16rem"}}>
          <img src={path} alt={artworkName} style={{maxWidth:"100%"}}></img>
        </div>
        <div className="card-body">
          <h4>{artworkName}</h4>
          <h5>{currState}</h5>
          <p>{desc}</p>
          <h5>{`Rs ${Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000}`}</h5>
          <button className='btn btn-warning' onClick={handleBuyNow}>Buy Now</button>
        </div>
      </div>
    </>
  )
}
