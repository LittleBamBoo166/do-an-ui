import AxiosService from "../axios-service";
 ///relief-app/v1/
export const SPONSOR_EVENT_API = {
  GET_DONATIONPOST: `sponsor/donation-posts`,
  GET_DONATIONPOST_ID: (id) => `sponsor/donation-posts/${id}`,
}

class DONATIONPOST{
  getEvents(query = {}) {
    return AxiosService.get(SPONSOR_EVENT_API.GET_DONATIONPOST, query).then(response => {
      if (response.data) {
        return response.data;
      }
    }).catch((err) => {
      console.log(err);
    });
  };
  getDetailDonation(params = {}) {
    return AxiosService.get(SPONSOR_EVENT_API.GET_DONATIONPOST_ID(params.id), params).then(response => {
      if (response.data) {
        return response.data;
      }
    }).catch(err => {
      console.log(err);
    })
  }
}
export default new DONATIONPOST();