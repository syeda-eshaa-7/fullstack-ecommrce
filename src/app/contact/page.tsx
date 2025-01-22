// // // 'use client';
// // // import React from 'react';
// // // import { RiMapPinFill } from "react-icons/ri";

// // // const ContactSection = () => {
// // //   return (
// // //     <section className="bg-white dark:bg-gray-900 relative">
// // //       {/* Left positioned div */}
// // //       <div
// // //         className="absolute"
// // //         style={{
// // //           width: '393px',
// // //           height: '537px',
// // //           top: '492px',
// // //           left: '431px',
// // //           gap: '0px',
// // //           opacity: '0',
// // //         }}
// // //       >
// // //         {/* Add any content inside this div as needed */}
// // //         <div className="bg-gray-300 w-full h-full">

// // //           <p className="text-center text-white">Left Positioned Div</p>
// // //           <RiMapPinFill />
// // //           <h1 className='font-bold text'>Address</h1>
// // //         </div>
// // //       </div>

// // //       <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
// // //         <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
// // //           Contact Us
// // //         </h2>
// // //         <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
// // //           Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.
// // //         </p>
// // //         <form action="#" className="space-y-8">
// // //           <div>
// // //             <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
// // //               Your email
// // //             </label>
// // //             <input
// // //               type="email"
// // //               id="email"
// // //               className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
// // //               placeholder="name@flowbite.com"
// // //               required
// // //             />
// // //           </div>
// // //           <div>
// // //             <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
// // //               Subject
// // //             </label>
// // //             <input
// // //               type="text"
// // //               id="subject"
// // //               className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
// // //               placeholder="Let us know how we can help you"
// // //               required
// // //             />
// // //           </div>
// // //           <div className="sm:col-span-2">
// // //             <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
// // //               Your message
// // //             </label>
// // //             <textarea
// // //               id="message"
// // //               rows={6}
// // //               className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
// // //               placeholder="Leave a comment..."
// // //             />
// // //           </div>
// // //           <button
// // //             type="submit"
// // //             className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
// // //           >
// // //             Send message
// // //           </button>
// // //         </form>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default ContactSection;

// // 'use client'
// // import React from 'react';

// // const Contact = () => {
// //   return (
// //     <div className="container mx-auto mt-24 px-6 max-w-[1280px]">
// //       <div className="flex flex-col items-center mb-12">
// //         <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>
// //         <p className="text-lg text-gray-600 text-center max-w-2xl">
// //           Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
// //         </p>
// //       </div>

// //       <div className="max-w-3xl mx-auto">
// //         <form className="space-y-6">
// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //             <div>
// //               <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
// //                 First Name
// //               </label>
// //               <input
// //                 type="text"
// //                 id="firstName"
// //                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
// //                 placeholder="Enter your first name"
// //               />
// //             </div>
// //             <div>
// //               <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
// //                 Last Name
// //               </label>
// //               <input
// //                 type="text"
// //                 id="lastName"
// //                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
// //                 placeholder="Enter your last name"
// //               />
// //             </div>
// //           </div>

// //           <div>
// //             <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
// //               Email Address
// //             </label>
// //             <input
// //               type="email"
// //               id="email"
// //               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
// //               placeholder="Enter your email"
// //             />
// //           </div>

// //           <div>
// //             <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
// //               Message
// //             </label>
// //             <textarea
// //               id="message"
// //               rows={6}
// //               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
// //               placeholder="Enter your message"
// //             ></textarea>
// //           </div>

// //           <button
// //             type="submit"
// //             className="w-full bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 transition duration-300"
// //           >
// //             Send Message
// //           </button>
// //         </form>

// //         <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
// //           <div className="text-center">
// //             <h3 className="text-lg font-semibold mb-2">Email</h3>
// //             <p className="text-gray-600">contact@example.com</p>
// //           </div>
// //           <div className="text-center">
// //             <h3 className="text-lg font-semibold mb-2">Phone</h3>
// //             <p className="text-gray-600">+1 (555) 123-4567</p>
// //           </div>
// //           <div className="text-center">
// //             <h3 className="text-lg font-semibold mb-2">Address</h3>
// //             <p className="text-gray-600">123 Business Street, Suite 100<br />New York, NY 10001</p>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Contact;

// // 'use client'
// // import React from 'react';

// // const Contact = () => {
// //   return (
// //     <div className="container mx-auto mt-16 sm:mt-24 px-4 sm:px-6 max-w-[1280px]">
// //       <div className="flex flex-col items-center mb-8 sm:mb-12">
// //         <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-8 text-center">
// //           Contact Us
// //         </h1>
// //         <p className="text-base sm:text-lg text-gray-600 text-center max-w-2xl px-4">
// //           Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
// //         </p>
// //       </div>

// //       <div className="max-w-3xl mx-auto">
// //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
// //           {/* Form Section */}
// //           <form className="space-y-4 sm:space-y-6">
// //             {/* Name Fields */}
// //             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //               <div>
// //                 <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
// //                   First Name
// //                 </label>
// //                 <input
// //                   type="text"
// //                   id="firstName"
// //                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent shadow-sm"
// //                   placeholder="Enter your first name"
// //                 />
// //               </div>
// //               <div>
// //                 <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
// //                   Last Name
// //                 </label>
// //                 <input
// //                   type="text"
// //                   id="lastName"
// //                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent shadow-sm"
// //                   placeholder="Enter your last name"
// //                 />
// //               </div>
// //             </div>

// //             {/* Email Field */}
// //             <div>
// //               <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
// //                 Email Address
// //               </label>
// //               <input
// //                 type="email"
// //                 id="email"
// //                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent shadow-sm"
// //                 placeholder="Enter your email"
// //               />
// //             </div>

// //             {/* Message Field */}
// //             <div>
// //               <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
// //                 Message
// //               </label>
// //               <textarea
// //                 id="message"
// //                 rows={6}
// //                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent shadow-sm resize-none"
// //                 placeholder="Enter your message"
// //               ></textarea>
// //             </div>

// //             {/* Submit Button */}
// //             <button
// //               type="submit"
// //               className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition duration-300 text-sm font-medium shadow-sm"
// //             >
// //               Send Message
// //             </button>
// //           </form>

// //           {/* Contact Information Section */}
// //           <div className="space-y-6 lg:pl-8">
// //             {/* Email Info */}
// //             <div className="p-6 bg-gray-50 rounded-lg">
// //               <h3 className="text-lg font-semibold mb-2">Email</h3>
// //               <p className="text-gray-600">contact@example.com</p>
// //             </div>

// //             {/* Phone Info */}
// //             <div className="p-6 bg-gray-50 rounded-lg">
// //               <h3 className="text-lg font-semibold mb-2">Phone</h3>
// //               <p className="text-gray-600">+1 (555) 123-4567</p>
// //             </div>

// //             {/* Address Info */}
// //             <div className="p-6 bg-gray-50 rounded-lg">
// //               <h3 className="text-lg font-semibold mb-2">Address</h3>
// //               <p className="text-gray-600">
// //                 123 Business Street, Suite 100<br />
// //                 New York, NY 10001
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Contact;

// 'use client'
// import React from 'react';

// const Contact = () => {
//   return (
//     <div className="container mx-auto mt-16 sm:mt-24 px-4 sm:px-6 max-w-[1280px]">
//       <div className="flex flex-col items-center mb-8 sm:mb-12">
//         <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-8 text-center">
//           Contact Us
//         </h1>
//         <p className="text-base sm:text-lg text-gray-600 text-center max-w-2xl px-4">
//           Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
//         </p>
//       </div>

//       <div className="max-w-3xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* Contact Information Section - Now on the left */}
//           <div className="space-y-6 lg:pr-8">
//             {/* Email Info */}
//             <div className="p-6 bg-gray-50 rounded-lg">
//               <h3 className="text-lg font-semibold mb-2">Email</h3>
//               <p className="text-gray-600">contact@example.com</p>
//             </div>

//             {/* Phone Info */}
//             <div className="p-6 bg-gray-50 rounded-lg">
//               <h3 className="text-lg font-semibold mb-2">Phone</h3>
//               <p className="text-gray-600">+1 (555) 123-4567</p>
//             </div>

//             {/* Address Info */}
//             <div className="p-6 bg-gray-50 rounded-lg">
//               <h3 className="text-lg font-semibold mb-2">Address</h3>
//               <p className="text-gray-600">
//                 123 Business Street, Suite 100<br />
//                 New York, NY 10001
//               </p>
//             </div>
//           </div>

//           {/* Form Section - Now on the right */}
//           <form className="space-y-4 sm:space-y-6">
//             {/* Name Fields */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <div>
//                 <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
//                   First Name
//                 </label>
//                 <input
//                   type="text"
//                   id="firstName"
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent shadow-sm"
//                   placeholder="Enter your first name"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
//                   Last Name
//                 </label>
//                 <input
//                   type="text"
//                   id="lastName"
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent shadow-sm"
//                   placeholder="Enter your last name"
//                 />
//               </div>
//             </div>

//             {/* Email Field */}
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent shadow-sm"
//                 placeholder="Enter your email"
//               />
//             </div>

//             {/* Message Field */}
//             <div>
//               <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 rows={6}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent shadow-sm resize-none"
//                 placeholder="Enter your message"
//               ></textarea>
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition duration-300 text-sm font-medium shadow-sm"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
// import React from "react";
// import { Poppins } from "next/font/google";
// import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
// import { GoClockFill } from "react-icons/go";
// import ProductCard from '@/app/components/ProductsCard'

// const poppins = Poppins({ subsets: ["latin"], weight: ["500", "600"] });

// const Page = () => {
//   return (
//     <div className="max-w-screen-xl mx-auto mt-24 px-4 sm:px-6">
//       {/* Heading */}
//       <h1 className="font-semibold text-4xl text-center sm:text-3xl">
//         Get In Touch With Us
//       </h1>

//       {/* Description */}
//       <p className="text-[16px] text-[#9F9F9F] font-normal text-center mt-[30px] sm:w-full sm:text-sm">
//         For More Information About Our Product & Services. Please Feel Free To
//         Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
//         Hesitate!
//       </p>

//       {/* Grid Layout */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-[60px]">
//         {/* Left Section: Contact Info */}
//         <div className="flex flex-col space-y-8 px-6 sm:px-10">
//           {/* Address */}
//           <div className="flex items-start space-x-4">
//             <FaMapMarkerAlt className="text-black h-[27.59px] mt-1" />
//             <div>
//               <h2
//                 className={`${poppins.className} text-[20px] sm:text-[24px] font-medium`}
//               >
//                 Address
//               </h2>
//               <p className="text-black font-normal text-[14px] sm:text-[16px]">
//                 236 5th SE Avenue, New York NY10000, United States
//               </p>
//             </div>
//           </div>

//           {/* Phone */}
//           <div className="flex items-start space-x-4">
//             <FaPhone className="text-black h-[27.59px] mt-1" />
//             <div>
//               <h2
//                 className={`${poppins.className} text-[20px] sm:text-[24px] font-medium`}
//               >
//                 Phone
//               </h2>
//               <p className="text-black font-normal text-[14px] sm:text-[16px]">
//                 Mobile: +(84) 546-6789 <br /> Hotline: +(84) 456-6789
//               </p>
//             </div>
//           </div>

//           {/* Working Time */}
//           <div className="flex items-start space-x-4">
//             <GoClockFill className="text-black h-[27.59px] mt-1" />
//             <div>
//               <h2
//                 className={`${poppins.className} text-[20px] sm:text-[24px] font-medium`}
//               >
//                 Working Time
//               </h2>
//               <p className="text-black font-normal text-[14px] sm:text-[16px]">
//                 Monday-Friday: 9:00 - 22:00 <br />
//                 Saturday-Sunday: 9:00 - 21:00
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Right Section: Contact Form */}
//         <div className="bg-white p-8 w-full sm:w-[635px]">
//           <form action="#" method="POST">
//             {/* Name */}
//             <div className="mb-4">
//               <label
//                 htmlFor="name"
//                 className={`${poppins.className} text-[16px] sm:text-[18px] font-medium`}
//               >
//                 Your name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 placeholder="Abc"
//                 className="w-full sm:w-[528.75px] h-[75px] p-6 border border-[#9F9F9F] rounded-[10px] mt-5"
//                 required
//               />
//             </div>

//             {/* Email */}
//             <div className="mb-4 mt-8">
//               <label
//                 htmlFor="email"
//                 className={`${poppins.className} text-[16px] sm:text-[18px] font-medium`}
//               >
//                 Email address
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 placeholder="Abc@def.com"
//                 className="w-full sm:w-[528.75px] h-[75px] p-6 border border-[#9F9F9F] rounded-[10px] mt-5"
//                 required
//               />
//             </div>

//             {/* Subject */}
//             <div className="mb-4 mt-8">
//               <label
//                 htmlFor="subject"
//                 className={`${poppins.className} text-[16px] sm:text-[18px] font-medium`}
//               >
//                 Subject
//               </label>
//               <input
//                 type="text"
//                 id="subject"
//                 name="subject"
//                 placeholder="This is an optional"
//                 className="w-full sm:w-[528.75px] h-[75px] p-6 border border-[#9F9F9F] rounded-[10px] mt-5"
//               />
//             </div>

//             {/* Message */}
//             <div className="mb-8 mt-8">
//               <label
//                 htmlFor="message"
//                 className={`${poppins.className} text-[16px] sm:text-[18px] font-medium`}
//               >
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 placeholder="Hi! I’d like to ask about"
//                 className="w-full sm:w-[527px] h-[120px] p-6 border border-[#9F9F9F] rounded-[10px] mt-5"
//                 rows={4}
//                 required
//               ></textarea>
//             </div>

//             {/* Submit Button */}
//             <div>
//               <button
//                 type="submit"
//                 className="w-full sm:w-[237px] h-[55px] bg-[#029FAE] border border-[#B88E2F] rounded-[5px] text-white py-3"
//               >
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>

//       {/* Contact Section */}
//       <ProductCard />
//     </div>
//   );
// };

// export default Page;
// import React from "react";
// import { Poppins } from "next/font/google";
// import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
// import { GoClockFill } from "react-icons/go";
// import ProductCard from '@/app/components/ProductsCard';

// interface ProductCardProps {
//   src: string;
//   alt: string;
//   title: string;
//   price: string;
// }


// const poppins = Poppins({ subsets: ["latin"], weight: ["500", "600"] });

// const productData = [
//   {
//     src: '/chiar1.png',
//     alt: 'Shooting Stars',
//     title: 'Shooting Stars',
//     price: '$99.99',
//   },
//   {
//     src: '/chiar2.png',
//     alt: 'The Catalyzer',
//     title: 'The Catalyzer',
//     price: '$199.99',
//   },
//   {
//     src: '/chiar3.png',
//     alt: 'Comfortable Chair',
//     title: 'Comfortable Chair',
//     price: '$149.99',
//   },
// ];


// const Page: React.FC<ProductCardProps> = ({ src, alt, title, price })  => {
//   // Sample product data for ProductCard
  
//   return (
//     <div className="max-w-screen-xl mx-auto mt-24 px-4 sm:px-6">
//       {/* Heading */}
//       <h1 className="font-semibold text-4xl text-center sm:text-3xl">
//         Get In Touch With Us
//       </h1>

//       {/* Description */}
//       <p className="text-[16px] text-[#9F9F9F] font-normal text-center mt-[30px] sm:w-full sm:text-sm">
//         For More Information About Our Product & Services. Please Feel Free To
//         Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
//         Hesitate!
//       </p>

//       {/* Grid Layout */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-[60px]">
//         {/* Left Section: Contact Info */}
//         <div className="flex flex-col space-y-8 px-6 sm:px-10">
//           {/* Address */}
//           <div className="flex items-start space-x-4">
//             <FaMapMarkerAlt className="text-black h-[27.59px] mt-1" />
//             <div>
//               <h2
//                 className={`${poppins.className} text-[20px] sm:text-[24px] font-medium`}
//               >
//                 Address
//               </h2>
//               <p className="text-black font-normal text-[14px] sm:text-[16px]">
//                 236 5th SE Avenue, New York NY10000, United States
//               </p>
//             </div>
//           </div>

//           {/* Phone */}
//           <div className="flex items-start space-x-4">
//             <FaPhone className="text-black h-[27.59px] mt-1" />
//             <div>
//               <h2
//                 className={`${poppins.className} text-[20px] sm:text-[24px] font-medium`}
//               >
//                 Phone
//               </h2>
//               <p className="text-black font-normal text-[14px] sm:text-[16px]">
//                 Mobile: +(84) 546-6789 <br /> Hotline: +(84) 456-6789
//               </p>
//             </div>
//           </div>

//           {/* Working Time */}
//           <div className="flex items-start space-x-4">
//             <GoClockFill className="text-black h-[27.59px] mt-1" />
//             <div>
//               <h2
//                 className={`${poppins.className} text-[20px] sm:text-[24px] font-medium`}
//               >
//                 Working Time
//               </h2>
//               <p className="text-black font-normal text-[14px] sm:text-[16px]">
//                 Monday-Friday: 9:00 - 22:00 <br />
//                 Saturday-Sunday: 9:00 - 21:00
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Right Section: Contact Form */}
//         <div className="bg-white p-8 w-full sm:w-[635px]">
//           <form action="#" method="POST">
//             {/* Name */}
//             <div className="mb-4">
//               <label
//                 htmlFor="name"
//                 className={`${poppins.className} text-[16px] sm:text-[18px] font-medium`}
//               >
//                 Your name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 placeholder="Abc"
//                 className="w-full sm:w-[528.75px] h-[75px] p-6 border border-[#9F9F9F] rounded-[10px] mt-5"
//                 required
//               />
//             </div>

//             {/* Email */}
//             <div className="mb-4 mt-8">
//               <label
//                 htmlFor="email"
//                 className={`${poppins.className} text-[16px] sm:text-[18px] font-medium`}
//               >
//                 Email address
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 placeholder="Abc@def.com"
//                 className="w-full sm:w-[528.75px] h-[75px] p-6 border border-[#9F9F9F] rounded-[10px] mt-5"
//                 required
//               />
//             </div>

//             {/* Subject */}
//             <div className="mb-4 mt-8">
//               <label
//                 htmlFor="subject"
//                 className={`${poppins.className} text-[16px] sm:text-[18px] font-medium`}
//               >
//                 Subject
//               </label>
//               <input
//                 type="text"
//                 id="subject"
//                 name="subject"
//                 placeholder="This is an optional"
//                 className="w-full sm:w-[528.75px] h-[75px] p-6 border border-[#9F9F9F] rounded-[10px] mt-5"
//               />
//             </div>

//             {/* Message */}
//             <div className="mb-8 mt-8">
//               <label
//                 htmlFor="message"
//                 className={`${poppins.className} text-[16px] sm:text-[18px] font-medium`}
//               >
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 placeholder="Hi! I’d like to ask about"
//                 className="w-full sm:w-[527px] h-[120px] p-6 border border-[#9F9F9F] rounded-[10px] mt-5"
//                 rows={4}
//                 required
//               ></textarea>
//             </div>

//             {/* Submit Button */}
//             <div>
//               <button
//                 type="submit"
//                 className="w-full sm:w-[237px] h-[55px] bg-[#029FAE] border border-[#B88E2F] rounded-[5px] text-white py-3"
//               >
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>

//       {/* Contact Section */}
//       <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 ">
//         {/* Loop through the product data and pass props to ProductCard */}
//         {productData.map((product, index) => (
//           <ProductCard
//             key={index}
//             src={product.src}
//             alt={product.alt}
//             title={product.title}
//             price={product.price}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Page;


import React from "react";
import { Poppins } from "next/font/google";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { GoClockFill } from "react-icons/go";
import ProductCard from '@/app/components/ProductsCard';
import Featured from "../components/Featured";

const poppins = Poppins({ subsets: ["latin"], weight: ["500", "600"] });

const Page: React.FC = () => {
  // Sample product data for ProductCard
  const productData = [
    {
      src: '/chiar1.png',
      alt: 'Shooting Stars',
      title: 'Shooting Stars',
      price: '$99.99',
    },
    {
      src: '/chiar2.png',
      alt: 'The Catalyzer',
      title: 'The Catalyzer',
      price: '$199.99',
    },
    {
      src: '/chiar3.png',
      alt: 'Comfortable Chair',
      title: 'Comfortable Chair',
      price: '$149.99',
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto mt-24 px-4 sm:px-6">
      {/* Heading */}
      <h1 className="font-semibold text-4xl text-center sm:text-3xl">
        Get In Touch With Us
      </h1>

      {/* Description */}
      <p className="text-[16px] text-[#9F9F9F] font-normal text-center mt-[30px] sm:w-full sm:text-sm">
        For More Information About Our Product & Services. Please Feel Free To
        Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
        Hesitate!
      </p>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-[60px]">
        {/* Left Section: Contact Info */}
        <div className="flex flex-col space-y-8 px-6 sm:px-10">
          {/* Address */}
          <div className="flex items-start space-x-4">
            <FaMapMarkerAlt className="text-black h-[27.59px] mt-1" />
            <div>
              <h2
                className={`${poppins.className} text-[20px] sm:text-[24px] font-medium`}
              >
                Address
              </h2>
              <p className="text-black font-normal text-[14px] sm:text-[16px]">
                236 5th SE Avenue, New York NY10000, United States
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start space-x-4">
            <FaPhone className="text-black h-[27.59px] mt-1" />
            <div>
              <h2
                className={`${poppins.className} text-[20px] sm:text-[24px] font-medium`}
              >
                Phone
              </h2>
              <p className="text-black font-normal text-[14px] sm:text-[16px]">
                Mobile: +(84) 546-6789 <br /> Hotline: +(84) 456-6789
              </p>
            </div>
          </div>

          {/* Working Time */}
          <div className="flex items-start space-x-4">
            <GoClockFill className="text-black h-[27.59px] mt-1" />
            <div>
              <h2
                className={`${poppins.className} text-[20px] sm:text-[24px] font-medium`}
              >
                Working Time
              </h2>
              <p className="text-black font-normal text-[14px] sm:text-[16px]">
                Monday-Friday: 9:00 - 22:00 <br />
                Saturday-Sunday: 9:00 - 21:00
              </p>
            </div>
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <div className="bg-white p-8 w-full sm:w-[635px]">
          <form action="#" method="POST">
            {/* Name */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className={`${poppins.className} text-[16px] sm:text-[18px] font-medium`}
              >
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Abc"
                className="w-full sm:w-[528.75px] h-[75px] p-6 border border-[#9F9F9F] rounded-[10px] mt-5"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-4 mt-8">
              <label
                htmlFor="email"
                className={`${poppins.className} text-[16px] sm:text-[18px] font-medium`}
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Abc@def.com"
                className="w-full sm:w-[528.75px] h-[75px] p-6 border border-[#9F9F9F] rounded-[10px] mt-5"
                required
              />
            </div>

            {/* Message */}
            <div className="mb-8 mt-8">
              <label
                htmlFor="message"
                className={`${poppins.className} text-[16px] sm:text-[18px] font-medium`}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Hi! I’d like to ask about"
                className="w-full sm:w-[527px] h-[120px] p-6 border border-[#9F9F9F] rounded-[10px] mt-5"
                rows={4}
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full sm:w-[237px] h-[55px] bg-[#029FAE] border border-[#B88E2F] rounded-[5px] text-white py-3"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Contact Section */}
      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 ">
        {/* Loop through the product data and pass props to ProductCard */}
        <Featured/>
      </div>
    </div>
  );
};

export default Page;
