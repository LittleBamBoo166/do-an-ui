// @flow

import { Formik } from "formik";
import * as React from "react";

import { Alert, Form, FormCard, FormCheckboxInput, FormTextInput, Grid, Page, StandaloneFormPage } from "tabler-react";

import { WardOption, DistrictOption, ProvinceOption, FormDateRequiredPicker, FormDatePicker } from "../custom";
import SiteWrapper from "../../SiteWrapper.react";

type Props = {||};

var strings$1 = {
  title: "Thêm sự kiện",
  buttonText: "Thêm",
  nameLabel: "Name",
  namePlaceholder: "Enter name",
  emailLabel: "Email Address",
  emailPlaceholder: "Enter email",
  passwordLabel: "Password",
  passwordPlaceholder: "Password",
  termsLabel: "Agree to the terms and policy"
};

function AddEvent(props) {
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
      FormCard,
      {
        buttonText: strings.buttonText || strings$1.buttonText,
        title: strings.title || strings$1.title,
        onSubmit: onSubmit,
        action: action,
        method: method
      },
      React.createElement(Form.Select, {
        name: "type",
        label: "Loại sự kiện",
        value: values && values.userType,
        error: errors && errors.userType,
        onChange: onChange,
        onBlur: onBlur,
      }, 
        React.createElement("option", { value: "STORM" }, "Bão"),
        React.createElement("option", { value: "FLOOD" }, "Lũ lụt"),
        React.createElement("option", { value: "LANDSLIDE" }, "Động đất"),
        React.createElement("option", { value: "TSUNAMI" }, "Sóng thần"),
      ),
      React.createElement(FormTextInput, {
        name: "name",
        label: 'Tên sự kiện',
        placeholder: 'Nhập tên sự kiện',
        onChange: onChange,
        onBlur: onBlur,
        value: values && values.name,
        error: errors && errors.name
      }),         
      React.createElement("div", { className: "d-flex justify-content-start"}, 
        React.createElement(Form.Group, {
          label: 'Ngày bắt đầu mở đăng ký',
          className: 'mr-8',
          onChange: onChange,
          onBlur: onBlur,
        },
          React.createElement(FormDateRequiredPicker, {
            defaultDate: new Date(),
            format: "dd/mm/yyyy",
            maxYear: 2023,
            minYear: 1897,
            monthLabels: [
              'Tháng 1',
              'Tháng 2',
              'Tháng 3',
              'Tháng 4',
              'Tháng 5',
              'Tháng 6',
              'Tháng 7',
              'Tháng 8',
              'Tháng 9',
              'Tháng 10',
              'Tháng 11',
              'Tháng 12',
            ],
            dayName: "startDay",
            monthName: "startMonth",
            yearName: "startYear"
          }),
        ),
        React.createElement(Form.Group, {
          label: 'Ngày đóng sự kiện',
          onChange: onChange,
          onBlur: onBlur,
        },
          React.createElement(FormDatePicker, {
            defaultDate: new Date(),
            format: "dd/mm/yyyy",
            maxYear: 2023,
            minYear: 1897,
            monthLabels: [
              'Tháng 1',
              'Tháng 2',
              'Tháng 3',
              'Tháng 4',
              'Tháng 5',
              'Tháng 6',
              'Tháng 7',
              'Tháng 8',
              'Tháng 9',
              'Tháng 10',
              'Tháng 11',
              'Tháng 12',
            ],
            dayName: "endDay",
            monthName: "endMonth",
            yearName: "endYear"
          }),
        ),
      ),
      React.createElement(Form.Group, {
        label: 'Mô tả',
        onChange: onChange,
        onBlur: onBlur,
        value: values && values.email,
        error: errors && errors.email
      },
        React.createElement(Form.Textarea, {
          name: "description",
          placeholder: 'Mô tả ngắn về sự kiện ...',
          rows: 4
        })
      ),
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

var AdminAddEventPageWithTouchedErrors = withTouchedErrors(["name", "email", "password", "terms"])(AddEvent);

function AdminAddEventPage() {
  return (
    <SiteWrapper>
      <Page.Content title={'Quản lý sự kiện'}>
        <Grid.Row>
          <Grid.Col>
            <Formik
              initialValues={{
                type: "fdsf",
                name: "fdf",
                startDay: "",
                startMonth: "",
                startYear: "",
                endDay: "", 
                endMonth: "",
                endYear: "",
                description: ""
              }}
              validate={values => {
                // same as above, but feel free to move this into a class method now.
                let errors = {};
                if (!values.type) {
                  errors.type = 'Bắt buộc';
                }
                if (!values.name) {
                  errors.name = 'Bắt buộc';
                }
                if (!values.description) {
                  errors.description = 'Bắt buộc';
                }
                return errors;
              }}
              onSubmit={(
                values,
                { setSubmitting, setErrors, resetForm /* setValues and other goodies */ }
              ) => {
                console.log(values);
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
                <AddEvent
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
          </Grid.Col>
        </Grid.Row>
      </Page.Content>
    </SiteWrapper>
  );
}

export default AdminAddEventPage;
