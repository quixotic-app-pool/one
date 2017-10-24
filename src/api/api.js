import {
  wxRequest
} from '../utils/wxRequest';

let env = "-test" //-dev 或者 -test
const apiMall = 'https://sujiefs.com/'
//const apiMall = 'https://api.tangxinmao.com'

/**
 * 获取发现好商品接口
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
// const getDiscoverList = (params) => wxRequest(params, apiMall + '/goods/list?cateidOne=1&cateidTwo=0&price=0&sales=2');

//微信的jscode换取sessionKey
const wxJsCode2Session = (params) => wxRequest(params, apiMall + "/api/wechat/jscode2session");
// const user2session = (params) => wxRequest(params, apiMall + "/api/wechat/user2session?jsoncallback=?");

module.exports = {
  wxJsCode2Session
}
