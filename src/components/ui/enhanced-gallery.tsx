import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Grid3X3, List, Star, Eye, Clock, ExternalLink, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './button';
import { Input } from './input';
import { Badge } from './badge';
import { Card } from './card';

interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  views: number;
  readTime?: number;
  rating: number;
  description?: string;
  technologies?: string[];
  completionDate?: string;
}

interface EnhancedGalleryProps {
  title: string;
  description: string;
  projects: Project[];
  onProjectClick?: (project: Project) => void;
  className?: string;
}

type ViewMode = 'grid' | 'list' | 'masonry';
type SortBy = 'recent' | 'views' | 'rating' | 'title';

export const EnhancedGallery = ({
  title,
  description,
  projects,
  onProjectClick,
  className
}: EnhancedGalleryProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [sortBy, setSortBy] = useState<SortBy>('recent');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Get unique categories
  const categories = useMemo(() => {
    return Array.from(new Set(projects.map(p => p.category)));
  }, [projects]);

  // Filter and sort projects
  const filteredProjects = useMemo(() => {
    let filtered = projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           project.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = !selectedCategory || project.category === selectedCategory;
      const matchesRating = !selectedRating || project.rating >= selectedRating;
      
      return matchesSearch && matchesCategory && matchesRating;
    });

    // Sort projects
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'views':
          return b.views - a.views;
        case 'rating':
          return b.rating - a.rating;
        case 'title':
          return a.title.localeCompare(b.title);
        case 'recent':
        default:
          return b.id - a.id;
      }
    });

    return filtered;
  }, [projects, searchQuery, selectedCategory, selectedRating, sortBy]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory(null);
    setSelectedRating(null);
  };

  const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
    const cardVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { delay: index * 0.1 }
      }
    };

    if (viewMode === 'list') {
      return (
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.02 }}
          className="group"
        >
          <Card className="flex flex-row gap-4 p-4 hover-lift cursor-pointer"
                onClick={() => setSelectedProject(project)}>
            <div className="w-32 h-24 rounded-lg overflow-hidden flex-shrink-0">
              <img src={project.imageUrl} alt={project.title} 
                   className="w-full h-full object-cover transition-transform group-hover:scale-110" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
              <Badge variant="secondary" className="mt-1">{project.category}</Badge>
              <div className="flex items-center gap-4 mt-2 text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  <span className="text-sm">{project.views}</span>
                </div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={cn("w-3 h-3", 
                      i < project.rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground/30")} />
                  ))}
                </div>
                {project.readTime && (
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{project.readTime} min</span>
                  </div>
                )}
              </div>
            </div>
          </Card>
        </motion.div>
      );
    }

    return (
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ y: -8 }}
        className="group cursor-pointer"
        onClick={() => setSelectedProject(project)}
      >
        <Card className="overflow-hidden hover-lift">
          <div className="relative aspect-video overflow-hidden">
            <img src={project.imageUrl} alt={project.title} 
                 className="w-full h-full object-cover transition-transform group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute top-3 right-3">
              <Badge variant="secondary" className="backdrop-blur-md bg-background/80">
                {project.category}
              </Badge>
            </div>
            <div className="absolute bottom-3 left-3 right-3 text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <ExternalLink className="w-5 h-5 ml-auto" />
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-foreground mb-2">{project.title}</h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={cn("w-3 h-3", 
                      i < project.rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground/30")} />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">({project.views})</span>
              </div>
              {project.readTime && (
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{project.readTime} min</span>
                </div>
              )}
            </div>
          </div>
        </Card>
      </motion.div>
    );
  };

  return (
    <div className={cn("container mx-auto px-4 py-12", className)}>
      {/* Header */}
      <div className="text-center mb-12">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-foreground mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {title}
        </motion.h1>
        <motion.p 
          className="text-xl text-muted-foreground max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {description}
        </motion.p>
      </div>

      {/* Stats */}
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-primary">{projects.length}</div>
          <div className="text-sm text-muted-foreground">Proyectos</div>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-primary">{categories.length}</div>
          <div className="text-sm text-muted-foreground">Categorías</div>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-primary">
            {Math.round(projects.reduce((acc, p) => acc + p.rating, 0) / projects.length * 10) / 10}
          </div>
          <div className="text-sm text-muted-foreground">Rating Promedio</div>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-primary">
            {projects.reduce((acc, p) => acc + p.views, 0).toLocaleString()}
          </div>
          <div className="text-sm text-muted-foreground">Visualizaciones</div>
        </Card>
      </motion.div>

      {/* Filters and Controls */}
      <motion.div 
        className="bg-card border rounded-lg p-6 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Buscar proyectos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>

          {/* View Mode */}
          <div className="flex items-center gap-2">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('grid')}
            >
              <Grid3X3 className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('list')}
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Filter className="w-4 h-4" />
            Filtros:
          </div>
          
          {/* Categories */}
          {categories.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
            >
              {category}
            </Button>
          ))}

          {/* Rating Filter */}
          {[5, 4, 3].map(rating => (
            <Button
              key={rating}
              variant={selectedRating === rating ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedRating(selectedRating === rating ? null : rating)}
            >
              {rating}+ ⭐
            </Button>
          ))}

          {(selectedCategory || selectedRating || searchQuery) && (
            <Button variant="ghost" size="sm" onClick={clearFilters}>
              Limpiar filtros
            </Button>
          )}
        </div>

        {/* Sort */}
        <div className="flex items-center gap-2 mt-4">
          <span className="text-sm text-muted-foreground">Ordenar por:</span>
          <select 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value as SortBy)}
            className="text-sm bg-background border border-border rounded px-2 py-1"
          >
            <option value="recent">Más recientes</option>
            <option value="views">Más vistos</option>
            <option value="rating">Mejor valorados</option>
            <option value="title">Alfabético</option>
          </select>
        </div>
      </motion.div>

      {/* Projects Grid */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={`${viewMode}-${sortBy}-${selectedCategory}-${selectedRating}-${searchQuery}`}
          className={cn(
            "gap-6",
            viewMode === 'grid' ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "space-y-4"
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </AnimatePresence>

      {filteredProjects.length === 0 && (
        <motion.div 
          className="text-center py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="text-muted-foreground">No se encontraron proyectos con los filtros aplicados</div>
          <Button variant="ghost" onClick={clearFilters} className="mt-2">
            Limpiar filtros
          </Button>
        </motion.div>
      )}

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-background rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img src={selectedProject.imageUrl} alt={selectedProject.title} 
                     className="w-full h-64 object-cover" />
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-4 right-4 bg-background/80 backdrop-blur"
                  onClick={() => setSelectedProject(null)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{selectedProject.title}</h3>
                    <Badge variant="secondary" className="mt-2">{selectedProject.category}</Badge>
                  </div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={cn("w-4 h-4", 
                        i < selectedProject.rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground/30")} />
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Eye className="w-4 h-4" />
                    <span>{selectedProject.views} visualizaciones</span>
                  </div>
                  {selectedProject.readTime && (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{selectedProject.readTime} min de lectura</span>
                    </div>
                  )}
                </div>

                <div className="flex gap-3">
                  <Button 
                    className="flex-1"
                    onClick={() => {
                      onProjectClick?.(selectedProject);
                      setSelectedProject(null);
                    }}
                  >
                    Contactar sobre este proyecto
                  </Button>
                  <Button variant="outline">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Ver detalles
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};