import React, { useEffect, useState } from 'react';
import chillLogo from '../assets/chill-99-logo.png';
import { fetchOrders as serviceFetchOrders } from '../services/postgrest';
// PrimeReact components
import 'primeicons/primeicons.css';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { ProgressSpinner } from 'primereact/progressspinner';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/saga-green/theme.css';
// Calendar and InputText are not used in this admin listing; removed unused imports.

type Order = {
  id: number;
  full_name: string;
  email: string;
  phone?: string;
  guests?: string;
  reservation_date?: string | null;
  reservation_time?: string | null;
  reservation_type?: string | null;
  raw_payload?: unknown;
  status?: string;
  created_at?: string;
};

export const AdminOrders = () => {
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (loggedIn) fetchOrders();
  }, [loggedIn]);

  const fetchOrders = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = (await serviceFetchOrders()) as unknown as Order[];
      setOrders(data || []);
    } catch (err: unknown) {
      setError((err as Error)?.message || String(err));
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const adminPass = import.meta.env.VITE_ADMIN_PASSWORD as string | undefined;
    if (!adminPass) {
      setError('No admin password configured in VITE_ADMIN_PASSWORD');
      return;
    }
    if (password === adminPass) {
      setLoggedIn(true);
      setPassword('');
      setError(null);
    } else {
      setError('Invalid password');
    }
  };

  if (!loggedIn) {
    return (
      <>
        {/* Mobile-first: logo above heading on small screens */}
        <div className="bg-gradient-to-r sm:hidden min-h-screen flex items-center justify-center  px-6 py-10">
          <div className="w-full max-w-md  border border-[#ffc000] rounded-xl p-6 rounded-lg shadow-[0_0_20px_#ffc0003d]">
            <div className="flex flex-col items-center">
              <img src={chillLogo} alt="Chill-99 Logo" className="w-[11rem] h-auto mb-4" />
              <h2 className="text-2xl text-white font-semibold mb-4">Admin Login</h2>
            </div>
            <form onSubmit={handleLogin} className="flex flex-col gap-4 mt-2">
              <label className="sr-only" htmlFor="admin-password">
                Admin Password
              </label>
              <input
                id="admin-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Admin Password"
                className="p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ffc000]"
                aria-label="Admin password"
              />
              <button
                type="submit"
                className="w-full p-3 bg-[#ffc000] text-white rounded-lg hover:bg-yellow-500 transition-colors"
              >
                Login
              </button>
              {error && <div className="text-red-500 text-center mt-1">{error}</div>}
            </form>
          </div>
        </div>

        {/* Desktop layout: larger art + login card */}
        <div className="hidden sm:flex h-[70vh] justify-center items-center bg-gradient-to-r mt-[6rem] px-6">
          <div className="flex flex-row w-[80%] gap-8 justify-center items-center rounded-lg shadow-[0_0_20px_#ffc0003d]">
            <div className="flex-1 flex items-center justify-center">
              <img src={chillLogo} alt="Chill-99 Logo" className="max-h-[30rem]" />
            </div>
            <div className="w-[36rem] bg-white border border-[#ffc000] rounded-xl shadow-md p-8 mr-0 lg:mr-8">
              <h2 className="text-3xl text-[#ffc000] font-bold mb-6 text-center">Admin Login</h2>
              <form onSubmit={handleLogin} className="flex flex-col gap-4">
                <label className="sr-only" htmlFor="admin-password-desktop">
                  Admin Password
                </label>
                <input
                  id="admin-password-desktop"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Admin Password"
                  className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#ffc000]"
                />
                <button className="p-3 bg-[#ffc000] text-white rounded hover:bg-yellow-500 transition-all">
                  Login
                </button>
                {error && <div className="text-red-500 text-center">{error}</div>}
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="p-8 flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl text-[#ffc000] font-semibold text-[2rem]">Orders</h1>
        <div className="flex flex-col sm:flex-row gap-2 items-stretch">
          <button
            onClick={fetchOrders}
            className="p-2 bg-[var(--green-primary)] text-[#1F0D09] rounded w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#ffc000]"
            aria-label="Refresh orders"
          >
            Refresh
          </button>
          <button
            onClick={() => {
              // export CSV
              const headers = [
                'id',
                'full_name',
                'email',
                'phone',
                'guests',
                'reservation_date',
                'reservation_time',
                'status',
                'created_at',
                'reservation_type',
              ];
              const rows = orders.map((o) => [
                o.id,
                o.full_name,
                o.email,
                o.phone ?? '',
                o.guests ?? '',
                o.reservation_date ?? '',
                o.reservation_time ?? '',
                o.status ?? '',
                o.created_at ?? '',
                ((o.reservation_type as string) || '').replace(/\n/g, ' '),
              ]);
              const csv = [headers, ...rows]
                .map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(','))
                .join('\n');
              const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = `orders_export_${new Date().toISOString().slice(0, 10)}.csv`;
              document.body.appendChild(a);
              a.click();
              a.remove();
              URL.revokeObjectURL(url);
            }}
            className="p-2 bg-[var(--green-primary)] text-[#1F0D09] rounded w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#ffc000]"
            aria-label="Export orders as CSV"
          >
            Export CSV
          </button>
        </div>
      </div>

      {loading && (
        <div className="flex justify-center items-center py-6" aria-live="polite">
          <ProgressSpinner />
        </div>
      )}
      {error && <div className="text-red-500">{error}</div>}
      <div className="mt-4">
        {/* Desktop/table view */}
        <div className="hidden sm:block">
          <DataTable value={orders} responsiveLayout="scroll" emptyMessage="No orders found">
            <Column field="id" header="ID" style={{ width: '6rem' }} />
            <Column field="full_name" header="Name" />
            <Column field="email" header="Email" />
            <Column field="phone" header="Phone" />
            <Column field="guests" header="Guests" />
            <Column header="Booking Type" field="reservation_type" />
            <Column header="Date" body={(row: Order) => row.reservation_date ?? '-'} />
            <Column header="Time" body={(row: Order) => row.reservation_time ?? '-'} />
            <Column field="status" header="Status" />
            <Column
              header="Created"
              body={(row: Order) =>
                row.created_at ? new Date(row.created_at).toLocaleString() : '-'
              }
            />
          </DataTable>
        </div>

        {/* Mobile/card view */}
        <div className="sm:hidden">
          {orders.length === 0 ? (
            <div className="text-center text-gray-500 py-6">No orders found</div>
          ) : (
            <div className="flex flex-col gap-4">
              {orders.map((o) => (
                <div
                  key={o.id}
                  className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
                  aria-label={`Order ${o.id} by ${o.full_name}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-sm text-gray-400">ID #{o.id}</div>
                      <div className="text-lg font-semibold text-[#1F0D09]">{o.full_name}</div>
                      <div className="text-sm text-gray-600">{o.email}</div>
                      {o.phone && <div className="text-sm text-gray-600">{o.phone}</div>}
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500">{o.status ?? '-'}</div>
                      <div className="text-xs text-gray-400">
                        {o.created_at ? new Date(o.created_at).toLocaleString() : '-'}
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-gray-700">
                    <div>
                      <div className="text-xs text-gray-400">Guests</div>
                      <div>{o.guests ?? '-'}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400">Booking</div>
                      <div>{o.reservation_type ?? '-'}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400">Date</div>
                      <div>{o.reservation_date ?? '-'}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400">Time</div>
                      <div>{o.reservation_time ?? '-'}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminOrders;
