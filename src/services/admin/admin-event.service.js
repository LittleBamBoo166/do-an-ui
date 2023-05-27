import AxiosService from "../axios-service";

export const ADMIN_EVENT_API = {
  GET_EVENTS: `admin/events`,
  GET_EVENT: (id) => `admin/events/${id}`,
}

class AdminEventService {
  getEvents(query = {}) {
    return AxiosService.get(ADMIN_EVENT_API.GET_EVENTS, query).then(response => {
      if (response.data) {
        return response.data;
      }
    }).catch((err) => {
      console.log(err);
    });
  };

  getEvent(params = {}) {
    return AxiosService.get(ADMIN_EVENT_API.GET_EVENT(params.id), params).then(response => {
      if (response.data) {
        return response.data;
      }
    }).catch(err => {
      console.log(err);
    })
  }
}

export default new AdminEventService(); 