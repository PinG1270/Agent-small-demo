/**
 *  Created by yanqi on 21/04/12.
 * 设置浏览器中标题
 */
import defaultSettings from '@/settings'

const title = defaultSettings.title || 'biyao'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
