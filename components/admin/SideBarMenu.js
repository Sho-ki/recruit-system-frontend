import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
// from https://reactjsexample.com/react-side-nav-component/

import Link from 'next/link';

function SideBarMenu() {
  return (
    <>
      <SideNav onSelect={(selected) => {}}>
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected='home'>
          <Link href='/admin/home'>
            <NavItem eventKey='home'>
              <NavIcon>
                <i
                  className='fa fa-fw fa-home'
                  style={{ fontSize: '1.75em' }}
                />
              </NavIcon>
              <NavText>Home</NavText>
            </NavItem>
          </Link>
          <Link href='/admin/results'>
            <NavItem eventKey='result'>
              <NavIcon>
                <i
                  className='fas fa-chart-pie'
                  style={{ fontSize: '1.75em' }}
                />
              </NavIcon>
              <NavText>Results</NavText>
            </NavItem>
          </Link>
          <Link href='../../recruit-test'>
            <NavItem eventKey='user'>
              <NavIcon>
                <i
                  className='fa fa-fw fa-list-alt '
                  style={{ fontSize: '1.75em' }}
                />
              </NavIcon>
              <NavText>Demo Screen</NavText>
            </NavItem>
          </Link>
        </SideNav.Nav>
      </SideNav>
    </>
  );
}

export default SideBarMenu;
