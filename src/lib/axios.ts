import axios from "axios";

export const ApiUrl = "https://api.axioon.com.br";
export const token = "axioonToken";
export const refreshToken = "axioonRefreshToken";
export const userType = "axioonUserType";

export const api = axios.create({
  baseURL: ApiUrl,
});

export const IBGE = axios.create({
  baseURL: "https://servicodados.ibge.gov.br/api/v1/localidades/",
});

export const IBGEAPI = async (url: string) => {
  const connect = await IBGE.get(url)
    .then(({ data }) => {
      return {
        status: 200,
        body: data,
      };
    })
    .catch((err) => {
      const message = err.response.data;
      const status = err.response.status;
      return { status, body: message };
    });

  return connect.status === 500
    ? { status: connect.status, body: "Ops! algo deu errado, tente novamente" }
    : connect.status === 413
      ? {
          status: connect.status,
          body: "Ops! algo deu errado, tente novamente ou escolha outra imagem",
        }
      : connect;
};

export const PostAPI = async (url: string, data: unknown) => {
  const connect = await api
    .post(url, data)
    .then(({ data }) => {
      return {
        status: 200,
        body: data,
      };
    })
    .catch((err) => {
      const message = err.response.data;
      const status = err.response.status;
      return { status, body: message };
    });

  return connect.status === 500
    ? { status: connect.status, body: "Ops! algo deu errado, tente novamente" }
    : connect.status === 413
      ? {
          status: connect.status,
          body: "Ops! algo deu errado, tente novamente ou escolha outra imagem",
        }
      : connect;
};

export const PutAPI = async (url: string, data: unknown) => {
  const connect = await api
    .put(url, data)
    .then(({ data }) => {
      return {
        status: 200,
        body: data,
      };
    })
    .catch((err) => {
      const message = err.response.data;
      const status = err.response.status;
      return { status, body: message };
    });

  return connect.status === 500
    ? { status: connect.status, body: "Ops! algo deu errado, tente novamente" }
    : connect.status === 413
      ? {
          status: connect.status,
          body: "Ops! algo deu errado, tente novamente ou escolha outra imagem",
        }
      : connect;
};

export const getAPI = async (url: string) => {
  const connect = await api
    .get(url)
    .then(({ data }) => {
      return {
        status: 200,
        body: data,
      };
    })
    .catch((err) => {
      const message = err.response.data;
      const status = err.response.status;
      return { status, body: message };
    });

  return connect.status === 500
    ? { status: connect.status, body: "Ops! algo deu errado, tente novamente" }
    : connect.status === 413
      ? {
          status: connect.status,
          body: "Ops! algo deu errado, tente novamente ou escolha outra imagem",
        }
      : connect;
};

export const authGetAPI = async (url: string) => {
  const storageToken = localStorage.getItem(token);

  if (!storageToken) {
    return {
      status: 401,
      body: "",
    };
  }

  const config = {
    headers: { Authorization: `Bearer ${storageToken}` },
  };

  const connect = await api
    .get(url, config)
    .then(({ data }) => {
      return {
        status: 200,
        body: data,
      };
    })
    .catch((err) => {
      const message = err.response.data;
      const status = err.response.status;
      return { status, body: message };
    });

  return connect.status === 500
    ? { status: connect.status, body: "Ops! algo deu errado, tente novamente" }
    : connect.status === 413
      ? {
          status: connect.status,
          body: "Ops! algo deu errado, tente novamente ou escolha outra imagem",
        }
      : connect;
};

export const authDeleteAPI = async (url: string) => {
  const storageToken = localStorage.getItem(token);
  if (!storageToken) {
    return {
      status: 401,
      body: "",
    };
  }

  const config = {
    headers: { Authorization: `Bearer ${storageToken}` },
  };

  const connect = await api
    .delete(url, config)
    .then(({ data }) => {
      return {
        status: 200,
        body: data,
      };
    })
    .catch((err) => {
      const message = err.response.data;
      const status = err.response.status;
      return { status, body: message };
    });

  return connect.status === 500
    ? { status: connect.status, body: "Ops! algo deu errado, tente novamente" }
    : connect.status === 413
      ? {
          status: connect.status,
          body: "Ops! algo deu errado, tente novamente ou escolha outra imagem",
        }
      : connect;
};

export const AuthPostAPI = async (url: string, data: unknown) => {
  const storageToken = localStorage.getItem(token);

  if (!storageToken) {
    return {
      status: 401,
      body: "",
    };
  }

  const config = {
    headers: { Authorization: `Bearer ${storageToken}` },
  };

  const connect = await api
    .post(url, data, config)
    .then(({ data }) => {
      return {
        status: 200,
        body: data,
      };
    })
    .catch((err) => {
      const message = err.response.data;
      const status = err.response.status;
      return { status, body: message };
    });

  return connect.status === 500
    ? { status: connect.status, body: "Ops! algo deu errado, tente novamente" }
    : connect.status === 413
      ? {
          status: connect.status,
          body: "Ops! algo deu errado, tente novamente ou escolha outra imagem",
        }
      : connect;
};

export const AuthPutAPI = async (url: string, data: unknown) => {
  const storageToken = localStorage.getItem(token);

  if (!storageToken) {
    return {
      status: 401,
      body: "",
    };
  }

  const config = {
    headers: { Authorization: `Bearer ${storageToken}` },
  };

  const connect = await api
    .put(url, data, config)
    .then(({ data }) => {
      return {
        status: 200,
        body: data,
      };
    })
    .catch((err) => {
      const message = err.response.data;
      const status = err.response.status;
      return { status, body: message };
    });

  return connect.status === 500
    ? { status: connect.status, body: "Ops! algo deu errado, tente novamente" }
    : connect.status === 413
      ? {
          status: connect.status,
          body: "Ops! algo deu errado, tente novamente ou escolha outra imagem",
        }
      : connect;
};

export const loginVerifyAPI = async () => {
  const token = localStorage.getItem(refreshToken);
  const type = localStorage.getItem(userType);
  if (!token) {
    return 400;
  }

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const connect = await api
    .patch(`${type === "user" ? "/user" : "/sub-user"}/token`, {}, config)
    .then(({ data }) => {
      return {
        status: 200,
        body: data,
      };
    })
    .catch((err) => {
      const message = err.response.data;
      const status = err.response.status;
      return { status, body: message };
    });

  localStorage.setItem("axioonToken", connect.body.token);
  localStorage.setItem("axioonRefreshToken", connect.body.refreshToken);
  localStorage.setItem("axioonUserType", connect.body.type);
  return connect.status;
};
