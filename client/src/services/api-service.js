class ApiService {
  endpoint;
  apiClient;
  constructor(endpoint, apiClient) {
    this.endpoint = endpoint;
    this.apiClient = apiClient;
  }

  getAll = (config = {}) => {
    return this.apiClient.get(this.endpoint, config).then((res) => res.data);
  };

  post = (data) => {
    return this.apiClient.post(this.endpoint, data).then((res) => res.data);
  };

  put = (id, data) => {
    return this.apiClient
      .put(this.endpoint + "/" + id, data)
      .then((res) => res.data);
  };
  delete = (id) => {
    return this.apiClient.delete(this.endpoint + "/" + id).then((res) => res.data);
  };
}

export default ApiService;
