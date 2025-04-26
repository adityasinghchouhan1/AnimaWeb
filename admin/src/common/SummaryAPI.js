const backendDomain = 'http://localhost:8008'

const SummaryApi = {
  // For Event

  contectusdata: {
    url: `${backendDomain}/api/getcontectusdata`,
    method: 'get',
  },
  contectUpdate: {
    url: `${backendDomain}/api/updatecontect`,
    method: 'put',
  },
  contectusdelete: {
    url: `${backendDomain}/api/deletecontect`,
    method: 'delete',
  },
  evenetCount: {
    url: `${backendDomain}/api/events`,
    method: 'get',
  },

  // For Courses
  addCourse: {
    url: `${backendDomain}/api/addCourse`,
    method: 'post',
  },
  getCourses: {
    url: `${backendDomain}/api/getCourses`,
    method: 'get',
  },
  updateCourse: {
    url: `${backendDomain}/api/updateCourse/:id`,
    method: 'put',
  },
  deleteCourse: {
    url: `${backendDomain}/api/deleteCourse/:id`,
    method: 'delete',
  },
  CourseCount: {
    url: `${backendDomain}/api/events`,
    method: 'get',
  },

  // Admin routes
  loginAdmin: {
    url: `${backendDomain}/api/loginAdmin`,
    method: 'post',
  },
}

export default SummaryApi
