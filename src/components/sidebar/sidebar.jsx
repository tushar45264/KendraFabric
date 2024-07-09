import React, { useState } from 'react';
import { GoDatabase } from "react-icons/go";
import { IoAppsOutline } from "react-icons/io5";
import { AiOutlineLineChart } from "react-icons/ai";
import { BiBarChartAlt } from "react-icons/bi";
import { SiMarketo, SiDatabricks } from "react-icons/si";
import { LuUserCircle } from "react-icons/lu";
import { IoIosSettings } from "react-icons/io";
import { ScrollArea } from '../ui/scroll-area';
import { Link } from 'react-router-dom';
import Apps from './App';
import FileUpload from './Fileupload';
const DataIngestion = () => <div>Data Ingestion Content</div>;

const DataPlatform = () => <div>Data Platform Content</div>;
const Marketplaces = () => <div>Marketplaces Content</div>;
const ManageReduction = () => <div>Manage Reduction Content</div>;
const AdminPanel = () => <div>Admin Panel Content</div>;
const APIs = () => <div>APIs Content</div>;
const AnalyticsMetrics = () => <div>Analytics & Metrics Content</div>;
const Settings = () => <div>Settings Content</div>;

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentView, setCurrentView] = useState('apps');

  const renderContent = () => {
    switch (currentView) {
      case 'dataIngestion':
        return <FileUpload />;
      case 'apps':
        return <Apps />;
      case 'dataPlatform':
        return <DataPlatform />;
      case 'marketplaces':
        return <Marketplaces />;
      case 'manageReduction':
        return <ManageReduction />;
      case 'adminPanel':
        return <AdminPanel />;
      case 'apis':
        return <APIs />;
      case 'analyticsMetrics':
        return <AnalyticsMetrics />;
      case 'settings':
        return <Settings />;
      default:
        return <DataIngestion />;
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1">
        <div
          className={`flex flex-col bg-background border-r transition-all duration-300 ${
            isCollapsed ? "w-16 overflow-hidden" : "w-56"
          }`}
        >
          <nav className="flex-1 py-4 space-y-1">
            <Link
              to="#"
              onClick={() => setCurrentView('dataIngestion')}
              className={`flex items-center gap-3 px-4 py-2 text-muted-foreground rounded-md hover:bg-muted hover:text-muted-foreground transition-colors ${
                isCollapsed ? "justify-center" : "justify-start"
              } ${
                currentView === 'dataIngestion' ? 'bg-blue-100 hover:bg-blue-50 ml-1 mr-1 border-l-4 border-blue-500' : ''
              }`}
            >
              <GoDatabase className="h-5 w-5" />
              <span className={`${isCollapsed ? "hidden" : "block"}`}>Data Ingestion</span>
            </Link>
            <Link
              to="#"
              onClick={() => setCurrentView('apps')}
              className={`flex items-center gap-3 px-4 py-2 text-muted-foreground rounded-md hover:bg-muted hover:text-muted-foreground transition-colors ${
                isCollapsed ? "justify-center" : "justify-start"
              } ${
                currentView === 'apps' ? 'bg-blue-100 hover:bg-blue-50 ml-1 mr-1 border-l-4 border-blue-500' : ''
              }`}
            >
              <IoAppsOutline className="h-5 w-5" />
              <span className={`${isCollapsed ? "hidden" : "block"}`}>Apps</span>
            </Link>
            <Link
              to="#"
              onClick={() => setCurrentView('dataPlatform')}
              className={`flex items-center gap-3 px-4 py-2 text-muted-foreground rounded-md hover:bg-muted hover:text-muted-foreground transition-colors ${
                isCollapsed ? "justify-center" : "justify-start"
              } ${
                currentView === 'dataPlatform' ? 'bg-blue-100 hover:bg-blue-50 ml-1 mr-1 border-l-4 border-blue-500' : ''
              }`}
            >
              <AiOutlineLineChart className="h-5 w-5" />
              <span className={`${isCollapsed ? "hidden" : "block"}`}>Data Platform</span>
            </Link>
            <Link
              to="#"
              onClick={() => setCurrentView('marketplaces')}
              className={`flex items-center gap-3 px-4 py-2 text-muted-foreground rounded-md hover:bg-muted hover:text-muted-foreground transition-colors ${
                isCollapsed ? "justify-center" : "justify-start"
              } ${
                currentView === 'marketplaces' ? 'bg-blue-100 hover:bg-blue-50 ml-1 mr-1 border-l-4 border-blue-500' : ''
              }`}
            >
              <SiMarketo className="h-5 w-5" />
              <span className={`${isCollapsed ? "hidden" : "block"}`}>Marketplaces</span>
            </Link>
            {/* <Link
              to="#"
              onClick={() => setCurrentView('manageReduction')}
              className={`flex items-center gap-3 px-4 py-2 text-muted-foreground rounded-md hover:bg-muted hover:text-muted-foreground transition-colors ${
                isCollapsed ? "justify-center" : "justify-start"
              } ${
                currentView === 'manageReduction' ? 'bg-blue-100 hover:bg-blue-50 ml-1 mr-1 border-l-4 border-blue-500' : ''
              }`}
            >
              <PiGraphDuotone className="h-5 w-5" />
              <span className={`${isCollapsed ? "hidden" : "block"}`}>Manage Reduction</span>
            </Link> */}
            <Link
              to="#"
              onClick={() => setCurrentView('adminPanel')}
              className={`flex items-center gap-3 px-4 py-2 text-muted-foreground rounded-md hover:bg-muted hover:text-muted-foreground transition-colors ${
                isCollapsed ? "justify-center" : "justify-start"
              } ${
                currentView === 'adminPanel' ? 'bg-blue-100 hover:bg-blue-50 ml-1 mr-1 border-l-4 border-blue-500' : ''
              }`}
            >
              <LuUserCircle className="h-5 w-5" />
              <span className={`${isCollapsed ? "hidden" : "block"}`}>Admin Panel</span>
            </Link>
            <Link
              to="#"
              onClick={() => setCurrentView('apis')}
              className={`flex items-center gap-3 px-4 py-2 text-muted-foreground rounded-md hover:bg-muted hover:text-muted-foreground transition-colors ${
                isCollapsed ? "justify-center" : "justify-start"
              } ${
                currentView === 'apis' ? 'bg-blue-100 hover:bg-blue-50 ml-1 mr-1 border-l-4 border-blue-500' : ''
              }`}
            >
              <SiDatabricks className="h-5 w-5" />
              <span className={`${isCollapsed ? "hidden" : "block"}`}>APIs</span>
            </Link>
            <Link
              to="#"
              onClick={() => setCurrentView('analyticsMetrics')}
              className={`flex items-center gap-3 px-4 py-2 text-muted-foreground rounded-md hover:bg-muted hover:text-muted-foreground transition-colors ${
                isCollapsed ? "justify-center" : "justify-start"
              } ${
                currentView === 'analyticsMetrics' ? 'bg-blue-100 hover:bg-blue-50 ml-1 mr-1 border-l-4 border-blue-500' : ''
              }`}
            >
              <BiBarChartAlt className="h-5 w-5" />
              <span className={`${isCollapsed ? "hidden" : "block"}`}>Analytics & Metrics</span>
            </Link>
            <Link
              to="#"
              onClick={() => setCurrentView('settings')}
              className={`flex items-center gap-3 px-4 py-2 text-muted-foreground rounded-md hover:bg-muted hover:text-muted-foreground transition-colors ${
                isCollapsed ? "justify-center" : "justify-start"
              } ${
                currentView === 'settings' ? 'bg-blue-100 hover:bg-blue-50 ml-1 mr-1 border-l-4 border-blue-500' : ''
              }`}
            >
              <IoIosSettings className="h-5 w-5" />
              <span className={`${isCollapsed ? "hidden" : "block"}`}>Settings</span>
            </Link>
          </nav>
          <div
            className={`flex items-center justify-center px-4 py-3 border-t cursor-pointer transition-all duration-300 ${
              isCollapsed ? "bg-muted text-muted-foreground rounded-r-md" : "bg-background text-muted-foreground"
            }`}
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <ChevronLeftIcon className="h-5 w-5" />
            <span className={`ml-2 ${isCollapsed ? "hidden" : "block"}`}>{isCollapsed ? "Expand" : "Collapse"}</span>
          </div>
        </div>
        <ScrollArea className="h-screen w-full  flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">{currentView}</h1>
          </div>
          {renderContent()}
        </ScrollArea>
      </div>
    </div>
  );
}

function ChevronLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}

export default Sidebar