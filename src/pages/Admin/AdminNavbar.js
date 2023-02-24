import React from 'react';
import { AiFillDatabase, AiOutlineTeam } from 'react-icons/ai';
import { MdOutlineMiscellaneousServices } from 'react-icons/md';
import { FaFileContract } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

function AdminNavbar() {
  return (
    <>
      <ul className="d-f j-c-s-b l-s-t-n f-w-600 p-l-0 p-t-1 p-b-2 a-i-c">
        <NavLink to="/admin-page">
          <li>
            {' '}
            <div className="d-f a-i-c">
              <div className=""><AiFillDatabase /></div>
              <div className=""> &nbsp;Admin Portfolio</div>
            </div>{' '}
             
          </li>
        </NavLink>
        <NavLink to="/admin-page-services">
          <li>  <div className="d-f a-i-c">
          <div className=""><MdOutlineMiscellaneousServices /></div>
          <div className=""> &nbsp;Admin Services</div>
        </div>{' '}</li>
        </NavLink>
        <NavLink to="/admin-page-partner">
          <li> <div className="d-f a-i-c"> <div className=""><AiOutlineTeam /></div>
          <div className=""> &nbsp;Admin Partners</div>
        </div></li>
        </NavLink>
        <NavLink to="/admin-page-contact">
          <li><div className="d-f a-i-c"> <div className=""><FaFileContract /></div>
          <div className=""> &nbsp;Admin Contracts</div>
        </div></li>
        </NavLink>
      </ul>
    </>
  );
}

export default AdminNavbar;
