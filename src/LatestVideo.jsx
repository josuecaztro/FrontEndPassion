// import React, { useState, useEffect } from 'react';

// const LatestVideo = () => {
//   const [videoId, setVideoId] = useState('');
//   const apiKey = 'AIzaSyDMT-FtnRh6BjO_1uoTjR61JtJVjFXzU5g'; // Replace with your API key
//   const channelId = 'jNNmIAZkh8M-uOd3BjMgBA'; // Replace with your channel ID

//   useEffect(() => {
//     const fetchLatestVideo = async () => {
//       try {
//         const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&order=date&part=snippet&type=video&eventType=live&maxResults=1`);
//         const data = await response.json();
//         setVideoId(data.items[0].id.videoId);
//       } catch (error) {
//         console.error('Error fetching video:', error);
//       }
//     };

//     fetchLatestVideo();
//   }, [apiKey, channelId]);

//   return (
//     <div className="video-container">
//       {videoId && (
//         <iframe
//           width="560"
//           height="315"
//           src={`https://www.youtube.com/embed/${videoId}`}
//           title="YouTube video player"
//           frameBorder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowFullScreen
//         ></iframe>
//       )}
//     </div>
//   );
// };

// export default LatestVideo;
