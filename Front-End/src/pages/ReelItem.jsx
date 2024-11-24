
// // import React, { useEffect, useRef } from 'react';
// // import { Heart, MessageCircle, Share2 } from 'lucide-react';

// // const extractVideoId = (url) => {
// //   const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:shorts\/|watch\?v=)|youtu\.be\/)([^"&?\/\s]{11})/;
// //   const match = url.match(regex);
// //   return match ? match[1] : null;
// // };

// // const ReelItem = ({ reel, isActive }) => {
// //   const iframeRef = useRef(null);
// //   const videoId = extractVideoId(reel.url);
// //   const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&controls=0&enablejsapi=1` : '';

// //   useEffect(() => {
// //     if (iframeRef.current) {
// //       const iframe = iframeRef.current;
// //       if (isActive) {
// //         iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
// //       } else {
// //         iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
// //       }
// //     }
// //   }, [isActive]);

// //   return (
// //     <div className="relative h-screen w-full flex flex-col justify-center items-center bg-green-900">
// //       {videoId ? (
// //         <iframe
// //           ref={iframeRef}
// //           className="w-full h-[80vh] max-w-4xl max-h-4xl rounded-lg shadow-lg"
// //           src={embedUrl}
// //           frameBorder="0"
// //           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
// //           allowFullScreen
// //           title={reel.title}
// //         ></iframe>
// //       ) : (
// //         <p className="text-white">Invalid URL</p>
// //       )}
// //       <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-green-900 to-transparent">
// //         <h2 className="text-white text-lg font-bold mb-2 text-center">{reel.title}</h2>
// //         <p className="text-green-100 text-sm text-center">{reel.description}</p>
// //       </div>
// //       <div className="absolute right-4 bottom-20 flex flex-col items-center space-y-4">
// //         <button className="text-white hover:text-red-500 transition-colors duration-300" aria-label="Like">
// //           <Heart size={28} />
// //         </button>
// //         <button className="text-white hover:text-blue-500 transition-colors duration-300" aria-label="Comment">
// //           <MessageCircle size={28} />
// //         </button>
// //         <button className="text-white hover:text-green-500 transition-colors duration-300" aria-label="Share">
// //           <Share2 size={28} />
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ReelItem;




// import React, { useEffect, useRef, useState } from 'react';
// import { Heart, MessageCircle, Share2 } from 'lucide-react';

// const extractVideoId = (url) => {
//   const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:shorts\/|watch\?v=)|youtu\.be\/)([^"&?\/\s]{11})/;
//   const match = url.match(regex);
//   return match ? match[1] : null;
// };

// const ReelItem = ({ reel, isActive }) => {
//   const iframeRef = useRef(null);
//   const videoId = extractVideoId(reel.url);
//   const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&controls=0&enablejsapi=1` : '';

//   const [liked, setLiked] = useState(false);
//   const [likesCount, setLikesCount] = useState(0);

//   useEffect(() => {
//     if (iframeRef.current) {
//       const iframe = iframeRef.current;
//       if (isActive) {
//         iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
//       } else {
//         iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
//       }
//     }
//   }, [isActive]);

//   const handleLike = () => {
//     setLiked((prevLiked) => !prevLiked);
//     setLikesCount((prevCount) => (liked ? prevCount - 1 : prevCount + 1));
//   };

//   const handleComment = () => {
//     // Implement your comment logic here
//     alert('Comment button clicked!');
//   };

//   const handleShare = () => {
//     navigator.clipboard.writeText(reel.url).then(() => {
//       alert('Video URL copied to clipboard!');
//     });
//   };

//   return (
//     <div className="relative h-screen w-full flex flex-col justify-center items-center bg-green-900">
//       {videoId ? (
//         <iframe
//           ref={iframeRef}
//           className="w-full h-[80vh] max-w-4xl max-h-4xl rounded-lg shadow-lg"
//           src={embedUrl}
//           frameBorder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowFullScreen
//           title={reel.title}
//         ></iframe>
//       ) : (
//         <p className="text-white">Invalid URL</p>
//       )}
//       <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-green-900 to-transparent">
//         <h2 className="text-white text-lg font-bold mb-2 text-center">{reel.title}</h2>
//         <p className="text-green-100 text-sm text-center">{reel.description}</p>
//       </div>
//       <div className="absolute right-4 bottom-20 flex flex-col items-center space-y-4">
//         <button
//           onClick={handleLike}
//           className={`text-white hover:text-red-500 transition-colors duration-300 ${liked ? 'text-red-500' : ''}`}
//           aria-label="Like"
//         >
//           <Heart size={28} />
//           <span className="text-sm">{likesCount}</span>
//         </button>
//         <button
//           onClick={handleComment}
//           className="text-white hover:text-blue-500 transition-colors duration-300"
//           aria-label="Comment"
//         >
//           <MessageCircle size={28} />
//         </button>
//         <button
//           onClick={handleShare}
//           className="text-white hover:text-green-500 transition-colors duration-300"
//           aria-label="Share"
//         >
//           <Share2 size={28} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ReelItem;



import React, { useEffect, useRef, useState } from 'react';
import { Heart, MessageCircle, Share2 } from 'lucide-react';
import Swal from 'sweetalert2'; // Import SweetAlert2

const extractVideoId = (url) => {
  const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:shorts\/|watch\?v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
};

const ReelItem = ({ reel, isActive }) => {
  const iframeRef = useRef(null);
  const videoId = extractVideoId(reel.url);
  const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&controls=0&enablejsapi=1` : '';

  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  useEffect(() => {
    if (iframeRef.current) {
      const iframe = iframeRef.current;
      if (isActive) {
        iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
      } else {
        iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
      }
    }
  }, [isActive]);

  const handleLike = () => {
    setLiked((prevLiked) => !prevLiked);
    setLikesCount((prevCount) => (liked ? prevCount - 1 : prevCount + 1));
  };

  const handleComment = () => {
    // Implement your comment logic here
    alert('Comment button clicked!');
  };

  // const handleShare = () => {
  //   navigator.clipboard.writeText(reel.url).then(() => {
  //     Swal.fire({
  //       title: 'Shared!',
  //       text: 'The video URL has been copied to the clipboard.',
  //       icon: 'success',
  //       confirmButtonText: 'OK',
  //       confirmButtonColor: '#4CAF50',
  //       timer: 4000,
  //     });
  //   });
  // };

  const handleShare = () => {
    Swal.fire({
      title: 'Share this Video!',
      html: `
        <div style="display: flex; align-items: center; justify-content: center; gap: 10px;">
          <input id="swal-input-url" type="text" value="${reel.url}" readonly style="width: 100%; padding: 5px; border: 1px solid #ccc; border-radius: 4px;"/>
          <button id="swal-copy-btn" style="background-color: #4CAF50; color: white; border: none; padding: 6px; border-radius: 4px; cursor: pointer;">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" style="width: 20px; height: 20px;">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8 9l4-4m0 0l4 4m-4-4v12M3 9v11a2 2 0 002 2h14a2 2 0 002-2V9" />
            </svg>
          </button>
        </div>
      `,
      icon: 'info',
      showConfirmButton: false,
      timer: 4000,
      didOpen: () => {
        const copyBtn = document.getElementById('swal-copy-btn');
        const inputUrl = document.getElementById('swal-input-url');
  
        copyBtn.addEventListener('click', () => {
          navigator.clipboard.writeText(inputUrl.value).then(() => {
            Swal.fire({
              title: 'Copied!',
              text: 'The URL has been copied to the clipboard.',
              icon: 'success',
              confirmButtonText: 'OK',
              confirmButtonColor: '#4CAF50',
              timer: 2000,
            });
          });
        });
      },
    });
  };
  

  return (
    <div className="relative h-screen w-full flex flex-col justify-center items-center bg-gray">
      {videoId ? (
        <iframe
          ref={iframeRef}
          className="w-full h-[80vh] max-w-4xl max-h-4xl rounded-lg shadow-lg"
          src={embedUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={reel.title}
        ></iframe>
      ) : (
        <p className="text-white">Invalid URL</p>
      )}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-green-900 to-transparent">
        <h2 className=" text-2xl font-bold mb-6 text-center text-green">{reel.title}</h2>
        <p className="text-green text-sm text-center">{reel.description}</p>
      </div>
      <div className="absolute right-4 bottom-20 flex flex-col items-center space-y-4 ">
        <button
          onClick={handleLike}
          className={`transition-colors duration-300 ${liked ? 'text-red-500' : 'text-black'}`}
          aria-label="Like"
        >
          <Heart size={28} fill={liked ? 'red' : 'none'} />
          <span className="text-sm">{likesCount}</span>
        </button>
        {/* <button
          onClick={handleComment}
          className="text-white hover:text-blue-500 transition-colors duration-300"
          aria-label="Comment"
        >
          <MessageCircle size={28} />
        </button> */}
        <button
          onClick={handleShare}
          className="text-black hover:text-green-500 transition-colors duration-300"
          aria-label="Share"
        >
          <Share2 size={28} />
        </button>
      </div>
    </div>
  );
};

export default ReelItem;
