'use client';
import Link from 'next/link';
import IconLockDots from '@/components/icon/icon-lock-dots';
import IconLogout from '@/components/icon/icon-logout';
import IconMail from '@/components/icon/icon-mail';
import IconUser from '@/components/icon/icon-user';
import { useState } from 'react';
import Dropdown2 from '@/components/dropdown2';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { logout } from '@/utils/Logged_user';
import { global_logout } from '@/utilities/console/utils/URLS/BackendEndPoints';

export default function ProfileDropDown() {
    const { refresh } = useRouter();
    const [toggle, setToggle] = useState(false);
    // const { setLoading } = useContext(GlobalContext);

    const user_data = useSelector((state) => state.globalConfig.user);

    async function handleLogoutFromThisApp() {
        try {
            // setLoading(true);
            const triggerLogout = await logout();
            triggerLogout && toast.success('Logged out!');
            // setLoading(false);
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong!');
        } finally {
            refresh();
        }
    }

    async function handleLogoutFromAllApps() {
        if (!user_data?.user?.id) {
            return toast.error('Something went wrong!');
        }
        try {
            // setLoading(true);
            const response = await axios.delete(`${process.env.IDENTITY_BACKEND_URL}${global_logout}?userID=${user_data?.user?.id}`);

            console.log(response.data);

            if (response?.data?.message) {
                // setLoading(false);
                toast.success(response?.data?.message);
            }
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong!');
        } finally {
            refresh();
        }
    }

    return (
        <div className="dropdown flex shrink-0">
            <Dropdown2
                offset={[0, 8]}
                placement={`bottom-end`}
                btnClassName="relative group block"
                button={<img className="h-10 w-10 cursor-pointer rounded-full object-cover" src="/people/assets/images/profile-1.jpeg" alt="X" />}
            >
                <ul className="w-[230px] !py-0 font-semibold text-dark dark:text-white-dark dark:text-white-light/90">
                    {toggle ? (
                        <>
                            <div className="p-4">
                                <p className="text-center">Are you sure you want to logout?</p>
                            </div>
                            <li>
                                <button onClick={handleLogoutFromThisApp} className="flex w-full items-center justify-center border-t text-center text-danger">
                                    Logout
                                </button>
                            </li>
                            <li>
                                <button onClick={handleLogoutFromAllApps} className="flex w-full items-center justify-center border-t text-center text-danger">
                                    Logout from all apps
                                </button>
                            </li>
                            <li>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setToggle(false);
                                    }}
                                    className="flex w-full items-center justify-center border-t text-center text-danger"
                                >
                                    Cancel
                                </button>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <div className="flex items-center px-4 py-4">
                                    <img className="h-10 w-10 rounded-md object-cover" src="/people/assets/images/profile-1.jpeg" alt="userProfile" />
                                    <div className="truncate ltr:pl-4 rtl:pr-4">
                                        <h4 className="text-base">
                                            {`${user_data?.user?.firstname || 'loading'} ${user_data?.user?.lastname || '...'}`}
                                            <span className="rounded bg-success-light px-1 text-xs text-success ltr:ml-2 rtl:ml-2">Pro</span>
                                        </h4>
                                        <button type="button" className="text-black/60 hover:text-primary dark:text-dark-light/60 dark:hover:text-white">
                                            {user_data?.user?.email}
                                        </button>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <Link href="/users/profile/" className="dark:hover:text-white">
                                    <IconUser className="h-4.5 w-4.5 shrink-0 ltr:mr-2 rtl:ml-2" />
                                    Profile
                                </Link>
                            </li>
                            <li>
                                <Link href="/apps/mailbox/" className="dark:hover:text-white">
                                    <IconMail className="h-4.5 w-4.5 shrink-0 ltr:mr-2 rtl:ml-2" />
                                    Inbox
                                </Link>
                            </li>
                            <li>
                                <Link href="/auth/boxed-lockscreen/" className="dark:hover:text-white">
                                    <IconLockDots className="h-4.5 w-4.5 shrink-0 ltr:mr-2 rtl:ml-2" />
                                    Lock Screen
                                </Link>
                            </li>
                            <li className="border-t border-white-light dark:border-white-light/10">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setToggle(true);
                                    }}
                                    className="!py-3 text-danger"
                                >
                                    <IconLogout className="h-4.5 w-4.5 shrink-0 rotate-90 ltr:mr-2 rtl:ml-2" />
                                    Sign Out
                                </button>
                            </li>
                        </>
                    )}
                </ul>
            </Dropdown2>
        </div>
    );
}
