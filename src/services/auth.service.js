import axios from "axios";

const API_URL = "http://localhost:5000/relief-app/v1/auth";

type Props = {||};

class AuthService {
    login(userType, email, password) {
        const username = `${userType.toLowerCase()}|${email}`;

        return axios.post(`${API_URL}/login`, {username, password}).then(response => {
            if (response.data.success == true) {
                localStorage.setItem("user", JSON.stringify(response.data.data));
            }

            return response.data.data;
        });
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(values) {
        let userType = values.userType; 
        let email = values.email; 
        let name = values.name; 
        let phoneNumber = values.phoneNumber; 
        let rescueTeamName = values.rescueTeamName; 
        let provinceId = values.provinceId; 
        let districtId = values.districtId; 
        let wardId = values.wardId; 
        let password = values.password;

        const username = `${userType}|${email}`;
        const firstName = name.split(' ').slice(-1)[0];
        const lastName = name.split(' ')[0];
        let middleName = name.split(' ');
        if (middleName.length > 2) {
            middleName.pop();
            middleName.shift();
            if (middleName.length > 1) {
                middleName.join(' ');
            } else {
                middleName = middleName[0];
            }
        } else {
            middleName = undefined;
        }

        return axios.post(`${API_URL}/register`, {userType, email, password, firstName, middleName, lastName, phoneNumber, rescueTeamName, provinceId, districtId, wardId});
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
}

export default new AuthService();