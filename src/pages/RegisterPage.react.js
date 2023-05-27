// @flow

import { Formik } from "formik";
import * as React from "react";

import { Form, FormCard, FormCheckboxInput, FormTextInput, StandaloneFormPage } from "tabler-react";
import { AuthService, LocationService } from "../services";
import ProvinceOption from "./custom/ProvinceSelect.react";
import DistrictOption from "./custom/DistrictSelect.react";
import WardOption from "./custom/Ward.react";

type Props = {||};

var strings$1 = {
  title: "Đăng ký",
  buttonText: "Create Account",
  nameLabel: "Name",
  namePlaceholder: "Enter name",
  emailLabel: "Email Address",
  emailPlaceholder: "Enter email",
  passwordLabel: "Password",
  passwordPlaceholder: "Password",
  termsLabel: "Agree to the terms and policy"
};

function RegisterPageCustom(props) {
  var action = props.action,
      method = props.method,
      onSubmit = props.onSubmit,
      onChange = props.onChange,
      onBlur = props.onBlur,
      values = props.values,
      _props$strings = props.strings,
      strings = _props$strings === undefined ? {} : _props$strings,
      errors = props.errors;

  return React.createElement(
    StandaloneFormPage,
    { imageURL: "./demo/logo.svg" },
    React.createElement(
      FormCard,
      {
        buttonText: strings.buttonText || strings$1.buttonText,
        title: strings.title || strings$1.title,
        onSubmit: onSubmit,
        action: action,
        method: method
      },
      React.createElement(Form.Select, {
        name: "userType",
        label: "Quyền",
        value: values && values.userType,
        error: errors && errors.userType,
        onChange: onChange,
        onBlur: onBlur,
      }, 
        React.createElement("option", { value: "ADMIN" }, "Admin"),
        React.createElement("option", { value: "LOCAL_OFFICER" }, "Cán bộ xã"),
        React.createElement("option", { value: "RESCUE_TEAM" }, "Đội cứu trợ"),
        React.createElement("option", { value: "SPONSOR" }, "Mạnh thường quân"),
      ),
      React.createElement(FormTextInput, {
        name: "name",
        label: 'Tên',
        placeholder: 'Nhập tên',
        onChange: onChange,
        onBlur: onBlur,
        value: values && values.name,
        error: errors && errors.name
      }),          
      React.createElement(FormTextInput, {
        name: "rescueTeamName",
        label: 'Tên đội cứu trợ',
        placeholder: 'Nhập tên đội cứu trợ',
        onChange: onChange,
        onBlur: onBlur,
        value: values && values.rescueTeamName,
        error: errors && errors.rescueTeamName
      }),          
      React.createElement(FormTextInput, {
        name: "email",
        label: 'Email',
        placeholder: strings.emailPlaceholder || strings$1.emailPlaceholder,
        onChange: onChange,
        onBlur: onBlur,
        value: values && values.email,
        error: errors && errors.email
      }),
      React.createElement(FormTextInput, {
        name: "phoneNumber",
        label: 'Số điện thoại',
        placeholder: "Nhập số điện thoại",
        onChange: onChange,
        onBlur: onBlur,
        value: values && values.phoneNumber,
        error: errors && errors.phoneNumber,
        length: 10
      }),
      React.createElement(FormTextInput, {
        name: "password",
        type: "password",
        label: strings.passwordLabel || strings$1.passwordLabel,
        placeholder: strings.passwordPlaceholder || strings$1.passwordPlaceholder,
        onChange: onChange,
        onBlur: onBlur,
        value: values && values.password,
        error: errors && errors.password
      }),
      React.createElement(Form.Select, {
        name: "provinceId",
        label: "Tỉnh / thành phố",
        value: values && values.provinceId,
        error: errors && errors.provinceId,
        onChange: onChange,
        onBlur: onBlur,
      },
        React.createElement(ProvinceOption)
      ),
      React.createElement(Form.Select, {
        name: "districtId",
        label: "Quận / huyện / thị xã",
        value: values && values.districtId,
        error: errors && errors.districtId,
        onChange: onChange,
        onBlur: onBlur,
      },
        React.createElement(DistrictOption, {
          provinceId: values.provinceId,
        })
      ),
      React.createElement(Form.Select, {
        name: "wardId",
        label: "Xã / phường / thị trấn",
        value: values && values.wardId,
        error: errors && errors.wardId,
        onChange: onChange,
        onBlur: onBlur,
      },
        React.createElement(WardOption, {
          districtId: values.districtId,
        })
      ),
      React.createElement(FormCheckboxInput, {
        onChange: onChange,
        onBlur: onBlur,
        value: values && values.terms,
        name: "terms",
        label: strings.termsLabel || strings$1.termsLabel
      })
    )
  );
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};


function touchedErrors() {
  var touched = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var errors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var fields = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  return fields.reduce(function (acc, cur) {
    return Object.assign(acc, defineProperty({}, cur, touched && touched[cur] && errors ? errors[cur] : ""));
  }, {});
}

function withTouchedErrors() {
  var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  return function withComponent(Component) {
    return function WithTouchedErrors(props) {
      var errors = touchedErrors(props.touched, props.errors, fields);
      return React.createElement(Component, _extends({}, props, { errors: errors }));
    };
  };
}

var RegisterPageWithTouchedErrors = withTouchedErrors(["name", "email", "password", "terms"])(RegisterPage);

function RegisterPage(props: Props): React.Node {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        userType: "",
        name: "",
        provinceId: "",
        districtId: "", 
        wardId: "",
        phoneNumber: "",
        rescueTeamName: ""
      }}
      validate={values => {
        // same as above, but feel free to move this into a class method now.
        let errors = {};
        if (!values.email) {
          errors.email = "Bắt buộc";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
          errors.email = "Email không hợp lệ";
        }

        if (!values.userType) {
          errors.userType = 'Bắt buộc';
        }

        if (values.phoneNumber && values.phoneNumber.length !== 10 && !/^[0-9]{10}/i.test(values.phoneNumber)) {
          errors.phoneNumber = "Số điện thoại không hợp lệ"
        }

        if (!values.password) {
          errors.password = "Bắt buộc";
        } else if (values.password.length <= 8) {
          errors.password = "Mật khẩu phải dài hơn 8 ký tự";
        }

        if (values.userType == 'RESCUE_TEAM' && !values.rescueTeamName) {
          errors.rescueTeamName = "Bắt buộc";
        }

        if (!values.provinceId) {
          errors.provinceId = "Bắt buộc";
        }

        if (!values.districtId) {
          errors.districtId = "Bắt buộc";
        }

        if (!values.wardId) {
          errors.wardId = "Bắt buộc";
        }

        if (!values.name) {
          errors.name = "Bắt buộc";
        }
        return errors;
      }}
      onSubmit={async (
        values,
        { setSubmitting, setErrors, resetForm /* setValues and other goodies */ }
      ) => {
        await AuthService.register(values).then((data) => {
          setSubmitting(true);
          window.location.replace('http://localhost:3000/login');
        }).catch((err) => {
          setErrors(err);
          resetForm({
            values: {
              email: "",
              password: "",
              userType: "",
              name: "",
              provinceId: "",
              districtId: "", 
              wardId: "",
              phoneNumber: "",
              rescueTeamName: ""
            }
          });
        })
      }}
      render={({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <RegisterPageCustom
          onSubmit={handleSubmit}
          onChange={handleChange}
          onBlur={handleBlur}
          values={values}
          errors={errors}
          touched={touched}
          strings={strings$1}
        />
      )}
    />
  );
}

export default RegisterPage;
