import React from "react";

import SiteWrapper from "../../SiteWrapper.react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

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
} from "tabler-react";
import dayjs from "dayjs";

import adminEventService from "../../services/admin/admin-event.service";

function EventPage() {
  const [id] = window.location.pathname.split('/').slice(-1);
  const [event, setEvent] = React.useState(null);

  React.useEffect(() => {
    async function getEvent() {
      const params = {
        id: id,
      };
      const response = await adminEventService.getEvent(params);
      setEvent(response.data);
    };

    if (!event)
      getEvent();
  });

  if (!event) {
    return (
      <Grid.Col width={12}>
        <Header.H1><Icon prefix="fe" name="sun" className="p-5"/><small>Không có sự kiện thiên tai.</small></Header.H1>
      </Grid.Col>
    );
  }

  let closedAt = 'Chưa cập nhật';
  if (event.endDate) {
    closedAt = dayjs(event.endDate).format('DD-MM-YYYY');
  }

  let closedBy = 'Chưa cập nhật';
  if (event.closedBy) {
    closedBy = event.closedBy.fullName;
  }

  return (
    <SiteWrapper>
      <Page.Content title={event.name}>
        <Page.Header>
          <div className="d-flex flex-row">
            <div className="p-2 text-secondary"><Icon prefix="fe" name="user" /> Đăng bởi: {event.createdBy.fullName}</div>
            <div className="p-2 text-secondary"><Icon prefix="fe" name="clock" /> Ngày đăng: {dayjs(event.createdAt).format('DD-MM-YYYY')}</div>
            <div className="p-2 text-secondary"><Icon prefix="fe" name="clock" /> Thời gian bắt đầu cứu trợ: {dayjs(event.startDate).format('DD-MM-YYYY')}</div>
            <div className="p-2 text-secondary"><Icon prefix="fe" name="clock" /> Thời gian kết thúc cứu trợ: {closedAt}</div>
            <div className="p-2 text-secondary"><Icon prefix="fe" name="clock" /> Cập nhật bởi: {closedBy}</div>
          </div>
        </Page.Header>
        <Grid.Row cards={true}>

          <Grid.Col width={6}>
            <Card>
              <Card.Header>
                <Card.Title>
                  <img src="../demo/event/event-1.png" className="py-4 rounded" />
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <Text className="">{event.description}</Text>
                <br/>
              </Card.Body>
            </Card>
          </Grid.Col>

          <Grid.Col width={6}>
            <Grid.Row cards={true}>
              <Grid.Col width={6}>
                <StampCard
                  color="blue"
                  icon="home"
                  header={
                    <a href="#">
                      {event.loSubscriptionCount} <small>Xã bị ảnh hưởng</small>
                    </a>
                  }
                  // footer={"12 xã đang chờ được cứu trợ"}
                />
              </Grid.Col>

              <Grid.Col width={6}>
                <StampCard
                  color="yellow"
                  icon="flag"
                  header={
                    <a href="#">
                      {event.rtSubscriptionCount} <small>Hoạt động cứu trợ</small>
                    </a>
                  }
                  // footer={"4 hoạt động cứu trợ đã hoàn thành"}
                />
              </Grid.Col>
            </Grid.Row>

            <Grid.Row cards={true}>
              <Grid.Col width={6}>
                <StampCard
                  color="green"
                  icon="heart"
                  header={
                    <a href="#">
                      {event.houseHoldNumberCount} <small>Hộ dân bị ảnh hưởng</small>
                    </a>
                  }
                  // footer={"63 hộ dân đã nhận được cứu trợ"}
                />
              </Grid.Col>

              <Grid.Col width={6}>
                <StampCard
                  color="red"
                  icon="dollar-sign"
                  header={
                    <a href="#">
                      {event.donationCount} <small>Mạnh thường quân</small>
                    </a>
                  }
                />
              </Grid.Col>
            </Grid.Row>

            <Grid.Row>
              <Grid.Col width={12}>
                <Button color="blue" icon="arrow-left" onClick={() => {
                  window.location.replace(`http://localhost:3000/`)
                }}>Quay lại</Button>
              </Grid.Col>
            </Grid.Row>
            
          </Grid.Col>
        </Grid.Row>
      </Page.Content>
    </SiteWrapper>
  );
}

export default EventPage;
