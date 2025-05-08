import React, { useState } from 'react';
import { Eye } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Modern Taş Villa',
    category: 'Taş Ev',
    imageUrl: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Bodrum bölgesinde 250m² alana sahip, modern mimari ile taş işçiliğini birleştirdiğimiz lüks villa projesi.',
  },
  {
    id: 2,
    title: 'Bahçe Duvarı Projesi',
    category: 'Taş Duvar',
    imageUrl: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'İzmir\'de özel bir konut için inşa ettiğimiz 120 metre uzunluğundaki dekoratif bahçe duvarı.',
  },
  {
    id: 3,
    title: 'Dağ Evi Restorasyonu',
    category: 'Restorasyon',
    imageUrl: 'https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Kapadokya\'da 100 yıllık tarihi bir taş evin aslına uygun olarak restore edilmesi projesi.',
  },
  {
    id: 4,
    title: 'Taş Bahçe Düzenlemesi',
    category: 'Peyzaj',
    imageUrl: 'https://images.pexels.com/photos/53184/peacock-bird-face-macro-53184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Muğla\'da bir tatil tesisi için yaptığımız kapsamlı taş bahçe düzenlemesi ve peyzaj projesi.',
  },
  {
    id: 5,
    title: 'Kır Evi Projesi',
    category: 'Taş Ev',
    imageUrl: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Bolu\'da inşa ettiğimiz 180m² büyüklüğünde doğayla iç içe bir taş kır evi projesi.',
  },
  {
    id: 6,
    title: 'İstinat Duvarı',
    category: 'Taş Duvar',
    imageUrl: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Antalya\'da eğimli bir arazide inşa ettiğimiz 200 metrelik istinat duvarı projesi.',
  },
];

const ProjectModal: React.FC<{ project: Project | null; onClose: () => void }> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div 
        className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-auto" 
        onClick={(e) => e.stopPropagation()}
      >
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-64 md:h-80 object-cover rounded-t-lg"
        />
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
              <span className="inline-block bg-[#FAAA26]/20 text-[#FAAA26] px-3 py-1 rounded-full text-sm font-medium">
                {project.category}
              </span>
            </div>
            <button 
              className="text-gray-500 hover:text-gray-700"
              onClick={onClose}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p className="text-gray-600 mb-6">{project.description}</p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 p-3 rounded">
              <span className="block text-sm text-gray-500">Konum</span>
              <span className="font-medium">Muğla, Türkiye</span>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <span className="block text-sm text-gray-500">Tamamlanma</span>
              <span className="font-medium">2022</span>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <span className="block text-sm text-gray-500">Alan</span>
              <span className="font-medium">250 m²</span>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <span className="block text-sm text-gray-500">Süre</span>
              <span className="font-medium">6 Ay</span>
            </div>
          </div>
          <button 
            className="w-full bg-[#FAAA26] hover:bg-[#e89a1f] text-white py-2 rounded-md transition-colors"
            onClick={onClose}
          >
            Kapat
          </button>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projeler" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Tamamlanan Projelerimiz
          </h2>
          <div className="w-20 h-1 bg-[#FAAA26] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Yıllar içinde tamamladığımız bazı önemli projelerimizi inceleyebilirsiniz.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === 'all' ? 'bg-[#FAAA26] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setFilter('all')}
          >
            Tümü
          </button>
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === 'Taş Ev' ? 'bg-[#FAAA26] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setFilter('Taş Ev')}
          >
            Taş Evler
          </button>
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === 'Taş Duvar' ? 'bg-[#FAAA26] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setFilter('Taş Duvar')}
          >
            Taş Duvarlar
          </button>
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === 'Restorasyon' ? 'bg-[#FAAA26] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setFilter('Restorasyon')}
          >
            Restorasyon
          </button>
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === 'Peyzaj' ? 'bg-[#FAAA26] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setFilter('Peyzaj')}
          >
            Peyzaj
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="bg-[#FAAA26] hover:bg-[#e89a1f] text-white py-2 px-4 rounded-md flex items-center gap-2"
                >
                  <Eye size={18} />
                  Detayları Gör
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-white p-4">
                <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
                <span className="text-sm text-[#FAAA26]">{project.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
};

export default Projects;