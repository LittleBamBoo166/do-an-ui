import React from "react";

import SiteWrapper from "../../SiteWrapper.react";
import { useLocation, useParams } from "react-router-dom/cjs/react-router-dom.min";

import {
  Page,
  Avatar,
  Icon,
  Grid,
  Card,
  Text,
  Table,
  Alert,
  Progress,
  colors,
  Dropdown,
  Button,
  StampCard,
  StatsCard,
  ProgressCard,
  Badge,
  Dimmer,
  Header,
  BlogCard,
  List,
  Form,
} from "tabler-react";
import dayjs from "dayjs";
import { Formik } from "formik";
import { FormDatePicker } from "../custom";
import loEventSubscription from "../../services/local-officer/lo-event-subscription";

function EventRow(query) {
  const tmp = useLocation().search;
  console.log(tmp);
  const vcl = new URLSearchParams(tmp).get('username');
  console.log(vcl);
  const [events, setEvents] = React.useState(null);

  React.useEffect(() => {
    async function getEvents() {
      const query = {};
      const response = await loEventSubscription.getEvents(query);
      setEvents(response.data);
    };
    if (!events)
      getEvents();
  });

  if (!events) {
    return (
      <Grid.Col width={12}>
        <Header.H1><Icon prefix="fe" name="sun" className="p-5"/><small>Không có sự kiện thiên tai.</small></Header.H1>
      </Grid.Col>
    );
  }

  return events.map((event) => {
    let eventType = '';
    switch (event.eventType) {
      case 'STORM':
        eventType = 'Bão';
        break;
      case 'FLOOD':
        eventType = 'Lũ lụt';
        break;
      case 'LANDSLIDE':
        eventType = 'Sạt lở đất';
        break;
      case 'TSUNAMI':
        eventType = 'Lũ quét';
        break;    
      default:
        break;
    }

    let closeAt;
    if (event.closeAt) {
      closeAt = dayjs(event.closeAt).format('DD-MM-YYYY');
    } else {
      closeAt = 'Chưa cập nhật';
    }

    let status;
    switch (event.status) {
      case 'PENDING':
        status = 'Chưa bắt đầu';
        break;
      case 'CLOSE':
        status = 'Đã đóng';
        break;
      case 'OPEN':
        status = 'Đang diễn ra';
        break;
    
      default:
        status = 'Chưa cập nhật';
        break;
    }

    let actionText = '';
    let actionHref = '#';

    if (event.status != 'CLOSE') {
      if (event.isCanceled) {
        actionText = 'Đăng ký lại';
      }
      if (event.eventSubscriptionId) {
        actionText = 'Hủy đăng ký';
      }
      actionText = 'Đăng ký';
      actionHref = `/lo-event-subscriptions/${event.id}`
    }

    return (
      <Table.Row>
        <Table.Col>{event.name}</Table.Col>
        <Table.Col>{eventType}</Table.Col>
        <Table.Col>{dayjs(event.createdAt).format('DD-MM-YYYY')}</Table.Col>
        <Table.Col>{dayjs(event.updatedAt).format('DD-MM-YYYY')}</Table.Col>
        <Table.Col>{dayjs(event.startAt).format('DD-MM-YYYY')}</Table.Col>
        <Table.Col>{closeAt}</Table.Col>
        <Table.Col>{status}</Table.Col>
        <Table.Col>
          <Button RootComponent="a" colors="info" href={actionHref}>{actionText}</Button>
        </Table.Col>
      </Table.Row>
    )
  })
}

function SearchSection() {
  return (
    <Form onSubmit={(event) => console.log(event + 'clicked')}>
      <Grid.Row>
        <Grid.Col width={4} sm={12} lg={4}>
          <Form.Group label="Loại">
            <Form.Checkbox
              isInline
              label="Bão"
              name="types"
              value="STORM"
            />
            <Form.Checkbox
              isInline
              label="Lũ lụt"
              name="types"
              value="FLOOD"
            />
            <Form.Checkbox
              isInline
              label="Sạt lở đất"
              name="types"
              value="LANDSLIDE"
            />
            <Form.Checkbox
              isInline
              label="Sóng thần"
              name="types"
              value="TSUNAMI"
            />
          </Form.Group>
        </Grid.Col>
        <Grid.Col width={4} sm={12} lg={4}>
          <Form.Select 
            name="creatingAdminUserId"
            label="Thêm bởi">
            <option value={'1'} key={1}>Nguyễn Thị Phi Thương</option>
            <option value={'2'} key={2}>Nguyễn Thị Phi Thúy</option>
            <option value={'3'} key={3}>Nguyễn Phi Công</option>
          </Form.Select>
        </Grid.Col>
        <Grid.Col width={4} sm={12} lg={4}>
          <Form.Select 
            name="closingAdminUserId"
            label="Đóng bởi">
            <option value={'1'} key={1}>Nguyễn Thị Phi Thương</option>
            <option value={'2'} key={2}>Nguyễn Thị Phi Thúy</option>
            <option value={'3'} key={3}>Nguyễn Phi Công</option>
          </Form.Select>
        </Grid.Col>
        <Grid.Col width={4} sm={12} lg={4}>
          <Form.Group label="Trạng thái">
            <Form.Checkbox
              isInline
              label="Chưa bắt đầu"
              name="statuses"
              value="PENDING"
            />
            <Form.Checkbox
              isInline
              label="Đã đóng"
              name="statuses"
              value="CLOSE"
            />
            <Form.Checkbox
              isInline
              label="Đang diễn ra"
              name="statuses"
              value="OPEN"
            />
          </Form.Group>
        </Grid.Col>
        <Grid.Col width={4} sm={12} lg={4}>
          <Form.Input
            className="mb-3"
            icon="search"
            placeholder="Nhập tên sự kiện ..."
            position="append"
            label="Tìm"
            name="name"
          />
        </Grid.Col>
        <Grid.Col width={4} sm={12} lg={4}>
          <Form.Group label="Năm">
            <Form.Input
              defaultValue={15}
              max={2100}
              min={2000}
              step=".01"
              type="number"
              name="year"
            />
          </Form.Group>
        </Grid.Col>
        <Grid.Col width={4} sm={12} lg={4}>
          <Form.Group label="Từ ngày">
            <FormDatePicker
              defaultDate={new Date()}
              format="dd/mm/yyyy"
              maxYear={2023}
              minYear={1897}
              monthLabels={[
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
              ]}
              dayName="fromDay"
              monthName="fromMonth"
              yearName="fromYear"
            />
          </Form.Group>
        </Grid.Col>
        <Grid.Col width={4} sm={12} lg={4}>
          <Form.Group label="Đến ngày">
            <FormDatePicker
              defaultDate={new Date()}
              format="dd/mm/yyyy"
              maxYear={2023}
              minYear={1897}
              monthLabels={[
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
              ]}
              dayName="toDay"
              monthName="toMonth"
              yearName="toYear"
            />
          </Form.Group>
        </Grid.Col>
        <Grid.Col width={4} sm={12} lg={4}>
          <Button color="primary" type='submit' size="lg" className="mt-5">Tìm</Button>
        </Grid.Col>
      </Grid.Row>      
    </Form>
  )
}

function LoEventsPage() {
    return (
    <SiteWrapper>
      <Page.Content title={'Danh sách sự kiện'}>
        <Grid.Row>
          <Grid.Col width={12} className="card p-5">
            <SearchSection/>
          </Grid.Col>
        </Grid.Row>

        <Grid.Row>
          <Grid.Col width={12}>
            <Table cards={true}>
              <Table.Header>
                <Table.Row>
                  <Table.ColHeader>
                    Tên <Button className="ml-3" size="sm"><Icon prefix="fe" name="arrow-down"/></Button>
                  </Table.ColHeader>
                  <Table.ColHeader>
                    Loại sự kiện
                  </Table.ColHeader>
                  <Table.ColHeader>
                    Ngày thêm
                  </Table.ColHeader>
                  <Table.ColHeader>
                    Ngày cập nhật
                  </Table.ColHeader>
                  <Table.ColHeader>
                    Ngày bắt đầu <Button className="ml-3" size="sm"><Icon prefix="fe" name="arrow-down"/></Button>
                  </Table.ColHeader>
                  <Table.ColHeader>
                    Ngày đóng sự kiện <Button className="ml-3" size="sm"><Icon prefix="fe" name="arrow-down"/></Button>
                  </Table.ColHeader>
                  <Table.ColHeader>
                    Trạng thái <Button className="ml-3" size="sm"><Icon prefix="fe" name="arrow-down"/></Button>
                  </Table.ColHeader>
                  <Table.ColHeader>
                    Hành động
                  </Table.ColHeader>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <EventRow/>
              </Table.Body>
            </Table>
          </Grid.Col>
        </Grid.Row>
      </Page.Content>
    </SiteWrapper>
  );
}

export default LoEventsPage;
