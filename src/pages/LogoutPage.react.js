// @flow

import * as React from "react";
import { Formik } from "formik";
import { LoginPage as TablerLoginPage } from "tabler-react";

import { AuthService } from "../services";

type Props = {||};

function LogoutPage(props: Props): React.Node {
  AuthService.logout();
  window.location.replace('http://localhost:3000/');
}

export default LogoutPage;
