import Link from 'next/link';

import Analytics from 'components/metrics/Analytics';
import Container from 'components/Container';
import GitHub from 'components/metrics/Github';
import TopTracks from 'components/TopTracks';
import ProjectCard from '../components/ProjectCard';
import { useState } from 'react';

const Divider = () => {
  return (
    <div className="dark:border-gray-600 w-full my-4" />
  );
};

export default function Projects() {
  const [isShowingFullProjects, showFullProject] = useState(false);
  return (
    <Container
      title="Projects – Shashank Priyadarshi"
      description="My projects"
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Dashboard
        </h1>
        <div className="mb-8">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            This is personal dashboard, I use this to track
            various metrics across platforms like GitHub, Twitter and
            more. Want to build your own? Check out my&nbsp;
            <Link href="/blog/fetching-data-with-swr">
              <a className="text-gray-900 dark:text-gray-100 underline">
                blog series.
              </a>
            </Link>
          </p>
        </div>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full">
          <Analytics />
          <GitHub />
        </div>
        {/* <div className="grid gap-4 grid-cols-1 sm:grid-cols-1 my-2 w-full">
          <Newsletter />
        </div> */}
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Projects
        </h3>
        <ProjectCard
          title="Android Field Officer"
          description="Android Application built on top of the MifosX platform - a robust core banking platform. It is developed for field officers to process transactions and track clients."
          href="https://github.com/openMF/android-client"
          icon='android'
        />
        <ProjectCard
          title="Galaxy Classifier"
          description="AI Tool for morphological classfication using Deep ConvNet. It shows how computational cosmology could help to make hard classificaiton easy."
          href="https://github.com/iamsh4shank/gal-classifier"
          icon="galaxy"
        />
        <ProjectCard
          title="Mental Vaccine"
          description="Not just a physical vaccine is enough, Mental Vaccine will help you to cure a stressful mind. It is a mobile application developed over Flutter to fight against the stressful conditions during this pandemic."
          href="https://github.com/bits-to-byte/mental-vaccine"
          icon="android"
        />
        <ProjectCard
          title="Galaxy Gan"
          description="SRGAN using a Generative Adversarial Network based approach to reconsruct the galaxy images."
          href="https://github.com/iamsh4shank/SRGAN"
          icon="galaxy"
        />
        <ProjectCard
          title="Tweet analyser"
          description="A Tweet Analyser that will classify your tweet into few labels such as abusive, non-abusive, hate, and humour. It fetches the tweet on particular query using Twitter API and after filtering analyses the tweet."
          href="https://github.com/iamsh4shank/Tweet_Analyser"
          icon="emotion"
        />
             {isShowingFullProjects ? (
               <div>
        <ProjectCard
          title="Imfusion"
          description="An Open Source image fusion desktop app which supports image fusion using Discrete wavelet transformation."
          href="https://github.com/iamsh4shank/Imfusion"
          icon="desktop"
      />
      <Divider />
      <ProjectCard
          title="Temple App"
          description="This android app provides a cost-efficient way of maintaining records of poojas, donations made by people, and also all the financial records in temples."
          href="https://github.com/amfoss/TempleApp"
          icon="android"
        />
        <Divider />
        <ProjectCard
          title="Health Log"
          description="The smart and efficient android app provided to hospitals to maintain covid19 patients log. Hospitals can admit new patients and it will automatically assign doctors to each patient."
          href="https://github.com/Technical-Hackers/Health-Log"
          icon="android"
        />
        <Divider />
        </div>
      ) : (
        <button
          type="button"
          className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100"
          onClick={() => showFullProject(true)}
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
      </div>
    </Container>
  );
}
