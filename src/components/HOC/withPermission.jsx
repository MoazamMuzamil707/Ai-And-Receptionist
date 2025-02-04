import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Cookies from 'js-cookie';
import axios from 'axios';
import { permissions } from '@/api/communications';
import { RoutePermissions } from '@/data/permissionsdata/RoutePermissions';

const WithPermission = ({WrappedComponent, actionType}) => {
  // return (props) => {
  const [hasPermission, setHasPermission] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const callAPI = async () => {
      try {
        const result = RoutePermissions;
        const menuData = result;
        console.log("meny ", menuData)
        console.log("pathname ", pathname)

          const permissionCheck = menuData.some(record => 
            record.subItems?.some(subItem => 
                subItem.link === pathname && 
                subItem.actions?.some(action => action.name === actionType)
            )
        );

        setHasPermission(permissionCheck);
      } catch (error) {
        console.error("API call failed", error);
        setHasPermission(false);
      }
    };

    callAPI();
  }, [pathname, actionType]);

  if (hasPermission === null) {
    return null;
  }

  if (!hasPermission) {
    return null;
  }

  return WrappedComponent 
  // };
};

export default WithPermission;
