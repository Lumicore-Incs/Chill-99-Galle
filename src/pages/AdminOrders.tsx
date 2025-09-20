import React, { useEffect, useState } from 'react';
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
      <div className="flex h-[55vh] max-sm:mt-[5rem] max-sm:h-[100vh] justify-center items-center bg-gradient-to-r mt-[10rem]">
        <div className="flex max-sm:block flex-row w-[80%] justify-evenly items-center rounded-lg shadow-[0_0_20px_#ffc0003d]">
          {/* Left side: Chill-99 logo */}
          <div className="flex items-center">
            <img src="/src/assets/chill-99-logo.png" alt="Chill-99 Logo" className="h-[35rem]" />
          </div>

          {/* Right side: Admin Login Section */}
          <div className="flex flex-col align-items-stretch w-[30vw] h-[25rem] justify-center p-[2rem] border max-sm:border-none border-[#ffc000] rounded-lg shadow-md">
            <h2 className="text-3xl text-[#ffc000] font-bold mb-[2rem] text-center">
              Admin Login
            </h2>
            <form onSubmit={handleLogin} className="flex flex-col gap-4">
              <input
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
    );
  }

  return (
    <div className="p-8 flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl text-[#ffc000] font-semibold text-[2rem]">Orders</h1>
        <div className="flex gap-2">
          <button
            onClick={fetchOrders}
            className="p-2 bg-[var(--green-primary)] text-[#1F0D09] rounded"
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
            className="p-2 bg-[var(--green-primary)] text-[#1F0D09] rounded"
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
        <DataTable value={orders} responsiveLayout="scroll" emptyMessage="No orders found">
          <Column field="id" header="ID" style={{ width: '6rem' }} />
          <Column field="full_name" header="Name" />
          <Column field="email" header="Email" />
          <Column field="phone" header="Phone" />
          <Column field="guests" header="Guests" />
          <Column header="Booking Type" field="reservation_type" />
          <Column header="Date" body={(row: any) => row.reservation_date ?? '-'} />
          <Column header="Time" body={(row: any) => row.reservation_time ?? '-'} />
          <Column field="status" header="Status" />
          <Column
            header="Created"
            body={(row: any) => (row.created_at ? new Date(row.created_at).toLocaleString() : '-')}
          />
        </DataTable>
      </div>
    </div>
  );
};

export default AdminOrders;
