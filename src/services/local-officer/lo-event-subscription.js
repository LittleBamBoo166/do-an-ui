import AxiosService from "../axios-service";

export const LO_EVENT_SUBSCRIPTION = {
  GET_EVENTS: `local-officers/events`,
}

class LoEventSubscriptionService {
  getEvents(query = {}) {
    return AxiosService.get(LO_EVENT_SUBSCRIPTION.GET_EVENTS, query).then(response => {
      if (response.data) {
        return response.data;
      }
    }).catch((err) => {
      console.log('LoEventSubscriptionService: ', err);
    });
  };
}

export default new LoEventSubscriptionService(); 