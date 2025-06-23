import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

// Executive Committee Data
const executiveCommittee = [
  {
    id: 1,
    name: "Kashish Kumar",
    designation: "Chairperson",
    img: "/Team/chair.jpg",
    instagram: "https://www.instagram.com/kashish._kumar_?igsh=MWEzZTQ3dnN4emVtNw%3D%3D&utm_source=qr",
    linkedin: "http://linkedin.com/in/kashish-kumar-527ba72b3",
  },
  {
    id: 2,
    name: "Guneet Pahwa",
    designation: "Vice-Chairperson",
    img: "/Team//vice.jpg",
    instagram: "https://www.instagram.com/guneet_7_?igsh=MXM5emYzMTNhczZkMA==",
    linkedin: "https://www.linkedin.com/in/guneet-pahwa-350063264?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github: "https://github.com/saumya",
  },
  {
    id: 3,
    name: "Ishani Arora",
    designation: "Human Resource Director",
    img: "/Team//hrd.jpg",
    instagram: "https://www.instagram.com/ishaniiaroraa?igsh=N3M4aGxwbXJuZWI1",
    linkedin: "https://www.linkedin.com/in/ishani-arora-990959273?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",

  },
  {
    id: 4,
    name: "Shambhavi Sharma",
    designation: "Managing Director",
    img: "/Team//md.jpg",
    instagram: "https://www.instagram.com/shambhavi_0914?igsh=MXIycWE5ZjJubmowMw==",
    linkedin: "https://www.linkedin.com/in/shambhavi-sharma-855032312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    id: 5,
    name: "Tanishk Mittal",
    designation: "General Secretary",
    img: "/Team//gensec.jpg",
    instagram: "https://www.instagram.com/tqnishk.hehe/",
    linkedin: "https://www.linkedin.com/in/tanishk-mittal-b42719289/",
    github: "https://github.com/Tanishk109",
  },
  {
    id: 6,
    name: "Akshit Gupta",
    designation: "Treasurer",
    img: "/Team//tres.jpg",
    instagram: "https://www.instagram.com/akshitgupta05?igsh=bXV3OWk3MHc5ZWg3",
    linkedin: "https://www.linkedin.com/in/akshit-gupta-7a10962b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    id: 7,
    name: "Aarav",
    designation: "Technical Secretary",
    img: "/Team//techsec.jpg",
    instagram: "https://instagram.com/aaranay",
    linkedin: "https://linkedin.com/in/aaranay",
    github: "https://github.com/AaroAarav",
  },
];

// Core Committee Data
const coreCommittee = [
  {
    id: 8,
    name: "Core Member 1",
    designation: "Design Lead",
    img: "/core1.jpg",
    instagram: "https://instagram.com/core1",
    linkedin: "https://linkedin.com/in/core1",
    github: "https://github.com/core1",
  },
  {
    id: 9,
    name: "Core Member 2",
    designation: "Tech Lead",
    img: "/core2.jpg",
    instagram: "https://instagram.com/core2",
    linkedin: "https://linkedin.com/in/core2",
    github: "https://github.com/core2",
  },
  {
    id: 32,
    name: "Akshat Kumar",
    designation: "Head of Technical Projects",
    img: "/Team//Akshat_Kumar__head_of_technical_projects.jpg",
    instagram: "https://www.instagram.com/akshat__sah?igsh=MWxzdTIzZ3RzbGNkbQ==",
    linkedin:"https://www.linkedin.com/in/akshat-kumar-976978349?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    github:"https://github.com/Akshatsah04",
    
    },
    
    {
    id: 33,
    name: "Aarohi Dhand ",
    designation: "Joint Head of Technical Projects ",
    img: "/Team//Aarohi Dhand_Joint Head of Technical Projects_.jpg",
    instagram: "https://www.instagram.com/aarohi_dhand?igsh=NXVtdzZiMzd3NGk3",
    linkedin:"https://www.linkedin.com/in/aarohi-dhand-262178310?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github:"https://github.com/aarohidhand",
    
    },
    
    {
    id: 34,
    name: "Kriti Saraogi",
    designation: "Senior Coordinator of Technical Projects ",
    img: "/Team//Kriti saraogi_senior coordinator of technical projects.jpg",
    instagram: "https://www.instagram.com/kritisaraogi?igsh=bzg0emFxNzgyNXp4",
    linkedin:"http://www.linkedin.com/in/kriti-saraogi-147635324",
    github:"https://github.com/kriti2307",
    
    },
    
    {
    id: 35,
    name: "Vidhu Gupta",
    designation: "Senior Coordinator of Technical Projects",
    img: "/Team//Vidhu Gupta_Senior Coordinator of Technical Projects_.jpg",
    instagram: "https://www.instagram.com/_vidhugupta?igsh=ZjNhN28zeXd1bHVq",
    linkedin:"https://www.linkedin.com/in/vidhu-gupta-a30586349?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github:"https://github.com/vidhu77",
    
    },
    
    {
    id: 36,
    name: "Sumit Sharma",
    designation: "Senior Coordinator of Technical Projects",
    img: "/Team//sumit_sharma_SENIOR COORDINATOR OF TECHNICAL PROJECTS.jpg",
    instagram: "https://www.instagram.com/whoissumitttt?igsh=MXN0cnVreXh2eDEwMA==",
    linkedin:"https://www.linkedin.com/in/sumit-sharma-36241a339?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github:"",
    
    },
    
    {
    id: 37,
    name: "Akshat Raheja ",
    designation: "Head of logistics ",
    img: "/Team//Akshat Raheja Head of Logistics_.png",
    instagram: "https://www.instagram.com/akshat_raheja06?igsh=eTJpejZvYXNwZTJj",
    linkedin:"https://www.linkedin.com/in/akshat-raheja-a82396306?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github:"",
    
    },
    
    {
    id: 38,
    name: "Ambika khandelwal",
    designation: "Joint Head of Logistics",
    img: "/Team//Ambika Khandelwal_Joint Head of Logistics.jpg",
    instagram: "https://www.instagram.com/ambikakhandelwal_?igsh=MXdiN3AzMHd6aHN6dw==",
    linkedin:"https://www.linkedin.com/in/ambika-khandelwal-782bb1247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github:"",
    
    },
    
    {
    id: 39,
    name: "Kushagra Singh ",
    designation: "Senior Coordinator of Logistics ",
    img: "/Team//Kushagra_Singh_Senior_Coordinator_Of_Logistics.jpg",
    instagram: "https://www.instagram.com/kushagra.21?igsh=aXg0bXAxMzk0OXk4",
    linkedin:"https://www.linkedin.com/in/kushagra-singh-12384b297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github:"",
    
    },
    
    {
    id: 40,
    name: "Sarath Mohanraj ",
    designation: "Senior Coordinator logistics ",
    img: "/Team//Sarath Mohanraj_SeniorCoordinator of Logistics.jpg",
    instagram: "https://www.instagram.com/sarathmohanraj?igsh=MTRva3d5cGtjaGhhNg==",
    linkedin:"https://www.linkedin.com/in/sarath-mohanraj-55aa74335?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github:"",
    
    },
    
    {
    id: 41,
    name: "Ria Gupta",
    designation: "Senior Coordinator of Logistics",
    img: "/Team//Ria Gupta_Senior Coordinator Logistics.jpg",
    instagram: "",
    linkedin:"",
    github:"",
    
    },
    
    {
    id: 42,
    name: "Ved Salodkar",
    designation: "Senior Coordinator of Logistics",
    img: "/Team//Ved Salodkar_Senior Coordinator Logistic.pdf",
    instagram: "",
    linkedin:"",
    github:"",
    
    },
    
    {
    id: 43,
    name: "Meshwa Sunil Patel",
    designation: "Head of Media",
    img: "/Team//Meshwa Patel_Head of Media.JPG",
    instagram: "https://www.instagram.com/_meshwa_p?igsh=dG13eWFnMnZncmVl&utm_source=qr",
    linkedin:"http://linkedin.com/in/meshwa-sunil-patel-9b404b292",
    github:"https://github.com/meshwa-p",
    
    },
    
    {
    id: 44,
    name: "Aakshra",
    designation: "Joint head of media ",
    img: "/Team//Aakshra Tomar_Jt Head Media.jpg",
    instagram: "https://www.instagram.com/aakshra_tomar01?igsh=MWY3czZsYmRrMnFqaQ%3D%3D&utm_source=qr",
    linkedin:"https://www.linkedin.com/in/aakshra-tomar-07637833a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    github:"",
    
    },
    
    {
    id: 45,
    name: "Shreya Bharti",
    designation: "Senior Coordinator of media",
    img: "/Team//Shreya Bharti_senior coordinator of media.jpg",
    instagram: "https://www.instagram.com/sh_reyyaa12?igsh=cXg5OG1yemZhY205",
    linkedin:"https://www.linkedin.com/in/shreya-bharti-729690368?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github:"",
    
    },
    
    {
    id: 46,
    name: "Naivedhya Sharma",
    designation: "Senior Coordinator of Media",
    img: "/Team//Naivedhya sharma.webp",
    instagram: "",
    linkedin:"",
    github:"",
    
    },
    
    {
    id: 47,
    name: "Rujul Dani",
    designation: "Senior Coordinator of Media",
    img: "/Team//Rujul Dani_Senior Coordinator of Mediapg.jpg",
    instagram: "",
    linkedin:"",
    github:"",
    
    },
    
    {
    id: 48,
    name: "Ashita Saxena",
    designation: "Head of Editorial",
    img: "/Team//Ashita Saxena_ Head of Editorial.jpeg",
    instagram: "https://www.instagram.com/ashitaaaa_0808/",
    linkedin:"https://www.linkedin.com/in/ashita-saxena-a3178824a/",
    github:"",
    
    },
    
    {
    id: 49,
    name: "Shnigddha Pandey",
    designation: "Joint Head of Editorial",
    img: "/Team//Shnigddha Pandey_Joint Head of Editorial.jpg",
    instagram: "https://www.instagram.com/asturias_7321?igsh=YnUyNzI1YmcyZW83",
    linkedin:"https://www.linkedin.com/in/shnigddha-pandey-3a0a58333?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github:"https://github.com/shnigddha",
    
    },
    
    {
    id: 50,
    name: "Suhina Ray",
    designation: "Senior Coordinator of Editorial ",
    img: "/Team//Suhina Ray_Senior Coordinator of Editorial.jpg",
    instagram: "https://www.instagram.com/suhina.ray?igsh=MTZ1dmoxdDBpZTF4Zw%3D%3D&utm_source=qr",
    linkedin:"https://in.linkedin.com/in/suhina-ray-47738132a",
    github:"",
    
    },
    
    {
    id: 51,
    name: "Kresha Jain",
    designation: "Senior Coordinator of Editorial",
    img: "/Team//Kresha Jain_Senior Coordinator of Editorial.JPG",
    instagram: "https://www.instagram.com/kreshajain_?igsh=MXNpMGZiamxzcXpmbg%3D%3D&utm_source=qr",
    linkedin:"http://www.linkedin.com/in/kresha-jain-44a150371",
    github:"https://github.com/kreshaj",
    
    },
    
    {
    id: 52,
    name: "Suryansh Shah ",
    designation: "Senior coordinator editorial ",
    img: "/Team//Suryansh Shah_SeniorCoordinatorEditorial.jpg",
    instagram: "",
    linkedin:"https://www.linkedin.com/in/suryanshshahurl?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github:"",
    
    },

    {
      id: 101,
      name: "Suhaan Tanveer",
      designation: "Corporate Affairs Head",
      img: "/Team//Suhaan Tanveer_Head of Corporate.jpg",
      instagram: "https://www.instagram.com/vio_lucky_?igsh=MTNnbDJncWtuZHkydA==",
      linkedin: "https://www.linkedin.com/in/suhaan-tanveer-39a596345?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  
      },
    {
      id: 201,
      name: "Madhura Bhosale",
      designation: "Corporate Affairs Joint Head",
      img: "/Team//MadhuraBhosale_JointHeadOfCorporate.pdf",
      instagram: "https://www.instagram.com/itsokaymadhura?igsh=b25qNnBvYnJuMWxi",
      linkedin: "https://www.linkedin.com/in/madhura-bhosale-b79615316?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
   
  },
  
  {
      id: 301,
      name: "Tanisha Bhardwaj",
      designation: "Corporate Affairs Senior Coordinator",
      img: "/Team//TanishaBhardwaj_SeniorCoordinatorCorporation.jpg",
      instagram: "https://www.instagram.com/tanishazzz.z?igsh=MWUwMjk4cGo3dHo2ZQ==",
      linkedin: "https://www.linkedin.com/in/tanisha-b-50257a223?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
     
      
  
      
    },
  
  {
      id: 401,
      name: "Aaryan",
      designation: "Corporate Affairs Senior Coordinator",
      img: "/Team//Aaryan_Senior Coordinator_Corporate.pdf",
      instagram: "",
      linkedin:"",
      github:"",
      
  
      
    },
  {
      id: 501,
      name: "Soumya Arya",
      designation: "Corporate Affairs Senior Coordinator",
      img: "/Team//Soumya Arya  Senior Coordinator Corporate .jpg",
      instagram: "",
      linkedin:"",
      github:"",
      
  
      
    },
  {
      id: 601,
      name: "Aayra Gupta",
      designation: "Curations Head",
      img: "/Team//Aayra Gupta_HeadOfCurations.pdf",
      instagram: "https://www.instagram.com/aayra0_0?igsh=OHdicHIzeGhhYjcz",
      linkedin: "https://www.linkedin.com/in/aayra-gupta-9b248526b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  
      },
    {
      id: 701,
      name: "Guru",
      designation: "Curations Joint Head",
      img: "/Team//Guru_Joint head curations.heif",
      instagram: "",
      linkedin: "",
   
  },
  
  {
      id: 801,
      name: "Parth Joshi",
      designation: "Curations Senior Coordinator",
      img: "/Team//PARTH JOSHI_SENIOR COORDINATOR CURATIONS.jpeg",
      instagram: "https://www.instagram.com/itsparth26o4?igsh=MThoZG5kZGF0dHYwOA==",
      linkedin: "https://www.linkedin.com/in/parth-joshi-168a68363?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
     
      
  
      
    },
  
  {
      id: 901,
      name: "Yash Kishore",
      designation: "Curations Senior Coordinator",
      img: "/Team//Yash Kishore_SeniorCoordinatorCurations.jpg",
      instagram: "https://www.instagram.com/yash318_/",
      linkedin:"https://www.linkedin.com/in/yashkishore2/",
      github:"",
      
  
      
    },
  {
      id: 10,
      name: "Samichha Singh",
      designation: "Curations Senior Coordinator",
      img: "/Team//Samichha_Singh_Senior Coordinator _Curations.jpg",
      instagram: "https://www.instagram.com/samikshaa_1310?igsh=cTZjNHY0ZzhpdmJu",
      linkedin:"https://www.linkedin.com/in/samichha-singh-5b3405282",
      github:"https://github.com/Samichha13",
      
  
      
    },
  {
      id: 11,
      name: "Akshita Jain",
      designation: "Curations Senior Coordinator",
      img: "/Team//AkshitaJain_SeniorCoordCurations.jpg",
      instagram: "https://www.instagram.com/akshitajain_27",
      linkedin:"https://www.linkedin.com/in/akshitajain-ai",
      github:"",
      
  
      
    },
  {
      id: 12,
      name: "Aastha Shukla",
      designation: "Social Media Head",
      img: "/Team//Aastha Shukla _ Head of socialmedia.jpg",
      instagram: "",
      linkedin: "",
  
      },
    {
      id: 13,
      name: "Shivangi Kotnala",
      designation: "Social Media Joint Head",
      img: "/Team//Shivangi Kotnala- joint head of social media.PNG",
      instagram: "https://www.instagram.com/kotnalashivangi?igsh=d21ibnkzNmVhNXNl&utm_source=qr",
      linkedin: "https://www.linkedin.com/in/shivangi-kotnala-41a4b3359?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
   
  },
  
  {
      id: 14,
      name: "Polina Aneja",
      designation: "Social Media Senior Coordinator",
      img: "/Team//Polina Aneja Senior Coordinator Social Media.png",
      instagram: "https://www.instagram.com/polinaaneja/",
      linkedin: "https://www.linkedin.com/in/polina-aneja-307791329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
     
      
  
      
    },
  
  {
      id: 15,
      name: "Ritika Lal",
      designation: "Social Media Senior Coordinator",
      img: "/Team//RitikaLal_seniorcoordinatorofSocialMedia.jpg",
      instagram: "https://www.instagram.com/_ritika_2805?igsh=MTZkbXpiOTBtMjZyaA==",
      linkedin:"https://www.linkedin.com/in/ritika-lal-31a07a311?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github:"",
      
  
      
    },
  {
      id: 16,
      name: "Saina Kumar",
      designation: "Social Media Senior Coordinator",
      img: "/Team//Saina kumar_senior coordinator SM.JPG",
      instagram: "",
      linkedin:"",
      github:"",
      
  
      
    },
  {
      id: 17,
      name: "Chinmayee Khanna",
      designation: "Promotions Head",
      img: "/Team//ChinmayeeKhanna_Headofpromotions.jpg",
      instagram: "https://www.instagram.com/chinmayee.kh?igsh=MWZnamJqZ3F6c3M1NQ%3D%3D&utm_source=qr",
      linkedin: "https://www.linkedin.com/in/chinmayee-khanna-a663492b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  
      },
    {
      id: 18,
      name: "Vidhushi Rathore",
      designation: "Promotions Joint Head",
      img: "",
      instagram: "https://www.instagram.com/ll.vidushii.ll?igsh=MTdncDZhcWoybGhheg==",
      linkedin: "",
   
  },
  
  {
      id: 19,
      name: "Vanshika Bhatia",
      designation: "Promotions Senior Coordinator",
      img: "",
      instagram: "https://www.instagram.com/vanshika_bhatia27?igsh=OXQyYWNiZWNoMHYw&utm_source=qr",
      linkedin: "https://www.linkedin.com/in/vanshika-bhatia-a69300319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
     
      
  
      
    },
  
  {
      id: 20,
      name: "Ayesha Askari",
      designation: "Promotions Senior Coordinator",
      img: "/Team//Ayesha Askari_senior coordinator promotion .jpg",
      instagram: "https://www.instagram.com/ayesha.askari?igsh=NTV6dzFkNXU1dmxh",
      linkedin:"https://www.linkedin.com/in/ayesha-askari-7bb5b3351?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github:"",
      
  
      
    },
  {
      id: 21,
      name: "Aksh Singhi",
      designation: "Promotions Senior Coordinator",
      img: "",
      instagram: "https://www.instagram.com/aksh_singhi/?utm_source=ig_web_button_share_sheet",
      linkedin:"https://in.linkedin.com/in/aksh-singhi-304146325?utm_source=share&utm_medium=member_mweb&utm_campaign=share_via&utm_content=profile",
      github:"",
      
  
      
    },
  {
      id: 22,
      name: "Annanya Jaswal",
      designation: "Graphics Design Head",
      img: "/Team//AnnanyaJaswal_headofgd.JPG",
      instagram: "https://www.instagram.com/annanyaa_26_?igsh=NXhnc21iZG01ZTNh&utm_source=qr",
      linkedin:"https://www.linkedin.com/in/annanya-jaswal-2133a8330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      github:"",
      
  
      
    },
  {
      id: 23,
      name: "Piyush Agarwal",
      designation: "Graphics Design Joint Head",
      img: "/Team//Piyush Agarwal_Joint head of graphic design.jpg",
      instagram: "https://www.instagram.com/piyushagarwal5525?igsh=YnM4ZnZvcnFpdWVi",
      linkedin:"https://www.linkedin.com/in/piyush-agarwal-97b731316?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github:"",
      
  
      
    },
  {
      id: 24,
      name: "Ansh",
      designation: "Graphics Design Senior Coordinator",
      img: "/Team//ansh_senior coordinator.jpg",
      instagram: "https://www.instagram.com/simpl.icity18?igsh=MWJjMW8xN3Z0NWZ6bg==",
      linkedin:"",
      github:"",
      
  
      
    },
  {
      id: 25,
      name: "Subhi Gupta",
      designation: "Graphics Design Senior Coordinator",
      img: "/Team//IMG_20250224_00375.jpg",
      instagram: "https://www.instagram.com/subhiiguptaa?igsh=MW1jOHY2eGo0cjIxMQ==",
      linkedin:"",
      github:"",
      
  
      
    },
  {
      id: 26,
      name: "Palakshi Sirsat",
      designation: "Events Head",
      img: "/Team//Palakshi Sirsat_Head of Events.jpg",
      instagram: "https://www.instagram.com/palakshiiii_?igsh=MXdld3ptcnc4bXNzOQ==",
      linkedin:"https://www.linkedin.com/in/palakshi-sirsat-8185b4351?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
     
      
  
      
    },
  {
      id: 27,
      name: "Kshiti Singh",
      designation: "Events Joint Head",
      img: "/Team//KshitiSingh_JointHeadEvents.heif",
      instagram: "https://www.instagram.com/k_shiti_?igsh=MTVqcW4wNzFzYnQwcA%3D%3D&utm_source=qr",
      linkedin:"https://www.linkedin.com/in/kshiti-singh-6515b8319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
     
      
  
      
    },
  {
      id: 28,
      name: "Tanmay Gole",
      designation: "Events Senior Coordinator",
      img: "/Team//Tanmay_seniorcoordinatorevents.jpg",
      instagram: "https://www.instagram.com/_tanmay_gole?igsh=OTN6dG9mOHI0OG0=",
      linkedin:"https://www.linkedin.com/in/tanmay-g-390690313?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      
      
  
      
    },
  {
      id: 29,
      name: "Mahika Sahu",
      designation: "Events Senior Coordinator",
      img: "/Team//Mahikasahu_seniorcoordinatorEvents.jpg",
      instagram: "https://www.instagram.com/mahikasahu_?igsh=aWZrdWprOGQ0Nnp0",
      linkedin:"https://www.linkedin.com/in/mahika-sahu-85b801370?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
     
      
  
      
    },
  {
      id: 30,
      name: "Shriya Desai",
      designation: "Events Senior Coordinator",
      img: "/Team//Shriya Desai_Senior Coordinator Events.jpg",
      instagram: "https://www.instagram.com/shriyadesai612?igsh=bDNqZGNpdm82MXhi",
      linkedin:"https://www.linkedin.com/in/shriya-desai-9a3b74361",
      github:"https://github.com/astro-quanta",
      
  
      
    },
  {
      id: 31,
      name: "Dhruv Gupta",
      designation: "Events Senior Coordinator",
      img: "/Team//Dhruv Gupta_Senior Coordiantor of Events.jpg",
      instagram: "https://www.instagram.com/ur_dhruvv/",
      linkedin:"https://www.linkedin.com/in/dhruv-gupta-3933b231a",
     
      
  
      
    },
    
    {
    id: 53,
    name: "Tanisha Srivastava ",
    designation: "Community Manager",
    img: "/Team//TanishaSrivastava_CommunityManager.jpg",
    instagram: "https://www.instagram.com/tanishasrivastava?igsh=MTd2Y2Q2Nmo2ZHF4ag==",
    linkedin:"https://www.linkedin.com/in/tanisha-srivastava-990232330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github:"",
    
    },
    
    {
    id: 54,
    name: "Anushka Dixit",
    designation: "Community Manager",
    img: "/Team//Anushka Dixit-Community manager_.jpg",
    instagram: "",
    linkedin:"",
    github:"",
    
    }
];

// Animation Variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

// Card Component
const TeamCard = ({ member }) => {
  const { name, designation, img, instagram, linkedin, github } = member;

  return (
    <motion.div
      variants={cardVariants}
      className="bg-white/10 border border-white/20 backdrop-blur-lg rounded-3xl p-6 shadow-2xl hover:scale-[1.03] transition-transform duration-300 w-full max-w-xs group"
    >
      <img
        src={img}
        alt={name}
        className="w-full h-80 object-cover rounded-2xl border border-purple-500 mb-4 transition-transform group-hover:scale-105"
      />
      <h3 className="text-xl font-semibold text-purple-100 mb-1 text-center">
        {name}
      </h3>
      <p className="text-purple-400 text-sm mb-4 text-center">{designation}</p>
      <div className="flex justify-center gap-5 text-xl text-purple-300">
        {instagram && (
          <a href={instagram} target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-pink-500 transition" />
          </a>
        )}
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-blue-500 transition" />
          </a>
        )}
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-white transition" />
          </a>
        )}
      </div>
    </motion.div>
  );
};

// Main Component
export default function Team() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950 via-black to-purple-950 text-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Executive Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-purple-100 mb-16"
        >
          Executive Committee
        </motion.h2>

        {/* Executive Cards */}
        <motion.div
          className="flex flex-wrap justify-center gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {executiveCommittee.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </motion.div>

        {/* Core Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-purple-100 mt-28 mb-16"
        >
          Core Committee
        </motion.h2>

        {/* Core Cards */}
        <motion.div
          className="flex flex-wrap justify-center gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {coreCommittee.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
