export const WHATSAPP_NUMBER = '919XXXXXXXXX'

export function getWhatsAppLink(message) {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`
}

export function getProductEnquiryLink(productName) {
  const message = `Hello! I am interested in enquiring about: ${productName}. Please share details and availability. (ABC Hardware House)`
  return getWhatsAppLink(message)
}

export function getGeneralEnquiryLink() {
  return getWhatsAppLink('Hello! I would like to enquire about your products and services. (ABC Hardware House)')
}

export function getBulkOrderLink() {
  return getWhatsAppLink('Hello! I would like to discuss a bulk order requirement. (ABC Hardware House)')
}
