import Taro from "@tarojs/taro";

function showError(message, show = true) {
  show &&
    Taro.showToast({
      title: message || "请求异常",
      icon: "none"
    });
  return Promise.reject(message);
}
const customInterceptor = chain => {
  const requestParams = chain.requestParams;
  const { showToast } = requestParams;
  return chain
    .proceed(requestParams)
    .catch(res => {
      return showError(res.errMsg, showToast);
    })
    .then(res => {
      return res;
    });
};
export default customInterceptor;
