import React, { useState, useMemo } from 'react';
import JobCard from './JobCard';
import FilterBar from './FilterBar';
import jobData from '../Data/data.json';
import type { Job } from '../Types/Job';

const JobList: React.FC = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const filteredJobs = useMemo(() => {
    if (selectedFilters.length === 0) return jobData;

    return jobData.filter((job) => {
      const jobTags = [job.role, job.level, ...job.languages, ...job.tools];
      return selectedFilters.every((filter) => jobTags.includes(filter));
    });
  }, [selectedFilters]);

  const handleFilterClick = (tag: string) => {
    if (!selectedFilters.includes(tag)) {
      setSelectedFilters([...selectedFilters, tag]);
    }
  };

  const handleFilterRemove = (filter: string) => {
    setSelectedFilters(selectedFilters.filter((f) => f !== filter));
  };

  const handleClearFilters = () => {
    setSelectedFilters([]);
  };

  return (
    <div>
      <FilterBar
        selectedFilters={selectedFilters}
        onFilterRemove={handleFilterRemove}
        onClearFilters={handleClearFilters}
      />
      <div className="space-y-6">
        {filteredJobs.map((job: Job) => (
          <JobCard 
            key={job.id} 
            job={job} 
            onFilterClick={handleFilterClick}
          />
        ))}
      </div>
    </div>
  );
};

export default JobList;