'use client'
import React, { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
import Link from 'next/link';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import Image from 'next/image'

//import images
import avatar1 from "@public/assets/images/users/avatar-1.jpg";
import { createSelector } from 'reselect';
import Cookies from 'js-cookie';
import { redirect, useRouter } from 'next/navigation';
import { AuthServices } from '@/api/services';
import { logoutUserSuccess, resetUserState } from '@/slices/auth/login/reducer';
import { useDispatch } from "react-redux";
import Loader from './Loader';
import { persistor } from '@/slices';
import localStorage from 'redux-persist/es/storage';
import { useSelector } from 'react-redux';

const ProfileDropdown = () => {

    const profiledropdownData = createSelector(
        (state) => state.Profile.user,
        (user) => user
    );
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const userData = useSelector((state)=>state?.user?.data)

    useEffect(() => {
        // if (userData) {
            try {
                const parsedUserData = JSON.parse(userData);
                console.log("parsedUserData==>",parsedUserData)
                setUser(parsedUserData);
            } catch (error) {
                console.error("Error parsing userData:", error);
            }
        // } else {
        //     console.log("No user data found in cookies.");
        // }
    }, []);

    //Dropdown Toggle
    const [isProfileDropdown, setIsProfileDropdown] = useState(false);
    const toggleProfileDropdown = () => {
        setIsProfileDropdown(!isProfileDropdown);
    };
    const router = useRouter();
    async function logout() {
        // setLoading(true);
        await AuthServices.logout();
        dispatch(resetUserState());
        persistor.purge();
        Cookies.remove("token");
        router.push("/");
        // setLoading(false);
    }

    const changePassword = (event) => {
        event.preventDefault();
        router.push('/ChangePassword');
    };

    // if (loading) {
    //     return (
    //         <div>
    //             {/* <Loader fullWidth={true} /> */}
    //         </div>
    //     );
    // }

    return (
        <React.Fragment>
            <Dropdown isOpen={isProfileDropdown} toggle={toggleProfileDropdown} className="ms-sm-3 header-item topbar-user">
                <DropdownToggle tag="button" type="button" className="btn">
                    <span className="d-flex align-items-center">
                        <Image className="rounded-circle header-profile-user" src={avatar1}
                            alt="Header Avatar" />
                        <span className="text-start ms-xl-2">
                            <span className="d-none d-xl-inline-block ms-1 fw-medium user-name-text">{user?.Name || "Admin"}</span>
                            <span className="d-none d-xl-block ms-1 fs-12 text-muted user-name-sub-text">{user?.designation}</span>
                        </span>
                    </span>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-end">
                    <h6 className="dropdown-header">Welcome {user?.Name}!</h6>
                    {/* <DropdownItem className='p-0'>
                        <Link href={process.env.PUBLIC_URL + "/profile"} className="dropdown-item">
                            <i className="mdi mdi-account-circle text-muted fs-16 align-middle me-1"></i>
                            <span className="align-middle">Profile</span>
                        </Link>
                    </DropdownItem>
                    <DropdownItem className='p-0'>
                        <Link href={process.env.PUBLIC_URL + "/apps-chat"} className="dropdown-item">
                            <i className="mdi mdi-message-text-outline text-muted fs-16 align-middle me-1"></i> <span
                                className="align-middle">Messages</span>
                        </Link>
                    </DropdownItem>
                    <DropdownItem className='p-0'>
                        <Link href={"#"} className="dropdown-item">
                            <i className="mdi mdi-calendar-check-outline text-muted fs-16 align-middle me-1"></i> <span
                                className="align-middle">Taskboard</span>
                        </Link>
                    </DropdownItem>
                    <DropdownItem className='p-0'>
                        <Link href={process.env.PUBLIC_URL + "/pages-faqs"} className="dropdown-item">
                            <i
                                className="mdi mdi-lifebuoy text-muted fs-16 align-middle me-1"></i> <span
                                    className="align-middle">Help</span>
                        </Link>
                    </DropdownItem>
                    <div className="dropdown-divider"></div>
                    <DropdownItem className='p-0'>
                        <Link href={process.env.PUBLIC_URL + "/pages-profile"} className="dropdown-item">
                            <i
                                className="mdi mdi-wallet text-muted fs-16 align-middle me-1"></i> <span
                                    className="align-middle">Balance : <b>$5971.67</b></span>
                        </Link>
                    </DropdownItem >
                    <DropdownItem className='p-0'>
                        <Link href={process.env.PUBLIC_URL + "/pages-profile-settings"} className="dropdown-item">
                            <span
                                className="badge bg-success-subtle text-success mt-1 float-end">New</span><i
                                    className="mdi mdi-cog-outline text-muted fs-16 align-middle me-1"></i> <span
                                        className="align-middle">Settings</span>
                        </Link>
                    </DropdownItem> */}
                    <DropdownItem className='p-0'>
                        <button onClick={changePassword} className="dropdown-item" style={{ background: 'none', border: 'none', width: '100%', textAlign: 'left' }}>
                            <i className="mdi mdi-lock-reset text-muted fs-16 align-middle me-1"></i>
                            <span className="align-middle">Change Password</span>
                        </button>
                    </DropdownItem>

                    <DropdownItem className='p-0'>
                        <button onClick={logout} className="dropdown-item" style={{ background: 'none', border: 'none', width: '100%', textAlign: 'left' }}>
                            <i className="mdi mdi-logout text-muted fs-16 align-middle me-1"></i>
                            <span className="align-middle" data-key="t-logout">Logout</span>
                        </button>
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </React.Fragment>
    );
};

export default ProfileDropdown;