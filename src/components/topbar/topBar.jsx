import React from 'react';
import "./topBar.css";

export default function Topbar() {
    return (
      <div className='topbar'>
         <div className="topbarWrapper">
          <div className="topLeft">
            <span className="logo">logoName</span>
          </div>

          <div className="topRight">
            <div className="topbarIconContainer">
              <span class="material-symbols-outlined">
                notifications
              </span>
              <span className="topIconBadge">2</span>
            </div>

            <div className="topbarIconContainer">
              <span class="material-symbols-outlined">
                language
              </span>
              <span className="topIconBadge">2</span>
            </div>

            <div className="topbarIconContainer">
              <span class="material-symbols-outlined">
                settings
              </span>
            </div>
            
            <img src="https://pixlr.com/images/index/remove-bg.webp" alt="girlPic" className="topAvatar" />
          </div>
         </div>
      </div>
    )
  }