import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./navbar.css";
import { VscDiffRenamed } from "react-icons/vsc";
export default function Navbar() {
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
            <button className="value" onClick={(e) => handleNavigation('/dashboard', e)}>
              <svg data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path d="M1.5 13v1a.5.5 0 0 0 .3379.4731A18.9718 18.9718 0 0 0 8 15.5a18.9629 18.9629 0 0 0 6.1621-1.0269.5.5 0 0 0 .3379-.4731v-1a6.5083 6.5083 0 0 0-4.461-6.1676 3.5 3.5 0 1 0-4.078 0A6.5083 6.5083 0 0 0 1.5 13zm4-9a2.5 2.5 0 1 1 2.5 2.5A2.5026 2.5026 0 0 1 5.5 4zm2.5 3.5a5.5066 5.5066 0 0 1 5.5 5.5v.6392a18.08 18.08 0 0 1-11 0v-.6392A5.5066 5.5066 0 0 1 8 7.5z" fill="#7D8590"></path>
              </svg>
              Dashboard
            </button>

            <button className="value" onClick={(e) => handleNavigation('/createStudent', e)}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                <path d="M109.9 20.63a6.232 6.232 0 0 0-8.588-.22L43.849 72.253c-.012.011-.02.024-.031.035s-.023.017-.034.027L39.063 77.037a1.749 1.749 0 0 0 0 2.475l.341.342-3.16 3.16a8 8 0 0 0-1.424 1.967 11.382 11.382 0 0 0-12.055 10.609c-.006.036-.011.074-.015.111a5.763 5.763 0 0 1-4.928 5.41 1.75 1.75 0 0 0-.844 3.14c4.844 3.619 9.4 4.915 13.338 4.915a17.14 17.14 0 0 0 11.738-4.545l.182-.167a11.354 11.354 0 0 0 3.348-8.081c0-.225-.02-.445-.032-.667a8.041 8.041 0 0 0 1.962-1.421l3.16-3.161.342.342a1.749 1.749 0 0 0 2.475 0l4.722-4.722c.011-.011.018-.025.029-.036s.023-.018.033-.029l51.844-57.46a6.236 6.236 0 0 0-.219-8.589zm-70.1 81.311l-.122.111c-.808.787-7.667 6.974-17.826 1.221a9.166 9.166 0 0 0 4.36-7.036 1.758 1.758 0 0 0 .036-.273 7.892 7.892 0 0 1 9.122-7.414c.017.005.031.014.048.019a1.717 1.717 0 0 0 .379.055 7.918 7.918 0 0 1 4 13.317zm5.239-10.131c-.093.093-.194.176-.293.26a11.459 11.459 0 0 0-6.289-6.286c.084-.1.167-.2.261-.3l3.161-3.161 6.321 6.326zm7.214-4.057l-9.479-9.479 2.247-2.247 9.479 9.479zm55.267-60.879l-50.61 56.092-9.348-9.348 56.092-50.61a2.737 2.737 0 0 1 3.866 3.866z" fill="#7D8590"></path>
              </svg>
              Create a Student
            </button>

            <button className="value" onClick={(e) => handleNavigation('/createCourse', e)}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                <path d="M109.9 20.63a6.232 6.232 0 0 0-8.588-.22L43.849 72.253c-.012.011-.02.024-.031.035s-.023.017-.034.027L39.063 77.037a1.749 1.749 0 0 0 0 2.475l.341.342-3.16 3.16a8 8 0 0 0-1.424 1.967 11.382 11.382 0 0 0-12.055 10.609c-.006.036-.011.074-.015.111a5.763 5.763 0 0 1-4.928 5.41 1.75 1.75 0 0 0-.844 3.14c4.844 3.619 9.4 4.915 13.338 4.915a17.14 17.14 0 0 0 11.738-4.545l.182-.167a11.354 11.354 0 0 0 3.348-8.081c0-.225-.02-.445-.032-.667a8.041 8.041 0 0 0 1.962-1.421l3.16-3.161.342.342a1.749 1.749 0 0 0 2.475 0l4.722-4.722c.011-.011.018-.025.029-.036s.023-.018.033-.029l51.844-57.46a6.236 6.236 0 0 0-.219-8.589zm-70.1 81.311l-.122.111c-.808.787-7.667 6.974-17.826 1.221a9.166 9.166 0 0 0 4.36-7.036 1.758 1.758 0 0 0 .036-.273 7.892 7.892 0 0 1 9.122-7.414c.017.005.031.014.048.019a1.717 1.717 0 0 0 .379.055 7.918 7.918 0 0 1 4 13.317zm5.239-10.131c-.093.093-.194.176-.293.26a11.459 11.459 0 0 0-6.289-6.286c.084-.1.167-.2.261-.3l3.161-3.161 6.321 6.326zm7.214-4.057l-9.479-9.479 2.247-2.247 9.479 9.479zm55.267-60.879l-50.61 56.092-9.348-9.348 56.092-50.61a2.737 2.737 0 0 1 3.866 3.866z" fill="#7D8590"></path>
              </svg>
              Create a Course
            </button>

            <button className="value" onClick={(e) => handleNavigation('/AddCourse', e)}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="#7D8590" d="M21.5 5.5h-19c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h19c.28 0 .5.22.5.5s-.22.5-.5.5zm-19-3h13c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-13c-.28 0-.5.22-.5.5s.22.5.5.5zm19 8h-19c-.28 0-.5.22-.5.5s.22.5.5.5h19c.28 0 .5-.22.5-.5s-.22-.5-.5-.5zm0 4h-19c-.28 0-.5.22-.5.5s.22.5.5.5h19c.28 0 .5-.22.5-.5s-.22-.5-.5-.5zm0 4h-19c-.28 0-.5.22-.5.5s.22.5.5.5h19c.28 0 .5-.22.5-.5s-.22-.5-.5-.5zm0 3h-19c-.28 0-.5.22-.5.5s.22.5.5.5h19c.28 0 .5-.22.5-.5s-.22-.5-.5-.5z"></path>
                <circle cx="3.5" cy="4.5" r=".5" fill="#7D8590"></circle>
                <circle cx="3.5" cy="12" r=".5" fill="#7D8590"></circle>
                <circle cx="3.5" cy="16" r=".5" fill="#7D8590"></circle>
                <circle cx="3.5" cy="20" r=".5" fill="#7D8590"></circle>
              </svg>
              Add Course
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
