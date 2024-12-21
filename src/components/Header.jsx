import React, { useState, useEffect } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const paths = [
        { name: 'Services', to: '/services' },
        { name: 'About us', to: '/about-us' },
        { name: 'Blogs', to: '/blogs' },
        { name: 'Case studies', to: '/casestudies' },
        { name: 'Contact Us', to: '/contact-us' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 p-4 w-full z-10 transition-all duration-300 ${
                isScrolled ? 'bg-white' : 'bg-transparent'
            }`}
        >
            <nav className="flex items-center justify-between h-full px-4">
                <img
                    src="src/assets/Bitmaplogo.png"
                    alt="logo"
                    className="w-[180px] h-auto"
                />
                <div
                    className="md:hidden cursor-pointer"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <div className="w-6 h-1 bg-white mb-1"></div>
                    <div className="w-6 h-1 bg-white mb-1"></div>
                    <div className="w-6 h-1 bg-white"></div>
                </div>
                <ul className="hidden md:flex items-center space-x-4">
                    {paths.map((path, index) => (
                        <li
                            key={index}
                            className={`p-2 min-w-max transition-all duration-300 ease-in-out rounded-full ${
                                path.to === '/contact-us'
                                    ? 'bg-[#FF6400] hover:translate-y-[-5px]'
                                    : 'hover:translate-y-[-5px]'
                            }`}
                        >
                            <a
                                href={path.to}
                                className={`${
                                    path.to === '/contact-us'
                                        ? 'text-white font-bold px-2'
                                        : 'text-black font-semibold px-2'
                                }`}
                            >
                                {path.name}
                            </a>
                        </li>
                    ))}
                </ul>
                {/* Mobile Menu */}
                {isMenuOpen && (
                    <ul className="absolute top-16 left-0 right-0 bg-white shadow-lg rounded-lg p-4 flex flex-col space-y-4 md:hidden">
                        {paths.map((path, index) => (
                            <li
                                key={index}
                                className={`p-2 min-w-max transition-all duration-300 ease-in-out rounded-full ${
                                    path.to === '/contact-us'
                                        ? 'bg-[#FF6400]'
                                        : ''
                                }`}
                            >
                                <a
                                    href={path.to}
                                    className={`${
                                        path.to === '/contact-us'
                                            ? 'text-white font-bold px-2'
                                            : 'text-black font-semibold px-2'
                                    }`}
                                >
                                    {path.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </nav>
        </header>
    );
}
