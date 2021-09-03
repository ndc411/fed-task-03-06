# task2 用户登录和身份认证

### 1.  处理Token过期-概念介绍
1. access_token: 标识用户身份
2. expires_in: 过期时间
3. refresh_token: 刷新获取新的 access_token
4. 优化用户体验，避免用户重新登录。 

    方法一：在请求发起前拦截每个请求， 判断token的有效时间是否已经过期， 若已过期， 则将请求挂
    起， 先刷新token后再继续请求。
    优点：在请求前拦截，能节省请求，省流量。
    缺点：需要后端额外提供一个token过期时间的字段； 使用了本地时间判断， 若本地时间被篡
    改，特别是本地时间比服务器时间慢时，拦截会失败。

    方法二：
    不在请求前拦截， 而是拦截返回后的数据。先发起请求， 接口返回过期后， 先刷新token， 再
    进行一次重试。
    优点：不需额外的token过期字段， 不需判断时间。
    缺点：会消耗多一次请求，耗流量。
    综上，方法一和二优缺点是互补的，方法一有校验失败的风险(本地时间被篡改时，当然一般
    没有用户闲的蛋疼去改本地时间的啦)，方法二更简单粗暴，等知道服务器已经过期了再重试
    一次，只是会耗多一个请求。

    ### 2. 处理Token过期-分析响应拦截器
    1. 请求的响应，要注意 自定义状态码 和 http 状态码

    ### 3. 处理Token过期-axios错误处理 
    1. 错误的响应分析
    ```
    if (error.response) { // 1. 请求发出并得到响应，但是响应的 状态码超出 2xx 范围
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log(error.response.data)
    console.log(error.response.status)
    console.log(error.response.headers)
  } else if (error.request) { // 2. 请求发出，但是没有相应
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.log(error.request)
  } else { 3. // 在设置请求时发生了一些异常，触发错误
    // Something happened in setting up the request that triggered an Error
    console.log('Error', error.message)
  }
  return Promise.reject(error) // 把请求失败的错误继续抛出，抛给上一个调用者
    ```
    
    ### 4. 处理Token过期-错误消息提示
    1. 400 402 403 404 5xx

    ### 5. 处理Token过期-实现基本流程逻辑
    1. todo: 需要详细了解 axios的 error的信息
    2. 处理 401 相关代码：
    ```
    if (status === 401) {
      if (!store.state.user) {
        redirectLogin()
        return Promise.reject(error)
      }
      try {
        // 尝试刷新 token
        const { data } = axios.create()({
          method: 'POST',
          url: '/front/user/refresh_token',
          data: qs.stringify({
            refreshtoken: store.state.user.refresh_token
          })
        })
        // 成功了 -> 把本次失败的请求重新发出去
        // 把刷新后拿到的 token 更新到容器中
        store.commit('setUser', data.content)
        // error.config 失败请求的配置信息
        return requst(error.config)
      } catch (err) {
        store.commit('setUser', null)
        redirectLogin()
        return Promise.reject(error)
      }
    } 
    ```
### 6. 处理Token过期-关于多次请求的问题
1. refresh_token 只能使用一次，多次并发请求，可能会导致重复使用同一个refresh_token