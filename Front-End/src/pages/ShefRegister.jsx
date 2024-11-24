// import React, { useState } from 'react';
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import { useNavigate, Link } from 'react-router-dom'; // Import Link and useNavigate from react-router-dom

// const SignUpChef = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [specialties, setSpecialties] = useState('');
//   const [experience, setExperience] = useState('');
//   const navigate = useNavigate(); // Initialize navigate

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:5000/api/auth/register', {
//         name,
//         email,
//         password,
//         specialties: specialties.split(',').map(item => item.trim()),
//         experience: parseInt(experience, 10),
//       });
//       Swal.fire({
//         title: 'Success!',
//         text: 'Sign-up successful. Redirecting to the login page.',
//         icon: 'success',
//         confirmButtonText: 'OK'
//       }).then(() => {
//         navigate('/login'); // Redirect to login page
//       });
//     } catch (error) {
//       console.error(error);
//       Swal.fire({
//         title: 'Error!',
//         text: 'Sign-up failed. Please try again.',
//         icon: 'error',
//         confirmButtonText: 'OK'
//       });
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 shadow-md rounded-md">
//       <h2 className="text-2xl font-bold text-green mb-6">Sign Up</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="name">
//             Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             placeholder="Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="password">
//             Password
//           </label>
//           <input
//             type="password"
//             id="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="specialties">
//             Specialties (comma-separated)
//           </label>
//           <input
//             type="text"
//             id="specialties"
//             placeholder="Specialties"
//             value={specialties}
//             onChange={(e) => setSpecialties(e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="experience">
//             Years of Experience
//           </label>
//           <input
//             type="number"
//             id="experience"
//             placeholder="Experience"
//             value={experience}
//             onChange={(e) => setExperience(e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green"
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-green text-white py-2 px-4 rounded-md hover:bg-green-light focus:outline-none focus:ring-2 focus:ring-green"
//         >
//           Sign Up
//         </button>
//       </form>
//       <div className="mt-4 text-center">
//         <p className="text-gray-700 text-sm">
//           Already have an account?{' '}
//           <Link to="/login" className="text-green hover:underline">
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SignUpChef;


import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate, Link } from 'react-router-dom'; // Import Link and useNavigate from react-router-dom

const SignUpChef = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [specialties, setSpecialties] = useState('');
  const [experience, setExperience] = useState('');
  const navigate = useNavigate(); // Initialize navigate

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await axios.post('http://localhost:5000/api/auth/register', {
  //       name,
  //       email,
  //       password,
  //       specialties: specialties.split(',').map(item => item.trim()),
  //       experience: parseInt(experience, 10),
  //     });
  //     Swal.fire({
  //       title: 'Success!',
  //       text: 'Sign-up successful. Redirecting to the login page.',
  //       icon: 'success',
  //       confirmButtonText: 'OK'
  //     }).then(() => {
  //       navigate('/login'); // Redirect to login page
  //     });
  //   } catch (error) {
  //     console.error(error);
  //     Swal.fire({
  //       title: 'Error!',
  //       text: 'Sign-up failed. Please try again.',
  //       icon: 'error',
  //       confirmButtonText: 'OK'
  //     });
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/register', {
        name,
        email,
        password,
        specialties: specialties.split(',').map(item => item.trim()),
        experience: parseInt(experience, 10),
      });
      Swal.fire({
        title: 'Success!',
        text: 'Sign-up successful. Redirecting to the login page.',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(() => {
        navigate('/'); // Redirect to login page
      });
    } catch (error) {
      console.error('Error registering chef:', error);
      Swal.fire({
        title: 'Error!',
        text: 'Sign-up failed. Please check the form and try again.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 shadow-md rounded-md">
      <h2 className="text-2xl font-bold text-green mb-6">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="specialties">
            Specialties (comma-separated)
          </label>
          <input
            type="text"
            id="specialties"
            placeholder="Specialties"
            value={specialties}
            onChange={(e) => setSpecialties(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="experience">
            Years of Experience
          </label>
          <input
            type="number"
            id="experience"
            placeholder="Experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green text-white py-2 px-4 rounded-md hover:bg-green-light focus:outline-none focus:ring-2 focus:ring-green"
        >
          Sign Up
        </button>
      </form>
      {/* <div className="mt-4 text-center">
        <p className="text-gray-700 text-sm">
          Already have an account?{' '}
          <Link to="/login" className="text-green hover:underline">
            Login
          </Link>
        </p>
      </div> */}
    </div>
  );
};

export default SignUpChef;
