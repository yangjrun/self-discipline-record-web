/**
 * @descripttion api接口的统一出口
 * @author jirun.yang
 * @date 2020-07-13 09:02:38
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-07-13 15:30:25
 */
import request from './request'
import record from './record/index.js'
import qs from 'qs'

const baseUrl = {
  record: record
}

const DEFAULT_CONTENT_TYPE = 'application/json'
const DEFAULT_PAGE_SIZE = 20

const baseApi = {
  /**
   * 通用的 save 请求
   * @name: jirun.yang
   * @param modelName baseUrl对象中的属性
   * @param data 请求数据
   * @return: 请求响应
   */
  save(modelName, data) {
    let url = baseUrl[modelName].save.url
    let method = baseUrl[modelName].save.method
    return request({
      url: url,
      method: method,
      headers: { 'content-type': getContentType(baseUrl[modelName].save) },
      data: data
    })
  },
  /**
   * 通用的 list(post) 请求
   * @name: jirun.yang
   * @param modelName baseUrl对象中的属性
   * @param data 请求数据
   * @return: 请求响应
   */
  list(modelName, data) {
    let url = baseUrl[modelName].list.url
    let method = baseUrl[modelName].list.method
    return request({
      url: url,
      headers: { 'content-type': getContentType(baseUrl[modelName].list) },
      method: method,
      data: getContentType(baseUrl[modelName].list) === DEFAULT_CONTENT_TYPE ? data : qs.stringify(data)
    })
  },
  /**
   * 通用的 list(get) 请求
   * @name: jirun.yang
   * @param modelName baseUrl对象中的属性
   * @param data 请求数据
   * @return: 请求响应
   */
  listByGet(modelName, data) {
    let url = baseUrl[modelName].listByGet.url
    let method = baseUrl[modelName].listByGet.method
    return request({
      url: url,
      method: method,
      params: data
    })
  },
  /**
   * 通用的 delete 请求
   * @name: jirun.yang
   * @param modelName baseUrl对象中的属性
   * @param data 请求数据
   * @return: 请求响应
   */
  delete(modelName, data) {
    let url = baseUrl[modelName].delete.url
    return request({
      url: url + '/' + data.id,
      method: 'delete'
    })
  },
  /**
   * 通用的 deleteAll 请求
   * @name: jirun.yang
   * @param modelName baseUrl对象中的属性
   * @param data 请求数据
   * @return: 请求响应
   */
  deleteAll(modelName, data) {
    let url = baseUrl[modelName].deleteAll.url
    return request({
      url: url,
      headers: { 'content-type': getContentType(baseUrl[modelName].deleteAll) },
      method: 'delete',
      data: qs.stringify(data)
    })
  },
  /**
   * 通用的 update 请求
   * @name: jirun.yang
   * @param modelName baseUrl对象中的属性
   * @param data 请求数据
   * @return: 请求响应
   */
  update(modelName, data) {
    let url = baseUrl[modelName].update.url
    return request({
      url: url + '/' + data.id,
      method: 'put',
      headers: { 'content-type': getContentType(baseUrl[modelName].update) },
      data: data
    })
  },
  /**
   * 获取分页显示数量
   */
  getPageSize() {
    return DEFAULT_PAGE_SIZE
  }
}

/**
 * 获取请求ContentType
 * @param baseUrlItem api配置
 */
function getContentType(baseUrlItem) {
  return baseUrlItem.ContentType === undefined ? DEFAULT_CONTENT_TYPE : baseUrlItem.ContentType
}

export default {
  namespaced: true,
  baseApi,
  baseUrl
}
