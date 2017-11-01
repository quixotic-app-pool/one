/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-10-24T14:12:49+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: api.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-11-01T10:19:27+08:00
 */



import {
  wxRequest
} from '../utils/wxRequest';

let env = "-test" //-dev 或者 -test
// production
// const host = 'https://sujiefs.com/'
// development
const host = 'localhost:3000'

/**
 * 获取发现好商品接口
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */

// ADS
// fetch swiperImgUrls
const fetchSwiperImgUrls = (params) => wxRequest(params, host + "/api/ads/swiperimgurls");

// BLOG
// fetch blog list in main page
const fetchList = (params) => wxRequest(params, host + "/api/list");

// delete blog
const deleteBlog = (params) => wxRequest(params, host + "/api/delblog");

// report blog
const reportBlog = (params) => wxRequest(params, host + "/api/repblog");

// fetch specific user blogs
const fetchUserBlogs = (params) => wxRequest(params, host + "/api/userbloglist");

// fetch specific blogDetail
const fetchBlogDetail = (params) => wxRequest(params, host + "/api/blogdetail");

//  upload image?

// upload blog
const uploadBlog = (params) => wxRequest(params, host + "/api/newblog");


// USER
//  screen user
const screenUser = (params) => wxRequest(params, host + "/api/screenuser");

// ban user
const banUser = (params) => wxRequest(params, host + "/api/banuser");


// NOTIFICATION
// fetch unreadMessages
const fetchUnreadMessages = (params) => wxRequest(params, host + "/api/notification");

// refresh and clean notification
const refreshNotificationBox = (params) => wxRequest(params, host + "/api/updnotification");

// COMMENTS
// update like number
const updateBlogLikeNumber = (params) => wxRequest(params, host + "/api/updbloglike");

// post comment
const postComment = (params) => wxRequest(params, host + "/api/addcomment");

// delete comment
const deleteComment = (params) => wxRequest(params, host + "/api/delcomment");











module.exports = {
  wxJsCode2Session
}
