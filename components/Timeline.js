import { useState } from 'react';

const Divider = () => {
  return (
    <div className="border border-gray-200 dark:border-gray-600 w-full my-8" />
  );
};

const Year = ({ children }) => {
  return (
    <h3 className="text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
      {children}
    </h3>
  );
};

const Step = (props) => {
  return (
    <li className="mb-4 ml-2">
      <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
        <span className="sr-only">Check</span>
        <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </g>
        </svg>
        <p className="font-medium text-gray-900 dark:text-gray-100">
          {props.title}
        </p>
      </div>
      <p className="text-gray-700 dark:text-gray-400 ml-6">{props.children}</p>
    </li>
  );
};

const FullTimeline = () => (
  <>
    <Divider />
    <Year>2000</Year>
    <ul>
      <Step title="Born 👶🏼">
      </Step>
    </ul>
    <Divider />
  </>
);

export default function Timeline() {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  return (
    <>
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
        Timeline
      </h3>
      <Year>2021</Year>
      <ul>
        <Step title="Invited to attend mentor summit for google Summer of Code 2021">
          Generally only a few mentors are invited to this event, all thanks to COVID-19 this time all mentors are invited to the event. 
        </Step>
        <Step title="Joined Atom EI 👨‍👩‍👧‍👦">
          I'm extremely excited about this new role as a android intern and 
          as a team lead
        </Step>
        <Step title="Speaker @Code it in your way">
          Took sessions for introduction to AI and discussed about various topics 
          such as AI in real world and AI problem solving.
        </Step>
        <Step title="MaLGa Unige Summer School">
        Selected for 3 weeks long MaLGa Unige summer school which covered mathematical portions related to fields such as Computer Vision, Regularization, and Deep Learning.
        </Step>
        <Step title="Took 2nd workshop">
        This workshop was held by the placement cell of my college, I was responsible to take sessions for Android Development using Java.
        </Step>
        <Step title="GSoC Mentor @TheASF">
        Mentor for the mobile banking app on top of the Apache Fineract architecture, worked on projects like
        android client and android SDK based on Fineract APIs
        </Step>
        <Step title="GDSC graduation day">
          Graduated from Google Developer Students Club as a Lead.
        </Step>
        <Step title="Android Research Intern @CMU">
          Worked as a research intern in RoboTutor project which is an Android app that enables to schools to learn
          basic reading, writing, and arithmetic without adult assistance.
        </Step>
      </ul>
      <Divider />
      <Year>2020</Year>
      <ul>
        <Step title="GSoC Student Developer @Mifos">
          Contributed to android application built on top of the MifosX platform - a robust core banking platform. It is developed for field officers to process transactions and track clients.
        </Step>
        <Step title="Lead @GDSC">
          Selected as a Lead in Google Developer Students Club -a university based community groups for students interested in Google developer technologies. 
        </Step>
        <Step title="My 1st workshop">
        Volunteered for Hacktoberfest and took a session on Git and GitHub.
        </Step>
      </ul>
      <Divider />
      <Year>2019</Year>
      <ul>
        <Step title="Joined amFOSS✨">
          amFOSS is the Free and Open Source Software club of Amrita Vishwa Vidyapeetham, Amritapuri.
        </Step>
        <Step title="Joined Amrita Vishwa Vidyapeetham ">
          After writing so any engineering entrances :P finally landed to Amrita School
          of Engineering for my major in Computer Science engineering with specilization 
          in AI. 
        </Step>
      </ul>
      {isShowingFullTimeline ? (
        <FullTimeline />
      ) : (
        <button
          type="button"
          className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100"
          onClick={() => showFullTimeline(true)}
        >
          See More
          <svg
            className="h-4 w-4 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      )}
    </>
  );
}
