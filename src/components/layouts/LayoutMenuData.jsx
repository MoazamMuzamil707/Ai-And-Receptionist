import React, { useEffect, useState } from "react";
import { redirect, usePathname, useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { RoutePermissions } from "@/data/permissionsdata/RoutePermissions"; // Import template data

const Navdata = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [menuItems, setMenuItems] = useState([]);

  const toggleMenuState = (id, menuItems) => {
    const items = menuItems.map((elem) => ({
      ...elem,
      stateVariables: elem.id === id ? !elem.stateVariables : elem.stateVariables,
    }));

    setMenuItems(items);
  };

  const checkEndpoint = (items, path) => {
    for (const item of items) {
      if (path.includes(item.link) || path === "/Login") {
        return true;
      }
      if (item.subItems && checkEndpoint(item.subItems, path)) {
        return true;
      }
    }
    return false;
  };

  const setSelectedRoute = (items, path, menuItems) => {
    let inside = false;
    items.forEach((module) => {
      module.subItems?.forEach((page) => {
        if (path === page.link) {
          toggleMenuState(module.id, menuItems);
          inside = true;
        }
      });
    });

    if (!inside) {
      setMenuItems(menuItems);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const endpointExists = checkEndpoint(RoutePermissions, pathname);
        if (!endpointExists) {
          Cookies.remove("token");
          Cookies.remove("user");
          Cookies.remove("menuData");
          router.push("/Login");
          redirect("/Login");
        } else {
          let updatedData = RoutePermissions?.map((rec) => ({
            ...rec,
            click: () => toggleMenuState(rec.id, menuItems),
            stateVariables: false,
          }));

          setSelectedRoute(RoutePermissions, pathname, updatedData);
        }
      } catch (err) {
        if (err?.response?.data?.data?.error?.toLowerCase() === "jwt expired") {
          router.push("/Login");
        }
      }
    };
    fetchData();
  }, [menuItems.length === 0]);

  return <React.Fragment>{menuItems}</React.Fragment>;
};

export default Navdata;
