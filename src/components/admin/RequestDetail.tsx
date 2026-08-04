import React from 'react';
import { X, Phone, MapPin, Calendar, FileText, Trash2, Building2 } from 'lucide-react';
import { QuoteRequest, SERVICE_LABELS, STATUS_LABELS, STATUS_COLORS } from '../../lib/mockData';

interface RequestDetailProps {
  request: QuoteRequest | null;
  onClose: () => void;
  onStatusChange: (id: string, status: QuoteRequest['status']) => void;
  onNoteSave: (id: string, note: string) => void;
  onDelete: (id: string) => void;
}

const statusOptions: QuoteRequest['status'][] = ['pending', 'contacted', 'quoted', 'completed'];

const RequestDetail: React.FC<RequestDetailProps> = ({ request, onClose, onStatusChange, onNoteSave, onDelete }) => {
  const [note, setNote] = React.useState(request?.notes || '');

  React.useEffect(() => {
    setNote(request?.notes || '');
  }, [request?.id]);

  if (!request) {
    return (
      <div className="h-full flex items-center justify-center text-gray-500 dark:text-gray-400 text-sm">
        Select a request to view details
      </div>
    );
  }

  return (
    <div className="h-full overflow-y-auto p-6 bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-800">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Request Details</h2>
        <button
          onClick={onClose}
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-start gap-3">
            <Phone className="w-5 h-5 text-brand-primary mt-0.5" />
            <div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Phone</div>
              <a href={`tel:${request.phone.replace(/\s/g, '')}`} className="font-medium text-gray-900 dark:text-white hover:text-brand-primary">
                {request.phone}
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-brand-primary mt-0.5" />
            <div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Location</div>
              <p className="font-medium text-gray-900 dark:text-white">{request.location}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-start gap-3">
            <Building2 className="w-5 h-5 text-brand-primary mt-0.5" />
            <div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Service</div>
              <p className="font-medium text-gray-900 dark:text-white">{SERVICE_LABELS[request.service]}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Calendar className="w-5 h-5 text-brand-primary mt-0.5" />
            <div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Submitted</div>
              <p className="font-medium text-gray-900 dark:text-white">{new Date(request.createdAt).toLocaleString()}</p>
            </div>
          </div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2">Status</div>
          <div className="flex flex-wrap gap-2">
            {statusOptions.map((status) => (
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

        <div>
          <div className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2">Notes</div>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="w-full p-3 border-2 border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-gray-900 text-gray-900 dark:text-white text-sm min-h-[100px] focus:outline-none focus:ring-2 focus:ring-brand-primary"
            placeholder="Add notes..."
          />
          <div className="flex justify-end mt-2">
            <button
              onClick={() => onNoteSave(request.id, note)}
              className="px-4 py-2 bg-brand-primary text-white text-sm font-bold rounded-lg hover:bg-brand-secondary transition-colors"
            >
              Save Notes
            </button>
          </div>
        </div>

        {request.file && (
          <div>
            <div className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2">Attached File</div>
            <div className="flex items-center gap-2 p-3 border-2 border-gray-200 dark:border-gray-800 rounded-xl text-sm text-gray-700 dark:text-gray-300">
              <FileText className="w-4 h-4 text-brand-primary" />
              <span className="flex-1 truncate">{request.file}</span>
            </div>
          </div>
        )}

        <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
          <button
            onClick={() => onDelete(request.id)}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 border-2 border-red-500 text-red-500 rounded-xl font-bold hover:bg-red-500 hover:text-white transition-colors"
          >
            <Trash2 className="w-4 h-4" />
            Delete Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequestDetail;
