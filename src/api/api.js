/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-10-24T14:12:49+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: api.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-11-01T12:06:35+08:00
 */

import {
  wxRequest
} from '../utils/wxRequest';

let env = "-test" //-dev 或者 -test
// production
// const host = 'https://sujiefs.com/'
// development
const host = 'localhost:3000'


// NOTIFICATION
// fetch unreadMessages
const fetchUnreadMessages = (params) => wxRequest(params, host + "/api/notification");
// refresh and clean notification
const refreshNotificationBox = (params) => wxRequest(params, host + "/api/updnotification");

// USER
//  screen user
const screenUser = (params) => wxRequest(params, host + "/api/screenuser");

// ADS
// fetch swiperImgUrls
const fetchSwiperImgUrls = (params) => wxRequest(params, host + "/api/ads");

// COMMENTS
// post comment
const postComment = (params) => wxRequest(params, host + "/api/addcomment");
// delete comment
const deleteComment = (params) => wxRequest(params, host + "/api/delcomment");
// report comment
const reportComment = (params) => wxRequest(params, host + "/api/repcomment");
// updcommentlike
const updateCommentLikeNum = (params) => wxRequest(params, host + "/api/updcommentlike");

// BLOG
// fetch blog list in main page
const fetchBlogList = (params) => wxRequest(params, host + "/api/list");
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
// update like number
const updateBlogLikeNumber = (params) => wxRequest(params, host + "/api/updbloglike");


//admin action
//admin
// ban user
const banUser = (params) => wxRequest(params, host + "api/admin/banuser");
// free user
const freeUser = (params) => wxRequest(params, host + "api/admin/freeuser");
// delete comment by admin
const delComntByAdmin = (params) => wxRequest(params, host + "api/admin/delcommentbyadmin");
// delete blog by admin
const delBlogByAdmin = (params) => wxRequest(params, host + "api/admin/delblogbyadmin");
// fetch comment deleted by admin
const fetchComntDelByAdmin = (params) => wxRequest(params, host + "api/admin/comntdelbyadmin");
// fetch blog deleted by admin
const fetchBlogDelByAdmin = (params) => wxRequest(params, host + "api/admin/blogdelbymadmin");
// fetch user banned by admin
const fetchUserBannedByAdmin = (params) => wxRequest(params, host + "api/admin/userbanbyadmin");
// unreport blog
const unreportBLog = (params) => wxRequest(params, host + "api/admin/unrepblog");
// unreport comment
const unreportComment = (params) => wxRequest(params, host + "api/admin/unrepcomnt");

//superadmin
//comntdelbyalladmin
const comntDelByAllAdmin = (params) => wxRequest(params, host + "api/super/comntdelbyalladmin");
// blogdelbyalladmin
const blogDelByAllAdmin = (params) => wxRequest(params, host + "api/super/blogdelbyalladmin");
// banuserbyalladmin
const banUserByAllAdmin = (params) => wxRequest(params, host + "api/super/banuserbyalladmin");
// cfdelcomnt
const cfDelComnt = (params) => wxRequest(params, host + "api/super/cfdelcomnt");
// recovercomnt
const recoverComnt = (params) => wxRequest(params, host + "api/super/recovercomnt");
// cfdelblog
const cfDelBlog = (params) => wxRequest(params, host + "api/super/cfdelblog");
// recoverblog
const recoverBlog = (params) => wxRequest(params, host + "api/super/recoverblog");
// assignadmin
const assignAdmin = (params) => wxRequest(params, host + "api/super/assignadmin");
// removeadmin
const removeAdmin = (params) => wxRequest(params, host + "api/super/removeadmin");


module.exports = {
  // notification
  fetchUnreadMessages,
  refreshNotificationBox,
  // user
  screenUser,
  // ads
  fetchSwiperImgUrls,
  // COMMENTS
  postComment,
  deleteComment,
  reportComment,
  updateCommentLikeNum,
  // BLOG
  fetchBlogList,
  deleteBlog,
  reportBlog,
  fetchUserBlogs,
  fetchBlogDetail,
  uploadBlog,
  updateBlogLikeNumber,
  // admin
  banUser,
  freeUser,
  delComntByAdmin,
  delBlogByAdmin,
  fetchComntDelByAdmin,
  fetchBlogDelByAdmin,
  fetchUserBannedByAdmin,
  unreportBLog,
  unreportComment,
  // superadmin
  comntDelByAllAdmin,
  blogDelByAllAdmin,
  banUserByAllAdmin,
  cfDelComnt,
  recoverComnt,
  cfDelBlog,
  recoverBlog,
  assignAdmin,
  removeAdmin
}
