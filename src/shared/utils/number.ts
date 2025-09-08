export function formatNumber(value: number): string {
  if (value < 1000) return value.toString()

  const units = ['', 'K', 'M', 'B', 'T']
  const order = Math.floor(Math.log10(value) / 3) // ribuan = 1, jutaan = 2, dst.
  const unit = units[order]

  const scaled = value / Math.pow(1000, order)

  // Kalau hasilnya bulat, jangan kasih .0
  return scaled % 1 === 0 ? `${scaled}${unit}` : `${scaled.toFixed(1)}${unit}`
}
