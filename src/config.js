export const config = {
  productOwner: process.env.REACT_APP_PRODUCT_OWNER || 'Vestfold og Telemark',
  documentsPrPage: (process.env.REACT_APP_DOCUMENTS_PR_PAGE && Number.parseInt(process.env.REACT_APP_DOCUMENTS_PR_PAGE)) || 8,
  studentsPrPage: (process.env.REACT_APP_STUDENTS_PR_PAGE && Number.parseInt(process.env.REACT_APP_STUDENTS_PR_PAGE)) || 10
}

export const SENTRY = {
  ENABLED: !!process.env.REACT_APP_SENTRY_DSN || false,
  dsn: process.env.REACT_APP_SENTRY_DSN || process.env.SENTRY_DSN || false,
  environment: process.env.REACT_APP_SENTRY_ENV || process.env.SENTRY_ENV || process.env.VERCEL_ENV || process.env.NODE_ENV || 'development'
}

export const API = {
  URL: process.env.REACT_APP_API_URL
}

export const AUTH = {
  auth: {
    clientId: process.env.REACT_APP_AUTH_CLIENT_ID,
    authority: process.env.REACT_APP_AUTH_AUTHORITY,
    redirectUri: process.env.REACT_APP_AUTH_REDIRECT_URL,
    postLogoutRedirectUri: process.env.REACT_APP_AUTH_POST_LOGOUT_URL
  },
  cache: {
    cacheLocation: 'sessionStorage',
    storeAuthStateInCookie: false // Set this to "true" if you are having issues on IE11 or Edge
  }
}

export const loginRequest = {
  scopes: ['openId', 'profile', 'User.Read', 'Group.Read.All'],
  forceRefresh: true
}
