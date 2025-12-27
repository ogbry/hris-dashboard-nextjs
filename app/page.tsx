'use client';

import { useState } from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Legend } from 'recharts';
import {
  Users,
  Briefcase,
  TrendingUp,
  UserPlus,
  LayoutDashboard,
  UserCircle,
  FileText,
  Calendar,
  DollarSign,
  Settings,
  Bell,
  Search,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';

export default function HRDashboard() {
  const [activeNav, setActiveNav] = useState('Dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [selectedBenefit, setSelectedBenefit] = useState<any>(null);
  const [learningTab, setLearningTab] = useState('my-courses');
  const [selectedMorePage, setSelectedMorePage] = useState<string | null>(null);
  const [selectedHRTool, setSelectedHRTool] = useState<string | null>(null);

  const navItems = [
    { name: 'Dashboard', icon: LayoutDashboard },
    { name: 'Org Chart', icon: Users },
    { name: 'Career', icon: Briefcase },
    { name: 'Benefits', icon: TrendingUp },
    { name: 'Learning', icon: FileText },
    { name: 'More', icon: ChevronDown },
  ];

  const hrAdminTools = [
    { name: 'Employee Database', icon: '👥', desc: 'Manage employee records and information' },
    { name: 'Workforce Classification', icon: '📊', desc: 'Classify and categorize workforce' },
    { name: 'Recruitment KPIs', icon: '📈', desc: 'Track recruitment metrics and performance' },
    { name: 'Turnover & Retention', icon: '🔄', desc: 'Monitor employee turnover rates' },
    { name: 'Incident Management', icon: '⚠️', desc: 'Manage employee relations and incidents' },
    { name: 'Compliance & Audit', icon: '✅', desc: 'Ensure compliance and audit readiness' },
    { name: 'Applicant Tracking', icon: '📋', desc: 'Track job applicants and candidates' },
    { name: 'Onboarding', icon: '🎯', desc: 'Manage new hire onboarding process' },
    { name: 'Training & Dev', icon: '📚', desc: 'HR training management and development' },
    { name: 'Offboarding', icon: '👋', desc: 'Manage employee exit process' },
  ];

  // Mock data
  const kpiData = [
    { icon: Users, label: 'Total Employees', value: '230', color: '#E8B088' },
    { icon: Briefcase, label: 'Open Positions', value: '12', color: '#E8B088' },
    { icon: TrendingUp, label: 'Turnover Rate', value: '8%', color: '#E8B088' },
    { icon: UserPlus, label: 'New Hires this Month', value: '15', color: '#E8B088' },
  ];

  const recruitmentData = [
    { stage: 'Applicants', value: 52500, percentage: 100 },
    { stage: 'Interviewed', value: 20, days: '20 days' },
    { stage: 'Offered', value: 80, percentage: 80 },
    { stage: 'Hired', value: 15, percentage: 15 },
  ];

  const turnoverPieData = [
    { name: 'Salary', value: 60 },
    { name: 'Relocation', value: 40 },
  ];

  const turnoverBarData = [
    { dept: 'Oct', value: 12 },
    { dept: 'HR', value: 9 },
    { dept: 'Fina', value: 7 },
    { dept: 'Ops', value: 4 },
  ];

  const birthdaysData = [
    { name: 'Sarah M.', date: 'Today', avatar: '👩' },
    { name: 'John D.', date: 'Tomorrow', avatar: '👨' },
    { name: 'Emily R.', date: 'Birthday', avatar: '👩' },
    { name: 'Mike T.', date: '2 Days', avatar: '👨' },
  ];

  const trainingData = [
    { label: 'Compliance Training', percentage: 75, color: '#E8B088' },
    { label: 'Mandatory Courses', percentage: 65, color: '#D4915C' },
  ];

  const incidentData = {
    openCases: 5,
    resolvedCases: 12,
  };

  const orgChartData = {
    ceo: {
      name: 'Elena Rodriguez',
      position: 'CEO',
      avatar: '👩‍💼',
    },
    departments: [
      { name: 'Operations', avatar: '👩', position: 'Operations' },
      { name: 'Maria Santos', avatar: '👩', position: 'Maria Santos', isMiddle: true },
      { name: 'Finance', avatar: '👨', position: 'Finance' },
    ],
    employees: [
      { name: 'Finance', avatar: '👩', position: 'Finance' },
      {
        name: 'Department: HR',
        position: 'HR Manager',
        email: 'hrmanager@company.com',
        phone: '(987) 789-0000',
        reports: 'Reports To: Elena Rodriguez',
        avatar: '👨',
        showDetails: true,
      },
      { name: 'Rajesh Singh', avatar: '👨', position: 'Rajesh Singh' },
    ],
  };

  const personnelData = [
    {
      id: 1,
      name: 'Maria Santos',
      position: 'HR Manager',
      department: 'HR Department',
      phone: '(987) 123-4567',
      avatar: '👩',
    },
    {
      id: 2,
      name: 'David Santos',
      position: 'HR Manager',
      department: 'HR Department',
      phone: '(987) 123-4567',
      avatar: '👨',
    },
    {
      id: 3,
      name: 'Operations Manager',
      position: 'Manager',
      department: 'HR Department',
      phone: '(988) 789-7654',
      avatar: '👨',
    },
    {
      id: 4,
      name: 'Rajesh Singh',
      position: 'HR Specialist',
      department: 'Operations Department',
      phone: '(987) 789-5543',
      avatar: '👨',
    },
    {
      id: 5,
      name: 'Aisha Khan',
      position: 'Recruiter',
      department: 'HR Department',
      phone: '(987) 456-7890',
      avatar: '👩',
    },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState('All');

  const filteredPersonnel = personnelData.filter((person) => {
    const matchesSearch = person.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = selectedDept === 'All' || person.department.includes(selectedDept);
    return matchesSearch && matchesDept;
  });

  // Career Page Data
  const jobListings = [
    {
      id: 1,
      title: 'Software Engineer Lead',
      department: 'Engineering Department',
      location: 'San Francisco, CA',
      type: 'Full-Time',
      posted: '2 days ago',
      experience: '5+ years',
      about: 'Join our team as a prominent engineer, fully solely scale servers focusing on site. Adapting the learning of our client files and providing app decisions to build or, there are the placement of customers too many to claim.',
      responsibilities: [
        'Lead a team of software engineers in designing and developing scalable applications',
        'Collaborate with cross-functional teams to define, design, and ship new features',
        'Maintain code quality, organization, and automatization by following best practices',
        'Mentor junior developers and conduct code reviews'
      ],
      qualifications: [
        'This is a resident so you may thus be sage of needle or of spot staff, ObsCam you converting this stuff thing is to plant as an app right now from this Tree',
        'Problem, leaders, A mount and as with next makes or, These is a resident.'
      ],
      benefits: ['Health Insurance', 'Paid Time Off', 'Remote Work Options', '401(k) Matching']
    },
    {
      id: 2,
      title: 'Marketing Specialist',
      department: 'Marketing',
      location: 'Los Angeles, CA',
      type: 'Full-Time',
      posted: '1 week ago',
      experience: '3+ years',
      about: 'We are looking for a creative Marketing Specialist to join our dynamic team.',
      responsibilities: [
        'Develop and implement marketing strategies',
        'Manage social media campaigns',
        'Analyze market trends and competitor activities',
        'Create engaging content for various platforms'
      ],
      qualifications: [
        'Bachelor\'s degree in Marketing or related field',
        '3+ years of marketing experience',
        'Strong analytical and communication skills',
        'Proficiency in digital marketing tools'
      ],
      benefits: ['Health Insurance', 'Paid Time Off', 'Professional Development', 'Gym Membership']
    },
    {
      id: 3,
      title: 'HR Business Partner',
      department: 'HR Department',
      location: 'San Francisco, CA',
      type: 'Part-Time',
      posted: '3 days ago',
      experience: 'Experienced Applicant Room',
      about: 'Support our HR team in strategic workforce planning and employee relations.',
      responsibilities: [
        'Partner with business leaders on HR initiatives',
        'Manage employee relations and conflict resolution',
        'Support talent acquisition and retention strategies',
        'Conduct training and development programs'
      ],
      qualifications: [
        'Bachelor\'s degree in HR Management',
        '5+ years of HR experience',
        'Strong interpersonal skills',
        'Knowledge of employment law'
      ],
      benefits: ['Health Insurance', 'Flexible Schedule', 'Professional Development']
    }
  ];

  // Employee Benefits Data
  const benefitsData = [
    {
      category: 'Medical Insurance',
      subtitle: 'Comprehensive coverage',
      items: ['Medical', 'Dental', 'Vision'],
      icon: '🏥',
      details: {
        eligibility: 'Full-time employees after 90 days. Eligibility applies to part-time (minimum 4 hours, Cosmetic enhancements)',
        inclusions: 'Outpatient, Outpatient care, Hospitalization, Inpatient care at network\'s primary rooms, Cosmetic procedures',
        exclusions: 'Pre-existing conditions (use cost mitigation procedures)',
        documents: [
          { name: 'AoA Semplate', type: 'PDF' },
          { name: 'Policy Handbook 2024.pdf', type: 'PDF' },
          { name: 'Policy Handbook 2024.pdf', type: 'PDF' },
          { name: 'Claim Form.pdf', type: 'PDF' },
          { name: 'Provider Network', type: 'Download', highlighted: true }
        ]
      }
    },
    {
      category: 'Paid Time Off',
      subtitle: 'Vacation & sick leave',
      items: ['15 days PTO', '10 sick days', '8 holidays'],
      icon: '🏖️',
      details: {
        eligibility: 'All employees are eligible from day one',
        inclusions: '15 days paid vacation, 10 sick days, 8 federal holidays',
        exclusions: 'PTO cannot be carried over beyond current fiscal year',
        documents: [
          { name: 'PTO Policy 2024.pdf', type: 'PDF' },
          { name: 'Holiday Calendar.pdf', type: 'PDF' }
        ]
      }
    },
    {
      category: 'Dental Insurance',
      subtitle: 'Oral care included',
      items: ['Preventive care', 'Basic procedures', 'Major work'],
      icon: '🦷',
      details: {
        eligibility: 'Full-time employees after 90 days',
        inclusions: 'Cleanings, fillings, crowns, root canals',
        exclusions: 'Cosmetic dentistry procedures',
        documents: [
          { name: 'Dental Policy.pdf', type: 'PDF' },
          { name: 'Provider List.pdf', type: 'PDF' }
        ]
      }
    },
    {
      category: 'FMLA',
      subtitle: 'Family & Medical Leave',
      items: ['Up to 12 weeks', 'Job protection'],
      icon: '🛡️',
      details: {
        eligibility: 'Employees who have worked for 12 months',
        inclusions: 'Birth/adoption of child, serious health condition, family care',
        exclusions: 'Non-serious medical conditions',
        documents: [
          { name: 'FMLA Guide.pdf', type: 'PDF' }
        ]
      }
    },
    {
      category: 'Bereavement Leave',
      subtitle: 'Support in tough times',
      items: ['Paid leave', 'Extended family coverage'],
      icon: '🕊️',
      details: {
        eligibility: 'All employees',
        inclusions: 'Up to 5 days for immediate family, 3 days for extended family',
        exclusions: 'Must provide documentation',
        documents: [
          { name: 'Bereavement Policy.pdf', type: 'PDF' }
        ]
      }
    },
    {
      category: 'Bereavement Leave',
      subtitle: 'Support in tough times',
      items: ['Paid leave', 'Extended family coverage'],
      icon: '🖤',
      details: {
        eligibility: 'All employees',
        inclusions: 'Up to 5 days for immediate family',
        exclusions: 'Must provide documentation',
        documents: [
          { name: 'Bereavement Policy.pdf', type: 'PDF' }
        ]
      }
    }
  ];

  // Learning Courses Data
  const myCoursesData = [
    { id: 1, title: 'Leadership Skills', progress: 45, duration: '4 weeks', status: 'In Progress', thumbnail: '📚' },
    { id: 2, title: 'Data Analytics', progress: 0, duration: '6 weeks', status: 'Not Started', thumbnail: '📊' },
    { id: 3, title: 'Data Analytics', progress: 20, duration: '3 weeks', status: 'In Progress', thumbnail: '📈' },
    { id: 4, title: 'Project Management', progress: 10, duration: '5 weeks', status: 'In Progress', thumbnail: '🔗' },
  ];

  const exploreCatalogData = [
    { id: 5, title: 'Leadership Skills', instructor: 'Practice Experts', level: 'Intermediate', thumbnail: '👔', recommended: true },
    { id: 6, title: 'Communication Skills', instructor: 'Fred & Jun', level: 'Beginner', thumbnail: '💬', recommended: true },
    { id: 7, title: 'Communication Skills', instructor: 'Fred & Jun', level: 'Beginner', thumbnail: '💬', recommended: false },
    { id: 8, title: 'Software Training', instructor: 'Practice Experts', level: 'Intermediate', thumbnail: '💻', recommended: false },
    { id: 9, title: 'Onboarding', instructor: 'Visual Ready Co.', level: 'Beginner', thumbnail: '🎯', recommended: false },
  ];

  const COLORS = ['#E8B088', '#86EFAC'];

  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      {/* Top Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Brand */}
            <div className="flex items-center gap-8">
              <div className="flex items-center">
                <img
                  src="https://rfcservice.com/wp-content/uploads/2024/03/rfc-01.png"
                  alt="RFC Logo"
                  className="h-10"
                  style={{ width: 'auto', maxWidth: 'none' }}
                />
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-0.5 lg:gap-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.name}
                      onClick={() => setActiveNav(item.name)}
                      className={`flex items-center gap-1 lg:gap-2 px-2 lg:px-4 py-2 rounded-lg text-xs lg:text-sm font-medium transition-all whitespace-nowrap ${
                        activeNav === item.name
                          ? 'bg-[#FEF5EC] text-[#D4915C] shadow-sm'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      <Icon size={16} className="lg:w-[18px] lg:h-[18px] flex-shrink-0" />
                      <span className="hidden lg:inline">{item.name}</span>
                      <span className="lg:hidden text-[10px]">{item.name.split(' ')[0]}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Side - Search, Notifications, Profile */}
            <div className="flex items-center gap-2 lg:gap-4">
              {/* Search */}
              <div className="hidden xl:flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg">
                <Search size={16} className="text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent border-none outline-none text-sm text-gray-700 w-32 lg:w-48"
                />
              </div>

              {/* HR Portal Access */}
              <button
                onClick={() => setActiveNav('HR Portal')}
                className={`hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg font-medium text-sm transition-all ${
                  activeNav === 'HR Portal'
                    ? 'bg-gradient-to-r from-[#F5A962] to-[#D4915C] text-white shadow-md'
                    : 'bg-[#FEF5EC] text-[#D4915C] hover:bg-[#E8B088] hover:text-white'
                }`}
              >
                <Settings size={16} />
                <span className="hidden lg:inline">HR Portal</span>
              </button>

              {/* Notifications */}
              <button className="relative p-1.5 lg:p-2 rounded-lg hover:bg-gray-50 transition-colors">
                <Bell size={18} className="text-gray-600 lg:w-5 lg:h-5" />
                <span className="absolute top-0.5 right-0.5 w-2 h-2 bg-[#F5A962] rounded-full"></span>
              </button>

              {/* Profile Dropdown */}
              <div className="relative hidden md:block">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center gap-2 lg:gap-3 p-1.5 lg:p-2 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="w-7 h-7 lg:w-8 lg:h-8 bg-gradient-to-br from-[#E8B088] to-[#D4915C] rounded-full flex items-center justify-center flex-shrink-0">
                    <UserCircle size={18} className="text-white lg:w-5 lg:h-5" />
                  </div>
                  <div className="hidden xl:block text-left">
                    <p className="text-sm font-medium text-gray-900">Admin User</p>
                    <p className="text-xs text-gray-500">admin@company.com</p>
                  </div>
                  <ChevronDown size={14} className="text-gray-400 lg:w-4 lg:h-4" />
                </button>

                {/* Profile Dropdown Menu */}
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                    <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50">
                      My Profile
                    </button>
                    <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50">
                      Settings
                    </button>
                    <hr className="my-2" />
                    <button className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50">
                      Logout
                    </button>
                  </div>
                )}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-50"
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.name}
                      onClick={() => {
                        setActiveNav(item.name);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                        activeNav === item.name
                          ? 'bg-[#FEF5EC] text-[#D4915C]'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <Icon size={18} />
                      <span>{item.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <div className="p-6">
        <div className="max-w-7xl mx-auto space-y-6">

        {/* Dashboard Page */}
        {activeNav === 'Dashboard' && (
          <div className="animate-fadeIn space-y-6">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {kpiData.map((kpi, index) => {
            const Icon = kpi.icon;
            return (
              <div
                key={index}
                className="bg-[#FEF5EC] rounded-lg p-5 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer hover:-translate-y-1 animate-slideUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <Icon size={18} color={kpi.color} />
                  <span className="text-sm text-gray-600">{kpi.label}</span>
                </div>
                <div className="text-3xl font-bold text-gray-900">{kpi.value}</div>
              </div>
            );
          })}
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 animate-slideUp" style={{ animationDelay: '400ms' }}>
          {/* Recruitment Performance */}
          <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recruitment Performance</h3>
            <div className="flex items-center gap-8">
              {/* Funnel */}
              <div className="relative flex-1">
                <svg viewBox="0 0 200 180" className="w-full max-w-[200px]">
                  <defs>
                    <linearGradient id="funnelGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#F5A962" />
                      <stop offset="100%" stopColor="#D4915C" />
                    </linearGradient>
                  </defs>
                  {/* Top section */}
                  <path d="M 20 20 L 180 20 L 160 60 L 40 60 Z" fill="url(#funnelGradient)" />
                  {/* Second section */}
                  <path d="M 40 60 L 160 60 L 140 100 L 60 100 Z" fill="#E8B088" />
                  {/* Third section */}
                  <path d="M 60 100 L 140 100 L 120 140 L 80 140 Z" fill="#D9A179" />
                  {/* Bottom section */}
                  <path d="M 80 140 L 120 140 L 110 170 L 90 170 Z" fill="#C8956A" />
                </svg>
              </div>

              {/* Stats */}
              <div className="flex-1 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Applicants</span>
                  <span className="font-semibold text-gray-900">$2,500</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Interviewed</span>
                  <span className="font-semibold text-gray-900">20 days</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Offered</span>
                  <span className="font-semibold text-gray-900">80%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Hired</span>
                  <span className="font-semibold text-gray-900">15%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Turnover and Retention */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Turnover and Retention</h3>
            <div className="grid grid-cols-2 gap-4">
              {/* Donut Chart */}
              <div className="flex flex-col items-center">
                <ResponsiveContainer width="100%" height={120}>
                  <PieChart>
                    <Pie
                      data={turnoverPieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={30}
                      outerRadius={50}
                      dataKey="value"
                    >
                      {turnoverPieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index]} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="flex gap-3 text-xs mt-2">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-[#E8B088]"></div>
                    <span>Salary</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-[#86EFAC]"></div>
                    <span>Relocation</span>
                  </div>
                </div>
              </div>

              {/* Bar Chart */}
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-2">Turnover by Department</h4>
                <ResponsiveContainer width="100%" height={100}>
                  <BarChart data={turnoverBarData}>
                    <XAxis dataKey="dept" tick={{ fontSize: 11 }} />
                    <Bar dataKey="value" fill="#E8B088" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        {/* Third Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-slideUp" style={{ animationDelay: '600ms' }}>
          {/* Upcoming Birthdays & Anniversaries */}
          <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Upcoming Birthdays & Anniversaries
            </h3>
            <div className="space-y-3">
              {birthdaysData.map((person, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 hover:bg-gray-50 p-2 rounded-lg transition-all duration-200 cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-full bg-[#FEF5EC] flex items-center justify-center text-xl">
                    {person.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900">{person.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Training & Compliance Tracker */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Training & Compliance Tracker
            </h3>
            <div className="space-y-4">
              {trainingData.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">{item.label}</span>
                    <span className="text-sm font-semibold text-gray-900">{item.percentage}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500 hover:opacity-80"
                      style={{
                        width: `${item.percentage}%`,
                        backgroundColor: item.color,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Incident Reports Summary */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Incident Reports Summary</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-[#FEF5EC] rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                <div className="text-sm text-gray-600 mb-1">Open Cases</div>
                <div className="text-3xl font-bold text-gray-900">{incidentData.openCases}</div>
              </div>
              <div className="text-center p-4 bg-[#FEF5EC] rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                <div className="text-sm text-gray-600 mb-1">Resolved Cases</div>
                <div className="text-3xl font-bold text-gray-900">{incidentData.resolvedCases}</div>
              </div>
            </div>
          </div>
        </div>
          </div>
        )}

        {/* Org Chart Page */}
        {activeNav === 'Org Chart' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fadeIn">
            {/* Organizational Chart */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Organizational Chart</h3>

              {/* CEO */}
              <div className="flex flex-col items-center mb-8 animate-slideUp">
                <div className="bg-[#FEF5EC] rounded-lg p-4 border-2 border-[#E8B088] min-w-[200px] hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-2xl border-2 border-[#E8B088]">
                      {orgChartData.ceo.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{orgChartData.ceo.position}</div>
                      <div className="text-sm text-gray-600">{orgChartData.ceo.name}</div>
                    </div>
                  </div>
                </div>
                <div className="w-0.5 h-8 bg-gray-300"></div>
              </div>

              {/* First Level - Departments */}
              <div className="grid grid-cols-3 gap-4 mb-4">
                {orgChartData.departments.map((dept, index) => (
                  <div key={index} className="flex flex-col items-center animate-slideUp" style={{ animationDelay: `${(index + 1) * 100}ms` }}>
                    <div className="w-0.5 h-4 bg-gray-300"></div>
                    <div className="bg-[#E8B088] rounded-lg p-3 text-center min-h-[80px] flex flex-col items-center justify-center w-full hover:bg-[#D4915C] transition-colors duration-300 cursor-pointer">
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-lg mb-1">
                        {dept.avatar}
                      </div>
                      <div className="text-sm font-semibold text-white">{dept.position}</div>
                    </div>
                    {dept.isMiddle && <div className="w-0.5 h-8 bg-gray-300"></div>}
                  </div>
                ))}
              </div>

              {/* Second Level - Employees */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                {orgChartData.employees.map((emp, index) => (
                  <div key={index} className="flex flex-col items-center">
                    {index === 1 && <div className="w-0.5 h-4 bg-gray-300"></div>}
                    <div className={`rounded-lg p-3 w-full ${emp.showDetails ? 'bg-[#FEF5EC] border border-gray-200' : 'bg-[#E8B088]'}`}>
                      {emp.showDetails ? (
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-lg border border-[#E8B088]">
                              {emp.avatar}
                            </div>
                            <div className="text-sm font-semibold text-gray-900">{emp.name}</div>
                          </div>
                          <div className="text-xs text-gray-600">{emp.position}</div>
                          <div className="text-xs text-gray-600">{emp.email}</div>
                          <div className="text-xs text-gray-600">{emp.phone}</div>
                          <div className="text-xs text-gray-500 italic">{emp.reports}</div>
                          <button className="mt-2 text-xs bg-white p-1 rounded border border-gray-300 w-full hover:bg-gray-50">
                            🔍
                          </button>
                        </div>
                      ) : (
                        <div className="text-center">
                          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-lg mb-1 mx-auto">
                            {emp.avatar}
                          </div>
                          <div className="text-xs font-semibold text-white">{emp.position}</div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center text-xs text-gray-400 mt-6">
                © 2024 [Company Name]
              </div>
            </div>

            {/* Key Personnel Directory */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Key Personnel Directory</h3>
                <img
                  src="https://rfcservice.com/wp-content/uploads/2024/03/rfc-01.png"
                  alt="RELIANCE"
                  className="h-8 w-auto object-contain"
                />
              </div>

              {/* Search Bar */}
              <div className="relative mb-4">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg pl-4 pr-10 py-2 text-sm outline-none focus:border-[#E8B088] transition-colors"
                />
                <Search size={18} className="absolute right-3 top-2.5 text-gray-400" />
              </div>

              {/* Department Filters */}
              <div className="flex gap-2 mb-4">
                {['All', 'HR', 'Operations'].map((dept) => (
                  <button
                    key={dept}
                    onClick={() => setSelectedDept(dept)}
                    className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
                      selectedDept === dept
                        ? 'bg-[#E8B088] text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {dept}
                  </button>
                ))}
              </div>

              {/* Personnel List */}
              <div className="space-y-3 max-h-[400px] overflow-y-auto">
                {filteredPersonnel.map((person, index) => (
                  <div
                    key={person.id}
                    className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-200 hover:shadow-sm animate-slideUp cursor-pointer"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-2xl border-2 border-[#E8B088] flex-shrink-0">
                      {person.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-gray-900 text-sm">{person.name}</div>
                      <div className="text-xs text-gray-600">{person.position}</div>
                      <div className="text-xs text-gray-500">{person.department}</div>
                      <div className="text-xs text-gray-500">{person.phone}</div>
                    </div>
                    <button className="bg-[#E8B088] hover:bg-[#D4915C] text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex-shrink-0 hover:shadow-md active:scale-95">
                      View Profile
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Career Page */}
        {activeNav === 'Career' && (
          <div className="animate-fadeIn space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Career Opportunities</h2>
              <p className="text-gray-600 mb-6">Join our team and grow your career with us</p>

              {/* Job Filter Tabs */}
              <div className="flex gap-2 mb-6 border-b border-gray-200">
                {['Department', 'Job Level', 'Job Type', 'Location'].map((filter) => (
                  <button
                    key={filter}
                    className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-[#D4915C] hover:border-b-2 hover:border-[#D4915C] transition-colors"
                  >
                    {filter}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 gap-4">
                {jobListings.map((job, index) => (
                  <div
                    key={job.id}
                    onClick={() => setSelectedJob(job)}
                    className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all duration-200 animate-slideUp cursor-pointer hover:border-[#E8B088]"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{job.title}</h3>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                          <span className="flex items-center gap-1">
                            <Briefcase size={16} className="text-[#E8B088]" />
                            {job.department}
                          </span>
                          <span className="flex items-center gap-1">
                            📍 {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            ⏰ {job.type}
                          </span>
                          <span className="flex items-center gap-1">
                            💼 {job.experience}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500">Posted {job.posted}</p>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedJob(job);
                        }}
                        className="bg-[#E8B088] hover:bg-[#D4915C] text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 hover:shadow-md active:scale-95"
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Job Details Modal */}
            {selectedJob && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedJob(null)}>
                <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                  <div className="sticky top-0 bg-gradient-to-r from-[#F5A962] to-[#D4915C] text-white p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h2 className="text-2xl font-bold mb-2">{selectedJob.title}</h2>
                        <div className="flex flex-wrap gap-4 text-sm text-white/90">
                          <span>📍 {selectedJob.location}</span>
                          <span>⏰ {selectedJob.type}</span>
                          <span>💼 {selectedJob.experience}</span>
                        </div>
                      </div>
                      <button onClick={() => setSelectedJob(null)} className="text-white hover:bg-white/20 p-2 rounded-lg">
                        <X size={24} />
                      </button>
                    </div>
                  </div>

                  <div className="p-6 space-y-6">
                    {/* About the Role */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">About the Role</h3>
                      <p className="text-gray-700">{selectedJob.about}</p>
                    </div>

                    {/* Responsibilities */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Responsibilities:</h3>
                      <ul className="space-y-2">
                        {selectedJob.responsibilities.map((resp: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-700">
                            <span className="text-[#E8B088] mt-1">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Qualifications */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Qualifications:</h3>
                      <ul className="space-y-2">
                        {selectedJob.qualifications.map((qual: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-700">
                            <span className="text-[#E8B088] mt-1">•</span>
                            <span>{qual}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Benefits:</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedJob.benefits.map((benefit: string, idx: number) => (
                          <span key={idx} className="bg-[#FEF5EC] text-[#D4915C] px-3 py-1 rounded-full text-sm">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Apply Button */}
                    <div className="pt-4 border-t border-gray-200">
                      <button className="w-full bg-gradient-to-r from-[#F5A962] to-[#D4915C] text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all active:scale-95">
                        Apply for this Position
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Employee Benefits Page */}
        {activeNav === 'Benefits' && (
          <div className="animate-fadeIn space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Company Benefits</h2>
              <p className="text-gray-600 mb-6">Comprehensive benefits package for our team</p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {benefitsData.map((benefit, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedBenefit(benefit)}
                    className="bg-[#FEF5EC] rounded-lg p-6 hover:shadow-lg transition-all duration-300 animate-slideUp cursor-pointer border-2 border-transparent hover:border-[#E8B088]"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-4xl">{benefit.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900">{benefit.category}</h3>
                        <p className="text-xs text-gray-600">{benefit.subtitle}</p>
                      </div>
                    </div>
                    <ul className="space-y-1">
                      {benefit.items.map((item, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="text-[#E8B088] mt-0.5">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-gradient-to-r from-[#F5A962] to-[#D4915C] rounded-lg p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">PTO Request</h3>
                <p className="mb-4">Submit your time-off requests. Syncs with Deputy and ADP.</p>
                <button className="bg-white text-[#D4915C] px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all active:scale-95">
                  Request Time Off
                </button>
              </div>
            </div>

            {/* Benefit Details Modal */}
            {selectedBenefit && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedBenefit(null)}>
                <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
                  <div className="bg-white p-6 border-b border-gray-200 flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-gray-900">{selectedBenefit.category}</h2>
                    <button onClick={() => setSelectedBenefit(null)} className="text-gray-500 hover:bg-gray-100 p-2 rounded-lg">
                      <X size={24} />
                    </button>
                  </div>

                  {/* Tabs */}
                  <div className="flex border-b border-gray-200">
                    {['Overview', 'Documents', 'Download All', 'FAQs'].map((tab, idx) => (
                      <button
                        key={tab}
                        className={`px-6 py-3 text-sm font-medium transition-colors ${
                          idx === 0
                            ? 'text-[#D4915C] border-b-2 border-[#D4915C]'
                            : idx === 2
                            ? 'bg-[#E8B088] text-white ml-auto'
                            : 'text-gray-600 hover:text-gray-900'
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>

                  <div className="p-6 overflow-y-auto max-h-[60vh]">
                    <div className="grid grid-cols-3 gap-6">
                      {/* Left Column - Eligibility */}
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-3">Eligibility</h3>
                        <p className="text-sm text-gray-700">{selectedBenefit.details.eligibility}</p>
                      </div>

                      {/* Middle Column - Inclusions */}
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-3">Inclusions</h3>
                        <p className="text-sm text-gray-700">{selectedBenefit.details.inclusions}</p>
                      </div>

                      {/* Right Column - Documents */}
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-3">Documents</h3>
                        <div className="space-y-2">
                          {selectedBenefit.details.documents.map((doc: any, idx: number) => (
                            <div
                              key={idx}
                              className={`flex items-center justify-between p-2 rounded ${
                                doc.highlighted ? 'bg-[#E8B088] text-white' : 'hover:bg-gray-50'
                              }`}
                            >
                              <div className="flex items-center gap-2">
                                <span className="text-xs">📄</span>
                                <span className="text-sm">{doc.name}</span>
                              </div>
                              {doc.highlighted && (
                                <span className="text-xs bg-white text-[#D4915C] px-2 py-1 rounded">Download</span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Exclusions */}
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <h3 className="font-semibold text-gray-900 mb-3">Exclusions</h3>
                      <p className="text-sm text-gray-700">{selectedBenefit.details.exclusions}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Learning Management System */}
        {activeNav === 'Learning' && (
          <div className="animate-fadeIn space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Learning & Development</h2>
              <p className="text-gray-600 mb-6">Develop your skills with our training courses</p>

              {/* Tabs */}
              <div className="flex gap-4 mb-6 border-b border-gray-200">
                <button
                  onClick={() => setLearningTab('my-courses')}
                  className={`pb-3 px-4 font-medium transition-colors ${
                    learningTab === 'my-courses'
                      ? 'text-[#D4915C] border-b-2 border-[#D4915C]'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  My Courses
                </button>
                <button
                  onClick={() => setLearningTab('explore')}
                  className={`pb-3 px-4 font-medium transition-colors ${
                    learningTab === 'explore'
                      ? 'text-[#D4915C] border-b-2 border-[#D4915C]'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Explore Catalog
                </button>
              </div>

              {/* My Courses Tab */}
              {learningTab === 'my-courses' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {myCoursesData.map((course, index) => (
                    <div
                      key={course.id}
                      className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-all duration-200 animate-slideUp"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex gap-4">
                        <div className="w-16 h-16 bg-[#FEF5EC] rounded-lg flex items-center justify-center text-3xl flex-shrink-0">
                          {course.thumbnail}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-1">{course.title}</h3>
                          <p className="text-xs text-gray-600 mb-3">{course.duration}</p>
                          <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden mb-2">
                            <div
                              className="h-full bg-[#E8B088] rounded-full"
                              style={{ width: `${course.progress}%` }}
                            ></div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-600">{course.progress}% Complete</span>
                            <button className="text-xs bg-[#E8B088] text-white px-3 py-1 rounded hover:bg-[#D4915C] transition-colors">
                              {course.progress === 0 ? 'Start Course' : 'Continue Course'}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Explore Catalog Tab */}
              {learningTab === 'explore' && (
                <div>
                  {/* Search and Filter */}
                  <div className="flex gap-3 mb-6">
                    <div className="relative flex-1">
                      <Search size={18} className="absolute left-3 top-2.5 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search"
                        className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg outline-none focus:border-[#E8B088]"
                      />
                    </div>
                    <button className="px-4 py-2 bg-[#FEF5EC] text-[#D4915C] rounded-lg hover:bg-[#E8B088] hover:text-white transition-colors">
                      Recommended
                    </button>
                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                      Filters
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {exploreCatalogData.map((course, index) => (
                      <div
                        key={course.id}
                        className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all duration-200 animate-slideUp cursor-pointer"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <div className="w-full h-32 bg-[#FEF5EC] rounded-lg flex items-center justify-center text-5xl mb-3">
                          {course.thumbnail}
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-1 text-sm">{course.title}</h3>
                        <p className="text-xs text-gray-600 mb-2">{course.instructor}</p>
                        <p className="text-xs text-gray-500 mb-3">Level: {course.level}</p>
                        <button className="w-full bg-[#E8B088] text-white py-2 rounded-lg text-sm hover:bg-[#D4915C] transition-colors">
                          View Course
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 text-center">
                    <button className="bg-[#E8B088] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#D4915C] transition-all">
                      View Full Catalog
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* More Page - Quick Links */}
        {activeNav === 'More' && !selectedMorePage && (
          <div className="animate-fadeIn space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: 'HR Forms & Documents', icon: '📄', desc: 'Access employee forms and documents', page: 'hr-forms' },
                { title: 'Employee Milestones', icon: '🎯', desc: 'Track achievements and anniversaries', page: 'milestones' },
                { title: 'Employee Survey', icon: '📊', desc: 'Share your feedback', page: 'survey' },
                { title: 'Holiday Calendar', icon: '📅', desc: 'View RFCS company holidays', page: 'calendar' },
                { title: 'Company Policies', icon: '📋', desc: 'Read company policies', page: 'policies' },
                { title: 'Support', icon: '💬', desc: 'Get help and support', page: 'support' },
              ].map((item, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedMorePage(item.page)}
                  className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer animate-slideUp hover:border-2 hover:border-[#E8B088]"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{item.desc}</p>
                  <button className="text-[#D4915C] font-medium text-sm hover:text-[#E8B088] transition-colors">
                    View →
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Employee Milestones Page */}
        {activeNav === 'More' && selectedMorePage === 'milestones' && (
          <div className="animate-fadeIn space-y-6">
            <button
              onClick={() => setSelectedMorePage(null)}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4"
            >
              ← Back to More
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Upcoming Birthdays */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">🎂</span>
                  <h3 className="text-lg font-semibold text-gray-900">Upcoming Birthdays!</h3>
                </div>
                <div className="space-y-3">
                  {[
                    { name: 'Diego Nian', date: '22 June 2024', avatar: '👨' },
                    { name: 'Name Name', date: '25 June 2024', avatar: '👩' },
                    { name: 'Name Name', date: '28 June 2024', avatar: '👨' },
                    { name: 'Diana Name', date: '01 July 2024', avatar: '👩' },
                  ].map((person, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                      <div className="w-10 h-10 rounded-full bg-[#FEF5EC] flex items-center justify-center text-xl">
                        {person.avatar}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">{person.name}</p>
                        <p className="text-xs text-gray-600">{person.date}</p>
                      </div>
                      <button className="bg-[#E8B088] text-white px-3 py-1 rounded text-xs hover:bg-[#D4915C]">
                        Send Wish
                      </button>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-4 text-sm text-[#D4915C] hover:text-[#E8B088] font-medium">
                  Congratulate All
                </button>
              </div>

              {/* Work Anniversaries */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">🎉</span>
                  <h3 className="text-lg font-semibold text-gray-900">Work Anniversaries!</h3>
                </div>
                <div className="space-y-3">
                  {[
                    { name: 'Name Name', years: '3 Years!', date: '5 June 2024', avatar: '👨' },
                    { name: 'Name Name', years: '5 Years!', date: '9 June 2024', avatar: '👩' },
                  ].map((person, idx) => (
                    <div key={idx} className="p-3 bg-[#FEF5EC] rounded-lg">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-xl border-2 border-[#E8B088]">
                          {person.avatar}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-gray-900">{person.name}</p>
                          <p className="text-xs text-[#D4915C] font-medium">{person.years}</p>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600 mb-2">{person.date}</p>
                      <button className="w-full bg-[#E8B088] text-white px-3 py-1.5 rounded text-xs hover:bg-[#D4915C]">
                        Congratulate
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Employee of the Month */}
              <div className="bg-gradient-to-br from-[#F5A962] to-[#D4915C] rounded-lg p-6 shadow-lg text-white">
                <div className="text-center">
                  <div className="text-4xl mb-2">🏆</div>
                  <h3 className="text-xl font-bold mb-4">Employee of the Month</h3>
                  <div className="w-24 h-24 mx-auto rounded-full bg-white flex items-center justify-center text-5xl mb-4 shadow-lg">
                    👩
                  </div>
                  <h4 className="text-2xl font-bold mb-2">Sarah Chen</h4>
                  <p className="text-sm mb-1">Marketing Specialist</p>
                  <p className="text-xs text-white/80 mb-4">October 2024</p>
                  <div className="bg-white/20 rounded-lg p-3 text-sm">
                    <p className="italic">"Sarah's creativity and leadership are exceptional!"</p>
                  </div>
                  <button className="mt-4 bg-white text-[#D4915C] px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all">
                    Congratulate 🎉
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* HR Forms & Documents Page */}
        {activeNav === 'More' && selectedMorePage === 'hr-forms' && (
          <div className="animate-fadeIn space-y-6">
            <button
              onClick={() => setSelectedMorePage(null)}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4"
            >
              ← Back to More
            </button>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">HR Forms & Documents</h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Forms Column */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Forms</h3>
                  <div className="space-y-3">
                    {[
                      'Employee Information Update Form',
                      'Incident Report Form',
                      'Call-Out Form',
                      'PTO Application Form',
                      'Exit Interview Form'
                    ].map((form, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-[#E8B088] hover:shadow-sm transition-all cursor-pointer">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">📄</span>
                          <span className="text-sm font-medium text-gray-900">{form}</span>
                        </div>
                        <button className="bg-[#E8B088] text-white px-4 py-1.5 rounded text-xs hover:bg-[#D4915C]">
                          Download
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Company Documents Column */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Company Documents</h3>
                  <div className="space-y-3">
                    {[
                      'Employee Handbook',
                      'Specific Company Policies'
                    ].map((doc, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-[#E8B088] hover:shadow-sm transition-all cursor-pointer">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">📋</span>
                          <span className="text-sm font-medium text-gray-900">{doc}</span>
                        </div>
                        <button className="bg-[#E8B088] text-white px-4 py-1.5 rounded text-xs hover:bg-[#D4915C]">
                          View
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Employee Survey Page */}
        {activeNav === 'More' && selectedMorePage === 'survey' && (
          <div className="animate-fadeIn space-y-6">
            <button
              onClick={() => setSelectedMorePage(null)}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4"
            >
              ← Back to More
            </button>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">📊</span>
                <h2 className="text-2xl font-bold text-gray-900">Employee Survey</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Active Surveys */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Active Surveys</h3>
                  <div className="space-y-4">
                    {[
                      { title: 'Q4 2024 Employee Engagement Survey', deadline: 'Dec 31, 2024', completed: false, questions: 15 },
                      { title: 'Benefits Satisfaction Survey', deadline: 'Dec 20, 2024', completed: false, questions: 8 },
                      { title: 'Remote Work Feedback', deadline: 'Jan 15, 2025', completed: false, questions: 12 },
                    ].map((survey, idx) => (
                      <div key={idx} className="border border-gray-200 rounded-lg p-4 hover:border-[#E8B088] hover:shadow-sm transition-all">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1">{survey.title}</h4>
                            <p className="text-xs text-gray-600">Deadline: {survey.deadline}</p>
                            <p className="text-xs text-gray-500">{survey.questions} questions</p>
                          </div>
                          <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Pending</span>
                        </div>
                        <button className="w-full bg-[#E8B088] text-white py-2 rounded-lg text-sm hover:bg-[#D4915C] transition-colors">
                          Start Survey
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Completed Surveys */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Completed Surveys</h3>
                  <div className="space-y-4">
                    {[
                      { title: 'Q3 2024 Employee Engagement Survey', completedDate: 'Sep 30, 2024', questions: 15 },
                      { title: 'Office Environment Survey', completedDate: 'Aug 15, 2024', questions: 10 },
                    ].map((survey, idx) => (
                      <div key={idx} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="font-semibold text-gray-700 mb-1">{survey.title}</h4>
                            <p className="text-xs text-gray-600">Completed: {survey.completedDate}</p>
                            <p className="text-xs text-gray-500">{survey.questions} questions</p>
                          </div>
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Completed</span>
                        </div>
                        <button className="w-full bg-gray-300 text-gray-700 py-2 rounded-lg text-sm hover:bg-gray-400 transition-colors">
                          View Responses
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Survey Stats */}
                  <div className="mt-6 bg-[#FEF5EC] rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-3">Your Survey Stats</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Total Surveys Completed:</span>
                        <span className="font-semibold text-gray-900">12</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Response Rate:</span>
                        <span className="font-semibold text-green-600">95%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Pending Surveys:</span>
                        <span className="font-semibold text-yellow-600">3</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Your Feedback Matters */}
              <div className="mt-6 bg-gradient-to-br from-[#F5A962] to-[#D4915C] rounded-lg p-6 text-white">
                <h3 className="text-lg font-bold mb-2">Why Your Feedback Matters</h3>
                <p className="text-sm text-white/90">Your responses help us improve workplace culture, benefits, and policies. All surveys are confidential and anonymous.</p>
              </div>
            </div>
          </div>
        )}

        {/* Holiday Calendar Page */}
        {activeNav === 'More' && selectedMorePage === 'calendar' && (
          <div className="animate-fadeIn space-y-6">
            <button
              onClick={() => setSelectedMorePage(null)}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4"
            >
              ← Back to More
            </button>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">📅</span>
                <h2 className="text-2xl font-bold text-gray-900">RFCS Company Holidays 2024-2025</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* 2024 Holidays */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <span>2024 Holidays</span>
                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">Remaining</span>
                  </h3>
                  <div className="space-y-3">
                    {[
                      { name: 'Christmas Day', date: 'Dec 25, 2024', day: 'Wednesday', status: 'upcoming' },
                      { name: 'Day After Christmas', date: 'Dec 26, 2024', day: 'Thursday', status: 'upcoming' },
                      { name: 'New Year\'s Eve', date: 'Dec 31, 2024', day: 'Tuesday', status: 'upcoming' },
                    ].map((holiday, idx) => (
                      <div key={idx} className="border-l-4 border-[#E8B088] bg-[#FEF5EC] rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-gray-900">{holiday.name}</h4>
                          <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">Paid</span>
                        </div>
                        <p className="text-sm text-gray-600">{holiday.date}</p>
                        <p className="text-xs text-gray-500">{holiday.day}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2025 Holidays */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <span>2025 Holidays</span>
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">Upcoming Year</span>
                  </h3>
                  <div className="space-y-3">
                    {[
                      { name: 'New Year\'s Day', date: 'Jan 1, 2025', day: 'Wednesday' },
                      { name: 'Martin Luther King Jr. Day', date: 'Jan 20, 2025', day: 'Monday' },
                      { name: 'Presidents Day', date: 'Feb 17, 2025', day: 'Monday' },
                      { name: 'Memorial Day', date: 'May 26, 2025', day: 'Monday' },
                      { name: 'Independence Day', date: 'Jul 4, 2025', day: 'Friday' },
                      { name: 'Labor Day', date: 'Sep 1, 2025', day: 'Monday' },
                    ].map((holiday, idx) => (
                      <div key={idx} className="border border-gray-200 rounded-lg p-4 hover:border-[#E8B088] hover:shadow-sm transition-all">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-gray-900">{holiday.name}</h4>
                          <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">Paid</span>
                        </div>
                        <p className="text-sm text-gray-600">{holiday.date}</p>
                        <p className="text-xs text-gray-500">{holiday.day}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Holiday Policy Info */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#FEF5EC] rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <span>🎁</span>
                    <span>Holiday Benefits</span>
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• All holidays are paid time off</li>
                    <li>• No PTO deduction required</li>
                    <li>• Eligible after 90 days of employment</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-[#F5A962] to-[#D4915C] rounded-lg p-4 text-white">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <span>📊</span>
                    <span>Your Holiday Stats</span>
                  </h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span>Total Holidays (2024):</span>
                      <span className="font-bold">10</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Remaining (2024):</span>
                      <span className="font-bold">3</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total Holidays (2025):</span>
                      <span className="font-bold">11</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Note */}
              <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-900">
                  <strong>Note:</strong> If a holiday falls on a weekend, the observance will be on the nearest weekday. Please check with HR for specific observance dates.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Company Policies Page */}
        {activeNav === 'More' && selectedMorePage === 'policies' && (
          <div className="animate-fadeIn space-y-6">
            <button
              onClick={() => setSelectedMorePage(null)}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4"
            >
              ← Back to More
            </button>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">📋</span>
                <h2 className="text-2xl font-bold text-gray-900">Company Policies</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* HR Policies */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-xl">👥</span>
                    <span>HR Policies</span>
                  </h3>
                  <div className="space-y-3">
                    {[
                      { title: 'Code of Conduct', updated: 'Jan 2024', pages: 12 },
                      { title: 'Anti-Harassment Policy', updated: 'Jan 2024', pages: 8 },
                      { title: 'Equal Opportunity Employment', updated: 'Jan 2024', pages: 5 },
                      { title: 'Time Off & Leave Policy', updated: 'Mar 2024', pages: 15 },
                      { title: 'Performance Review Process', updated: 'Jan 2024', pages: 10 },
                    ].map((policy, idx) => (
                      <div key={idx} className="border border-gray-200 rounded-lg p-4 hover:border-[#E8B088] hover:shadow-sm transition-all cursor-pointer">
                        <div className="flex items-start gap-3 mb-2">
                          <span className="text-2xl">📄</span>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 text-sm mb-1">{policy.title}</h4>
                            <p className="text-xs text-gray-600">Updated: {policy.updated}</p>
                            <p className="text-xs text-gray-500">{policy.pages} pages</p>
                          </div>
                        </div>
                        <button className="w-full bg-[#E8B088] text-white py-1.5 rounded text-xs hover:bg-[#D4915C] transition-colors">
                          View Policy
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Workplace Policies */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-xl">🏢</span>
                    <span>Workplace Policies</span>
                  </h3>
                  <div className="space-y-3">
                    {[
                      { title: 'Remote Work Policy', updated: 'Feb 2024', pages: 7 },
                      { title: 'Dress Code & Appearance', updated: 'Jan 2024', pages: 4 },
                      { title: 'Workplace Safety', updated: 'Jan 2024', pages: 9 },
                      { title: 'Data Security & Privacy', updated: 'Apr 2024', pages: 18 },
                      { title: 'Social Media Guidelines', updated: 'Jan 2024', pages: 6 },
                    ].map((policy, idx) => (
                      <div key={idx} className="border border-gray-200 rounded-lg p-4 hover:border-[#E8B088] hover:shadow-sm transition-all cursor-pointer">
                        <div className="flex items-start gap-3 mb-2">
                          <span className="text-2xl">📄</span>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 text-sm mb-1">{policy.title}</h4>
                            <p className="text-xs text-gray-600">Updated: {policy.updated}</p>
                            <p className="text-xs text-gray-500">{policy.pages} pages</p>
                          </div>
                        </div>
                        <button className="w-full bg-[#E8B088] text-white py-1.5 rounded text-xs hover:bg-[#D4915C] transition-colors">
                          View Policy
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits & Compensation */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-xl">💰</span>
                    <span>Benefits & Compensation</span>
                  </h3>
                  <div className="space-y-3">
                    {[
                      { title: 'Compensation Philosophy', updated: 'Jan 2024', pages: 6 },
                      { title: 'Benefits Overview', updated: 'Jan 2024', pages: 14 },
                      { title: 'Retirement Plans (401k)', updated: 'Jan 2024', pages: 11 },
                      { title: 'Expense Reimbursement', updated: 'Feb 2024', pages: 8 },
                      { title: 'Tuition Assistance Program', updated: 'Jan 2024', pages: 5 },
                    ].map((policy, idx) => (
                      <div key={idx} className="border border-gray-200 rounded-lg p-4 hover:border-[#E8B088] hover:shadow-sm transition-all cursor-pointer">
                        <div className="flex items-start gap-3 mb-2">
                          <span className="text-2xl">📄</span>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 text-sm mb-1">{policy.title}</h4>
                            <p className="text-xs text-gray-600">Updated: {policy.updated}</p>
                            <p className="text-xs text-gray-500">{policy.pages} pages</p>
                          </div>
                        </div>
                        <button className="w-full bg-[#E8B088] text-white py-1.5 rounded text-xs hover:bg-[#D4915C] transition-colors">
                          View Policy
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Policy Acknowledgement Status */}
              <div className="mt-6 bg-[#FEF5EC] rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Policy Acknowledgement Status</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Total Policies:</span>
                    <span className="font-bold text-gray-900">15</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Acknowledged:</span>
                    <span className="font-bold text-green-600">15/15</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Last Acknowledgement:</span>
                    <span className="font-medium text-gray-900">Apr 15, 2024</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Status:</span>
                    <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded font-medium">Up to Date</span>
                  </div>
                </div>
              </div>

              {/* Important Notice */}
              <div className="mt-6 bg-gradient-to-br from-[#F5A962] to-[#D4915C] rounded-lg p-6 text-white">
                <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                  <span>⚠️</span>
                  <span>Important Notice</span>
                </h3>
                <p className="text-sm text-white/90">
                  All employees are required to read and acknowledge company policies. If you have any questions about any policy, please contact HR at hr@rfcs.com or visit the HR Portal.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Support Page */}
        {activeNav === 'More' && selectedMorePage === 'support' && (
          <div className="animate-fadeIn space-y-6">
            <button
              onClick={() => setSelectedMorePage(null)}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4"
            >
              ← Back to More
            </button>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">💬</span>
                <h2 className="text-2xl font-bold text-gray-900">Help & Support</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Contact Support */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-xl">📞</span>
                    <span>Contact Support</span>
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-[#FEF5EC] rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">IT Support</h4>
                      <div className="space-y-2 text-sm text-gray-700">
                        <p>📧 Email: support@rfcs.com</p>
                        <p>📞 Phone: (555) 123-4567</p>
                        <p>⏰ Hours: Mon-Fri, 8:00 AM - 6:00 PM EST</p>
                      </div>
                      <button className="mt-3 w-full bg-[#E8B088] text-white py-2 rounded-lg text-sm hover:bg-[#D4915C] transition-colors">
                        Submit IT Ticket
                      </button>
                    </div>

                    <div className="bg-[#FEF5EC] rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">HR Support</h4>
                      <div className="space-y-2 text-sm text-gray-700">
                        <p>📧 Email: hr@rfcs.com</p>
                        <p>📞 Phone: (555) 123-4568</p>
                        <p>⏰ Hours: Mon-Fri, 9:00 AM - 5:00 PM EST</p>
                      </div>
                      <button className="mt-3 w-full bg-[#E8B088] text-white py-2 rounded-lg text-sm hover:bg-[#D4915C] transition-colors">
                        Contact HR
                      </button>
                    </div>

                    <div className="bg-[#FEF5EC] rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Payroll Support</h4>
                      <div className="space-y-2 text-sm text-gray-700">
                        <p>📧 Email: payroll@rfcs.com</p>
                        <p>📞 Phone: (555) 123-4569</p>
                        <p>⏰ Hours: Mon-Fri, 9:00 AM - 5:00 PM EST</p>
                      </div>
                      <button className="mt-3 w-full bg-[#E8B088] text-white py-2 rounded-lg text-sm hover:bg-[#D4915C] transition-colors">
                        Payroll Inquiry
                      </button>
                    </div>
                  </div>
                </div>

                {/* FAQ & Resources */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-xl">❓</span>
                    <span>Frequently Asked Questions</span>
                  </h3>
                  <div className="space-y-3">
                    {[
                      { question: 'How do I reset my password?', category: 'IT' },
                      { question: 'How do I request time off?', category: 'HR' },
                      { question: 'Where can I view my pay stubs?', category: 'Payroll' },
                      { question: 'How do I update my personal information?', category: 'HR' },
                      { question: 'How do I enroll in benefits?', category: 'Benefits' },
                      { question: 'How do I access VPN?', category: 'IT' },
                      { question: 'How do I submit an expense report?', category: 'Finance' },
                      { question: 'Who do I contact for equipment requests?', category: 'IT' },
                    ].map((faq, idx) => (
                      <div key={idx} className="border border-gray-200 rounded-lg p-4 hover:border-[#E8B088] hover:shadow-sm transition-all cursor-pointer">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <p className="font-medium text-gray-900 text-sm mb-1">{faq.question}</p>
                            <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">{faq.category}</span>
                          </div>
                          <span className="text-[#D4915C]">→</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button className="mt-4 w-full bg-gray-100 text-gray-700 py-2 rounded-lg text-sm hover:bg-gray-200 transition-colors">
                    View All FAQs
                  </button>
                </div>
              </div>

              {/* Quick Resources */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-xl">📚</span>
                  <span>Quick Resources</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { title: 'Employee Handbook', icon: '📖', color: 'bg-blue-50 border-blue-200' },
                    { title: 'IT Setup Guide', icon: '💻', color: 'bg-green-50 border-green-200' },
                    { title: 'Benefits Guide', icon: '🏥', color: 'bg-purple-50 border-purple-200' },
                    { title: 'Training Resources', icon: '🎓', color: 'bg-yellow-50 border-yellow-200' },
                    { title: 'Company Directory', icon: '📇', color: 'bg-pink-50 border-pink-200' },
                    { title: 'Emergency Contacts', icon: '🚨', color: 'bg-red-50 border-red-200' },
                  ].map((resource, idx) => (
                    <div key={idx} className={`border rounded-lg p-4 ${resource.color} hover:shadow-md transition-all cursor-pointer`}>
                      <div className="text-3xl mb-2">{resource.icon}</div>
                      <h4 className="font-semibold text-gray-900 text-sm">{resource.title}</h4>
                    </div>
                  ))}
                </div>
              </div>

              {/* Support Ticket Status */}
              <div className="mt-6 bg-gradient-to-br from-[#F5A962] to-[#D4915C] rounded-lg p-6 text-white">
                <h3 className="text-lg font-bold mb-4">Your Support Tickets</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-2xl font-bold mb-1">2</div>
                    <p className="text-sm text-white/90">Open Tickets</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-2xl font-bold mb-1">15</div>
                    <p className="text-sm text-white/90">Resolved Tickets</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-2xl font-bold mb-1">2.5h</div>
                    <p className="text-sm text-white/90">Avg Response Time</p>
                  </div>
                </div>
                <button className="mt-4 w-full bg-white text-[#D4915C] py-2 rounded-lg font-medium hover:shadow-lg transition-all">
                  View All Tickets
                </button>
              </div>

              {/* Emergency Notice */}
              <div className="mt-4 bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-sm text-red-900 flex items-center gap-2">
                  <span className="text-xl">🚨</span>
                  <strong>Emergency Support:</strong> For urgent issues outside business hours, call (555) 911-HELP or email emergency@rfcs.com
                </p>
              </div>
            </div>
          </div>
        )}

        {/* HR Portal - Private Admin Pages */}
        {activeNav === 'HR Portal' && !selectedHRTool && (
          <div className="animate-fadeIn space-y-6">
            {/* HR Portal Header */}
            <div className="bg-gradient-to-r from-[#F5A962] to-[#D4915C] rounded-lg p-6 text-white shadow-lg">
              <div className="flex items-center gap-3 mb-2">
                <Settings size={28} />
                <h2 className="text-2xl font-bold">HR Admin Portal</h2>
              </div>
              <p className="text-white/90">Private administrative tools for HR management</p>
            </div>

            {/* HR Tools Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {hrAdminTools.map((tool, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedHRTool(tool.name)}
                  className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer animate-slideUp border-2 border-transparent hover:border-[#E8B088]"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="text-4xl mb-3">{tool.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{tool.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{tool.desc}</p>
                  <button className="w-full bg-[#FEF5EC] text-[#D4915C] py-2 rounded-lg font-medium text-sm hover:bg-[#E8B088] hover:text-white transition-all duration-200 active:scale-95">
                    Access Tool →
                  </button>
                </div>
              ))}
            </div>

            {/* Quick Stats for HR */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { label: 'Active Employees', value: '230', icon: '👥', color: '#E8B088' },
                { label: 'Open Positions', value: '12', icon: '💼', color: '#D4915C' },
                { label: 'Pending Onboarding', value: '5', icon: '🎯', color: '#F5A962' },
                { label: 'Incidents This Month', value: '3', icon: '⚠️', color: '#E8B088' },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-all duration-300 animate-slideUp"
                  style={{ animationDelay: `${(hrAdminTools.length + index) * 50}ms` }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-3xl">{stat.icon}</span>
                    <div className="text-3xl font-bold" style={{ color: stat.color }}>
                      {stat.value}
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Access Notice */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔒</span>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Restricted Access</h4>
                  <p className="text-sm text-gray-700">
                    This portal contains sensitive HR data. Access is logged and monitored. Only authorized HR personnel should access these tools.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Workforce Classification Page */}
        {activeNav === 'HR Portal' && selectedHRTool === 'Workforce Classification' && (
          <div className="animate-fadeIn space-y-6">
            <button onClick={() => setSelectedHRTool(null)} className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4">
              ← Back to HR Portal
            </button>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Employee Classification & Analytics</h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                {/* Pay Type Distribution */}
                <div className="border border-gray-200 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-900 mb-4">Pay Type Distribution</h3>
                  <div className="flex items-center justify-center">
                    <ResponsiveContainer width="100%" height={200}>
                      <PieChart>
                        <Pie data={[{name: 'Hourly', value: 65}, {name: 'Salary', value: 35}]} cx="50%" cy="50%" innerRadius={50} outerRadius={80} dataKey="value">
                          <Cell fill="#E8B088" />
                          <Cell fill="#D4915C" />
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="flex justify-center gap-6 mt-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#E8B088]"></div>
                      <span className="text-sm text-gray-600">Hourly (65%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#D4915C]"></div>
                      <span className="text-sm text-gray-600">Salary (35%)</span>
                    </div>
                  </div>
                </div>

                {/* Employment Status */}
                <div className="border border-gray-200 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-900 mb-4">Employment Status</h3>
                  <div className="flex items-center justify-center">
                    <ResponsiveContainer width="100%" height={200}>
                      <PieChart>
                        <Pie data={[{name: 'Regular', value: 80}, {name: 'Part-Time', value: 20}]} cx="50%" cy="50%" innerRadius={50} outerRadius={80} dataKey="value">
                          <Cell fill="#E8B088" />
                          <Cell fill="#F5A962" />
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="flex justify-center gap-6 mt-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#E8B088]"></div>
                      <span className="text-sm text-gray-600">Regular (80%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#F5A962]"></div>
                      <span className="text-sm text-gray-600">Part-Time (20%)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Employee Table */}
              <div className="border border-gray-200 rounded-lg p-5">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900">Employee Filters & Reports</h3>
                  <button className="bg-[#E8B088] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#D4915C]">
                    Run Custom Report
                  </button>
                </div>

                <div className="flex gap-2 mb-4">
                  {['Pay Type: All', 'Hourly', 'Status: Regular', 'Employment: HR, Finance'].map((filter, idx) => (
                    <button key={idx} className={`px-3 py-1.5 rounded text-sm ${idx === 0 ? 'bg-[#E8B088] text-white' : 'bg-gray-100 text-gray-700'}`}>
                      {filter}
                    </button>
                  ))}
                  <button className="ml-auto p-1.5 border border-gray-300 rounded">🔍</button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr className="border-b border-gray-200">
                        <th className="text-left p-3 text-sm font-semibold text-gray-900">#</th>
                        <th className="text-left p-3 text-sm font-semibold text-gray-900">Name</th>
                        <th className="text-left p-3 text-sm font-semibold text-gray-900">Department</th>
                        <th className="text-left p-3 text-sm font-semibold text-gray-900">Pay Type</th>
                        <th className="text-left p-3 text-sm font-semibold text-gray-900">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { name: 'Jane Doe', dept: 'Marketing', pay: 'Salaried', status: 'Regular' },
                        { name: 'John Smith', dept: 'Operations', pay: 'Hourly', status: 'Regular' },
                        { name: 'Maria Rodriguez', dept: 'Operations', pay: 'Hourly', status: 'Regular' },
                        { name: 'David Chen', dept: 'Operations', pay: 'Hourly', status: 'Regular' },
                      ].map((emp, idx) => (
                        <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="p-3 text-sm text-gray-600">{idx + 1}</td>
                          <td className="p-3 text-sm font-medium text-gray-900">{emp.name}</td>
                          <td className="p-3 text-sm text-gray-600">
                            <span className="inline-flex items-center gap-1">
                              <span className="w-2 h-2 rounded-full bg-[#E8B088]"></span>
                              {emp.dept}
                            </span>
                          </td>
                          <td className="p-3 text-sm text-gray-600">
                            <span className="inline-flex items-center gap-1">
                              <span className="w-2 h-2 rounded-full bg-[#D4915C]"></span>
                              {emp.pay}
                            </span>
                          </td>
                          <td className="p-3 text-sm text-gray-600">
                            <span className="inline-flex items-center gap-1">
                              <span className="w-2 h-2 rounded-full bg-green-500"></span>
                              {emp.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Recruitment KPIs Page */}
        {activeNav === 'HR Portal' && selectedHRTool === 'Recruitment KPIs' && (
          <div className="animate-fadeIn space-y-6">
            <button onClick={() => setSelectedHRTool(null)} className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4">
              ← Back to HR Portal
            </button>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Recruitment Analytics & Insights</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Open vs Closed Positions */}
                <div className="border border-gray-200 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-900 mb-4 text-sm">Open vs. Closed Positions</h3>
                  <ResponsiveContainer width="100%" height={150}>
                    <BarChart data={[{name: 'DSP', open: 20, closed: 15}, {name: 'Angeles', open: 5, closed: 7}]}>
                      <XAxis dataKey="name" tick={{ fontSize: 11 }} />
                      <Bar dataKey="open" fill="#E8B088" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="closed" fill="#D4915C" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                  <div className="mt-3 text-xs text-gray-600">
                    <div>Total Open (20) / Total Closed (15)</div>
                  </div>
                </div>

                {/* Time to Fulfillment */}
                <div className="border border-gray-200 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-900 mb-4 text-sm">Average Time to Fulfillment (Days)</h3>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-[#E8B088] mb-2">18</div>
                    <div className="text-xs text-gray-600">Avg Days to Fill</div>
                  </div>
                  <div className="mt-4 space-y-1 text-xs text-gray-600">
                    <div className="flex justify-between">
                      <span>DSP: 15 days</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Site Supervisor: 25 days</span>
                    </div>
                  </div>
                </div>

                {/* Cost Per Hire */}
                <div className="border border-gray-200 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-900 mb-4 text-sm">Cost Per Hire</h3>
                  <div className="flex items-center justify-center mb-4">
                    <ResponsiveContainer width="100%" height={120}>
                      <PieChart>
                        <Pie data={[{name: 'Job Board', value: 40}, {name: 'Recruiter', value: 35}, {name: 'Referral', value: 25}]} cx="50%" cy="50%" innerRadius={30} outerRadius={50} dataKey="value">
                          <Cell fill="#E8B088" />
                          <Cell fill="#D4915C" />
                          <Cell fill="#F5A962" />
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#D4915C]">$20,000</div>
                    <div className="text-xs text-gray-600 mt-1">Total Recruitment Cost</div>
                    <div className="text-xs text-gray-500 mt-2">10 Hires | $2,000 per hire</div>
                  </div>
                </div>
              </div>

              {/* Additional KPIs */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                {/* Interview-to-Hire Ratio */}
                <div className="bg-[#FEF5EC] rounded-lg p-5">
                  <h3 className="font-semibold text-gray-900 mb-3">Interview-to-Hire Ratio</h3>
                  <div className="text-4xl font-bold text-[#D4915C] mb-2">5:1</div>
                  <p className="text-sm text-gray-600">5 interviews for 1 successful hire</p>
                  <div className="mt-3 text-xs text-gray-500">📈 Improving Trend</div>
                </div>

                {/* Offer Acceptance Rate */}
                <div className="bg-[#FEF5EC] rounded-lg p-5">
                  <h3 className="font-semibold text-gray-900 mb-3">Offer Acceptance Rate</h3>
                  <div className="flex items-center justify-center mb-2">
                    <ResponsiveContainer width={100} height={100}>
                      <PieChart>
                        <Pie data={[{value: 80}, {value: 20}]} cx="50%" cy="50%" innerRadius={25} outerRadius={40} dataKey="value" startAngle={90} endAngle={-270}>
                          <Cell fill="#E8B088" />
                          <Cell fill="#E5E7EB" />
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                    <div className="absolute text-2xl font-bold text-[#D4915C]">80%</div>
                  </div>
                  <p className="text-sm text-gray-600 text-center">10 offers, 8 accepted</p>
                  <div className="mt-2 text-xs text-green-600 text-center">✓ Strong</div>
                </div>

                {/* New Hire Retention */}
                <div className="bg-[#FEF5EC] rounded-lg p-5">
                  <h3 className="font-semibold text-gray-900 mb-3">New Hire Retention</h3>
                  <div className="mb-2">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Regularized: 75%</span>
                    </div>
                    <div className="w-full h-3 bg-gray-200 rounded-full">
                      <div className="h-full bg-green-500 rounded-full" style={{width: '75%'}}></div>
                    </div>
                  </div>
                  <div className="mb-2">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Not Regularized: 25%</span>
                    </div>
                    <div className="w-full h-3 bg-gray-200 rounded-full">
                      <div className="h-full bg-red-400 rounded-full" style={{width: '25%'}}></div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mt-3">30 new hires this quarter</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Turnover & Retention Page */}
        {activeNav === 'HR Portal' && selectedHRTool === 'Turnover & Retention' && (
          <div className="animate-fadeIn space-y-6">
            <button onClick={() => setSelectedHRTool(null)} className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4">
              ← Back to HR Portal
            </button>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Turnover & Retention Analytics</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {/* Turnover Rate */}
                <div className="border border-gray-200 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-900 mb-4">Turnover Rate</h3>
                  <div className="text-5xl font-bold text-[#E8B088] text-center mb-2">12%</div>
                  <p className="text-sm text-gray-600 text-center">Past 12 Months</p>
                  <select className="w-full mt-3 p-2 border border-gray-200 rounded text-sm">
                    <option>Past 12 Months</option>
                    <option>Past 6 Months</option>
                    <option>This Year</option>
                  </select>
                </div>

                {/* Retention Rate */}
                <div className="border border-gray-200 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-900 mb-4">Retention Rate</h3>
                  <div className="text-5xl font-bold text-green-600 text-center mb-2">88%</div>
                  <p className="text-sm text-gray-600 text-center">Past 12 Months</p>
                  <div className="mt-3 text-xs text-center text-green-600">↑ Trending Up</div>
                </div>

                {/* Reasons for Resignation */}
                <div className="border border-gray-200 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-900 mb-4">Reasons for Resignation</h3>
                  <ResponsiveContainer width="100%" height={120}>
                    <PieChart>
                      <Pie data={[{name: 'Career Growth', value: 28}, {name: 'Salary', value: 20}, {name: 'Relocation', value: 16}, {name: 'Work Environment', value: 18}, {name: 'Health', value: 18}]} cx="50%" cy="50%" outerRadius={50} dataKey="value">
                        <Cell fill="#E8B088" />
                        <Cell fill="#D4915C" />
                        <Cell fill="#86EFAC" />
                        <Cell fill="#F5A962" />
                        <Cell fill="#C8956A" />
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="grid grid-cols-2 gap-1 mt-3 text-xs">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-[#E8B088]"></div>
                      <span>Career (28%)</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-[#D4915C]"></div>
                      <span>Salary (20%)</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-[#86EFAC]"></div>
                      <span>Relocation (16%)</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-[#F5A962]"></div>
                      <span>Environment (18%)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Department & Tenure Charts */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Department-Specific Turnover */}
                <div className="border border-gray-200 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-900 mb-4">Department-Specific Turnover</h3>
                  <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={[
                      {dept: 'Operations', rate: 25},
                      {dept: 'Sales', rate: 10},
                      {dept: 'HR', rate: 15},
                      {dept: 'Engineering', rate: 7},
                      {dept: 'Finance', rate: 5}
                    ]}>
                      <XAxis dataKey="dept" tick={{ fontSize: 10 }} />
                      <YAxis />
                      <Bar dataKey="rate" fill="#E8B088" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                {/* Tenure-Based Turnover */}
                <div className="border border-gray-200 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-900 mb-4">Tenure-Based Turnover</h3>
                  <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={[
                      {tenure: '<6 Months', rate: 30},
                      {tenure: '1 Year', rate: 15},
                      {tenure: '2 Years', rate: 10},
                      {tenure: '3 Years', rate: 8},
                      {tenure: '5+ Years', rate: 5}
                    ]}>
                      <XAxis dataKey="tenure" tick={{ fontSize: 10 }} />
                      <YAxis />
                      <Bar dataKey="rate" fill="#D4915C" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Incident Management Page */}
        {activeNav === 'HR Portal' && selectedHRTool === 'Incident Management' && (
          <div className="animate-fadeIn space-y-6">
            <button onClick={() => setSelectedHRTool(null)} className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4">
              ← Back to HR Portal
            </button>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Case Management Dashboard</h2>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                {/* Stats */}
                <div className="bg-[#FEF5EC] rounded-lg p-5">
                  <div className="text-4xl font-bold text-[#E8B088] mb-2">45</div>
                  <div className="text-sm font-semibold text-gray-900 mb-1">Total Open Cases</div>
                  <div className="text-xs text-gray-600">12 Days Average Resolution Time</div>
                </div>

                <div className="border border-gray-200 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-900 mb-3">Case Categories</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-400"></span>
                        Safety
                      </span>
                      <span className="font-semibold">25%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-orange-400"></span>
                        Behavior
                      </span>
                      <span className="font-semibold">20%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                        Disciplinary
                      </span>
                      <span className="font-semibold">15%</span>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-900 mb-4">Monthly Case Trends</h3>
                  <ResponsiveContainer width="100%" height={100}>
                    <BarChart data={[
                      {month: 'Jan', safety: 3, behavior: 2, disciplinary: 1},
                      {month: 'Feb', safety: 5, behavior: 3, disciplinary: 2},
                      {month: 'Mar', safety: 4, behavior: 4, disciplinary: 3}
                    ]}>
                      <XAxis dataKey="month" tick={{ fontSize: 10 }} />
                      <Bar dataKey="safety" fill="#E8B088" stackId="a" />
                      <Bar dataKey="behavior" fill="#D4915C" stackId="a" />
                      <Bar dataKey="disciplinary" fill="#F5A962" stackId="a" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Case Table */}
              <div className="border border-gray-200 rounded-lg p-5">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900">Recent Cases</h3>
                  <div className="flex gap-2">
                    <input type="text" placeholder="Search" className="px-3 py-1.5 border border-gray-200 rounded text-sm" />
                    <button className="px-3 py-1.5 border border-gray-200 rounded text-sm">Filters</button>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr className="border-b border-gray-200">
                        <th className="text-left p-3 text-sm font-semibold">Case ID</th>
                        <th className="text-left p-3 text-sm font-semibold">Date</th>
                        <th className="text-left p-3 text-sm font-semibold">Type</th>
                        <th className="text-left p-3 text-sm font-semibold">Status</th>
                        <th className="text-left p-3 text-sm font-semibold">Assigned To</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { id: '#001', date: 'Labor', type: 'None', status: 'Pending', assignedTo: 'Beltran ZR' },
                        { id: '#002', date: 'M', type: 'Venlay', status: 'In Review', assignedTo: 'Beltran ald' },
                        { id: '#003', date: 'AE', type: 'Harassment', status: 'Closed', assignedTo: 'Maura Hid' },
                      ].map((caseItem, idx) => (
                        <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="p-3 text-sm text-gray-900 font-medium">{caseItem.id}</td>
                          <td className="p-3 text-sm text-gray-600">{caseItem.date}</td>
                          <td className="p-3 text-sm text-gray-600">{caseItem.type}</td>
                          <td className="p-3">
                            <span className={`px-2 py-1 rounded text-xs ${
                              caseItem.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                              caseItem.status === 'In Review' ? 'bg-blue-100 text-blue-700' :
                              'bg-green-100 text-green-700'
                            }`}>
                              {caseItem.status}
                            </span>
                          </td>
                          <td className="p-3 text-sm text-gray-600">{caseItem.assignedTo}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Compliance Tracker Page */}
        {activeNav === 'HR Portal' && selectedHRTool === 'Compliance Tracker' && (
          <div className="animate-fadeIn space-y-6">
            <button onClick={() => setSelectedHRTool(null)} className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4">
              ← Back to HR Portal
            </button>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Compliance Tracker & Audit Readiness</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                {/* Overall Compliance */}
                <div className="bg-gradient-to-br from-[#F5A962] to-[#D4915C] rounded-lg p-6 text-white">
                  <h3 className="font-semibold mb-3">Overall Compliance</h3>
                  <div className="text-5xl font-bold mb-2">92%</div>
                  <p className="text-sm text-white/90">All Modules (Up to Date)</p>
                  <p className="text-xs text-white/70 mt-2">3 Employees w/ Pending Items</p>
                </div>

                {/* Training Completion Rate */}
                <div className="border border-gray-200 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-900 mb-3 text-sm">Training Completion Rate</h3>
                  <div className="text-4xl font-bold text-[#E8B088] mb-2">85%</div>
                  <p className="text-xs text-gray-600">Indicator: Control "70% Expected"</p>
                </div>

                {/* Certificates Expiring Soon */}
                <div className="border border-gray-200 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-900 mb-3 text-sm">Certificates Expiring Soon</h3>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span>Next 7 Days (5)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Next 30 Days (12)</span>
                    </div>
                  </div>
                  <button className="mt-3 w-full bg-yellow-100 text-yellow-700 px-3 py-1.5 rounded text-xs hover:bg-yellow-200">
                    View Details
                  </button>
                </div>

                {/* Overdue Items */}
                <div className="border border-red-200 bg-red-50 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-900 mb-3 text-sm">Overdue Items - High Priority</h3>
                  <div className="text-4xl font-bold text-red-600 mb-2">8</div>
                  <p className="text-xs text-gray-700">Expiring/Ed 30 Days Ago</p>
                  <button className="mt-3 w-full bg-red-600 text-white px-3 py-1.5 rounded text-xs hover:bg-red-700">
                    ⚠️ Take Action
                  </button>
                </div>
              </div>

              {/* Compliance Matrix */}
              <div className="border border-gray-200 rounded-lg p-5 mb-6">
                <h3 className="font-semibold text-gray-900 mb-4">Compliance Matrix</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead className="bg-gray-50">
                      <tr className="border-b">
                        <th className="text-left p-2">Employee</th>
                        <th className="text-center p-2">Item</th>
                        <th className="text-center p-2">Date Comp</th>
                        <th className="text-center p-2">Role</th>
                        <th className="text-center p-2">Rate Category</th>
                        <th className="text-center p-2">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { emp: 'Employee', item: '10 Med', date: '-', role: '-', category: '-', status: 'complete' },
                        { emp: 'Employee', item: '10 Med', date: '-', role: 'Background Check', category: 'Policy Acknowledge', status: 'pending' },
                        { emp: 'John Doe', item: 'Policy-10 Day', date: 'Background Check', role: 'Policy Acknowledge', category: '-', status: 'complete' },
                        { emp: 'Mark S.', item: 'Mar 5', date: 'Mar 20', role: 'Disciplinary Internal', category: 'Disciplinary Internal', status: 'pending' },
                        { emp: 'Sarah L.', item: '', date: '', role: 'Disciplinary Internal', category: 'Policy Acknowledge', status: 'complete' },
                      ].map((row, idx) => (
                        <tr key={idx} className="border-b hover:bg-gray-50">
                          <td className="p-2">{row.emp}</td>
                          <td className="p-2 text-center">{row.item}</td>
                          <td className="p-2 text-center">{row.date}</td>
                          <td className="p-2 text-center">{row.role}</td>
                          <td className="p-2 text-center">{row.category}</td>
                          <td className="p-2 text-center">
                            <span className={`inline-block w-4 h-4 rounded-full ${row.status === 'complete' ? 'bg-green-500' : 'bg-red-500'}`}></span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Audit Readiness Indicators */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#FEF5EC] rounded-lg p-5">
                  <h3 className="font-semibold text-gray-900 mb-3">New Hire Time to Compliance</h3>
                  <div className="text-4xl font-bold text-[#D4915C] mb-2">10 Days</div>
                  <p className="text-sm text-gray-600">Average time for new hires to complete all mandatory training/documentation after joining</p>
                </div>

                <div className="bg-[#FEF5EC] rounded-lg p-5">
                  <h3 className="font-semibold text-gray-900 mb-3">Audit-Readiness Indicators</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-green-600">✓</span>
                      <span>High-Risk Roles: 90% Compliant</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Clean Background Checks: 94%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        </div>
      </div>
    </div>
  );
}
