import React from 'react';
import type { Job } from '../Types/Job';

interface Props {
  job: Job;
}

const JobCard: React.FC<Props> = ({ job }) => {
  const getImagePath = (logo: string) => {
    try {
      const imageName = logo.replace(/^\.\.\/images\//, '');
      const imageUrl = new URL(`../images/${imageName}`, import.meta.url).href;
      return imageUrl;
    } catch (error) {
      console.error('Error loading image:', error);
      return '/fallback-image.svg';
    }
  };

  return (
    <div className={`bg-white rounded-lg shadow-md p-6 mb-4 ${
      job.featured ? 'border-l-5 border-primary' : ''
    }`}>
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div className="flex gap-6">
          <img
            src={getImagePath(job.logo)}
            alt={job.company}
            className="w-20 h-20 object-contain"
          />
          <div className="flex flex-col justify-between">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-primary font-bold mr-4">{job.company}</span>
              {job.new && (
                <span className="bg-primary text-white px-2 py-1 rounded-full text-sm uppercase">
                  New!
                </span>
              )}
              {job.featured && (
                <span className="bg-very-dark-cyan text-white px-2 py-1 rounded-full text-sm uppercase">
                  Featured
                </span>
              )}
            </div>
            <h2 className="text-very-dark-cyan font-bold text-xl hover:text-primary cursor-pointer">
              {job.position}
            </h2>
            <div className="text-dark-grayish flex items-center gap-4 text-base">
              <span>{job.postedAt}</span>
              <span className="w-1 h-1 bg-dark-grayish rounded-full"></span>
              <span>{job.contract}</span>
              <span className="w-1 h-1 bg-dark-grayish rounded-full"></span>
              <span>{job.location}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 pt-4 border-t lg:border-t-0 lg:pt-0">
          {[job.role, job.level, ...job.languages, ...job.tools].map((tag) => (
            <span
              key={tag}
              className="bg-light-grayish-cyan-bg text-primary px-4 py-2 rounded font-bold hover:bg-primary hover:text-white cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobCard;