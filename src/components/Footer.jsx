import React from 'react';

function Footer() {
    return (
        <footer className="bg-green-600 text-white py-6  bottom-0 w-full">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* About section */}
                    <div>
                        <h2 className="text-lg font-bold mb-2">About NewsHub</h2>
                        <p className="text-sm">Stay updated with the latest news and trends from around the world with NewsHub. We strive to provide accurate and reliable news coverage to our users.</p>
                    </div>

                    {/* Quick Links section */}
                    <div>
                        <h2 className="text-lg font-bold mb-2">Quick Links</h2>
                        <ul className="text-sm">
                            <li><a href="#" className="hover:underline">Home</a></li>
                            <li><a href="#" className="hover:underline">Categories</a></li>
                            <li><a href="#" className="hover:underline">About Us</a></li>
                            <li><a href="#" className="hover:underline">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Contact section */}
                    <div>
                        <h2 className="text-lg font-bold mb-2">Contact Us</h2>
                        <p className="text-sm">Have any questions or feedback? Feel free to reach out to us:</p>
                        <p className="text-sm mt-2">Email: contact@newshub.com</p>
                    </div>

                    {/* Social media section */}
                    <div>
                        <h2 className="text-lg font-bold mb-2">Follow Us</h2>
                        <div className="flex space-x-4">
                            <a href="#" className="text-xl hover:text-blue-500"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="text-xl hover:text-blue-500"><i className="fab fa-facebook"></i></a>
                            <a href="#" className="text-xl hover:text-blue-500"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="text-xl hover:text-blue-500"><i className="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
