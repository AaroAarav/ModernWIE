import React, { useState } from "react";
import "./Events.css";
import EventBanner from "./EventBanner"; // Import the EventBanner component


function Events() {
  const events = [
    {
      id: 2,
      title: "TechEden: A Premier Tech Symposium",
      image: "/techeden.jpg",
      date: "April 4, 2025",
      description:
        "A dynamic gathering of industry leaders and tech enthusiasts, diving into the latest trends in AI, blockchain, and cutting-edge innovations shaping tomorrow.",
    },
    {
      id: 3,
      title: "NextTech: Computing Session",
      image: "/nexttech.jpg",
      date: "April 4, 2025",
      description:
        "Discover the future of computing with quantum technologies and photonics, and explore their power to solve today's most pressing challenges.",
    },
    {
      id: 4,
      title: "FutureSync: 3D Printing and Robotics Session",
      image: "/futuresync.jpg",
      date: "April 4, 2025",
      description:
        "A hands-on workshop for 3D printing, applying creativity and problem-solving to real-world challenges.",
    },
    {
      id: 5,
      title: "DataPulse: Mock Quant Datathon",
      image: "/datapulse.jpg",
      date: "April 4/5, 2025",
      description:
        "An intense, high-energy datathon where participants analyze real-world datasets, applying quantitative methods to tackle complex challenges.",
    },
    {
      id: 6,
      title: "Binary Bloom: Web3 Development Indulgence",
      image: "/Binary Bloom.jpg",
      date: "April 5, 2025",
      description:
        "Delve into blockchain and Web3, learning to create decentralized solutions that are set to transform industries and everyday life.",
    },
    {
      id: 7,
      title: "Pandora: AR/VR Workshop for Innovators",
      image: "/pandora.jpg",
      date: "April 5, 2025",
      description:
        "Step into the immersive world of AR/VR, where participants will create and experiment with technologies reshaping industries and experiences.",
    },
    {
      id: 8,
      title: "Artemis: Mental Health Check-In",
      image: "/artemis.jpg",
      date: "April 5, 2025",
      description:
        "An empowering session dedicated to mental wellness, offering tools and strategies to manage stress, build resilience, and maintain balance in today's fast-paced world.",
    },
    {
      id: 9,
      title: "HardWired",
      image: "/hardwired.jpg",
      date: "April 5, 2025",
      description:
        "A creative competition that challenges participants to design innovative, practical projects using Arduino, pushing the boundaries of technology and hands-on development.",
    },
  ];

  const [flippedCards, setFlippedCards] = useState({});

  const handleCardFlip = (id) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  
  
  

  return (
    <section className="events-section eventss py-20 px-6 md:px-20 bg-gradient-to-b from-purple-900/80 via-black/70 to-purple-900/80">
      <div className="container mx-auto mt-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center font-tomorrow-regular text-purple-200 mb-10 relative">
          <div className="wavy-glow-line"></div>
          Events
        </h2>
        <EventBanner /> 

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
  {events.slice(2).map((event) => (
    <div
      key={event.id}
      className="perspective-[1500px] cursor-pointer"
      onClick={() => handleCardFlip(event.id)}
    >
      <div
        className={`relative w-[250px] h-[400px] duration-700 transform-style-preserve-3d transition-transform ${
          flippedCards[event.id] ? 'rotate-y-180' : ''
        } hover:scale-[1.025] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]`}
      >
        {/* Front side */}
        <div className="absolute inset-0 bg-black/60 rounded-2xl overflow-hidden backface-hidden flex items-center justify-center p-4">
          <img
            src={event.image}
            alt={event.title}
            className="object-cover h-full w-full rounded-2xl"
          />
          <div className="absolute bottom-0 w-full text-center bg-gradient-to-t from-black via-transparent to-transparent py-4 text-purple-200">
            <h3 className="font-bold bg-black/70 text-base">{event.title}</h3>
            <p className="text-xs  bg-black/70 ">{event.date}</p>
          </div>
        </div>

        {/* Back side */}
        <div className="absolute inset-0 bg-purple-950/80 rounded-2xl p-4 text-center transform rotate-y-180 backface-hidden flex flex-col justify-center">
          <h3 className="font-bold text-lg text-purple-200 mb-2">
            {event.title}
          </h3>
          <p className="text-sm text-purple-400 mb-2">{event.date}</p>
          <p className="text-xs text-purple-300">{event.description}</p>
        </div>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}

export default Events;
