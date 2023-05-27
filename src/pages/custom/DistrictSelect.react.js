// @flow

import { Formik } from "formik";
import * as React from "react";

import { Form, FormCard, FormCheckboxInput, FormTextInput, StandaloneFormPage } from "tabler-react";
import { LocationService } from "../../services";

type Props = {||};

function DistrictOption(props: Props) {
  var provinceId = props.provinceId;
  if (!provinceId)
    return React.createElement("option");
  
  if (!localStorage.getItem("district")) {
    LocationService.getAllDistricts();
  }
  let provinces = JSON.parse(localStorage.getItem("province"));
  let parentCode = provinces.filter((province) => province.id == provinceId)[0].code;
  let districts = JSON.parse(localStorage.getItem("district")).filter((district) => district.parentCode == parentCode);

  return districts.map((district) => {
    return React.createElement("option", { value: district.id, key: district.code }, district.name);
  });
}

export default DistrictOption;
// 
