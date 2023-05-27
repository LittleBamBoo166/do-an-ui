// @flow

import { Formik } from "formik";
import * as React from "react";

import { Form, FormCard, FormCheckboxInput, FormTextInput, StandaloneFormPage } from "tabler-react";
import { LocationService } from "../../services";

type Props = {||};

function WardOption(props: Props) {
  var districtId = props.districtId;
  if (!districtId)
    return React.createElement("option");
  
  if (!localStorage.getItem("ward")) {
    LocationService.getAllWards();
  }

  let districts = JSON.parse(localStorage.getItem("district"));
  let parentCode = districts.filter((district) => district.id == districtId)[0].code;
  let wards = JSON.parse(localStorage.getItem("ward")).filter((ward) => ward.parentCode == parentCode);

  return wards.map((ward) => {
    return React.createElement("option", { value: ward.id, key: ward.code }, ward.name);
  });
}

export default WardOption;
// 
