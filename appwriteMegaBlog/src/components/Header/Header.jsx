import React from 'react';
import {Container, Logo, LogoutBtn} from "../index";
import { useSelector } from 'react-redux';
import { useNavigation } from 'react-router-dom';

const Header = () => {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigation();

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]

  return (
    <header className='py-3 shadow bg-gray-500'>
      <Container>
        <div className='mr-4'>
          <Link to='/'>
            <Logo width='70px'/>
            </Link>
        </div>
        <ul className='flex ml-auto'>
          {
            navItems.map((navItem) => 
            navItem.active  ? (
              <li key={navItem.name}>
                <button
                  onClick={() => navigate(navItem.slug)}
                  className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                >{navItem.name}</button>
              </li>
            ) : null
            )
          }

          {authStatus && (
            <li>
              <LogoutBtn />
            </li>
          )}
        </ul>
      </Container>
    </header>
  )
}

export default Header