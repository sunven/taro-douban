const urlTransfer = function(url) {
  url = url.replace("img3.doubanio.com", "localhost:8002");
  url = url.replace("img1.doubanio.com", "localhost:8002");
  return url;
};

export default urlTransfer;
