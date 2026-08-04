import React, { useMemo, useState } from 'react';
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
  Home,
  FileText,
  Trash2,
  X,
  Check,
  Inbox,
  Activity,
  LayoutDashboard,
  RefreshCw,
  Plus,
  Users,
  TrendingUp,
  AlertCircle,
} from 'lucide-react';

type SortBy = 'createdAt' | 'updatedAt' | 'status';
type SortDir = 'asc' | 'desc';

type AdminView = 'overview' | 'requests';

interface ToastMsg {
  id: number;
  message: string;
  onUndo?: () => void;
}

const StatusBadge: React.FC<{ status: QuoteRequest['status'] }> = ({ status }) => (
  <span
    className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${STATUS_COLORS[status]}`}
  >
    <span className="w-1.5 h-1.5 rounded-full bg-current mr-1.5" />
    {STATUS_LABELS[status]}
  </span>
);

const formatDate = (iso: string) => new Date(iso).toLocaleDateString();

const Admin: React.FC = () => {
  const { darkMode, setDarkMode } = useTheme();
  const [requests, setRequests] = useState<QuoteRequest[]>(MOCK_QUOTE_REQUESTS);
  const [view, setView] = useState<AdminView>('overview');
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<SortBy>('createdAt');
  const [sortDir, setSortDir] = useState<SortDir>('desc');
  const [toasts, setToasts] = useState<ToastMsg[]>([]);

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

  const stats = useMemo(() => {
    const total = requests.length;
    return {
      total,
      pending: requests.filter((r) => r.status === 'pending').length,
      contacted: requests.filter((r) => r.status === 'contacted').length,
      quoted: requests.filter((r) => r.status === 'quoted').length,
      completed: requests.filter((r) => r.status === 'completed').length,
    };
  }, [requests]);

  const serviceBreakdown = useMemo(() => {
    const counts: Record<string, number> = {};
    requests.forEach((r) => {
      const label = SERVICE_LABELS[r.service];
      counts[label] = (counts[label] || 0) + 1;
    });
    return Object.entries(counts).sort((a, b) => b[1] - a[1]);
  }, [requests]);

  const locationBreakdown = useMemo(() => {
    const counts: Record<string, number> = {};
    requests.forEach((r) => {
      counts[r.location] = (counts[r.location] || 0) + 1;
    });
    return Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 8);
  }, [requests]);

  const recentRequests = useMemo(
    () => [...requests].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).slice(0, 5),
    [requests]
  );

  const pendingQueue = useMemo(
    () => requests.filter((r) => r.status === 'pending').sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()),
    [requests]
  );

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

  const removeToast = (id: number) => setToasts((prev) => prev.filter((t) => t.id !== id));

  const toggleSelectAll = () => {
    const next = new Set(selectedIds);
    if (allSelected) {
      filteredRequests.forEach((r) => next.delete(r.id));
    } else {
      filteredRequests.forEach((r) => next.add(r.id));
    }
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
    const list = view === 'overview' ? requests : filteredRequests;
    const headers = ['ID', 'Service', 'Location', 'Phone', 'Status', 'Notes', 'Created', 'Updated'];
    const rows = list.map((r) =>
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
    notify(`${list.length} request(s) exported to CSV`);
  };

  const bulkStatus = (status: QuoteRequest['status']) => {
    if (!selectedIds.size) return;
    setRequests((prev) =>
      prev.map((r) => (selectedIds.has(r.id) ? { ...r, status, updatedAt: new Date().toISOString() } : r))
    );
    notify(`${selectedIds.size} requests marked ${STATUS_LABELS[status]}`);
    setSelectedIds(new Set());
  };

  const doDelete = (id: string) => {
    const req = requests.find((r) => r.id === id);
    if (!req || !window.confirm('Delete this request?')) return;
    setRequests((prev) => prev.filter((r) => r.id !== id));
    if (selectedId === id) setSelectedId(null);
    notify('Request deleted', () => {
      setRequests((prev) => [...prev, req].sort((a, b) => a.id.localeCompare(b.id)));
    });
  };

  const doBulkDelete = () => {
    const count = selectedIds.size;
    if (!count || !window.confirm(`Delete ${count} requests?`)) return;
    const deleted = requests.filter((r) => selectedIds.has(r.id));
    setRequests((prev) => prev.filter((r) => !selectedIds.has(r.id)));
    if (selectedId && selectedIds.has(selectedId)) setSelectedId(null);
    setSelectedIds(new Set());
    notify(`${count} requests deleted`, () => {
      setRequests((prev) => [...prev, ...deleted].sort((a, b) => a.id.localeCompare(b.id)));
    });
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
    if (sortBy !== field) return <ArrowUpDown className="w-4 h-4 text-gray-400" />;
    return sortDir === 'asc' ? <ArrowUp className="w-4 h-4 text-brand-primary" /> : <ArrowDown className="w-4 h-4 text-brand-primary" />;
  };

  const StatCard = ({
    label,
    value,
    status,
  }: {
    label: string;
    value: number;
    status: string;
  }) => (
    <button
      onClick={() => {
        setView('requests');
        setFilterStatus(status);
        setSelectedId(null);
      }}
      className={`relative p-4 rounded-2xl border-2 text-left transition-all overflow-hidden ${
        filterStatus === status && view === 'requests'
          ? 'border-brand-primary bg-brand-primary/5 dark:bg-brand-primary/10'
          : 'border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-brand-primary/50'
      }`}
    >
      <p className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">{label}</p>
      <p className="text-2xl font-bold mt-1 text-gray-900 dark:text-white">{value}</p>
    </button>
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTableSectionElement>) => {
    if (!filteredRequests.length) return;
    const idx = filteredRequests.findIndex((r) => r.id === selectedId);
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedId(filteredRequests[idx > 0 ? idx - 1 : filteredRequests.length - 1].id);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedId(filteredRequests[idx < filteredRequests.length - 1 ? idx + 1 : 0].id);
    }
  };

  const navItems: { id: AdminView; label: string; icon: React.ReactNode }[] = [
    { id: 'overview', label: 'Overview', icon: <LayoutDashboard className="w-4 h-4" /> },
    { id: 'requests', label: 'Requests', icon: <Inbox className="w-4 h-4" /> },
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
          description="Manage quotes and customer enquiries"
          onRefresh={() => {
            setRequests(MOCK_QUOTE_REQUESTS);
            setSelectedId(null);
          }}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        <div className="bg-gray-50 dark:bg-gray-950 min-h-[calc(100vh-64px)]">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
            <nav className="flex items-center gap-2 mb-6 border-2 border-gray-200 dark:border-gray-800 p-1.5 rounded-2xl bg-white dark:bg-gray-900 w-fit">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setView(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                    view === item.id
                      ? 'bg-brand-primary text-white'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {item.icon} {item.label}
                </button>
              ))}
            </nav>

            {view === 'overview' ? (
              <OverviewTab
                stats={stats}
                serviceBreakdown={serviceBreakdown}
                locationBreakdown={locationBreakdown}
                recentRequests={recentRequests}
                pendingQueue={pendingQueue}
                onSwitchToRequests={(status) => {
                  setView('requests');
                  setFilterStatus(status);
                  setSelectedId(null);
                }}
                onExport={() => exportCSV()}
                onRefresh={() => {
                  setRequests(MOCK_QUOTE_REQUESTS);
                  setSelectedId(null);
                }}
              />
            ) : (
              <RequestsTab
                filteredRequests={filteredRequests}
                stats={stats}
                selectedRequest={selectedRequest}
                selectedIds={selectedIds}
                allSelected={allSelected}
                searchTerm={searchTerm}
                filterStatus={filterStatus}
                sortBy={sortBy}
                sortDir={sortDir}
                setSearchTerm={setSearchTerm}
                setFilterStatus={setFilterStatus}
                setSelectedId={setSelectedId}
                toggleSelect={toggleSelect}
                toggleSelectAll={toggleSelectAll}
                handleSort={handleSort}
                handleKeyDown={handleKeyDown}
                exportCSV={exportCSV}
                doBulkDelete={doBulkDelete}
                bulkStatus={bulkStatus}
                updateStatus={updateStatus}
                saveNote={saveNote}
                doDelete={doDelete}
                SortIcon={SortIcon}
              />
            )}
          </div>
        </div>
      </AdminLayout>

      <div className="fixed bottom-4 right-4 z-50 space-y-2">
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
                  removeToast(toast.id);
                }}
                className="text-brand-primary font-bold text-sm hover:underline"
              >
                Undo
              </button>
            )}
            <button onClick={() => removeToast(toast.id)} className="ml-2">
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

const OverviewTab: React.FC<{
  stats: { total: number; pending: number; contacted: number; quoted: number; completed: number };
  serviceBreakdown: [string, number][];
  locationBreakdown: [string, number][];
  recentRequests: QuoteRequest[];
  pendingQueue: QuoteRequest[];
  onSwitchToRequests: (status: string) => void;
  onExport: () => void;
  onRefresh: () => void;
}> = ({ stats, serviceBreakdown, locationBreakdown, recentRequests, pendingQueue, onSwitchToRequests, onExport, onRefresh }) => {
  const statList = [
    { label: 'Total', value: stats.total, icon: <Users className="w-5 h-5" />, status: 'all' },
    { label: 'Pending', value: stats.pending, icon: <AlertCircle className="w-5 h-5" />, status: 'pending' },
    { label: 'Quoted', value: stats.quoted, icon: <TrendingUp className="w-5 h-5" />, status: 'quoted' },
    { label: 'Completed', value: stats.completed, icon: <Check className="w-5 h-5" />, status: 'completed' },
  ];

  const quickActions = [
    { label: 'View Site', icon: <Home className="w-5 h-5" />, href: '/' },
    { label: 'New Quote', icon: <Plus className="w-5 h-5" />, href: '/contact' },
    { label: 'Export CSV', icon: <Download className="w-5 h-5" />, onClick: onExport },
    { label: 'Refresh Data', icon: <RefreshCw className="w-5 h-5" />, onClick: onRefresh },
  ];

  const maxService = serviceBreakdown.reduce((m, [, c]) => Math.max(m, c), 0) || 1;
  const maxLocation = locationBreakdown.reduce((m, [, c]) => Math.max(m, c), 0) || 1;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Overview</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">Real-time dashboard for quotes, enquiries and team activity.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {statList.map((s) => (
          <button
            key={s.status}
            onClick={() => onSwitchToRequests(s.status)}
            className="flex items-center gap-4 p-4 rounded-2xl border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-brand-primary/50 transition-all text-left"
          >
            <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">{s.icon}</div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">{s.label}</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{s.value}</p>
            </div>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {quickActions.map((a, i) => (
          <React.Fragment key={i}>
            {a.href ? (
              <a
                href={a.href}
                className="flex items-center gap-3 p-4 rounded-2xl border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-brand-primary transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">{a.icon}</div>
                <span className="font-bold text-gray-900 dark:text-white">{a.label}</span>
              </a>
            ) : (
              <button
                onClick={a.onClick}
                className="flex items-center gap-3 p-4 rounded-2xl border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-brand-primary transition-all text-left"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">{a.icon}</div>
                <span className="font-bold text-gray-900 dark:text-white">{a.label}</span>
              </button>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-2xl p-6">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Building2 className="w-5 h-5 text-brand-primary" />
            Service Breakdown
          </h3>
          <div className="space-y-3">
            {serviceBreakdown.map(([service, count]) => (
              <div key={service}>
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="font-medium text-gray-900 dark:text-white">{service}</span>
                  <span className="font-bold text-gray-500 dark:text-gray-400">{count}</span>
                </div>
                <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-brand-primary rounded-full"
                    style={{ width: `${(count / maxService) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-2xl p-6">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-brand-primary" />
            Top Locations
          </h3>
          <div className="space-y-3">
            {locationBreakdown.map(([loc, count]) => (
              <div key={loc}>
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="font-medium text-gray-900 dark:text-white">{loc}</span>
                  <span className="font-bold text-gray-500 dark:text-gray-400">{count}</span>
                </div>
                <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-brand-primary rounded-full"
                    style={{ width: `${(count / maxLocation) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-2xl p-6 overflow-hidden">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-brand-primary" />
            Recent Enquiries
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-800">
                <tr>
                  <th className="p-3 font-bold text-gray-700 dark:text-gray-300">Date</th>
                  <th className="p-3 font-bold text-gray-700 dark:text-gray-300">Service</th>
                  <th className="p-3 font-bold text-gray-700 dark:text-gray-300 hidden sm:table-cell">Location</th>
                  <th className="p-3 font-bold text-gray-700 dark:text-gray-300">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                {recentRequests.map((r) => (
                  <tr key={r.id} className="hover:bg-gray-50 dark:hover:bg-gray-900/50">
                    <td className="p-3 text-gray-900 dark:text-white font-medium">{formatDate(r.createdAt)}</td>
                    <td className="p-3 text-gray-900 dark:text-white">{SERVICE_LABELS[r.service]}</td>
                    <td className="p-3 text-gray-900 dark:text-white hidden sm:table-cell">{r.location}</td>
                    <td className="p-3"><StatusBadge status={r.status} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-2xl p-6">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-brand-primary" />
            Pending Queue
          </h3>
          {pendingQueue.length ? (
            <div className="space-y-3">
              {pendingQueue.slice(0, 6).map((r) => (
                <div key={r.id} className="flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800">
                  <div>
                    <p className="text-sm font-bold text-gray-900 dark:text-white">{r.location}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{SERVICE_LABELS[r.service]}</p>
                  </div>
                  <span className="text-xs font-mono text-gray-500 dark:text-gray-400">{formatDate(r.createdAt)}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-500 dark:text-gray-400">No pending requests. Great job.</p>
          )}
        </div>
      </div>
    </div>
  );
};

const RequestsTab: React.FC<{
  filteredRequests: QuoteRequest[];
  stats: { total: number; pending: number; contacted: number; quoted: number; completed: number };
  selectedRequest: QuoteRequest | null;
  selectedIds: Set<string>;
  allSelected: boolean;
  searchTerm: string;
  filterStatus: string;
  sortBy: SortBy;
  sortDir: SortDir;
  setSearchTerm: (s: string) => void;
  setFilterStatus: (s: string) => void;
  setSelectedId: (id: string | null) => void;
  toggleSelect: (id: string) => void;
  toggleSelectAll: () => void;
  handleSort: (field: SortBy) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLTableSectionElement>) => void;
  exportCSV: () => void;
  doBulkDelete: () => void;
  bulkStatus: (status: QuoteRequest['status']) => void;
  updateStatus: (id: string, status: QuoteRequest['status']) => void;
  saveNote: (id: string, note: string) => void;
  doDelete: (id: string) => void;
  SortIcon: React.FC<{ field: SortBy }>;
}> = ({
  filteredRequests,
  stats,
  selectedRequest,
  selectedIds,
  allSelected,
  searchTerm,
  filterStatus,
  setSearchTerm,
  setFilterStatus,
  setSelectedId,
  toggleSelect,
  toggleSelectAll,
  handleSort,
  handleKeyDown,
  exportCSV,
  doBulkDelete,
  bulkStatus,
  updateStatus,
  saveNote,
  doDelete,
  SortIcon,
}) => (
  <div className="space-y-6">
    <div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Requests</h2>
      <p className="text-sm text-gray-600 dark:text-gray-400">Select a request to view, edit, and manage customer enquiries.</p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <StatCard stats={stats} status="all" setFilterStatus={setFilterStatus} />
      <StatCard stats={stats} status="pending" setFilterStatus={setFilterStatus} />
      <StatCard stats={stats} status="quoted" setFilterStatus={setFilterStatus} />
      <StatCard stats={stats} status="completed" setFilterStatus={setFilterStatus} />
    </div>

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
            onChange={(e) => {
              setFilterStatus(e.target.value);
              setSelectedId(null);
            }}
            className="px-3 py-2.5 border-2 border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-gray-900 text-sm text-gray-900 dark:text-white"
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
              onChange={(e) => e.target.value && bulkStatus(e.target.value as QuoteRequest['status'])}
              value=""
              className="px-3 py-2.5 border-2 border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-gray-900 text-sm"
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
              onClick={doBulkDelete}
              className="px-4 py-2.5 border-2 border-red-500 text-red-500 rounded-xl text-sm font-bold hover:bg-red-500 hover:text-white transition-colors"
            >
              Delete {selectedIds.size}
            </button>
          </>
        )}
        <button
          onClick={exportCSV}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-brand-primary text-white rounded-xl text-sm font-bold hover:bg-brand-secondary transition-colors"
        >
          <Download className="w-4 h-4" />
          Export CSV
        </button>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
      <div className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-800">
              <tr>
                <th className="p-4 w-12">
                  <button onClick={toggleSelectAll} className="focus:outline-none" aria-label="Select all requests">
                    {allSelected ? <CheckSquare className="w-5 h-5 text-brand-primary" /> : <Square className="w-5 h-5 text-gray-400" />}
                  </button>
                </th>
                <th className="p-4 cursor-pointer" onClick={() => handleSort('createdAt')} title="Sort by date" aria-label="Created date">
                  <span className="flex items-center gap-1 font-bold text-gray-700 dark:text-gray-300">
                    <Calendar className="w-4 h-4" /> <SortIcon field="createdAt" />
                  </span>
                </th>
                <th className="p-4 font-bold text-gray-700 dark:text-gray-300" title="Service" aria-label="Service">
                  <Building2 className="w-4 h-4" />
                </th>
                <th className="p-4 font-bold text-gray-700 dark:text-gray-300 hidden sm:table-cell" title="Location" aria-label="Location">
                  <MapPin className="w-4 h-4" />
                </th>
                <th className="p-4 cursor-pointer" onClick={() => handleSort('status')} title="Sort by status" aria-label="Status">
                  <span className="flex items-center gap-1 font-bold text-gray-700 dark:text-gray-300">
                    <Activity className="w-4 h-4" /> <SortIcon field="status" />
                  </span>
                </th>
              </tr>
            </thead>
            <tbody
              onKeyDown={handleKeyDown}
              tabIndex={0}
              className="divide-y divide-gray-100 dark:divide-gray-800 outline-none"
            >
              {filteredRequests.map((request) => (
                <tr
                  key={request.id}
                  onClick={() => setSelectedId(request.id)}
                  className={`hover:bg-gray-50 dark:hover:bg-gray-900/50 cursor-pointer transition-colors ${
                    selectedIds.has(request.id) ? 'bg-gray-50 dark:bg-gray-900/30' : ''
                  } ${
                    selectedRequest?.id === request.id
                      ? 'bg-brand-primary/5 dark:bg-brand-primary/10 ring-1 ring-inset ring-brand-primary'
                      : ''
                  }`}
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
                  <td className="p-4 text-gray-900 dark:text-white font-medium">{formatDate(request.createdAt)}</td>
                  <td className="p-4 text-gray-900 dark:text-white">{SERVICE_LABELS[request.service]}</td>
                  <td className="p-4 text-gray-900 dark:text-white hidden sm:table-cell">{request.location}</td>
                  <td className="p-4">
                    <StatusBadge status={request.status} />
                  </td>
                </tr>
              ))}
              {filteredRequests.length === 0 && (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-gray-500 dark:text-gray-400">
                    No requests found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-2xl p-6 overflow-y-auto min-h-[300px] lg:sticky lg:top-4 lg:self-start lg:max-h-[calc(100vh-120px)]">
        {selectedRequest ? (
          <DetailPanel
            request={selectedRequest}
            onStatusChange={updateStatus}
            onNoteSave={saveNote}
            onDelete={doDelete}
          />
        ) : (
          <div className="h-full min-h-[240px] flex flex-col items-center justify-center text-gray-500 dark:text-gray-400 gap-3">
            <Inbox className="w-12 h-12" />
            <p className="font-bold">Select a request to view details</p>
          </div>
        )}
      </div>
    </div>
  </div>
);

const StatCard = ({
  stats,
  status,
  setFilterStatus,
}: {
  stats: { total: number; pending: number; contacted: number; quoted: number; completed: number };
  status: string;
  setFilterStatus: (s: string) => void;
}) => {
  const map: Record<string, { label: string; value: number }> = {
    all: { label: 'Total', value: stats.total },
    pending: { label: 'Pending', value: stats.pending },
    quoted: { label: 'Quoted', value: stats.quoted },
    completed: { label: 'Completed', value: stats.completed },
  };
  const { label, value } = map[status];
  return (
    <button
      onClick={() => setFilterStatus(status)}
      className="p-4 rounded-2xl border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-brand-primary/50 transition-all text-left w-full"
    >
      <p className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">{label}</p>
      <p className="text-2xl font-bold mt-1 text-gray-900 dark:text-white">{value}</p>
    </button>
  );
};

const DetailPanel: React.FC<{
  request: QuoteRequest;
  onStatusChange: (id: string, status: QuoteRequest['status']) => void;
  onNoteSave: (id: string, note: string) => void;
  onDelete: (id: string) => void;
}> = ({ request, onStatusChange, onNoteSave, onDelete }) => {
  const [note, setNote] = useState(request.notes || '');

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
          <Inbox className="w-5 h-5 text-brand-primary" />
          Request Details
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Info label="Phone" value={request.phone} icon={<Phone className="w-4 h-4" />} href={`tel:${request.phone.replace(/\s/g, '')}`} />
        <Info label="Location" value={request.location} icon={<MapPin className="w-4 h-4" />} />
        <Info label="Service" value={SERVICE_LABELS[request.service]} icon={<Building2 className="w-4 h-4" />} />
        <Info label="Submitted" value={formatDate(request.createdAt)} icon={<Calendar className="w-4 h-4" />} />
      </div>

      <div className="mt-6">
        <label className="text-xs font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400">Status</label>
        <div className="flex flex-wrap gap-2 mt-2">
          {(['pending', 'contacted', 'quoted', 'completed'] as QuoteRequest['status'][]).map((status) => (
            <button
              key={status}
              onClick={() => onStatusChange(request.id, status)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide border-2 transition-all ${
                request.status === status
                  ? `${STATUS_COLORS[status]} ring-2 ring-offset-2 ring-offset-white dark:ring-offset-gray-900 ring-brand-primary`
                  : 'border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:border-brand-primary'
              }`}
            >
              {STATUS_LABELS[status]}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <label className="text-xs font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400">Notes</label>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="w-full p-3 mt-2 border-2 border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm min-h-[120px] focus:outline-none focus:ring-2 focus:ring-brand-primary"
        />
        <button
          onClick={() => onNoteSave(request.id, note)}
          className="mt-2 px-4 py-2 bg-brand-primary text-white text-sm font-bold rounded-lg hover:bg-brand-secondary transition-colors"
        >
          <Check className="w-4 h-4 inline mr-1" /> Save Notes
        </button>
      </div>

      {request.file && (
        <div className="mt-6 p-4 border-2 border-gray-200 dark:border-gray-800 rounded-xl flex items-center gap-3">
          <FileText className="w-5 h-5 text-brand-primary" />
          <span className="text-sm text-gray-700 dark:text-gray-300 flex-1 truncate">{request.file}</span>
        </div>
      )}

      <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800 flex justify-end">
        <button
          onClick={() => onDelete(request.id)}
          className="flex items-center gap-2 text-red-500 hover:text-red-400 font-bold text-sm"
        >
          <Trash2 className="w-4 h-4" /> Delete Request
        </button>
      </div>
    </div>
  );
};

const Info = ({
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
  <div className="p-3 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800">
    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-1">
      {icon} {label}
    </div>
    {href ? (
      <a href={href} className="text-sm font-bold text-gray-900 dark:text-white hover:text-brand-primary">
        {value}
      </a>
    ) : (
      <p className="text-sm font-bold text-gray-900 dark:text-white">{value}</p>
    )}
  </div>
);

export default Admin;
