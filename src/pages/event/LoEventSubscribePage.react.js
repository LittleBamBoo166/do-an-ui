// @flow

import * as React from "react";
import { Formik } from "formik";
import { Alert, Form, FormCard, FormTextInput, StandaloneFormPage } from "tabler-react";

import { redirect, useNavigate } from "react-router";

type Props = {||};

var strings = {
  title: "Đăng ký sự kiện",
  buttonText: "Đăng ký",
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

function LoEventSubscribeForm(props) {
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
    { imageURL: "../demo/logo.svg" },
    React.createElement(
      FormCard,
      {
        buttonText: strings$1.buttonText || strings.buttonText,
        title: strings$1.title || strings.title,
        onSubmit: onSubmit,
        action: action,
        method: method
      },
      React.createElement(Form.Group, {
        label: "Số hộ dân cần cứu trợ"
      }, 
        React.createElement(Form.Input, {
          name: "householdNumber",
          onChange: onChange,
          onBlur: onBlur,
          max: 1000,
          step: 1,
          min: 1,
          type: 'number',
          value: values && values.householdNumber,
          error: errors && errors.householdNumber
        })
      )
    )
  );
}

var LoginPageWithTouchedErrors = withTouchedErrors(["email", "password"])(LoEventSubscribeForm);


function LoEventSubscribePage(props: Props): React.Node {
  var strings$1 = {
    title: "Đăng ký sự kiện",
    buttonText: "Đăng ký",
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
        householdNumber: "0",
      }}
      validate={values => {
        let errors = {};
        if (!values.householdNumber) {
          errors.householdNumber = "Bắt buộc";
        } else if (isNaN(values.householdNumber)) {
          errors.householdNumber = "Không hợp lệ";
        }
        return errors;
      }}
      onSubmit={async (
        values,
        { setSubmitting, setErrors, resetForm /* setValues and other goodies */ }
      ) => {
        alert('Đăng ký thành công');
        window.location.replace('/local-officers/rescue-actions')
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
        <LoEventSubscribeForm
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

export default LoEventSubscribePage;
