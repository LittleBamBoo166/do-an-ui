import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:5000/relief-app/v1";

class UserService {
  getPublishContent() {
    return axios.get(API_URL + '/dashboard');
  }

  getRescueTeamDashboard() {
    return axios.get(API_URL + 'rescue-team/dashboard', { headers: authHeader() });
  }

  getAdminDashboard() {
    return axios.get(API_URL + 'admin/dashboard', { headers: authHeader() });
  }

  getSponsorDashboard() {
    return axios.get(API_URL + 'sponsor/dashboard', { headers: authHeader() });
  }

  getLocalOfficerDashboard() {
    return axios.get(API_URL + 'local-officers/dashboard', { headers: authHeader() });
  }
}

export default new UserService(); 