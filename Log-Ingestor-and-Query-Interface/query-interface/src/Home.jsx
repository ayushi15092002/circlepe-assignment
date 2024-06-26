import React, { useState, useEffect } from 'react';
import CreateLogForm from './CreateLogForm.jsx';
import FilterLogForm from './FilterLogForm.jsx';

const Home = () => {
  const [pageContent, setPageContent] = useState('');
  const [logs, setLogs] = useState([]);

  const fetchLogs = async () => {
    try {
      const response = await fetch('https://circlepe-assignment.onrender.com/api/logs/fetchAllLogs', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch logs');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error creating log:', error);
    }
  };

  useEffect(() => {
    if (pageContent === 'getAllLogs') {
      const getLogs = async () => {
        try {
          const logs = await fetchLogs();
          setLogs(logs);
          console.log('logs: ', logs);
        } catch (error) {
          console.error(error);
        }
      };
      getLogs();
    }
  }, [pageContent]);

  const getPageContent = () => {
    switch (pageContent) {
      case 'createLog':
        return <CreateLogForm />;

      case 'getAllLogs':
        return (
          <div style={{ background: 'black', color: 'white' }}>
            <h2>Logs:</h2>
            <pre>{JSON.stringify(logs, null, 2)}</pre>
          </div>
        );

      case 'getFilteredLogs':
        return (
          <>
            <FilterLogForm />
            {logs.length > 0 && (
              <div style={{ background: 'black', color: 'white' }}>
                <h2>Filtered Logs:</h2>
                <pre>{JSON.stringify(logs, null, 2)}</pre>
              </div>
            )}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <header style={{ background: 'linear-gradient(90deg, rgb(33, 180, 228) 0%, rgb(98, 187, 216) 35%, rgb(193, 226, 233) 100%)' }}>
        <h1>Log Ingestor and Query Interface</h1>
      </header>
      <div style={{ display: 'flex', justifyContent: 'center', columnGap: '30px' }}>
        <button
          onClick={() => {
            setLogs([]);
            setPageContent('createLog');
          }}
        >
          Create Log
        </button>
        <button
          onClick={() => {
            setLogs([]);
            setPageContent('getAllLogs');
          }}
        >
          Fetch All Logs
        </button>
        <button
          onClick={() => {
            setLogs([]);
            setPageContent('getFilteredLogs');
          }}
        >
          Get Filtered Logs
        </button>
      </div>
      {getPageContent()}
    </>
  );
};

export default Home;
