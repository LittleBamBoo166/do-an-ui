// @flow

import { Formik } from "formik";
import * as React from "react";

import { Form, FormCard, FormCheckboxInput, FormTextInput, StandaloneFormPage } from "tabler-react";
import { LocationService } from "../../services";

type Props = {||};

function ProvinceOption() {
  if (!localStorage.getItem("province")) {
    LocationService.getAllProvinces();
  }

  let provinces = JSON.parse(localStorage.getItem("province"));

  return provinces.map((province) => {
    return React.createElement("option", { value: province.id, key: province.code }, province.name);
  });
}

export default ProvinceOption;
// 
