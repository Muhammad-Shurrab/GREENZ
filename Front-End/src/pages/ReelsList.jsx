

// import React, { useEffect, useState, useRef } from 'react';
// import axios from 'axios';
// import ReelItem from './ReelItem';
// import NavBar from '../components/NavBar/NavBar';

// const ReelsList = () => {
//   const [reels, setReels] = useState([]);
//   const [currentReelIndex, setCurrentReelIndex] = useState(0);
//   const reelsContainerRef = useRef(null);

//   useEffect(() => {
//     const fetchReels = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/reels');
//         setReels(response.data);
//       } catch (error) {
//         console.error('Error fetching reels:', error);
//       }
//     };
//     fetchReels();
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (reelsContainerRef.current) {
//         const container = reelsContainerRef.current;
//         const scrollPosition = container.scrollTop;
//         const reelHeight = container.clientHeight;
//         const newIndex = Math.round(scrollPosition / reelHeight);
//         setCurrentReelIndex(newIndex);
//       }
//     };

//     const container = reelsContainerRef.current;
//     if (container) {
//       container.addEventListener('scroll', handleScroll);
//     }

//     return () => {
//       if (container) {
//         container.removeEventListener('scroll', handleScroll);
//       }
//     };
//   }, []);

//   return (
//     <div className="flex flex-col h-screen">
//       <NavBar />
//       <div 
//         ref={reelsContainerRef}
//         className="flex-1 overflow-y-scroll snap-y snap-mandatory mt-16" // Adjust margin to fit the NavBar height
//       >
//         {reels.length ? (
//           reels.map((reel, index) => (
//             <div key={reel._id} className="h-screen snap-start">
//               <ReelItem reel={reel} isActive={index === currentReelIndex} />
//             </div>
//           ))
//         ) : (
//           <p className="text-white text-center mt-4">Loading...</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ReelsList;


import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import ReelItem from './ReelItem';
import NavBar from '../components/NavBar/NavBar';
import { Search } from 'lucide-react';

const ReelsList = () => {
  const [reels, setReels] = useState([]);
  const [filteredReels, setFilteredReels] = useState([]);
  const [currentReelIndex, setCurrentReelIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const reelsContainerRef = useRef(null);

  useEffect(() => {
    const fetchReels = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/reels');
        setReels(response.data);
        setFilteredReels(response.data);
      } catch (error) {
        console.error('Error fetching reels:', error);
      }
    };
    fetchReels();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (reelsContainerRef.current) {
        const container = reelsContainerRef.current;
        const scrollPosition = container.scrollTop;
        const reelHeight = container.clientHeight;
        const newIndex = Math.round(scrollPosition / reelHeight);
        setCurrentReelIndex(newIndex);
      }
    };

    const container = reelsContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    const filtered = reels.filter(reel =>
      reel.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reel.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredReels(filtered);
  }, [searchTerm, reels]);

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <NavBar />
      <div
        ref={reelsContainerRef}
        className="flex-1 overflow-y-scroll snap-y snap-mandatory mt-8"
      >
        {filteredReels.length ? (
          filteredReels.map((reel, index) => (
            <div key={reel._id} className="h-screen snap-start">
              <ReelItem reel={reel} isActive={index === currentReelIndex} />
            </div>
          ))
        ) : (
          <p className="text-green-800 text-center mt-4">No reels found. Try a different search term.</p>
        )}
      </div>
    </div>
  );
};

export default ReelsList;