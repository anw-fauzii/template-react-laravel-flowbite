import React from 'react';
import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser } from 'react-icons/hi';

const CustomSidebar = ({ sidebarOpen, toggleSidebar }) => {
    const currentUrl = document.querySelector('meta[name="current-url"]').getAttribute('content');

    return (
        <Sidebar
            aria-label="Sidebar with multi-level dropdown example"
            className={`fixed inset-y-0 left-0 w-64 bg-blue-800 text-white shadow-md transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 md:w-64 md:h-screen md:top-16 md:overflow-y-auto`}
        >
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Sidebar.Item
                        href="/dashboard"
                        icon={HiChartPie}
                        className={`hover:bg-blue-100  ${currentUrl.includes('/dashboard') ? 'bg-blue-200' : ''}`}
                    >
                        Dashboard
                    </Sidebar.Item>
                    <Sidebar.Collapse
                        icon={HiShoppingBag}
                        label="E-commerce"
                        className={`hover:bg-blue-100  ${currentUrl.includes('/ecommerce') ? 'bg-blue-200' : ''}`}
                    >
                        <Sidebar.Item
                            href="/products"
                            className={currentUrl === '/products' ? 'bg-blue-200' : ''}
                        >
                            Products
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="/sales"
                            className={currentUrl === '/sales' ? 'bg-blue-200' : ''}
                        >
                            Sales
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="/refunds"
                            className={currentUrl === '/refunds' ? 'bg-blue-200' : ''}
                        >
                            Refunds
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="/shipping"
                            className={currentUrl === '/shipping' ? 'bg-blue-200' : ''}
                        >
                            Shipping
                        </Sidebar.Item>
                    </Sidebar.Collapse>
                    <Sidebar.Item
                        href="/inbox"
                        icon={HiInbox}
                        className={`hover:bg-blue-100  ${currentUrl === '/inbox' ? 'bg-blue-200' : ''}`}
                    >
                        Inbox
                    </Sidebar.Item>
                    <Sidebar.Item
                        href="/users"
                        icon={HiUser}
                        className={`hover:bg-blue-100  ${currentUrl === '/users' ? 'bg-blue-200' : ''}`}
                    >
                        Users
                    </Sidebar.Item>
                    <Sidebar.Item
                        href="/signin"
                        icon={HiArrowSmRight}
                        className={`hover:bg-blue-100  ${currentUrl === '/signin' ? 'bg-blue-200' : ''}`}
                    >
                        Sign In
                    </Sidebar.Item>
                    <Sidebar.Item
                        href="/signup"
                        icon={HiTable}
                        className={`hover:bg-blue-100  ${currentUrl === '/signup' ? 'bg-blue-200' : ''}`}
                    >
                        Sign Up
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    );
};

export default CustomSidebar;
