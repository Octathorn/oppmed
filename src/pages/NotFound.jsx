import React from 'react';
import SEOHead from '../components/SEO/SEOHead';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <SEOHead 
        title="Page Not Found - Opportunity Medical"
        description="The page you're looking for doesn't exist. Return to Opportunity Medical's homepage for veteran C&P exam services."
        keywords="404, page not found, opportunity medical"
        url="https://oppmed.com/404"
      />
      
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '2rem',
        backgroundColor: '#f8fafc'
      }}>
        <h1 style={{
          fontSize: '6rem',
          fontWeight: 'bold',
          color: '#1e40af',
          margin: '0 0 1rem 0'
        }}>
          404
        </h1>
        
        <h2 style={{
          fontSize: '2rem',
          fontWeight: '600',
          color: '#1f2937',
          margin: '0 0 1rem 0'
        }}>
          Page Not Found
        </h2>
        
        <p style={{
          fontSize: '1.125rem',
          color: '#6b7280',
          margin: '0 0 2rem 0',
          maxWidth: '500px'
        }}>
          The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
        </p>
        
        <Link 
          to="/"
          style={{
            backgroundColor: '#1e40af',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: '600',
            transition: 'background-color 0.2s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#1d4ed8'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#1e40af'}
        >
          Return to Homepage
        </Link>
      </div>
    </>
  );
};

export default NotFound;
