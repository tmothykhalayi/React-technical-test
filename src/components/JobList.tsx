import React from 'react';
import JobCard from './JobCard';
import jobData from '../data/data.json';
import type { Job } from '../Types/Job';

const JobList: React.FC = () => {
  return (
    <div className="space-y-6">
      {jobData.map((job: Job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default JobList;