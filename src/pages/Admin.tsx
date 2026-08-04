import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AdminLayout from '../components/layout/AdminLayout';
import AdminHeader from '../components/layout/AdminHeader';
import SEO from '../components/common/SEO';
import Schema from '../components/common/Schema';
import { useTheme } from '../context/ThemeContext';
import {
  MOCK_QUOTE_REQUESTS,
  QuoteRequest,
  SERVICE_LABELS,
  STATUS_LABELS,
  STATUS_COLORS,
} from '../lib/mockData';
import {
  Search,
  Filter,
  Download,
  CheckSquare,
  Square,
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  Phone,
  MapPin,
  Calendar,
  Building2,
  FileText,
  Trash2,
  X,
  LayoutDashboard,
  Inbox,
  Check,
  ChevronRight,
  AlertTriangle,
} from 'lucide-react';

type View = 'dashboard' | 'requests';
type SortBy = 'createdAt' | 'updatedAt' | 'status';
type SortDir = 'asc' | 'desc';

interface ToastMsg {
  id: number;
  message: string;
  onUndo?: () => void;
}

const StatusBadge: React.FC<{ status: QuoteRequest['status'] }> = ({ status }) => (
  <span
    className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold uppercase tracking-wide ${STATUS_COLORS[status]}`}
  >
    <span className="w-1 h-1 rounded-full bg-current mr-1" />
    {STATUS_LABELS[status]}
  </span>
);

const Button: React.FC<{
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'ghost' | 'danger';
  type?: 'button';
  className?: string;
}> = ({ onClick, children, variant = 'primary', className = '' }) => {
  const base =
    'inline-flex items-center justify-center h-8 px-3 text-xs font-medium rounded transition-colors border';
  const styles =
    variant === 'primary'
      ? 'bg-brand-primary text-white border-transparent hover:bg-brand-secondary'
      : variant === 'danger'
      ? 'bg-transparent text-red-500 border-red-500 hover:bg-red-500 hover:text-white'
      : 'bg-transparent text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800';
  return (
    <button onClick={onClick} className={`${base} ${styles} ${className}`}>
      {children}
    </button>
  );
};

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-3 ${className}`}>
    {children}
  </div>
);

const Admin: React.FC = () => {
  const { darkMode, setDarkMode } = useTheme();
  const [view, setView] = useState<View>('dashboard');
  const [requests, setRequests] = useState<QuoteRequest[]>(MOCK_QUOTE_REQUESTS);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<SortBy>('createdAt');
  const [sortDir, setSortDir] = useState<SortDir>('desc');
  const [toasts, setToasts] = useState<ToastMsg[]>([]);
  const [confirm, setConfirm] = useState<{ id?: string; bulk?: boolean } | null>(null);
  const [lastDeleted, setLastDeleted] = useState<QuoteRequest | null>(null);

  const filteredRequests = useMemo(() => {
    const list = requests
      .filter((r) => (filterStatus === 'all' ? true : r.status === filterStatus))
      .filter(
        (r) =>
          searchTerm === '' ||
          r.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
          r.phone.includes(searchTerm) ||
          SERVICE_LABELS[r.service].toLowerCase().includes(searchTerm.toLowerCase())
      );
    return [...list].sort((a, b) => {
      const dir = sortDir === 'asc' ? 1 : -1;
      if (sortBy === 'status') return a.status.localeCompare(b.status) * dir;
      return (new Date(a[sortBy]).getTime() - new Date(b[sortBy]).getTime()) * dir;
    });
  }, [requests, filterStatus, searchTerm, sortBy, sortDir]);

  const stats = useMemo(() => ({
    total: requests.length,
    pending: requests.filter((r) => r.status === 'pending').length,
    contacted: requests.filter((r) => r.status === 'contacted').length,
    quoted: requests.filter((r) => r.status === 'quoted').length,
    completed: requests.filter((r) => r.status === 'completed').length,
  }), [requests]);

  const selectedRequest = useMemo(
    () => requests.find((r) => r.id === selectedId) || null,
    [requests, selectedId]
  );

  const allSelected = filteredRequests.length > 0 && filteredRequests.every((r) => selectedIds.has(r.id));

  const notify = (message: string, onUndo?: () => void) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, onUndo }]);
    setTimeout(() => setToasts((prev) => prev.filter((t) => t.id !== id)), 4000);
  };

  const toggleSelectAll = () => {
    const next = new Set(selectedIds);
    if (allSelected) filteredRequests.forEach((r) => next.delete(r.id));
    else filteredRequests.forEach((r) => next.add(r.id));
    setSelectedIds(next);
  };

  const toggleSelect = (id: string) => {
    const next = new Set(selectedIds);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setSelectedIds(next);
  };

  const handleSort = (field: SortBy) => {
    if (sortBy === field) setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'));
    else {
      setSortBy(field);
      setSortDir('desc');
    }
  };

  const exportCSV = () => {
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
    notify(`${filteredRequests.length} request(s) exported`);
  };

  const bulkStatus = (status: QuoteRequest['status']) => {
    if (!selectedIds.size) return;
    setRequests((prev) =>
      prev.map((r) => (selectedIds.has(r.id) ? { ...r, status, updatedAt: new Date().toISOString() } : r))
    );
    notify(`${selectedIds.size} requests set to ${STATUS_LABELS[status]}`);
    setSelectedIds(new Set());
  };

  const doDelete = (id: string) => {
    const req = requests.find((r) => r.id === id);
    if (!req) return;
    setLastDeleted(req);
    setRequests((prev) => prev.filter((r) => r.id !== id));
    if (selectedId === id) setSelectedId(null);
    setConfirm(null);
    notify('Request deleted', () => {
      if (lastDeleted) {
        setRequests((prev) => [...prev, lastDeleted].sort((a, b) => a.id.localeCompare(b.id)));
        setLastDeleted(null);
      }
    });
  };

  const doBulkDelete = () => {
    const count = selectedIds.size;
    setRequests((prev) => prev.filter((r) => !selectedIds.has(r.id)));
    if (selectedId && selectedIds.has(selectedId)) setSelectedId(null);
    setSelectedIds(new Set());
    setConfirm(null);
    notify(`${count} requests deleted`);
  };

  const updateStatus = (id: string, status: QuoteRequest['status']) => {
    setRequests((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status, updatedAt: new Date().toISOString() } : r))
    );
  };

  const saveNote = (id: string, note: string) => {
    setRequests((prev) =>
      prev.map((r) => (r.id === id ? { ...r, notes: note, updatedAt: new Date().toISOString() } : r))
    );
    notify('Notes saved');
  };

  const SortIcon: React.FC<{ field: SortBy }> = ({ field }) => {
    if (sortBy !== field) return <ArrowUpDown className="w-3.5 h-3.5 text-gray-400" />;
    return sortDir === 'asc' ? <ArrowUp className="w-3.5 h-3.5 text-brand-primary" /> : <ArrowDown className="w-3.5 h-3.5 text-brand-primary" />;
  };

  const statItems = [
    { label: 'Total', value: stats.total, status: 'all' },
    { label: 'Pending', value: stats.pending, status: 'pending' },
    { label: 'Contacted', value: stats.contacted, status: 'contacted' },
    { label: 'Quoted', value: stats.quoted, status: 'quoted' },
    { label: 'Completed', value: stats.completed, status: 'completed' },
  ];

  return (
    <>
      <SEO title="Admin - Hasscaff" description="Manage quote requests and customer inquiries" path="/admin" noIndex />
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
          title="Admin"
          description="Quote and job pipeline"
          onRefresh={() => setRequests(MOCK_QUOTE_REQUESTS)}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        <div className="bg-gray-50 dark:bg-gray-950 min-h-[calc(100vh-64px)]">
          <div className="flex border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
            {([
              { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
              { id: 'requests', label: 'Requests', icon: Inbox },
            ] as { id: View; label: string; icon: React.ElementType }[]).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setView(tab.id)}
                className={`px-4 py-3 text-xs font-semibold flex items-center gap-2 border-b-2 transition-colors ${
                  view === tab.id
                    ? 'border-brand-primary text-brand-primary'
                    : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                <tab.icon className="w-3.5 h-3.5" />
                {tab.label}
              </button>
            ))}
          </div>

          {view === 'dashboard' ? (
            <div className="p-3 md:p-4 space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {statItems.map((item) => (
                  <button
                    key={item.status}
                    onClick={() => {
                      setFilterStatus(item.status);
                      setView('requests');
                    }}
                    className={`text-left border rounded-lg p-3 transition-colors ${
                      filterStatus === item.status
                        ? 'border-brand-primary bg-brand-primary/5 dark:bg-brand-primary/10'
                        : 'border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-gray-300 dark:hover:border-gray-700'
                    }`}
                  >
                    <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">{item.label}</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{item.value}</p>
                  </button>
                ))}
              </div>

              <Card>
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-sm font-bold text-gray-900 dark:text-white">Recent Requests</h2>
                  <button onClick={() => setView('requests')} className="text-xs font-semibold text-brand-primary hover:underline flex items-center gap-1">
                    View all <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="divide-y divide-gray-100 dark:divide-gray-800">
                  {requests.slice(0, 5).map((request) => (
                    <div
                      key={request.id}
                      onClick={() => setSelectedId(request.id)}
                      className="flex items-center justify-between py-2.5 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors"
                    >
                      <div>
                        <p className="text-xs font-bold text-gray-900 dark:text-white">{SERVICE_LABELS[request.service]}</p>
                        <p className="text-[11px] text-gray-500 dark:text-gray-400 flex items-center gap-1 mt-0.5">
                          <MapPin className="w-3 h-3" /> {request.location}
                        </p>
                      </div>
                      <StatusBadge status={request.status} />
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          ) : (
            <div className="p-3 md:p-4">
              <div className="flex flex-col lg:flex-row gap-3 lg:items-center lg:justify-between mb-3">
                <div className="flex flex-col sm:flex-row gap-2 flex-1">
                  <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search location, phone, service..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full h-9 pl-8 pr-3 text-xs border border-gray-200 dark:border-gray-800 rounded bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-brand-primary"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <Filter className="w-3.5 h-3.5 text-gray-500" />
                    <select
                      value={filterStatus}
                      onChange={(e) => setFilterStatus(e.target.value)}
                      className="h-9 px-2 text-xs border border-gray-200 dark:border-gray-800 rounded bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                    >
                      <option value="all">All</option>
                      <option value="pending">Pending</option>
                      <option value="contacted">Contacted</option>
                      <option value="quoted">Quoted</option>
                      <option value="completed">Completed</option>
                    </select>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {selectedIds.size > 0 && (
                    <>
                      <select
                        onChange={(e) => e.target.value && bulkStatus(e.target.value as QuoteRequest['status'])}
                        value=""
                        className="h-9 px-2 text-xs border border-gray-200 dark:border-gray-800 rounded bg-white dark:bg-gray-900"
                      >
                        <option value="" disabled>
                          Set status
                        </option>
                        <option value="pending">Pending</option>
                        <option value="contacted">Contacted</option>
                        <option value="quoted">Quoted</option>
                        <option value="completed">Completed</option>
                      </select>
                      <Button onClick={() => setConfirm({ bulk: true })} variant="danger">
                        Delete {selectedIds.size}
                      </Button>
                    </>
                  )}
                  <Button onClick={exportCSV}>
                    <Download className="w-3.5 h-3.5 mr-1.5" />
                    Export CSV
                  </Button>
                </div>
              </div>

              <Card className="overflow-hidden p-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-800 text-[11px] font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                      <tr>
                        <th className="w-10 py-2 px-3">
                          <button onClick={toggleSelectAll} className="focus:outline-none">
                            {allSelected ? <CheckSquare className="w-4 h-4 text-brand-primary" /> : <Square className="w-4 h-4 text-gray-400" />}
                          </button>
                        </th>
                        <th className="py-2 px-3 cursor-pointer" onClick={() => handleSort('createdAt')}>
                          <span className="flex items-center gap-1">
                            Date <SortIcon field="createdAt" />
                          </span>
                        </th>
                        <th className="py-2 px-3">Service</th>
                        <th className="py-2 px-3">Location</th>
                        <th className="py-2 px-3">Phone</th>
                        <th className="py-2 px-3 cursor-pointer" onClick={() => handleSort('status')}>
                          <span className="flex items-center gap-1">
                            Status <SortIcon field="status" />
                          </span>
                        </th>
                        <th className="py-2 px-3 hidden md:table-cell">Notes</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-gray-800 text-xs">
                      {filteredRequests.map((request) => (
                        <tr
                          key={request.id}
                          className={`cursor-pointer transition-colors ${
                            selectedId === request.id ? 'bg-brand-primary/5 dark:bg-brand-primary/10' : 'hover:bg-gray-50 dark:hover:bg-gray-900/50'
                          }`}
                          onClick={() => setSelectedId(request.id)}
                        >
                          <td className="py-2 px-3" onClick={(e) => e.stopPropagation()}>
                            <button onClick={() => toggleSelect(request.id)} className="focus:outline-none">
                              {selectedIds.has(request.id) ? (
                                <CheckSquare className="w-4 h-4 text-brand-primary" />
                              ) : (
                                <Square className="w-4 h-4 text-gray-400" />
                              )}
                            </button>
                          </td>
                          <td className="py-2 px-3 tabular-nums text-gray-900 dark:text-white">
                            {new Date(request.createdAt).toLocaleDateString()}
                          </td>
                          <td className="py-2 px-3 text-gray-900 dark:text-white">{SERVICE_LABELS[request.service]}</td>
                          <td className="py-2 px-3 text-gray-900 dark:text-white">{request.location}</td>
                          <td className="py-2 px-3 tabular-nums text-gray-600 dark:text-gray-400">{request.phone}</td>
                          <td className="py-2 px-3">
                            <StatusBadge status={request.status} />
                          </td>
                          <td className="py-2 px-3 hidden md:table-cell text-gray-600 dark:text-gray-400 max-w-xs truncate">
                            {request.notes || '—'}
                          </td>
                        </tr>
                      ))}
                      {filteredRequests.length === 0 && (
                        <tr>
                          <td colSpan={7} className="py-8 text-center text-xs text-gray-500 dark:text-gray-400">
                            No requests found.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>
          )}
        </div>
      </AdminLayout>

      <AnimatePresence>
        {selectedId && selectedRequest && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="fixed inset-0 z-50 bg-black/40"
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 z-50 w-full max-w-sm h-full bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-800 shadow-2xl overflow-y-auto"
            >
              <DetailDrawer
                request={selectedRequest}
                onClose={() => setSelectedId(null)}
                onStatusChange={updateStatus}
                onNoteSave={saveNote}
                onDelete={(id) => setConfirm({ id })}
              />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {confirm && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white dark:bg-gray-900 rounded-lg p-5 w-full max-w-sm border border-gray-200 dark:border-gray-800 shadow-xl">
            <div className="flex items-center gap-2 mb-3 text-red-500">
              <AlertTriangle className="w-5 h-5" />
              <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                {confirm.bulk ? `Delete ${selectedIds.size} requests?` : 'Delete this request?'}
              </h3>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-4">
              {confirm.bulk ? 'This will remove all selected requests.' : 'You can undo this immediately after.'}
            </p>
            <div className="flex gap-2 justify-end">
              <Button onClick={() => setConfirm(null)} variant="ghost">
                Cancel
              </Button>
              <Button onClick={() => (confirm.bulk ? doBulkDelete() : confirm.id ? doDelete(confirm.id) : null)} variant="danger">
                Delete
              </Button>
            </div>
          </div>
        </div>
      )}

      <div className="fixed bottom-3 right-3 z-[70] space-y-2">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-3 py-2 rounded-lg shadow-lg flex items-center gap-2 text-xs"
            >
              <span className="font-medium">{toast.message}</span>
              {toast.onUndo && (
                <button
                  onClick={() => {
                    toast.onUndo?.();
                    setToasts((prev) => prev.filter((t) => t.id !== toast.id));
                  }}
                  className="text-brand-primary font-semibold hover:underline"
                >
                  Undo
                </button>
              )}
              <button onClick={() => setToasts((prev) => prev.filter((t) => t.id !== toast.id))}>
                <X className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
};

const DetailDrawer: React.FC<{
  request: QuoteRequest;
  onClose: () => void;
  onStatusChange: (id: string, status: QuoteRequest['status']) => void;
  onNoteSave: (id: string, note: string) => void;
  onDelete: (id: string) => void;
}> = ({ request, onClose, onStatusChange, onNoteSave, onDelete }) => {
  const [note, setNote] = useState(request.notes || '');
  const statuses: QuoteRequest['status'][] = ['pending', 'contacted', 'quoted', 'completed'];

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-5 pb-3 border-b border-gray-200 dark:border-gray-800">
        <h2 className="text-sm font-bold text-gray-900 dark:text-white">Request Details</h2>
        <button onClick={onClose} className="p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-2">
          <InfoItem label="Phone" value={request.phone} icon={<Phone className="w-3 h-3" />} href={`tel:${request.phone.replace(/\s/g, '')}`} />
          <InfoItem label="Location" value={request.location} icon={<MapPin className="w-3 h-3" />} />
          <InfoItem label="Service" value={SERVICE_LABELS[request.service]} icon={<Building2 className="w-3 h-3" />} />
          <InfoItem label="Submitted" value={new Date(request.createdAt).toLocaleDateString()} icon={<Calendar className="w-3 h-3" />} />
        </div>

        <div>
          <label className="text-[10px] font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400">Status</label>
          <div className="flex flex-wrap gap-2 mt-1.5">
            {statuses.map((status) => (
              <button
                key={status}
                onClick={() => onStatusChange(request.id, status)}
                className={`px-2.5 py-1 rounded text-[11px] font-semibold border transition-all ${
                  request.status === status
                    ? `${STATUS_COLORS[status]} ring-1 ring-offset-1 ring-offset-white dark:ring-offset-gray-900 ring-brand-primary`
                    : 'border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:border-brand-primary'
                }`}
              >
                {STATUS_LABELS[status]}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-[10px] font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400">Notes</label>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="w-full p-2.5 mt-1.5 border border-gray-200 dark:border-gray-800 rounded bg-white dark:bg-gray-900 text-xs min-h-[100px] focus:outline-none focus:ring-1 focus:ring-brand-primary"
          />
          <Button onClick={() => onNoteSave(request.id, note)} className="mt-2">
            <Check className="w-3.5 h-3.5 mr-1" /> Save Notes
          </Button>
        </div>

        {request.file && (
          <div className="p-2.5 border border-gray-200 dark:border-gray-800 rounded-lg flex items-center gap-2">
            <FileText className="w-4 h-4 text-brand-primary" />
            <span className="text-xs text-gray-700 dark:text-gray-300 flex-1 truncate">{request.file}</span>
          </div>
        )}

        <Button onClick={() => onDelete(request.id)} variant="danger" className="w-full">
          <Trash2 className="w-3.5 h-3.5 mr-1.5" /> Delete Request
        </Button>
      </div>
    </div>
  );
};

const InfoItem = ({
  label,
  value,
  icon,
  href,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
  href?: string;
}) => (
  <div className="p-2.5 rounded border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
    <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-0.5">
      {icon} {label}
    </div>
    {href ? (
      <a href={href} className="text-xs font-semibold text-gray-900 dark:text-white hover:text-brand-primary">
        {value}
      </a>
    ) : (
      <p className="text-xs font-semibold text-gray-900 dark:text-white">{value}</p>
    )}
  </div>
);

export default Admin;
