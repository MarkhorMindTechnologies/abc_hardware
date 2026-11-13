export function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export function truncate(str, max = 100) {
  if (!str) return ''
  if (str.length <= max) return str
  return str.substring(0, max).trim() + '...'
}

export function groupBy(arr, key) {
  return arr.reduce((acc, item) => {
    const k = typeof key === 'function' ? key(item) : item[key]
    if (!acc[k]) acc[k] = []
    acc[k].push(item)
    return acc
  }, {})
}

export function filterProducts(products, { category, search }) {
  let filtered = [...products]
  if (category && category !== 'all') {
    filtered = filtered.filter(p => p.category === category)
  }
  if (search && search.trim()) {
    const q = search.toLowerCase().trim()
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      (p.tags && p.tags.some(t => t.toLowerCase().includes(q))) ||
      p.categoryLabel.toLowerCase().includes(q)
    )
  }
  return filtered
}
