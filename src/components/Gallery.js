



import React, { useState } from 'react';
import '../components/assets/Gallery.css';

const Gallery = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const photos = [
    // Sample data with `eventType` and `date` properties
    { src: 'sports_day.jpg', alt: 'Sports Day', description: 'Sports Day event.', eventType: 'Sports', date: '2024-05-12' },
    { src: 'science_exhibition.jpg', alt: 'Science Exhibition', description: 'Science Exhibition event.', eventType: 'Exhibition', date: '2024-06-15' },
    { src: 'cultural_fest.jpg', alt: 'Cultural Fest', description: 'Cultural Fest event.', eventType: 'Cultural', date: '2024-07-20' },
    { src: 'classroom.jpg', alt: 'Classroom', description: 'Classroom activity.', eventType: 'Infrastructure', date: '2024-02-18' },
    { src: 'library.jpg', alt: 'Library', description: 'Library scene.', eventType: 'Infrastructure', date: '2024-03-10' },
  ];

  const videos = [
    // Sample data with `eventType` and `date` properties
    { src: 'school_tour.mp4', title: 'School Tour', description: 'Virtual tour of the school.', eventType: 'Tour', date: '2024-01-15' },
    { src: 'annual_function.mp4', title: 'Annual Function', description: 'Highlights from the Annual Function.', eventType: 'Cultural', date: '2024-07-01' },
  ];

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const isWithinDateRange = (date) => {
    if (!startDate && !endDate) return true;
    const eventDate = new Date(date);
    const start = startDate ? new Date(startDate) : new Date('1900-01-01');
    const end = endDate ? new Date(endDate) : new Date();
    return eventDate >= start && eventDate <= end;
  };

  const filteredPhotos = photos.filter(photo => 
    (selectedFilter === 'All' || photo.eventType === selectedFilter) && isWithinDateRange(photo.date)
  );

  const filteredVideos = videos.filter(video => 
    (selectedFilter === 'All' || video.eventType === selectedFilter) && isWithinDateRange(video.date)
  );

  return (
    <div className="photos-videos-container">
      <h1>Gallery</h1>

      <div className="filter-container">
        <label htmlFor="filter">Filter by event type: </label>
        <select id="filter" value={selectedFilter} onChange={handleFilterChange}>
          <option value="All">All</option>
          <option value="Sports">Sports</option>
          <option value="Exhibition">Exhibition</option>
          <option value="Cultural">Cultural</option>
          <option value="Infrastructure">Infrastructure</option>
          <option value="Tour">Tour</option>
        </select>

        <label htmlFor="start-date">Start Date: </label>
        <input type="date" id="start-date" value={startDate} onChange={handleStartDateChange} />

        <label htmlFor="end-date">End Date: </label>
        <input type="date" id="end-date" value={endDate} onChange={handleEndDateChange} />
      </div>

      <section className="photos">
        <h2>Photos</h2>
        <div className="gallery">
          {filteredPhotos.map((photo, index) => (
            <div key={index} className="photo-item">
              <img src={photo.src} alt={photo.alt} />
              <p>{photo.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="videos">
        <h2>Videos</h2>
        <div className="video-gallery">
          {filteredVideos.map((video, index) => (
            <div key={index} className="video-item">
              <video controls width="100%">
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p>{video.title}</p>
              <p>{video.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
