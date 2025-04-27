const backendDomain = 'http://localhost:8008'

const SummaryApi = {
  Contect: {
    url: `${backendDomain}/api/contectus`,
    method: 'post',
  },
  Servisesget: {
    url: `${backendDomain}/api/Servisesget`,
    method: 'get',
  },
  Sliderdataget: {
    url: `${backendDomain}/api/Sliderdataget`,
    method: 'get',
  },
}

export default SummaryApi
