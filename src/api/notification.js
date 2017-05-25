import http from './base'

export default {
  getAllNotification () {
    return http.get('/list')
  }
}
