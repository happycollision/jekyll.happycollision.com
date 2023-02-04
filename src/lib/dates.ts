const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]

export function fmtDate(date: string) {
  const dte = new Date(date)
  const y = dte.getFullYear()
  const m = dte.getMonth()
  const d = dte.getDate() + 1

  return `${months[m]} ${d}, ${y}`
}
