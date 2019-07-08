import Taro from "@tarojs/taro";
//import BASE_URL from "./config";
import interceptors from "./taroInterceptor";

Taro.addInterceptor(interceptors);
Taro.addInterceptor(Taro.interceptors.logInterceptor);
Taro.addInterceptor(Taro.interceptors.timeoutInterceptor);

export default {
  baseOptions(params, method = "GET") {
    let { url, data } = params;
    let contentType = "application/json";
    contentType = params.contentType || contentType;
    const option = {
      //url: url.indexOf("http") !== -1 ? url : BASE_URL + url,
      url: url,
      data: data,
      method: method,
      header: {
        "content-type": contentType
        // Authorization: Taro.getStorageSync("Authorization")
      }
    };
    return Taro.request(option);
  },
  get(url, data = "") {
    let option = { url, data };
    return this.baseOptions(option);
  },
  post: function(url, data, contentType) {
    let params = { url, data, contentType };
    return this.baseOptions(params, "POST");
  },
  put(url, data = "") {
    let option = { url, data };
    return this.baseOptions(option, "PUT");
  },
  delete(url, data = "") {
    let option = { url, data };
    return this.baseOptions(option, "DELETE");
  }
};
