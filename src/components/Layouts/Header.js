import { Link } from "react-router-dom"
import Logo  from "../../assets/Logo.png"

export const Header = () => {
  return (
        <nav className="bg-gray-800 p-3">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex flex-wrap items-center justify-between mx-auto max-w-screen-xl p-4 ml-1">
                    <img src={Logo} className="h-24 w-auto" alt="logo"/>
                    <span className="text-white self-center text-2xl whitespace-nowrap p-4 ">SiteLaunch Studios</span>
                </Link>
                {/* Menu */}
                <div className="flex justify-center flex-grow">
                    <ul className="flex items-center space-x-4">
                        <li>
                            <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
                        </li>
                        <li>
                            <Link to="/cart" className="text-gray-300 hover:text-white">Cart</Link>
                        </li>
                        <li>
                            <Link to="/products" className="text-gray-300 hover:text-white">Products</Link>
                        </li>
                        <li>
                            <Link to="/dashboard" className="text-gray-300 hover:text-white">Dashboard</Link>
                        </li>
                    </ul>
                </div>

                <div className="flex justify-center">
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" viewBox="0 0 24 24" 
                    strokeWidth={1} 
                    stroke="currentColor" 
                    className="size-7 text-white">
                    <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" 
                    />
                    </svg>

                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1} 
                    stroke="currentColor" 
                    className="size-7 text-white">
                    <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                    </svg>

                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" viewBox="0 0 24 24" 
                    strokeWidth={1} 
                    stroke="currentColor" 
                    className="size-7 text-white">
                    <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                    </svg>

                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1} 
                    stroke="currentColor" 
                    className="size-7 text-white">
                    <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                </div>
            </div>
        </nav>
    );
};
