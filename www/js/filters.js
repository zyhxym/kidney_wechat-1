angular.module('kidney.filters', [])
// 毫秒数 to '10:32 AM' or '4/1/17 4:55 PM'（不是当天的话）
.filter('msgdate', ['$filter', function ($filter) {
  return function (milliseconds) {
    if (milliseconds == null) return ''
    var curTime = new Date()
    var msgTime = new Date(milliseconds)
    if (curTime.toDateString() == msgTime.toDateString()) return $filter('date')(msgTime, 'H:mm')
    return $filter('date')(msgTime, 'M/d/yy H:mm')
  }
}])
.filter('filterGender', [function () {
  return function (gender) {
    var g = '未知'
    if (gender == 1) { g = '男' }
    if (gender == 2) { g = '女' }
    return g
  }
}])
.filter('diagname', [function () {
  return function (type) {
    var name
    switch (type) {
      case '2':
        name = 'CKD1-2期'
        break
      case '3':
        name = 'CKD3-4期'
        break
      case '4':
        name = 'CDK5期未透析'
        break
      case '5':
        name = '腹透'
        break
      case '6':
        name = '血透'
        break
      case '1':
        name = '肾移植'
        break
    }
    return name
  }
}])
.filter('classname', [function () {
  return function (type) {
    var name
    switch (type) {
      case 'class_2':
        name = 'CKD1-2期'
        break
      case 'class_3':
        name = 'CKD3-4期'
        break
      case 'class_4':
        name = 'CDK5期未透析'
        break
      case 'class_6':
        name = '腹透'
        break
      case 'class_5':
        name = '血透'
        break
      case 'class_1':
        name = '肾移植'
        break
    }
    return name
  }
}])
.filter('progressname', [function () {
  return function (type) {
    var name
    switch (type) {
      case 'stage_5':
        name = '疾病活跃期'
        break
      case 'stage_6':
        name = '稳定期'
        break
      case 'stage_7':
        name = '>3年'
        break
    }
    return name
  }
}])
.filter('filterbloodType', [function () {
  return function (type) {
    var name
    switch (type) {
      case 1:
        name = 'A型'
        break
      case 2:
        name = 'B型'
        break
      case 3:
        name = 'AB型'
        break
      case 4:
        name = 'O型'
        break
      case 5:
        name = '不确定'
        break
    }
    return name
  }
}])
.filter('hypertension', [function () {
  return function (type) {
    var name = '--'
    switch (type) {
      case '1':
        name = '是'
        break
      case '2':
        name = '否'
        break
    }
    return name
  }
}])

.filter('filterAge', [function () {
  return function (date) {
    var d = new Date(date)
    var dateNow = new Date()
    return dateNow.getFullYear() - d.getFullYear()
  }
}])

.filter('filterVIP', [function () {
  return function (VIP) {
    var g = '未知'
    if (VIP == 1) { g = '是' }
    if (VIP == 0) { g = '否' }
    return g
  }
}])
.filter('filterhypertension', [function () {
  return function (hypertension) {
    var g = '未知'
    if (hypertension == 1) { g = '是' }
    if (hypertension == 2) { g = '否' }
    return g
  }
}])

.filter('imgUrl', [function () {
  return function (date, type) {
    var url = 'http://121.43.107.106:8052/uploads/photos/'
    if (type == 'doctor') { url += 'doctor.png' } else if (type == 'group') { url = 'img/doctor_group.png' } else if (type == 'patient') { url += 'patient.png' }
    return url
  }
}])
.filter('dateFormat', [function () {
  return function (date, format) {
    var d = new Date(date)
    var ret = ''
    if (date == null) { return '-' }
    switch (format) {
      case 'YYYY-MM-DD':
        ret = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()
        break
      case 'MM-DD-YYYY':
        ret = (d.getMonth() + 1) + '-' + d.getDate() + '-' + d.getFullYear()
        break
      case 'YYYY-MM-DD h:m':
        ret = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes()
        break
    }
    return ret
  }
}])
.filter('numberPrecision', [function () {
  return function (num) {
    var ret = new Number(num)
    return ret.toFixed(2)
  }
}])
.filter('chargeType', [function () {
  return function (type) {
    var g = '未知'
    if (type == 1) { g = '咨询' }
    if (type == 2) { g = '问诊' }
    if (type == 3) { g = '咨询升级问诊' }
    if (type == 4) { g = '主管医生' }
    if (type == 5) { g = '面诊' }
    if (type == 6) { g = '加急咨询' }
    if (type == 7) { g = '咨询升级升级加急咨询' }
    return g
  }
}])
.filter('filterDayPeriod', [function () {
  return function (type) {
    var name
    switch (type) {
      case 'Afternoon':
        name = '下午'
        break
      case 'Morning':
        name = '上午'
        break
    }
    return name
  }
}])
.filter('timeType', [function () {
  return function (type) {
    var g = '未知'
    if (type == 1) { g = '超过24h未回复' }
    if (type == 2) { g = '超过18h未回复' }
    return g
  }
}])
.filter('filterPayStatus', [function () {
  return function (type) {
    var name = '未定义'
    switch (type) {
      case 0: case 1:
        name = '付款失败'
        break
      case 2:
        name = '支付成功'
        break
      case 3:
        name = '支付失败'
        break
      case 4:
        name = '取消订单'
        break
      case 5:
        name = '订单超时'
        break
      case 6:
        name = '正在退款'
        break
      case 7:
        name = '退款关闭'
        break
      case 8:
        name = '退款异常'
        break
      case 9:
        name = '退款成功'
        break
    }
    return name
  }
}])
