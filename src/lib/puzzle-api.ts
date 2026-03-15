/**
 * Puzzle Accounting API integration
 * @see https://puzzle-api.readme.io/
 * Use for syncing orders/transactions to Puzzle for bookkeeping.
 */

const PUZZLE_API_BASE = 'https://api.puzzle.io'

export interface PuzzleTransactionLine {
  account_id: string
  amount: number
  description?: string
}

export interface CreateTransactionPayload {
  date: string
  lines: PuzzleTransactionLine[]
  memo?: string
}

export async function createPuzzleTransaction(
  apiKey: string,
  payload: CreateTransactionPayload
): Promise<{ id?: string; error?: string }> {
  const res = await fetch(`${PUZZLE_API_BASE}/v1/transactions`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) {
    return { error: data.message || data.error || res.statusText }
  }
  return { id: data.id }
}

/** Format cart total as a transaction for Puzzle (e.g. sales revenue). */
export function buildOrderTransactionPayload(
  orderId: string,
  totalCents: number,
  revenueAccountId: string,
  bankAccountId: string
): CreateTransactionPayload {
  return {
    date: new Date().toISOString().split('T')[0],
    memo: `Shop order #${orderId}`,
    lines: [
      {
        account_id: revenueAccountId,
        amount: totalCents,
        description: `Order ${orderId}`,
      },
      {
        account_id: bankAccountId,
        amount: -totalCents,
        description: `Order ${orderId}`,
      },
    ],
  }
}
