import React from 'react';
import type { Job } from '../Types/Job';

interface Props {
  job: Job;
  onFilterClick: (tag: string) => void;
}

const JobCard: React.FC<Props> = ({ job, onFilterClick }) => {
  
  const imageUrl = job.logo.startsWith('./') ? job.logo.slice(1) : job.logo;

  return (
    <div className={`bg-white rounded-md shadow-md p-6 ${job.featured ? 'border-l-4 border-primary' : ''}`}>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex gap-4">
          <img
            src={imageUrl}
            alt={job.company}
            className="h-12 w-12 object-contain"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = '/images/fallback-image.svg'; // Optional: provide a fallback image
            }}
          />
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-primary font-bold">{job.company}</span>
              {job.new && (
                <span className="bg-primary text-white px-2 py-1 rounded-full text-sm">NEW!</span>
              )}
              {job.featured && (
                <span className="bg-veryDarkGrayish text-white px-2 py-1 rounded-full text-sm">
                  FEATURED
                </span>
              )}
            </div>
            <h2 className="font-bold text-veryDarkGrayish hover:text-primary cursor-pointer mb-2">
              {job.position}
            </h2>
            <div className="text-darkGrayish flex gap-4 text-sm">
              <span>{job.postedAt}</span>
              <span>•</span>
              <span>{job.contract}</span>
              <span>•</span>
              <span>{job.location}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 border-t md:border-t-0 pt-4 md:pt-0 mt-4 md:mt-0" >
          {[job.role, job.level, ...job.languages, ...job.tools].map((tag) => (
            <button
              key={tag}
              onClick={() => onFilterClick(tag)}
              className="bg-filterTabs text-primary px-2 py-1 rounded cursor-pointer hover:bg-primary hover:text-white"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobCard;