/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-10-24T14:13:34+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: wxRequest.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-11-16T17:31:16+08:00
 */



import wepy from 'wepy';
import util from './util';
// import md5 from './md5';


// const API_SECRET_KEY = 'www.mall.cycle.com'
const TIMESTAMP = util.getCurrentTime()
// const SIGN = md5.hex_md5((TIMESTAMP + API_SECRET_KEY).toLowerCase())

const wxRequest = (params = {}, url) => {

    console.log('inside wxRequest!')
    wepy.showToast({
        title: '加载中',
        icon: 'loading'
    });
    var data = params.query || {};
    // data.sign = SIGN;
    data.time = TIMESTAMP;
    console.log("data: " + JSON.stringify(data))
    wepy.request({
        url: url,
        method: params.method || 'GET',
        data: data
    }).then(function(res){
      console.log('from server: ' + JSON.stringify(res))
      wepy.hideToast();
      return res;
    });
};


module.exports = {
    wxRequest
}
