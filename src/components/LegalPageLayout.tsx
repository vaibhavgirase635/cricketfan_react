import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

interface LegalPageLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  lastUpdated: string;
}

const LegalPageLayout: React.FC<LegalPageLayoutProps> = ({ 
  children, 
  title,
  subtitle,
  lastUpdated 
}) => {
  return (
    <div className="min-h-screen bg-canvas">
      <Header />
      <div className="pt-32 pb-20">
        <div className="container">
          <a 
            href="/" 
            className="inline-flex items-center text-accent hover:text-accent-hover transition-colors mb-8 group"
          >
            <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </a>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-surface border border-line rounded-2xl shadow-xl p-8 md:p-12">
              <div className="mb-12 pb-8 border-b border-line">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-accent-hover to-accent">
                  {title}
                </h1>
                {subtitle && (
                  <p className="text-lg text-muted mb-4">{subtitle}</p>
                )}
                <p className="text-sm text-muted">Last updated: {lastUpdated}</p>
              </div>
              
              <div className="prose prose-invert prose-a:text-accent-hover prose-lg max-w-none prose-headings:text-ink prose-headings:font-semibold prose-p:text-muted prose-li:text-muted prose-strong:text-ink">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LegalPageLayout;