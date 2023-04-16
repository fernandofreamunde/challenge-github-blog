import { formatDistanceToNow } from 'date-fns'

export function countDateToNow(date: Date): string {
  return formatDistanceToNow(date, {
    addSuffix: true,
  })
}

export const dateFormatter = new Intl.DateTimeFormat('pt-PT')

export const priceFormatter = new Intl.NumberFormat('pt-PT', {
  style: 'currency',
  currency: 'EUR',
})
