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

  // For Uploadservices
  Uploadservices: {
    url: `${backendDomain}/api/Servicesupload`,
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
  // ----------------Slider--------------------------///////
  SliderDatapost: {
    url: `${backendDomain}/api/SliderDatapost`,
    method: 'post',
  },
  SliderDataget: {
    url: `${backendDomain}/api/Sliderdataget`,
    method: 'get',
  },
  SliderDataDelete: {
    url: `${backendDomain}/api/SliderDataDelete`,
    method: 'delete',
  },
  updateSliderData: {
    url: `${backendDomain}/api/updateSliderData`,
    method: 'put',
  },
  // Admin routes
  loginAdmin: {
    url: `${backendDomain}/api/loginAdmin`,
    method: 'post',
  },
}

export default SummaryApi
