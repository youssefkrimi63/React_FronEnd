import React from 'react';
import { useNavigate } from 'react-router-dom';

import { VscDiffRenamed } from "react-icons/vsc";
export default function UserNavBar() {
  const navigate = useNavigate();

  const handleNavigation = (path, event) => {
    event.preventDefault();
    navigate(path);
  };

  return (
    <div className='NAV'>
    <div className="classNav">
      <header>
        <div className="navbar">
          <div className="input">
            <button className="value" onClick={(e) => handleNavigation('/user Dashboard', e)}>
              <svg data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path d="M1.5 13v1a.5.5 0 0 0 .3379.4731A18.9718 18.9718 0 0 0 8 15.5a18.9629 18.9629 0 0 0 6.1621-1.0269.5.5 0 0 0 .3379-.4731v-1a6.5083 6.5083 0 0 0-4.461-6.1676 3.5 3.5 0 1 0-4.078 0A6.5083 6.5083 0 0 0 1.5 13zm4-9a2.5 2.5 0 1 1 2.5 2.5A2.5026 2.5026 0 0 1 5.5 4zm2.5 3.5a5.5066 5.5066 0 0 1 5.5 5.5v.6392a18.08 18.08 0 0 1-11 0v-.6392A5.5066 5.5066 0 0 1 8 7.5z" fill="#7D8590"></path>
              </svg>
              Dashboard
            </button>










            <button className="value" onClick={(e) => handleNavigation('/', e)}>
            <VscDiffRenamed />
  <svg xmlns="" viewBox="0 0 128 128" width="24" height="24">
  </svg>
  Logout
</button>

          </div>
        </div>
      </header>
    </div>
    </div>
  );
}
