
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaPaypal, FaCcVisa, FaCcMastercard, FaCcAmex } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font border-t border-gray-300">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first border-b border-gray-300 pb-6">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <div className="flex items-center mb-7 ">
              <Image src={'/Logo Icon.png'} height={40} alt="logo" width={40} />
              <h2 className="title-font font-medium text-gray-900 text-xl ml-2">Comforty</h2>
            </div>
            <nav className="list-none mb-10">
              {['Vivamus tridtue odio sit amae vilet semper', 'edu prodsop trupic', 'Thik carss estop'].map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="text-gray-600 hover:text-[#007580]">
                    {link}
                  </a>
                </li>
              ))}
            </nav>
            <div className="inline-flex gap-4 mt-4">
              <a href="#" className="text-gray-600 hover:text-[#007580] text-xl p-2 border-2 border-transparent rounded-full hover:border-[#007580]">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#007580] text-xl p-2 border-2 border-transparent rounded-full hover:border-[#007580]">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#007580] text-xl p-2 border-2 border-transparent rounded-full hover:border-[#007580]">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#007580] text-xl p-2 border-2 border-transparent rounded-full hover:border-[#007580]">
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav className="list-none mb-10">
              {['First Link', 'Second Link', 'Third Link', 'Fourth Link'].map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="text-gray-600 hover:text-[#007580]">
                    {link}
                  </a>
                </li>
              ))}
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav className="list-none mb-10">
              {['First Link', 'Second Link', 'Third Link', 'Fourth Link'].map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="text-gray-600 hover:text-[#007580]">
                    {link}
                  </a>
                </li>
              ))}
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SUBSCRIBE</h2>
            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
              <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                <label htmlFor="footer-field" className="leading-7 text-sm text-gray-600">
                  Placeholder
                </label>
                <input
                  type="text"
                  id="footer-field"
                  name="footer-field"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-[#029FAE] border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded">
                subscribe
              </button>
            </div>

            <p className="text-gray-500 text-sm mt-2 md:text-left text-center">
              Bitters chicharrones fanny pack
              <br className="lg:block hidden" />
              waistcoat green juice
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 border-t border-gray-300">
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col justify-between">
          <div className="flex items-center">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900" href="#">
              <Image alt="card" src={'/Group 13.png'} height={27} width={27} />
            </a>
            <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
              © 2020-Blogy-Designed & Developed by <span className="font-bold">Zakisoft</span>
              <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">
                @knyttneve
              </a>
            </p>
          </div>
          <div className="flex justify-end space-x-4">
            <FaCcMastercard size={30} />
            <FaPaypal size={30} />
            <FaCcAmex size={30} />
            <FaCcVisa size={30} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
