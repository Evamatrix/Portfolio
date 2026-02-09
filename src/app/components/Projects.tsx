import { ProjectCard, Project } from './ProjectCard';
import capitalMeowney from '@/app/components/images/capital-meowney.png'
import tripDownMelody from '@/app/components/images/Trip Down Melody Lane.svg'
import lifeAlign from '@/app/components/images/LifeAlign Slides.svg'
import seppit from '@/app/components/images/SEPPIT.svg'
import adaptation from '@/app/components/images/adaptation-revelation.svg'


export function Projects() {
  const projects: Project[] = [
    {
      title: 'Capital Meowney',
      description: 'Designed and built a web app to interactively teach financial literacy and enhance user experience, helping young audiences gain exposure to real-world money skills in a fun way.',
      techStack: ['Figma', 'Auth0', 'TypseScript', 'CSS'],
      demoLink: 'https://www.capital-meowney.club/',
      thumbnail: capitalMeowney
    },
    {
      title: 'Trip Down Melody Lane',
      description: 'Supported development of full-stack chrome extension integrated into Google Photos within 24 hours for a hackathon, utilizing Spotify API to document listening history based on user photo metadata.',
      techStack: ['Spotify API', 'JavaScript', 'CSS', 'Google Chrome Extension', 'HTML'],
      demoLink: 'https://devpost.com/software/trip-down-melody-lane',
      thumbnail: tripDownMelody
    },
    {
      title: 'LifeAlign',
      description: 'Created a mobile app for busy individuals to manage daily tasks, keep records of previous appointments, and organize lists with a focus on efficient work and mental well-being. The app features a sleek design and intuitive interface to help users stay organized and motivated.',
      techStack: ['React Native', 'Node.js', 'Jest', 'Expo Go'],
      demoLink: 'https://github.com/Evamatrix/LifeAlign',
      thumbnail: lifeAlign
    },
    {
      title: 'Seppit',
      description: 'Built an AI audio extraction tool to separate songs into distinct instrumental elements in 3 months.',
      techStack: ['Python', 'Machine Learning', 'TensorFlow'],
      demoLink: 'https://drive.google.com/file/d/1N86v5_mWjckJZuyKzUY-iRVg8lWT7E12/view?usp=sharing',
      thumbnail: seppit
    },
    {
      title: 'Adaptation Revelation',
      description: 'Designed and implemented a mobile app for international students to connect through shared traits such as culture, religion, language, and interests, with a focus on user experience.',
      techStack: ['React', 'TypeScript', 'JavaScript', 'Expo Go'],
      demoLink: 'https://github.com/Evamatrix/Adaptation-Revelation',
      thumbnail: adaptation
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl mb-4">My Projects</h2>
          <p className="text-lg text-muted-foreground">
            A collection of projects that showcase my ability to blend technical skills with 
            creative problem-solving for social media and digital communication.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
