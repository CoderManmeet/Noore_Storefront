export const products = [
  { id: 1, name: 'Santal 04', notes: 'Sandalwood · Cedar · Amber', price: 1890, image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=600&q=85' },
  { id: 2, name: 'Neroli Veil', notes: 'Neroli · Orange blossom · Musk', price: 1690, image: 'https://images.unsplash.com/photo-1602523961358-f9f03dd557db?auto=format&fit=crop&w=600&q=85' },
  { id: 3, name: 'Nocturne', notes: 'Black pepper · Fig · Vetiver', price: 2090, image: 'https://images.unsplash.com/photo-1603905179139-db12ab535e8b?auto=format&fit=crop&w=600&q=85' },
]
export const cartItems = [{ ...products[0], size: '220 g', quantity: 1 }, { ...products[1], size: '140 g', quantity: 1 }]
export const formatPrice = (value: number) => `₹${value.toLocaleString('en-IN')}`
