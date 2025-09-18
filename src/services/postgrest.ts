type OrderPayload = Record<string, unknown>;

function getBaseUrl() {
  const url = import.meta.env.VITE_POSTGREST_URL as string | undefined;
  if (!url) throw new Error('VITE_POSTGREST_URL not configured');
  return url.replace(/\/$/, '');
}

function getAuthHeader(): HeadersInit {
  const token = import.meta.env.VITE_POSTGREST_TOKEN as string | undefined;
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export async function createOrder(payload: OrderPayload) {
  const base = getBaseUrl();
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...getAuthHeader(),
  };
  const res = await fetch(`${base}/orders`, {
    method: 'POST',
    headers,
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const text = await res.text().catch(() => '(no body)');
    throw new Error(`PostgREST insert failed: ${res.status} ${text}`);
  }
  // Some PostgREST setups return an empty body for INSERT; handle empty response safely
  const text = await res.text().catch(() => '');
  if (!text) return null;
  try {
    return JSON.parse(text);
  } catch {
    // If body isn't JSON, return raw text
    return text;
  }
}

export async function fetchOrders(): Promise<Record<string, unknown>[]> {
  const base = getBaseUrl();
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...getAuthHeader(),
  };
  const res = await fetch(`${base}/orders?order=created_at.desc`, { headers });
  if (!res.ok) throw new Error(`Failed to fetch orders: ${res.status}`);
  return (await res.json()) as Record<string, unknown>[];
}

export default { createOrder, fetchOrders };
