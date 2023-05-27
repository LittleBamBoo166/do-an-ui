// @flow

import * as React from "react";
import { Form } from "tabler-react";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +defaultDate: Date,
  +minYear: number,
  +maxYear: number,
  +format: string,
  +monthLabels: Array<string>,
  +onChange?: Date => void,
  +dayName?: string,
  +monthName?: string,
  +yearName?: string,
|};

type State = {|
  currentDate: Date,
|};

type DateComponents = {
  yyyy: React.Node,
  dd: React.Node,
  mm: React.Node,
};

type ChangeTypes = "mm" | "yyyy" | "dd";

class FormDatePicker extends React.PureComponent<Props, State> {
  static defaultProps = {
    monthLabels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    minYear: 1897,
    maxYear: new Date().getFullYear(),
    format: "mm/dd/yyyy",
    defaultDate: new Date(),
    dayName: 'dayName',
    monthName: 'monthName',
    yearName: 'yearName',
  };

  state = {
    currentDate: this.props.defaultDate,
  };

  // Handle date changes
  _handleOnChange = (type: ChangeTypes, value: number): void => {
    const { currentDate } = this.state;
    const { onChange } = this.props;
    const newDate: Date = new Date(currentDate);

    // Change month
    if (type === "mm") {
      newDate.setMonth(value);
    }

    // Change day
    if (type === "dd") {
      newDate.setDate(value);
    }

    if (type === "yyyy") {
      newDate.setFullYear(value);
    }

    this.setState({ currentDate: newDate }, () => {
      onChange && onChange(this.state.currentDate);
    });
  };

  // Creates an array with numeric values from start to end
  _range = (start: number, end: number): Array<number> =>
    Array.from({ length: end + 1 - start }, (v, k) => k + start);

  // Renders the months select
  _renderMonths = (): React.Node => {
    const { currentDate } = this.state;
    const { monthLabels } = this.props;

    const onChangeMonths = (e: SyntheticInputEvent<EventTarget>): void =>
      this._handleOnChange("mm", Number(e.target.value));

    return (
      <Form.Select name={this.props.monthName} onChange={onChangeMonths}>
        <option>Tháng</option>
        {monthLabels.map((name, index) => (
          <option value={index}>
            {name}
          </option>
        ))}
      </Form.Select>
    );
  };

  // Renders the days select
  _renderDays = (): React.Node => {
    const { currentDate } = this.state;
    const currentMonthDays = new Date(
      currentDate.getUTCFullYear(),
      currentDate.getUTCMonth() + 1,
      0
    ).getDate();
    const daysRange = this._range(1, currentMonthDays);
    const currentDay = currentDate.getUTCDate();

    const onChangeDays = (e: SyntheticInputEvent<EventTarget>) =>
      this._handleOnChange("dd", Number(e.target.value));

    return (
      <Form.Select name={this.props.dayName} onChange={onChangeDays}>
        <option selected>Ngày</option>
        {daysRange.map(day => (
          <option value={day}>
            {day}
          </option>
        ))}
      </Form.Select>
    );
  };

  // renderes the years select
  _renderYears = (): React.Node => {
    const { minYear, maxYear } = this.props;
    const { currentDate } = this.state;
    const yearsRange = this._range(minYear, maxYear).reverse();
    const currentYear = currentDate.getUTCFullYear();

    const onChangeYears = (e: SyntheticInputEvent<EventTarget>) =>
      this._handleOnChange("yyyy", Number(e.target.value));

    return (
      <Form.Select name={this.props.yearName} onChange={onChangeYears}>
        <option selected>Năm</option>
        {yearsRange.map(year => (
          <option value={year}>
            {year}
          </option>
        ))}
      </Form.Select>
    );
  };

  render(): React.Node {
    const { format, className } = this.props;
    const formatSplit = format.split("/");
    const dateComponents: DateComponents = {
      mm: this._renderMonths(),
      dd: this._renderDays(),
      yyyy: this._renderYears(),
    };

    return (
      <div className={className}>
        <Form.InputGroup>
          {formatSplit.map((type: string): React.Node => dateComponents[type])}
        </Form.InputGroup>
      </div>
    );
  }
}

export default FormDatePicker;
