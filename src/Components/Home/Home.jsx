import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import { Link, Outlet } from 'react-router-dom';
import { FaBeer, FaPlus, FaUserCircle } from 'react-icons/fa';
import AddTask from '../Pages/AddTask/AddTask';

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
  <div className="drawer-content flex flex-col items-center justify-center bg-blue-950">
    <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden mt-40">Open drawer</label>
    
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay">
      
      </label> 
    <ul className="menu p-4 w-80 min-h-full bg-gray-300 text-base-content pt-40">
      {/* Sidebar content here */}
      <li className='my-3'><Link className='text-xl font-semibold bg-rose-300' to='/addTask'>Add Task <FaPlus className='bg-gray-300 rounded-full text-2xl'></FaPlus></Link></li>
      <li><Link className='text-xl font-semibold bg-blue-300 mb-3' to='/task'>Show Task</Link></li>
      
      <li>
        {user && (
            <>
              {user.photoURL == null ? (
                <FaUserCircle className="text-7xl mr-2"></FaUserCircle>
              ) : (
                <div
                >
                  <img
                    className="rounded-full mr-2 w-[60px]"
                    src={user.photoURL}
                    alt=""
                  />
                  <p className='font-semibold text-[1.2rem]'>{user.displayName}</p>
                </div>
              )}
            </>
          )}
        {
            user? <p className="btn btn-error text-white rounded-lg font-semibold text-xl"><Link onClick={handleLogOut}  to='/login'>Logout</Link></p>: <p className="btn btn-error text-white flex text-center justify-center items-center rounded-lg font-semibold text-xl"><Link  to='/login'>Login</Link></p>
        }

        </li>
    </ul>
  
  </div>
</div>
    );
};

export default Home;