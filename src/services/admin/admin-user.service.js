import AxiosService from "../axios-service";

export const ADMIN_USER_API = {
  GET_USERS: `admin/users`,
  GET_USER: (id) => `admin/users/${id}`,
  GET_LOCAL_OFFICER_USERS: `admin/local-officers`
}

class AdminUserService {
  getUsers(query = {}) {
    return AxiosService.get(ADMIN_USER_API.GET_USERS, query).then(response => {
      if (response.data) {
        return response.data;
      }
    }).catch((err) => {
      console.log(err);
    });
  };

  getUser(params = {}) {
    return AxiosService.get(ADMIN_USER_API.GET_USER(params.id), params).then(response => {
      if (response.data) {
        return response.data;
      }
    }).catch(err => {
      console.log(err);
    })
  }

  getLocalOfficerUser(query = {}) {
    return AxiosService.get(ADMIN_USER_API.GET_LOCAL_OFFICER_USERS, query).then(response => {
      if (response.data) {
        return response.data;
      }
    }).catch(err => {
      console.log(err);
    })
  }
}

export default new AdminUserService(); 