// @flow

import * as React from "react";
import { Formik } from "formik";
import { Alert, Form, FormCard, FormTextInput, StandaloneFormPage } from "tabler-react";

import { AuthService } from "../services";
import HomePage from "../HomePage.react";
import { redirect, useNavigate } from "react-router";

type Props = {||};

var strings = {
  title: "Login to your Account",
  buttonText: "Login",
  emailLabel: "Email Address",
  emailPlaceholder: "Enter email",
  passwordLabel: "Password",
  passwordPlaceholder: "Password",
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
};

function LoginPageCustom(props) {
  var action = props.action,
      method = props.method,
      onSubmit = props.onSubmit,
      onChange = props.onChange,
      onBlur = props.onBlur,
      values = props.values,
      _props$strings = props.strings,
      strings$1 = _props$strings === undefined ? {} : _props$strings,
      errors = props.errors;


  return React.createElement(
    StandaloneFormPage,
    { imageURL: "./demo/logo.svg" },
    React.createElement(
      FormCard,
      {
        buttonText: strings$1.buttonText || strings.buttonText,
        title: strings$1.title || strings.title,
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
        name: "email",
        label: strings$1.emailLabel || strings.emailLabel,
        placeholder: strings$1.emailPlaceholder || strings.emailPlaceholder,
        onChange: onChange,
        onBlur: onBlur,
        value: values && values.email,
        error: errors && errors.email
      }),
      React.createElement(FormTextInput, {
        name: "password",
        type: "password",
        label: strings$1.passwordLabel || strings.passwordLabel,
        placeholder: strings$1.passwordPlaceholder || strings.passwordPlaceholder,
        onChange: onChange,
        onBlur: onBlur,
        value: values && values.password,
        error: errors && errors.password
      })
    )
  );
}

var LoginPageWithTouchedErrors = withTouchedErrors(["email", "password"])(LoginPageCustom);


function LoginPage(props: Props): React.Node {
  var strings$1 = {
    title: "Đăng nhập",
    buttonText: "Đăng nhập",
    nameLabel: "Tên",
    namePlaceholder: "Nhập tên",
    emailLabel: "Email",
    emailPlaceholder: "Nhập email",
    passwordLabel: "Mật khẩu",
    passwordPlaceholder: "Nhập mật khẩu",
    termsLabel: "Đồng ý với điều khoản sử dụng",
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        userType: "",
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
          errors.userType = "Bắt buộc";
        }
        if (!values.password) {
          errors.password = "Bắt buộc";
        }
        return errors;
      }}
      onSubmit={async (
        values,
        { setSubmitting, setErrors, resetForm /* setValues and other goodies */ }
      ) => {
        await AuthService.login(values.userType, values.email, values.password).then((data) => {
          setSubmitting(true);
          window.location.replace('http://localhost:3000/');
        }).catch((err) => {
          setErrors(err);
          resetForm({
            values: {
              email: "",
              password: "",
              userType: "",
            }
          });
        });
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
        <LoginPageCustom
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

export default LoginPage;
