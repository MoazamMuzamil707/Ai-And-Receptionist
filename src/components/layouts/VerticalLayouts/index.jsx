// components/VerticalLayout.js
import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Collapse } from 'reactstrap';
import { usePathname, useRouter } from 'next/navigation';
import { withTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import 'bootstrap-icons/font/bootstrap-icons.css';
import navdata from '../LayoutMenuData';

const VerticalLayout = (props) => {
  const router = useRouter();
  const pathname = usePathname();
  const navData = navdata().props.children;
  const path = router.asPath;

  // console.log("path",path,"navData",navData,"pathname",pathname,"router",router,"props",props)

  const selectLayoutState = (state) => state.Layout;
  const selectLayoutProperties = createSelector(
    selectLayoutState,
    (layout) => ({
      leftsidbarSizeType: layout.leftsidbarSizeType,
      sidebarVisibilitytype: layout.sidebarVisibilitytype,
      layoutType: layout.layoutType,
    })
  );

  const {
    leftsidbarSizeType,
    sidebarVisibilitytype,
    layoutType,
  } = useSelector(selectLayoutProperties);

  const resizeSidebarMenu = useCallback(() => {
    // Your resize logic here
  }, [leftsidbarSizeType, sidebarVisibilitytype, layoutType]);

  useEffect(() => {
    window.addEventListener('resize', resizeSidebarMenu, true);
    return () => {
      window.removeEventListener('resize', resizeSidebarMenu, true);
    };
  }, [resizeSidebarMenu]);

  useEffect(() => {
    const initMenu = () => {
      const pathName = process.env.PUBLIC_URL + path;
      const ul = document.getElementById('navbar-nav');
      const items = ul.getElementsByTagName('a');
      let itemsArray = [...items];

      itemsArray.forEach((item) => {
        if (item.pathname === pathName) {
          item.classList.add('active');
        }
      });
    };

    initMenu();
  }, [path, props.layoutType]);

  return (
    <React.Fragment>
      {/* menu Items */}
      {(navData || []).map((item, key) => {
        return (
          <React.Fragment key={key}>
            {!item.isHeader && !item.subItems ? (
              <li className="nav-item">
                <Link
                  className={`nav-link menu-link  ${item.link === pathname ? "nav-active" : ""}`}
                  href={item.link ? item.link : '#'}
                >
                  <i className={item.icon}></i> <span>{props.t(item.label)}</span>
                  {item.badgeName ? (
                    <span className={`badge badge-pill bg-${item.badgeColor}`} data-key="t-new">
                      {item.badgeName}
                    </span>
                  ) : null}
                </Link>
              </li>
            ) : item.isHeader && (
              <li className="menu-title">
                <span data-key="t-menu">{props.t(item.label)}</span>
              </li>
            )}
            {item.subItems ? (
              <li className="nav-item">
                <Link
                  onClick={item.click}
                  className="nav-link menu-link"
                  href="#"
                  data-bs-toggle="collapse"
                >
                  <i className={item.icon}></i>
                  <span data-key="t-apps">{props.t(item.label)}</span>
                  {item.badgeName ? (
                    <span className={`badge badge-pill bg-${item.badgeColor}`} data-key="t-new">
                      {item.badgeName}
                    </span>
                  ) : null}
                </Link>
                <Collapse
                  className="menu-dropdown"
                  isOpen={item.stateVariables}
                  id="sidebarApps"
                >
                  <ul className="nav nav-sm flex-column test">
                    {item.subItems.map((subItem, key) => (
                      <React.Fragment key={key}>
                        {!subItem.isChildItem ? (
                          <li className="nav-item">
                            <Link
                              href={subItem.link ? subItem.link : '#'}
                              className={`nav-link ${subItem.link === pathname ? 'nav-active' : ''}`}
                            >
                              {props.t(subItem.label)}
                              {subItem.badgeName ? (
                                <span className={`badge badge-pill bg-${subItem.badgeColor}`} data-key="t-new">
                                  {subItem.badgeName}
                                </span>
                              ) : null}
                            </Link>
                          </li>
                        ) : (
                          <li className="nav-item">
                            <Link
                              onClick={subItem.click}
                              className="nav-link"
                              href="#"
                              data-bs-toggle="collapse"
                            >
                              {props.t(subItem.label)}
                              {subItem.badgeName ? (
                                <span className={`badge badge-pill bg-${subItem.badgeColor}`} data-key="t-new">
                                  {subItem.badgeName}
                                </span>
                              ) : null}
                            </Link>
                            <Collapse
                              className="menu-dropdown"
                              isOpen={subItem.stateVariables}
                              id="sidebarEcommerce"
                            >
                              <ul className="nav nav-sm flex-column">
                                <li className='menu-title'>MENU</li>
                                {subItem.childItems.map((childItem, key) => (
                                  <li className="nav-item" key={key}>
                                    <Link
                                      href={childItem.link}
                                      className="nav-link"
                                      data-key="t-basic-action"
                                    >
                                      {props.t(childItem.label)}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </Collapse>
                          </li>
                        )}
                      </React.Fragment>
                    ))}
                  </ul>
                </Collapse>
              </li>
            ) : null}
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
};

VerticalLayout.propTypes = {
  t: PropTypes.any,
};

export default withTranslation()(VerticalLayout);
