import React, { useEffect, useState } from 'react';
import { CheckCircle, Clock, MapPin, Calendar, X, Users, DollarSign, Briefcase, ChevronLeft, ChevronRight } from 'lucide-react';

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

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  setCurrentPage: (page: string) => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ 
  project, 
  isOpen, 
  onClose,
  setCurrentPage 
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Reset image index when project changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [project]);

  if (!isOpen || !project) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div 
      className={`fixed inset-0 bg-black transition-opacity duration-300 flex items-center justify-center p-4 z-50 ${
        isOpen ? 'bg-opacity-50' : 'bg-opacity-0'
      }`}
      onClick={onClose}
    >
      <div 
        className={`bg-white rounded-lg max-w-5xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 ${
          isOpen 
            ? 'scale-100 opacity-100 translate-y-0' 
            : 'scale-95 opacity-0 translate-y-4'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 hover:scale-110 transition-all duration-200 group"
          >
            <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-200" />
          </button>

          {/* Image Gallery with Navigation */}
          <div className="relative h-96 bg-gray-900">
            <div className="relative h-full overflow-hidden">
              {project.images.map((img, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${project.title} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            {project.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 p-3 rounded-full transition-all z-10"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 p-3 rounded-full transition-all z-10"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            {/* Image Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
              {project.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentImageIndex 
                      ? 'bg-white w-8' 
                      : 'bg-white bg-opacity-50 w-2'
                  }`}
                />
              ))}
            </div>

            {/* Status Badge */}
            <div className="absolute top-4 left-4 z-10">
              {project.status === 'ongoing' ? (
                <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Ongoing Project
                </span>
              ) : (
                <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Completed
                </span>
              )}
            </div>
          </div>

          {/* Project Details */}
          <div className="p-8">
            {/* Header */}
            <div className="mb-6">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">{project.title}</h2>
              
              <div className="flex flex-wrap gap-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <span>Started: {project.startDate}</span>
                </div>
                {project.completionDate && (
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Completed: {project.completionDate}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Project Overview */}
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Project Overview</h3>
              <p className="text-gray-700 leading-relaxed text-lg">{project.description}</p>
            </div>

            {/* Project Details Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {project.client && (
                <div className="bg-blue-50 p-5 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Briefcase className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Client</h4>
                      <p className="text-gray-700">{project.client}</p>
                    </div>
                  </div>
                </div>
              )}

              {project.budget && (
                <div className="bg-green-50 p-5 rounded-lg">
                  <div className="flex items-start gap-3">
                    <DollarSign className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Budget</h4>
                      <p className="text-gray-700">{project.budget}</p>
                    </div>
                  </div>
                </div>
              )}

              {project.team && (
                <div className="bg-purple-50 p-5 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Users className="w-6 h-6 text-purple-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Team Size</h4>
                      <p className="text-gray-700">{project.team}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Project Scope */}
            {project.scope && project.scope.length > 0 && (
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">Project Scope</h3>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <ul className="space-y-2">
                    {project.scope.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Challenges & Solutions */}
            {(project.challenges || project.solution) && (
              <div className="mb-6 grid md:grid-cols-2 gap-6">
                {project.challenges && (
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Challenges</h3>
                    <div className="bg-orange-50 p-5 rounded-lg">
                      <p className="text-gray-700 leading-relaxed">{project.challenges}</p>
                    </div>
                  </div>
                )}
                {project.solution && (
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Solution</h3>
                    <div className="bg-blue-50 p-5 rounded-lg">
                      <p className="text-gray-700 leading-relaxed">{project.solution}</p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Outcome/Results */}
            {project.outcome && (
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">Results & Outcome</h3>
                <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-600">
                  <p className="text-gray-700 leading-relaxed text-lg">{project.outcome}</p>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-4 pt-6 border-t">
              <button
                onClick={() => {
                  setCurrentPage('contact');
                  onClose();
                }}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
                Start Your Project
              </button>
              <button
                onClick={onClose}
                className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-200 hover:scale-105"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;