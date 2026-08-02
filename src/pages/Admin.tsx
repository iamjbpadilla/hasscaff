import React, { useState } from 'react';
import AdminLayout from '../components/layout/AdminLayout';
import AdminHeader from '../components/layout/AdminHeader';
import SEO from '../components/common/SEO';
import Schema from '../components/common/Schema';
import { MOCK_QUOTE_REQUESTS, SERVICE_LABELS, STATUS_LABELS, STATUS_COLORS, QuoteRequest } from '../lib/mockData';
import { Search, Filter, Phone, MapPin, FileText, MoreVertical, Building2, Calendar, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Admin: React.FC = () => {
  const { darkMode, setDarkMode } = useTheme();
  const [requests, setRequests] = useState<QuoteRequest[]>(MOCK_QUOTE_REQUESTS);
  const [selectedRequest, setSelectedRequest] = useState<QuoteRequest | null>(null);
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showNotesModal, setShowNotesModal] = useState(false);
  const [newNote, setNewNote] = useState('');

  const filteredRequests = requests.filter(request => {
    const matchesStatus = filterStatus === 'all' || request.status === filterStatus;
    const matchesSearch = searchTerm === '' || 
      request.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.phone.includes(searchTerm) ||
      SERVICE_LABELS[request.service].toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const updateStatus = (id: string, newStatus: QuoteRequest['status']) => {
    setRequests(requests.map(req => 
      req.id === id 
        ? { ...req, status: newStatus, updatedAt: new Date().toISOString() }
        : req
    ));
  };

  const addNote = (id: string, note: string) => {
    setRequests(requests.map(req => 
      req.id === id 
        ? { ...req, notes: note, updatedAt: new Date().toISOString() }
        : req
    ));
    setNewNote('');
    setShowNotesModal(false);
  };

  const deleteRequest = (id: string) => {
    if (confirm('Are you sure you want to delete this request?')) {
      setRequests(requests.filter(req => req.id !== id));
      if (selectedRequest?.id === id) {
        setSelectedRequest(null);
      }
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-AU', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const stats = {
    total: requests.length,
    pending: requests.filter(r => r.status === 'pending').length,
    contacted: requests.filter(r => r.status === 'contacted').length,
    quoted: requests.filter(r => r.status === 'quoted').length,
    completed: requests.filter(r => r.status === 'completed').length,
  };

  return (
    <>
      <SEO 
        title="Admin Panel - Hasscaff"
        description="Manage quote requests and customer inquiries"
        path="/admin"
      />
      <Schema 
        type="BreadcrumbList"
        data={{
          items: [
            { name: 'Home', path: '/' },
            { name: 'Admin', path: '/admin' }
          ]
        }}
      />
      <AdminLayout>
        <AdminHeader 
          title="Quote Request Management"
          description="Track and manage all customer quote requests in one place"
          onRefresh={() => setRequests(MOCK_QUOTE_REQUESTS)}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        {/* Stats Cards */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mt-6 md:mt-8 mb-4 md:mb-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg md:rounded-xl p-3 md:p-4">
              <div className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">{stats.total}</div>
              <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Total</div>
            </div>
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg md:rounded-xl p-3 md:p-4">
              <div className="text-xl md:text-2xl font-bold text-yellow-600 dark:text-yellow-400">{stats.pending}</div>
              <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Pending</div>
            </div>
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg md:rounded-xl p-3 md:p-4">
              <div className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-400">{stats.contacted}</div>
              <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Contacted</div>
            </div>
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg md:rounded-xl p-3 md:p-4">
              <div className="text-xl md:text-2xl font-bold text-purple-600 dark:text-purple-400">{stats.quoted}</div>
              <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Quoted</div>
            </div>
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg md:rounded-xl p-3 md:p-4">
              <div className="text-xl md:text-2xl font-bold text-green-600 dark:text-green-400">{stats.completed}</div>
              <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Completed</div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mb-4 md:mb-6">
          <div className="flex flex-col md:flex-row gap-3 md:gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by location, phone, or service..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 md:pl-10 pr-3 md:pr-4 py-2 md:py-2.5 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all text-sm md:text-base"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-3 md:px-4 py-2 md:py-2.5 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all text-sm md:text-base"
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="contacted">Contacted</option>
                <option value="quoted">Quoted</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pb-6 md:pb-8">
          <div className="grid lg:grid-cols-3 gap-4 md:gap-6">
            {/* Request List */}
            <div className="lg:col-span-2 space-y-3">
              {filteredRequests.length === 0 ? (
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-8 text-center">
                  <p className="text-gray-600 dark:text-gray-400">No requests found matching your criteria</p>
                </div>
              ) : (
                filteredRequests.map((request) => (
                  <div
                    key={request.id}
                    onClick={() => setSelectedRequest(request)}
                    className={`bg-white dark:bg-gray-900 border rounded-lg p-3 md:p-5 cursor-pointer transition-all duration-200 hover:border-gray-300 dark:hover:border-gray-700 ${
                      selectedRequest?.id === request.id
                        ? 'border-brand-primary ring-1 ring-brand-primary'
                        : 'border-gray-200 dark:border-gray-800'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2 md:mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1 md:mb-2">
                          <span className={`px-2 py-0.5 md:px-2.5 md:py-1 rounded-md text-xs font-semibold ${STATUS_COLORS[request.status]}`}>
                            {STATUS_LABELS[request.status]}
                          </span>
                        </div>
                        <h3 className="text-sm md:text-lg font-semibold text-gray-900 dark:text-white leading-tight">
                          {SERVICE_LABELS[request.service]}
                        </h3>
                      </div>
                      <div className="text-xs text-gray-400 font-medium whitespace-nowrap ml-2">
                        {formatDate(request.createdAt)}
                      </div>
                    </div>
                    
                    <div className="space-y-1.5 md:grid md:grid-cols-2 md:gap-3 md:mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 text-gray-400 flex-shrink-0" />
                        <span className="truncate">{request.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <Phone className="w-3.5 h-3.5 md:w-4 md:h-4 text-gray-400 flex-shrink-0" />
                        <span className="truncate">{request.phone}</span>
                      </div>
                    </div>

                    {request.file && (
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-2 md:mb-4">
                        <FileText className="w-3.5 h-3.5 md:w-4 md:h-4 text-gray-400 flex-shrink-0" />
                        <span className="truncate">{request.file}</span>
                      </div>
                    )}

                    {request.notes && (
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-2 md:p-3 text-sm text-gray-600 dark:text-gray-400 border border-gray-100 dark:border-gray-700">
                        <span className="font-medium text-gray-900 dark:text-white">Notes:</span> {request.notes}
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>

            {/* Detail Panel */}
            <div className="hidden lg:block lg:col-span-1">
              {selectedRequest ? (
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-5 sticky top-24">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Request Details</h3>
                    <button
                      onClick={() => setSelectedRequest(null)}
                      className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                    >
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="space-y-3 mb-5">
                    <div>
                      <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">Service</label>
                      <p className="text-gray-900 dark:text-white font-medium flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-gray-400" />
                        {SERVICE_LABELS[selectedRequest.service]}
                      </p>
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">Location</label>
                      <p className="text-gray-900 dark:text-white flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        {selectedRequest.location}
                      </p>
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">Phone</label>
                      <a
                        href={`tel:${selectedRequest.phone.replace(/\s/g, '')}`}
                        className="text-brand-primary font-medium hover:underline flex items-center gap-2"
                      >
                        <Phone className="w-4 h-4" />
                        {selectedRequest.phone}
                      </a>
                    </div>
                    {selectedRequest.file && (
                      <div>
                        <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">File</label>
                        <div className="flex items-center gap-2 text-gray-900 dark:text-white">
                          <FileText className="w-4 h-4 text-gray-400" />
                          <span>{selectedRequest.file}</span>
                        </div>
                      </div>
                    )}
                    <div>
                      <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">Submitted</label>
                      <p className="text-gray-900 dark:text-white flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        {formatDate(selectedRequest.createdAt)}
                      </p>
                    </div>
                  </div>

                  {/* Status Actions */}
                  <div className="border-t border-gray-200 dark:border-gray-800 pt-4 mb-5">
                    <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">Update Status</label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => updateStatus(selectedRequest.id, 'pending')}
                        className={`px-3 py-2 rounded text-sm font-medium transition-all ${
                          selectedRequest.status === 'pending'
                            ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                            : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                        }`}
                      >
                        Pending
                      </button>
                      <button
                        onClick={() => updateStatus(selectedRequest.id, 'contacted')}
                        className={`px-3 py-2 rounded text-sm font-medium transition-all ${
                          selectedRequest.status === 'contacted'
                            ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                            : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                        }`}
                      >
                        Contacted
                      </button>
                      <button
                        onClick={() => updateStatus(selectedRequest.id, 'quoted')}
                        className={`px-3 py-2 rounded text-sm font-medium transition-all ${
                          selectedRequest.status === 'quoted'
                            ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400'
                            : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                        }`}
                      >
                        Quoted
                      </button>
                      <button
                        onClick={() => updateStatus(selectedRequest.id, 'completed')}
                        className={`px-3 py-2 rounded text-sm font-medium transition-all ${
                          selectedRequest.status === 'completed'
                            ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                            : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                        }`}
                      >
                        Completed
                      </button>
                    </div>
                  </div>

                  {/* Notes Section */}
                  <div className="border-t border-gray-200 dark:border-gray-800 pt-4 mb-5">
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Notes</label>
                      <button
                        onClick={() => setShowNotesModal(true)}
                        className="text-brand-primary hover:text-brand-secondary text-sm font-medium"
                      >
                        Edit
                      </button>
                    </div>
                    {selectedRequest.notes ? (
                      <p className="text-gray-600 dark:text-gray-400 text-sm bg-gray-50 dark:bg-gray-800 rounded p-2">
                        {selectedRequest.notes}
                      </p>
                    ) : (
                      <p className="text-gray-400 dark:text-gray-600 text-sm italic">No notes added</p>
                    )}
                  </div>

                  {/* Delete Action */}
                  <button
                    onClick={() => deleteRequest(selectedRequest.id)}
                    className="w-full px-4 py-2 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg font-medium hover:bg-red-100 dark:hover:bg-red-900/30 transition-all"
                  >
                    Delete Request
                  </button>
                </div>
              ) : (
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-8 text-center sticky top-24">
                  <p className="text-gray-600 dark:text-gray-400">Select a request to view details</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Detail Modal */}
        {selectedRequest && (
          <div 
            className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm flex items-end justify-center z-50"
            onClick={() => setSelectedRequest(null)}
          >
            <div 
              className="bg-white dark:bg-gray-900 rounded-t-2xl w-full max-h-[85vh] overflow-y-auto animate-slide-up"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Drag Handle */}
              <div className="flex justify-center pt-3 pb-1">
                <div className="w-12 h-1.5 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
              </div>
              
              <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-4 py-3 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Request Details</h3>
                <button
                  onClick={() => setSelectedRequest(null)}
                  className="flex items-center justify-center w-8 h-8 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-4 space-y-4">
                <div>
                  <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">Service</label>
                  <p className="text-gray-900 dark:text-white font-medium flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-gray-400" />
                    {SERVICE_LABELS[selectedRequest.service]}
                  </p>
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">Location</label>
                  <p className="text-gray-900 dark:text-white flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    {selectedRequest.location}
                  </p>
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">Phone</label>
                  <a
                    href={`tel:${selectedRequest.phone.replace(/\s/g, '')}`}
                    className="text-brand-primary font-medium hover:underline flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    {selectedRequest.phone}
                  </a>
                </div>
                {selectedRequest.file && (
                  <div>
                    <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">File</label>
                    <div className="flex items-center gap-2 text-gray-900 dark:text-white">
                      <FileText className="w-4 h-4 text-gray-400" />
                      <span>{selectedRequest.file}</span>
                    </div>
                  </div>
                )}
                <div>
                  <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">Submitted</label>
                  <p className="text-gray-900 dark:text-white flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    {formatDate(selectedRequest.createdAt)}
                  </p>
                </div>

                {/* Status Actions */}
                <div className="border-t border-gray-200 dark:border-gray-800 pt-4">
                  <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">Update Status</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => updateStatus(selectedRequest.id, 'pending')}
                      className={`px-3 py-2 rounded text-sm font-medium transition-all ${
                        selectedRequest.status === 'pending'
                          ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                          : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                      }`}
                    >
                      Pending
                    </button>
                    <button
                      onClick={() => updateStatus(selectedRequest.id, 'contacted')}
                      className={`px-3 py-2 rounded text-sm font-medium transition-all ${
                        selectedRequest.status === 'contacted'
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                          : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                      }`}
                    >
                      Contacted
                    </button>
                    <button
                      onClick={() => updateStatus(selectedRequest.id, 'quoted')}
                      className={`px-3 py-2 rounded text-sm font-medium transition-all ${
                        selectedRequest.status === 'quoted'
                          ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400'
                          : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                      }`}
                    >
                      Quoted
                    </button>
                    <button
                      onClick={() => updateStatus(selectedRequest.id, 'completed')}
                      className={`px-3 py-2 rounded text-sm font-medium transition-all ${
                        selectedRequest.status === 'completed'
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                          : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                      }`}
                    >
                      Completed
                    </button>
                  </div>
                </div>

                {/* Notes Section */}
                <div className="border-t border-gray-200 dark:border-gray-800 pt-4">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Notes</label>
                    <button
                      onClick={() => setShowNotesModal(true)}
                      className="text-brand-primary hover:text-brand-secondary text-sm font-medium"
                    >
                      Edit
                    </button>
                  </div>
                  {selectedRequest.notes ? (
                    <p className="text-gray-600 dark:text-gray-400 text-sm bg-gray-50 dark:bg-gray-800 rounded p-2">
                      {selectedRequest.notes}
                    </p>
                  ) : (
                    <p className="text-gray-400 dark:text-gray-600 text-sm italic">No notes added</p>
                  )}
                </div>

                {/* Delete Action */}
                <button
                  onClick={() => deleteRequest(selectedRequest.id)}
                  className="w-full px-4 py-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg font-medium hover:bg-red-100 dark:hover:bg-red-900/30 transition-all"
                >
                  Delete Request
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Notes Modal */}
        {showNotesModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-2xl p-6 w-full max-w-md">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Add Notes</h3>
              <textarea
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                placeholder="Enter notes about this request..."
                rows={4}
                className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all resize-none mb-4"
              />
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setShowNotesModal(false);
                    setNewNote('');
                  }}
                  className="flex-1 px-4 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={() => selectedRequest && addNote(selectedRequest.id, newNote)}
                  className="flex-1 px-4 py-3 bg-brand-primary text-white rounded-xl font-medium hover:bg-brand-secondary transition-all"
                >
                  Save Notes
                </button>
              </div>
            </div>
          </div>
        )}
      </AdminLayout>
    </>
  );
};

export default Admin;
