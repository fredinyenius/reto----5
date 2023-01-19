import { useRef, useState } from 'react';
import { BsList, BsXCircle } from 'react-icons/bs';
import { Link, NavLink} from 'react-router-dom';
import yoda1 from '../../assets/image/yoda1.webp';

const Header = () => {

  
  const header = useRef();
  const modal = useRef();

  const [theme, setTheme] = useState (localStorage.getItem('theme')?? '');
  
  const selectTheme = (e) => { 
    document.documentElement.className = e.target.value;
    localStorage.setItem('theme', e.target.value);
    setTheme(e.target.value);
  };


  
  const showMenu = () => {
    header.current.classList.add('header--move');
    modal.current.classList.add('modal--show');
  };
   const hideMenu = () => {
    header.current.classList.remove('header--move');
    modal.current.classList.remove('modal--show');
   };
  console.log('Header');
  
    return (
        <header 
        className="header"
        ref={header}>

        <nav className="nav">
            <div className="container f-elemnts f-elemnts--header">
            <Link to="/">
                 <img src={yoda1} alt="Yoda" className="nav__logo" width="50" height="70" />
            </Link>
            <div  className="modal modal--header"
                  ref={modal}
                  onClick={hideMenu}>
            <ul className="list list--header"
            onClick={e => e.stopPropagation()}
            >
                <li>
                <NavLink
                  to="/productos"
                  className={({ isActive }) => isActive ? "list__link list__link--active" : "list__link"}
                  onClick={hideMenu}
                >
                  Productos
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/servicios"
                  className={({ isActive }) => isActive ? "list__link list__link--active" : "list__link"}
                  onClick={hideMenu}
                >
                  Servicios
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/nosotros"
                  className={({ isActive }) => isActive ? "list__link list__link--active" : "list__link"}
                  onClick={hideMenu}
                >
                  Nosotros
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contacto"
                  className={({ isActive }) => isActive ? "list__link list__link--active" : "list__link"}
                  onClick={hideMenu}
                >
                  Contacto
                </NavLink>
              </li>
              <li
                className="icon icon--close"
                onClick={hideMenu}
              >
                <BsXCircle/>
              </li>
            </ul>
          </div>
          <div className='f-elements f-elements--center'>
            { <select className='select select--theme'
            onChange={selectTheme}
            value={theme}
            >
              <option value="system">🌚</option>
              <option value="dark">🌞</option>
              <option value="light">💻</option>
            </select> }
          <button className='icon icon--menu'
                  onClick={showMenu}
                  >
          <BsList/>
          </button>     
          </div>
            </div>
            </nav>
        </header>
    );

    
};
export default Header;