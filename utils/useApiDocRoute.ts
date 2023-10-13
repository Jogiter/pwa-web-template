const API_DOC_ROUTES = {
  'product-architecture': '/docs/category/product-architecture/',
  'product-description': '/docs/product/product-description/',
  'system-structure': '/docs/product/system-structure/',

  manual: '/docs/category/manual/',
  'account-management-role-introduction':
    '/docs/manual/account-management-role-introduction/',
  'unnpay-usage-process': '/docs/manual/unnpay-usage-process/',
  'rights-profile': '/docs/manual/rights-profile/',
  'collection-process': '/docs/manual/collection-process/',
  'withdrawal-process': '/docs/manual/withdrawal-process/',

  'api-documentation': '/docs/category/api-documentation/',
  'get-access-token-interface': '/docs/api/get-access-token-interface/',
  'user-deposit': '/docs/api/user-deposit/',
  'user-withdrawal': '/docs/api/user-withdrawal/',
  'notification-message': '/docs/api/notification-message/',
  faq: '/docs/api/faq/',
}

const route_prefix_en = 'http://doc.unn.com/en'
const route_prefix_zh = 'http://doc.unn.com'

export type IAPI_DOC_ROUTE = keyof typeof API_DOC_ROUTES

/**
 * 获取 API 文档的链接
 * @param key 链接的 key
 * @param locale 语言，可选 zh 和 en。默认为中文，值为 zh
 * @returns 完整的 API 文档链接
 */
export function useApiDocRoute(
  key: IAPI_DOC_ROUTE,
  locale: 'zh' | 'en' = 'zh',
) {
  const prefix = locale === 'en' ? route_prefix_en : route_prefix_zh

  return `${prefix}${API_DOC_ROUTES[key]}`
}
