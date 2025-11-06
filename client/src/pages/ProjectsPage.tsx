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
      title: "School Building Construction",
      status: "completed",
      description: "Successfully completed construction of a three storied school building with modern facilities and sustainable design.",
      location: "Kaliakoir, Gazipur, Bangladesh",
      startDate: "Oct 2019",
      client: "Summit Gazipur II Power Ltd.",
      budget: "$0.5 Million",
      team: "100+ Engineers and Technicians",
      images: [
        "/construction/image17.png",
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
      location: "Aricha, Dhaka, Bangladesh",
      startDate: "Jun 2022",
      completionDate: "Aug 2023",
      client: "Power Grid Company of Bangladesh Ltd.",
      budget: "$0.22 Million",
      team: "50+ Craftsmen and Engineers",
      images: [
        "/construction/image3.jpg",
      ]
    },
    {
      id: 4,
      title: "Construction of Open Store Yard",
      status: "ongoing",
      description: "Major infrastructure project involving the construction of a substation for powergrid.",
      location: "Kalikair, Gazipur",
      startDate: "Nov 2024",
      client: "Power Grid Company of Bangladesh Ltd.",
      budget: "$0.2 Million",
      team: "80+ Engineers and Workers",
      images: [
        "/construction/image9.jpg",
        "/construction/image10.jpg",
        "/construction/image11.jpg",
        "/construction/image13.png",
        "/construction/image12.jpg"
      ]
    },
    {
      id: 5,
      title: "Rerouting Work of 230kv Transmission Line",
      status: "ongoing",
      description: "Comprehensive rerouting and realignment of a 230kV high-voltage transmission line to ensure optimal power distribution and infrastructure reliability.",
      location: "Aminbazar-Kaliakoir, Ghorashal-Ishwardi, Dhaka-Ashulia",
      startDate: "Oct 2023",
      client: "Power Grid Company of Bangladesh Ltd.",
      budget: "$22.5 Million",
      team: "120+ Engineers and Workers",
      images: [
        "/construction/image14.png",
        "/construction/image15.png",
       "/construction/image16.png",
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