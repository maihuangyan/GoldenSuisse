export const state = () => ({
  windowWidth: function() {
    if (process.client) {
      return window.innerWidth;
    }
  },
  windowLoaded: false,
  mainLoaderActive: false,
  mainLoaderActiveClass: false,
  isMobile: false,
  loadingStatus: true,
  timeout: "",
  windowLoaded: false,
  firstSmall: true,
  isMenu: false,
  bigHeader: false,
  transEnd: false,
  loginForm: {
    username: false,
    password: false,
    qr_data: false,
    qr_uniquecode: false
  },
  scrollBlack: 0,
  prevRoute: null,
  isFooter: true,
  emailSubscribe: false,
  totalDelay: .3,
  totalDuration: .7,
  videoPopupShow: false,
  videoPopup: {
    src: '/video/gs.mp4',
    poster: '/image/poster.jpg',
    posterXs: '/image/poster_xs.jpg',
    srcXs: '/video/gsXs.mp4',
    desc: 'World Class Private Wealth Protection'
  },
  videoPopupInterval: '',
  closeMenuInit: false
});

export const mutations = {
  windowLoaded(state) {
    state.windowLoaded = true;
  },
  setMainLoaderActive(state, payload) {
    state.mainLoaderActive = payload;
  },
  setMainLoaderActiveClass(state, payload) {
    state.mainLoaderActiveClass = payload;
  },
  setWindowWidth(state) {
    state.windowWidth = window.innerWidth;
    // Mobile
    if (window.innerWidth < 1024) {
      state.isMobile = true;
    } else {
      state.isMobile = false;
    }
  },
  updateLoadingStatus(state, loadingStatus) {
    state.loadingStatus = loadingStatus;
  },
  clearTime(state) {
    clearTimeout(state.timeout);
  },
  setTime(state, payload) {
    state.timeout = payload;
  },
  windowLoaded(state) {
    state.windowLoaded = true;
  },
  setFirstSmall(state, firstSmall) {
    state.firstSmall = firstSmall;
  },
  setMenuStatus(state, menuStatus) {
    state.isMenu = menuStatus;
  },
  setBigHeader(state, payload) {
    state.bigHeader = payload;
  },
  setTransEnd(state, payload) {
    state.transEnd = payload;
  },
  SET_LOGIN_FORM(state, payload) {
    state.loginForm = payload;
  },
  SET_SCROLL_HEIGHT(state, payload) {
    state.scrollBlack = payload;
  },
  SET_PREV_ROUTE(state, payload) {
    state.prevRoute = payload;
  },
  CHANGE_FOOTER(state, payload) {
    state.isFooter = payload;
  },
  SET_EMAIL_SUBSCRIBE(state, payload) {
    state.emailSubscribe = payload;
  },
  setVideoPopupShow(state, payload) {
    state.videoPopupShow = payload;
  },
  initVideoPopup(state, payload) {
    state.videoPopup = payload;
  },
  setVideoPopupInterval(state, payload) {
    state.videoPopupInterval = payload;
  },
  setCloseMenuInit(state, payload) {
    state.closeMenuInit = payload;
  }
};

export const actions = {
  updateLoadingStatus({ commit }, loadingStatus) {
    commit("updateLoadingStatus", loadingStatus);
  },
  clearTimeAction({ commit }) {
    commit("clearTime");
  },
  setTimeAction({ commit }, time) {
    commit("setTime", time);
  },
  updateFirstSmall({ commit }, firstSmall) {
    commit("setFirstSmall", firstSmall);
  },
  updateMenuStatus({ commit }, menuStatus) {
    commit("setMenuStatus", menuStatus);
  },
  updateBigHeader({ commit }, payload) {
    commit("setBigHeader", payload);
  },
  updateTransEnd({ commit }, payload) {
    commit("setTransEnd", payload);
  },
  setLoginForm({ commit }, payload) {
    commit("SET_LOGIN_FORM", payload);
  },
  setScrollHeight({ commit }, payload) {
    commit("SET_SCROLL_HEIGHT", payload);
  },
  setPrevRoute({ commit }, payload) {
    commit("SET_PREV_ROUTE", payload);
  },
  changeFooter({ commit }, payload) {
    commit("CHANGE_FOOTER", payload);
  },
  setEmailSubscribe({ commit }, payload) {
    commit("SET_EMAIL_SUBSCRIBE", payload);
  }
};

export const getters = {
  getLoginForm(state) {
    return state.loginForm;
  }
};
