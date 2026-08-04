import React, { useMemo, useState } from 'react';
import AdminLayout from '../components/layout/AdminLayout';
import AdminHeader from '../components/layout/AdminHeader';
import AdminSidebar from '../components/admin/AdminSidebar';
import RequestDetail from '../components/admin/RequestDetail';
import SEO from '../components/common/SEO';
import Schema from '../components/common/Schema';
import { MOCK_QUOTE_REQUESTS, QuoteRequest, SERVICE_LABELS, STATUS_LABELS, STATUS_COLORS } from '../lib/mockData';
import { useTheme } from '../context/ThemeContext';
import { Search, Filter, Download, CheckSquare, Square, ArrowUpDown, X, ArrowUp, ArrowDown } from 'lucide-react';

interface Toast {
  id: number;
  message: string;
  onUndo?: () => void;
}

interface ConfirmState {
  type: 'single' | 'bulk' | null;
  id?: string;
}

type SortBy = 'createdAt' | 'updatedAt' | 'status';
type SortDir = 'asc' | 'desc';

const Admin: React.FC = () => {
  const { darkMode, setDarkMode } = useTheme();
  const [requests, setRequests] = useState<QuoteRequest[]>(MOCK_QUOTE_REQUESTS);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [selectedRequest, setSelectedRequest] = useState<QuoteRequest | null>(null);
  const [showMobileDetail, setShowMobileDetail] = useState(false);
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<SortBy>('createdAt');
  const [sortDir, setSortDir] = useState<SortDir>('desc');
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [confirm, setConfirm] = useState<ConfirmState>({ type: null });
  const [lastDeleted, setLastDeleted] = useState<QuoteRequest | null>(null);

  const filteredRequests = useMemo(() => {
    let list = requests.filter((request) => {
      const matchesStatus = filterStatus === 'all' || request.status === filterStatus;
      const term = searchTerm.toLowerCase();
      const matchesSearch =
        searchTerm === '' ||
        request.location.toLowerCase().includes(term) ||
        request.phone.includes(term) ||
        SERVICE_LABELS[request.service].toLowerCase().includes(term);
      return matchesStatus && matchesSearch;
    });

    list = [...list].sort((a, b) => {
      const dir = sortDir === 'asc' ? 1 : -1;
      if (sortBy === 'status') {
        return a.status.localeCompare(b.status) * dir;
      }
      return (new Date(a[sortBy]).getTime() - new Date(b[sortBy]).getTime()) * dir;
    });

    return list;
  }, [requests, filterStatus, searchTerm, sortBy, sortDir]);

  const stats = useMemo(() => ({
    all: requests.length,
    pending: requests.filter((r) => r.status === 'pending').length,
    contacted: requests.filter((r) => r.status === 'contacted').length,
    quoted: requests.filter((r) => r.status === 'quoted').length,
    completed: requests.filter((r) => r.status === 'completed').length,
  }), [requests]);

  const allSelected = filteredRequests.length > 0 && filteredRequests.every((r) => selectedIds.has(r.id));

  const addToast = (message: string, onUndo?: () => void) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, onUndo }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const toggleSelectAll = () => {
    if (allSelected) {
      const next = new Set(selectedIds);
      filteredRequests.forEach((r) => next.delete(r.id));
      setSelectedIds(next);
    } else {
      const next = new Set(selectedIds);
      filteredRequests.forEach((r) => next.add(r.id));
      setSelectedIds(next);
    }
  };

  const toggleSelect = (id: string) => {
    const next = new Set(selectedIds);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setSelectedIds(next);
  };

  const handleSort = (field: SortBy) => {
    if (sortBy === field) {
      setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortBy(field);
      setSortDir('desc');
    }
  };

  const exportToCSV = () => {
    const headers = ['ID', 'Service', 'Location', 'Phone', 'Status', 'Notes', 'Created', 'Updated'];
    const rows = filteredRequests.map((r) =>
      [r.id, SERVICE_LABELS[r.service], r.location, r.phone, STATUS_LABELS[r.status], r.notes || '', r.createdAt, r.updatedAt]
        .map((v) => `"${String(v).replace(/"/g, '""')}"`)
        .join(',')
    );
    const csv = [headers.join(','), ...rows].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `hasscaff-requests-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    addToast(`${filteredRequests.length} request(s) exported to CSV`);
  };

  const bulkUpdateStatus = (status: QuoteRequest['status']) => {
    if (selectedIds.size === 0) return;
    setRequests((prev) =>
      prev.map((r) =>
        selectedIds.has(r.id) ? { ...r, status, updatedAt: new Date().toISOString() } : r
      )
    );
    addToast(`${selectedIds.size} request(s) marked as ${STATUS_LABELS[status]}`);
    setSelectedIds(new Set());
  };

  const bulkDelete = () => {
    const count = selectedIds.size;
    setRequests((prev) => prev.filter((r) => !selectedIds.has(r.id)));
    setSelectedRequest((prev) => (prev && selectedIds.has(prev.id) ? null : prev));
    addToast(`${count} request(s) deleted`);
    setSelectedIds(new Set());
    setConfirm({ type: null });
  };

  const deleteRequest = (id: string) => {
    const req = requests.find((r) => r.id === id);
    if (!req) return;
    setLastDeleted(req);
    setRequests((prev) => prev.filter((r) => r.id !== id));
    setSelectedRequest((prev) => (prev?.id === id ? null : prev));
    setConfirm({ type: null });
    addToast('Request deleted', () => {
      if (lastDeleted) {
        setRequests((prev) => [...prev, lastDeleted].sort((a, b) => a.id.localeCompare(b.id)));
        setLastDeleted(null);
      }
    });
  };

  const updateStatus = (id: string, status: QuoteRequest['status']) => {
    setRequests((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status, updatedAt: new Date().toISOString() } : r))
    );
    if (selectedRequest?.id === id) {
      setSelectedRequest((prev) => (prev ? { ...prev, status, updatedAt: new Date().toISOString() } : prev));
    }
  };

  const saveNote = (id: string, note: string) => {
    setRequests((prev) =>
      prev.map((r) => (r.id === id ? { ...r, notes: note, updatedAt: new Date().toISOString() } : r))
    );
    if (selectedRequest?.id === id) {
      setSelectedRequest((prev) => (prev ? { ...prev, notes: note, updatedAt: new Date().toISOString() } : prev));
    }
    addToast('Notes saved');
  };

  const openDetail = (request: QuoteRequest) => {
    setSelectedRequest(request);
    setShowMobileDetail(true);
  };

  const closeDetail = () => {
    setShowMobileDetail(false);
    setTimeout(() => setSelectedRequest(null), 200);
  };

  const statCards: { label: string; value: number; status: string }[] = [
    { label: 'All', value: stats.all, status: 'all' },
    { label: 'Pending', value: stats.pending, status: 'pending' },
    { label: 'Contacted', value: stats.contacted, status: 'contacted' },
    { label: 'Quoted', value: stats.quoted, status: 'quoted' },
    { label: 'Completed', value: stats.completed, status: 'completed' },
  ];

  const SortIcon = ({ field }: { field: SortBy }) => {
    if (sortBy !== field) return <ArrowUpDown className="w-4 h-4 text-gray-400" />;
    return sortDir === 'asc' ? <ArrowUp className="w-4 h-4 text-brand-primary" /> : <ArrowDown className="w-4 h-4 text-brand-primary" />;
  };

  return (
    <>
      <SEO title="Admin Panel - Hasscaff" description="Manage quote requests and customer inquiries" path="/admin" noIndex />
      <Schema
        type="BreadcrumbList"
        data={{
          items: [
            { name: 'Home', path: '/' },
            { name: 'Admin', path: '/admin' },
          ],
        }}
      />
      <AdminLayout>
        <AdminHeader
          title="Admin Panel"
          description="Manage quote requests and customer inquiries"
          onRefresh={() => setRequests(MOCK_QUOTE_REQUESTS)}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        <div className="flex">
          <AdminSidebar />
          <main className="flex-1 min-w-0">
            {/* Stats */}
            <section className="p-4 md:p-6 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
                {statCards.map((card) => (
                  <button
                    key={card.status}
                    onClick={() => setFilterStatus(card.status)}
                    className={`p-4 rounded-2xl border-2 text-left transition-all ${
                      filterStatus === card.status
                        ? 'border-brand-primary bg-brand-primary/5 dark:bg-brand-primary/10'
                        : 'border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 hover:border-brand-primary'
                    }`}
                  >
                    <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">{card.label}</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{card.value}</p>
                  </button>
                ))}
              </div>
            </section>

            {/* Toolbar */}
            <section className="p-4 md:p-6 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
              <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
                <div className="flex flex-col sm:flex-row gap-3 flex-1">
                  <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search by location, phone, service..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 border-2 border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <Filter className="w-4 h-4 text-gray-500" />
                    <select
                      value={filterStatus}
                      onChange={(e) => setFilterStatus(e.target.value)}
                      className="px-3 py-2.5 border-2 border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-gray-900 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-primary"
                    >
                      <option value="all">All statuses</option>
                      <option value="pending">Pending</option>
                      <option value="contacted">Contacted</option>
                      <option value="quoted">Quoted</option>
                      <option value="completed">Completed</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {selectedIds.size > 0 && (
                    <>
                      <select
                        onChange={(e) => bulkUpdateStatus(e.target.value as QuoteRequest['status'])}
                        value=""
                        className="px-3 py-2.5 border-2 border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-gray-900 text-sm text-gray-900 dark:text-white"
                      >
                        <option value="" disabled>
                          Set status
                        </option>
                        <option value="pending">Pending</option>
                        <option value="contacted">Contacted</option>
                        <option value="quoted">Quoted</option>
                        <option value="completed">Completed</option>
                      </select>
                      <button
                        onClick={() => setConfirm({ type: 'bulk' })}
                        className="px-4 py-2.5 border-2 border-red-500 text-red-500 rounded-xl text-sm font-bold hover:bg-red-500 hover:text-white transition-colors"
                      >
                        Delete {selectedIds.size}
                      </button>
                    </>
                  )}
                  <button
                    onClick={exportToCSV}
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-brand-primary text-white rounded-xl text-sm font-bold hover:bg-brand-secondary transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Export CSV
                  </button>
                </div>
              </div>
            </section>

            {/* Table */}
            <section className="p-4 md:p-6">
              <div className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-800">
                      <tr>
                        <th className="p-4 w-12">
                          <button onClick={toggleSelectAll} className="focus:outline-none">
                            {allSelected ? <CheckSquare className="w-5 h-5 text-brand-primary" /> : <Square className="w-5 h-5 text-gray-400" />}
                          </button>
                        </th>
                        <th className="p-4 cursor-pointer" onClick={() => handleSort('createdAt')}>
                          <span className="flex items-center gap-1 font-bold text-gray-700 dark:text-gray-300">
                            Date <SortIcon field="createdAt" />
                          </span>
                        </th>
                        <th className="p-4 font-bold text-gray-700 dark:text-gray-300">Service</th>
                        <th className="p-4 font-bold text-gray-700 dark:text-gray-300">Location</th>
                        <th className="p-4 font-bold text-gray-700 dark:text-gray-300">Phone</th>
                        <th className="p-4 cursor-pointer" onClick={() => handleSort('status')}>
                          <span className="flex items-center gap-1 font-bold text-gray-700 dark:text-gray-300">
                            Status <SortIcon field="status" />
                          </span>
                        </th>
                        <th className="p-4 hidden md:table-cell font-bold text-gray-700 dark:text-gray-300">Notes</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                      {filteredRequests.map((request) => (
                        <tr
                          key={request.id}
                          className={`hover:bg-gray-50 dark:hover:bg-gray-900/50 cursor-pointer transition-colors ${
                            selectedRequest?.id === request.id ? 'bg-brand-primary/5 dark:bg-brand-primary/10' : ''
                          }`}
                          onClick={() => openDetail(request)}
                        >
                          <td className="p-4" onClick={(e) => e.stopPropagation()}>
                            <button onClick={() => toggleSelect(request.id)} className="focus:outline-none">
                              {selectedIds.has(request.id) ? (
                                <CheckSquare className="w-5 h-5 text-brand-primary" />
                              ) : (
                                <Square className="w-5 h-5 text-gray-400" />
                              )}
                            </button>
                          </td>
                          <td className="p-4 text-gray-900 dark:text-white font-medium">
                            {new Date(request.createdAt).toLocaleDateString()}
                          </td>
                          <td className="p-4 text-gray-900 dark:text-white">{SERVICE_LABELS[request.service]}</td>
                          <td className="p-4 text-gray-900 dark:text-white">{request.location}</td>
                          <td className="p-4 text-gray-600 dark:text-gray-400">{request.phone}</td>
                          <td className="p-4">
                            <span
                              className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${STATUS_COLORS[request.status]}`}
                            >
                              {STATUS_LABELS[request.status]}
                            </span>
                          </td>
                          <td className="p-4 hidden md:table-cell text-gray-600 dark:text-gray-400 max-w-xs truncate">
                            {request.notes || '—'}
                          </td>
                        </tr>
                      ))}
                      {filteredRequests.length === 0 && (
                        <tr>
                          <td colSpan={7} className="p-8 text-center text-gray-500 dark:text-gray-400">
                            No requests match your filters.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </main>

          {/* Desktop detail panel */}
          <aside className="hidden lg:block w-96 sticky top-0 h-[calc(100vh-64px)] overflow-hidden border-l border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
            <RequestDetail
              request={selectedRequest}
              onClose={() => setSelectedRequest(null)}
              onStatusChange={updateStatus}
              onNoteSave={saveNote}
              onDelete={(id) => setConfirm({ type: 'single', id })}
            />
          </aside>
        </div>
      </AdminLayout>

      {/* Mobile detail modal */}
      {showMobileDetail && selectedRequest && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={closeDetail} />
          <div className="absolute inset-y-0 right-0 w-full max-w-md bg-white dark:bg-gray-900 shadow-xl">
            <RequestDetail
              request={selectedRequest}
              onClose={closeDetail}
              onStatusChange={updateStatus}
              onNoteSave={saveNote}
              onDelete={(id) => setConfirm({ type: 'single', id })}
            />
          </div>
        </div>
      )}

      {/* Confirm modal */}
      {confirm.type && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 w-full max-w-md border-2 border-gray-200 dark:border-gray-800 shadow-xl">
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
              {confirm.type === 'bulk' ? `Delete ${selectedIds.size} requests?` : 'Delete this request?'}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {confirm.type === 'bulk'
                ? 'This will permanently remove all selected requests.'
                : 'This will permanently remove the request. You can undo this action immediately after.'}
            </p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setConfirm({ type: null })}
                className="px-4 py-2 border-2 border-gray-200 dark:border-gray-800 rounded-xl font-bold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={() =>
                  confirm.type === 'single' && confirm.id
                    ? deleteRequest(confirm.id)
                    : bulkDelete()
                }
                className="px-4 py-2 bg-red-500 text-white rounded-xl font-bold hover:bg-red-600 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toasts */}
      <div className="fixed bottom-4 right-4 z-[70] space-y-2">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-3 rounded-xl shadow-lg flex items-center gap-3"
          >
            <span className="text-sm font-medium">{toast.message}</span>
            {toast.onUndo && (
              <button
                onClick={() => {
                  toast.onUndo?.();
                  setToasts((prev) => prev.filter((t) => t.id !== toast.id));
                }}
                className="text-brand-primary font-bold text-sm hover:underline"
              >
                Undo
              </button>
            )}
            <button onClick={() => setToasts((prev) => prev.filter((t) => t.id !== toast.id))} className="ml-2">
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Admin;
