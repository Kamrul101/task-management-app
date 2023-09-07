import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import { Link } from 'react-router-dom';
import { FaBeer, FaUserCircle } from 'react-icons/fa';

const Home = () => {
  const {user, logOut} = useContext(AuthContext);
  const handleLogOut =() =>{
    logOut()
    .then(()=>{})
    .catch(error => console.log(error))
  }
    return (
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden mt-40">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-gray-300 text-base-content">
      {/* Sidebar content here */}
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
      <li>
        {user && (
            <>
              {user.photoURL == null ? (
                <FaUserCircle className="text-5xl mr-2"></FaUserCircle>
              ) : (
                <div
                  className="mr-2 tooltip tooltip-bottom"
                  data-tip={user.displayName}
                  style={{ width: "55px" }}
                  alt=""
                >
                  <img
                    className="rounded-full mr-2"
                    src={user.photoURL}
                    alt=""
                  />
                </div>
              )}
            </>
          )}
        {
            user? <Link onClick={handleLogOut} className="btn btn-error text-white" to='/login'>Logout</Link>:<Link className="btn btn-error text-white" to='/login'>Login</Link>
        }

        </li>
    </ul>
  
  </div>
</div>
    );
};

export default Home;