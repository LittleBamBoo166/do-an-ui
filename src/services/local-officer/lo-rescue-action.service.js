import AxiosService from "../axios-service";

export const LO_RESCUE_ACTION = {
  GET_CURRENT_ACTION: `local-officers/rescue-action`,
}

class LoRescueActionService {
  getLoCurrentRescueAction() {
    return AxiosService.get(LO_RESCUE_ACTION.GET_CURRENT_ACTION).then(response => {
      if (response.data) {
        return response.data;
      }
    }).catch((err) => {
      console.log('LoRescueActionService: ', err);
    });
  };
}

export default new LoRescueActionService(); 