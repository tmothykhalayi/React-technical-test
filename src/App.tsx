import React from 'react';
import JobList from './components/JobList';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary h-40 w-full mb-8 bg-[url('/images/bg-header-desktop.svg')] bg-cover bg-no-repeat">
        <h1 className="sr-only">Job Listings</h1>
      </header>
      <main className="px-6 max-w-7xl mx-auto -mt-8">
        <JobList />
      </main>
    </div>
  );
};

export default App;