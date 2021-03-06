import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:4000',
})

export default api

const baseUrl = 'http://localhost:4000'

export const MAIN_FETCH = url => {
  return {
    url: baseUrl + url,
    options: {
      method: 'GET',
    },
  }
}

export const BANNER_FETCH = url => {
  return {
    url: baseUrl + url,
    options: {
      method: 'GET',
    },
  }
}

export const VIEW_FETCH = url => {
  return {
    url: baseUrl + url,
    options: {
      method: 'GET',
    },
  }
}

export const FETCH_LISTCOMPONENT = url => {
  return {
    url: baseUrl + url,
    options: {
      method: 'GET',
    },
  }
}

export const POST_GET = url => {
  return {
    url: baseUrl + url,
    options: {
      method: 'GET',
    },
  }
}

export const PROFILE_DATA = url => {
  return {
    url: baseUrl + url,
    options: {
      method: 'GET',
    },
  }
}
