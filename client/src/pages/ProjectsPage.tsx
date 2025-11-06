import React, { useState, useEffect } from 'react';
import { CheckCircle, Clock, MapPin, Calendar } from 'lucide-react';
import { PageProps } from '../types';

interface Project {
  id: number;
  title: string;
  status: 'ongoing' | 'completed';
  description: string;
  location: string;
  startDate: string;
  completionDate?: string;
  images: string[];
  client?: string;
  scope?: string[];
  budget?: string;
  team?: string;
  challenges?: string;
  solution?: string;
  outcome?: string;
}

interface ProjectsPageProps extends PageProps {
  onProjectClick: (project: Project) => void;
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ setCurrentPage, onProjectClick }) => {
  // State to track current image index for each project
  const [projectImageIndices, setProjectImageIndices] = useState<{[key: number]: number}>({});

  const projects: Project[] = [
    {
      id: 1,
      title: "Fuel Treatment Plant Construction",
      status: "completed",
      description: "Successfully completed construction of a state-of-the-art fuel treatment facility with advanced processing capabilities.",
      location: "Dhaka, Bangladesh",
      startDate: "Jan 2023",
      completionDate: "Dec 2023",
      client: "National Oil Corporation",
      budget: "$5.2 Million",
      team: "50+ Engineers and Technicians",
      scope: [
        "Design and construction of fuel processing units",
        "Installation of advanced filtration systems",
        "Implementation of safety and environmental controls",
        "Integration of automated monitoring systems",
        "Staff training and operational handover"
      ],
      challenges: "The project involved complex engineering solutions and strict adherence to environmental standards. Managing the installation of sensitive equipment while maintaining operational safety was a significant challenge.",
      solution: "We implemented a phased construction approach with rigorous safety protocols. Our team utilized advanced project management tools and maintained constant communication with stakeholders to ensure seamless coordination.",
      outcome: "The facility was delivered on time and within budget, exceeding all environmental and safety standards. The plant now processes 10,000 barrels per day with 99.9% efficiency and zero environmental incidents since commissioning.",
      images: [
        "/construction/image1.jpg",
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800",
        "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800",
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800"
      ]
    },
    {
      id: 2,
      title: "Tank Area Development",
      status: "completed",
      description: "Comprehensive tank farm development project including multiple storage tanks, piping systems, and safety infrastructure.",
      location: "Chittagong, Bangladesh",
      startDate: "Mar 2022",
      completionDate: "Nov 2022",
      client: "Chittagong Port Authority",
      budget: "$3.8 Million",
      team: "40+ Specialists",
      scope: [
        "Construction of 8 large-capacity storage tanks",
        "Installation of integrated piping network",
        "Fire suppression and safety systems",
        "Loading and unloading facilities",
        "Environmental containment systems"
      ],
      challenges: "Working in a live port environment required careful coordination with ongoing operations. Weather conditions and soil stability also posed significant challenges.",
      solution: "Our team developed a detailed logistics plan that minimized disruption to port operations. We utilized specialized equipment and techniques to ensure structural integrity despite challenging soil conditions.",
      outcome: "Project delivered on time with zero safety incidents. The tank farm now provides 50,000 cubic meters of storage capacity and has improved port efficiency by 35%.",
      images: [
        "/construction/image2.jpg",
        "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800",
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800",
        "https://images.unsplash.com/photo-1590496793907-4d2b2b6c5fba?w=800"
      ]
    },
    {
      id: 3,
      title: "Modern Mosque Construction",
      status: "completed",
      description: "Beautiful mosque construction featuring traditional Islamic architecture combined with modern construction techniques.",
      location: "Dhaka, Bangladesh",
      startDate: "Jun 2022",
      completionDate: "Aug 2023",
      client: "Community Development Board",
      budget: "$2.5 Million",
      team: "35+ Craftsmen and Engineers",
      scope: [
        "Main prayer hall with capacity for 2,000 worshippers",
        "Separate prayer area for women",
        "Modern ablution facilities",
        "Community center and library",
        "Minaret and dome construction",
        "Landscaping and parking facilities"
      ],
      challenges: "Balancing traditional architectural aesthetics with modern building codes and ensuring acoustic excellence for the prayer hall required specialized expertise.",
      solution: "We collaborated with Islamic architecture specialists and acoustic engineers to create a design that honors tradition while incorporating modern safety and comfort features.",
      outcome: "The mosque has become a landmark in the community, serving over 5,000 worshippers weekly. The project received recognition for its architectural beauty and structural excellence.",
      images: [
        "/construction/image3.jpg",
        "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=800",
        "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800",
        "https://images.unsplash.com/photo-1564769625905-50e93615e769?w=800"
      ]
    },
    {
      id: 4,
      title: "Jetty Construction Project",
      status: "ongoing",
      description: "Major marine infrastructure project involving the construction of a commercial jetty for cargo operations.",
      location: "Mongla Port, Bangladesh",
      startDate: "Oct 2023",
      client: "Mongla Port Authority",
      budget: "$8.5 Million",
      team: "80+ Marine Engineers and Workers",
      scope: [
        "Deep water berth construction (250m length)",
        "Heavy-duty cargo handling equipment installation",
        "Approach road and rail connectivity",
        "Navigation and lighting systems",
        "Environmental protection measures"
      ],
      challenges: "Marine construction in tidal waters with varying depths, protection against cyclonic conditions, and maintaining navigation safety during construction are key challenges.",
      solution: "Utilizing advanced marine engineering techniques and specialized equipment designed for tidal environments. Implementation of real-time monitoring systems for construction quality and safety.",
      outcome: "Currently 65% complete. Upon completion, the jetty will handle 2 million tons of cargo annually and create 500+ jobs.",
      images: [
        "/construction/image4.jpg",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800",
        "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?w=800",
        "https://images.unsplash.com/photo-1519489892867-9c0d019f1032?w=800"
      ]
    },
    {
      id: 5,
      title: "Highway Road Construction",
      status: "ongoing",
      description: "Extensive highway construction project connecting major urban centers with modern infrastructure.",
      location: "Dhaka-Chittagong Highway",
      startDate: "Jan 2024",
      client: "Roads and Highways Department",
      budget: "$12 Million",
      team: "120+ Engineers and Workers",
      scope: [
        "25km four-lane highway construction",
        "Bridge and overpass structures",
        "Advanced drainage systems",
        "Road safety features and signage",
        "Rest areas and toll facilities",
        "Smart traffic management systems"
      ],
      challenges: "Managing construction across varied terrain, ensuring minimal disruption to existing traffic, and meeting strict quality standards for high-speed highway construction.",
      solution: "Phased construction approach with temporary diversions, use of modern machinery for rapid construction, and round-the-clock quality monitoring.",
      outcome: "Currently 40% complete. Expected to reduce travel time by 45 minutes and improve connectivity between two major economic hubs.",
      images: [
        "/construction/image5.jpg",
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800",
        "https://images.unsplash.com/photo-1621544402532-1f47c2f5e5e7?w=800",
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800"
      ]
    },
    {
      id: 6,
      title: "Electrical Substation Development",
      status: "completed",
      description: "High-voltage electrical substation construction with advanced power distribution systems.",
      location: "Gazipur, Bangladesh",
      startDate: "May 2022",
      completionDate: "Apr 2023",
      client: "Power Grid Company of Bangladesh",
      budget: "$4.2 Million",
      team: "45+ Electrical Engineers",
      scope: [
        "132/33 kV substation construction",
        "Installation of transformers and switchgear",
        "Control room and SCADA systems",
        "Protection and automation systems",
        "Underground cable network",
        "Fire protection and safety systems"
      ],
      challenges: "Working with high-voltage equipment in live grid conditions, ensuring zero downtime during integration, and implementing complex automation systems.",
      solution: "Meticulous planning with staged implementation, specialized safety protocols, and use of cutting-edge automation technology with redundant systems.",
      outcome: "Commissioned successfully with 99.98% reliability. The substation now serves 200,000 households and 1,000+ industries, significantly improving power supply stability in the region.",
      images: [
        "/construction/image6.jpg",
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800",
        "https://images.unsplash.com/photo-1621830040007-d7009f0e3286?w=800",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800"
      ]
    }
  ];

  // Initialize image indices
  useEffect(() => {
    const initialIndices: {[key: number]: number} = {};
    projects.forEach(project => {
      initialIndices[project.id] = 0;
    });
    setProjectImageIndices(initialIndices);
  }, []);

  // Set up timers for each project's image rotation
  useEffect(() => {
    const timers = projects.map((project, index) => {
      const interval = 3500 + (index * 500);
      
      return setInterval(() => {
        setProjectImageIndices(prev => ({
          ...prev,
          [project.id]: (prev[project.id] + 1) % project.images.length
        }));
      }, interval);
    });

    return () => {
      timers.forEach(timer => clearInterval(timer));
    };
  }, [projects]);

  const ongoingProjects = projects.filter(p => p.status === 'ongoing');
  const completedProjects = projects.filter(p => p.status === 'completed');

  const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    const currentImageIndex = projectImageIndices[project.id] || 0;

    return (
      <div 
        className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all cursor-pointer group"
        onClick={() => onProjectClick(project)}
      >
        {/* Image Carousel */}
        <div className="relative h-64 overflow-hidden">
          {project.images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt={`${project.title} ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
          
          {/* Status Badge */}
          <div className="absolute top-4 right-4">
            {project.status === 'ongoing' ? (
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                <Clock className="w-4 h-4" />
                Ongoing
              </span>
            ) : (
              <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                <CheckCircle className="w-4 h-4" />
                Completed
              </span>
            )}
          </div>

          {/* Image Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {project.images.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentImageIndex ? 'bg-white w-6' : 'bg-white bg-opacity-50'
                }`}
              />
            ))}
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
            <span className="text-white font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Click for details →
            </span>
          </div>
        </div>

        {/* Project Details */}
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
            {project.title}
          </h3>
          
          <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{project.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{project.startDate}</span>
            </div>
          </div>

          {project.completionDate && (
            <div className="mb-4 text-sm text-gray-600">
              <strong>Completed:</strong> {project.completionDate}
            </div>
          )}

          <p className="text-gray-600 leading-relaxed line-clamp-3">{project.description}</p>
          
          <div className="mt-4 text-blue-600 font-medium text-sm">
            Click to view full details →
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="py-16">
      <div className="max-w-none mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Our Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing our expertise through successful project delivery and ongoing developments
          </p>
          <p className="text-sm text-gray-500 mt-2">Click on any project to view complete details</p>
        </div>

        {/* Ongoing Projects */}
        {ongoingProjects.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Clock className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-800">Ongoing Projects</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ongoingProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}

        {/* Completed Projects */}
        {completedProjects.length > 0 && (
          <div>
            <div className="flex items-center gap-3 mb-8">
              <CheckCircle className="w-8 h-8 text-green-600" />
              <h2 className="text-3xl font-bold text-gray-800">Completed Projects</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {completedProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Have a Project in Mind?</h3>
          <p className="text-xl mb-6">Let's discuss how we can bring your vision to life</p>
          <button
            onClick={() => setCurrentPage('contact')}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;