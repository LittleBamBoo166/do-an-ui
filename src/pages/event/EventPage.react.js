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

import EventData from "../../data/event/EventData";

function EventPage() {
  const [eventId] = window.location.pathname.split('/').slice(-1);
  const event = EventData.events.filter((event) => event.id === eventId)[0];

  return (
    <SiteWrapper>
      <Page.Content title={event.name}>
        <Page.Header>
          <div className="d-flex flex-row">
            <div className="p-2 text-secondary"><Icon prefix="fe" name="user" /> Đăng bởi: {event.closedBy.fullName}</div>
            <div className="p-2 text-secondary"><Icon prefix="fe" name="clock" /> Ngày đăng: {dayjs(event.createdAt).format('DD-MM-YYYY')}</div>
            <div className="p-2 text-secondary"><Icon prefix="fe" name="clock" /> Thời gian bắt đầu cứu trợ: {dayjs(event.startDate).format('DD-MM-YYYY')}</div>
            <div className="p-2 text-secondary"><Icon prefix="fe" name="clock" /> Thời gian kết thúc cứu trợ: {dayjs(event.endDate).format('DD-MM-YYYY')}</div>
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
                      {event.lOEventSubscriptions.length} <small>Xã bị ảnh hưởng</small>
                    </a>
                  }
                  footer={"12 xã đang chờ được cứu trợ"}
                />
              </Grid.Col>

              <Grid.Col width={6}>
                <StampCard
                  color="yellow"
                  icon="flag"
                  header={
                    <a href="#">
                      14 <small>Hoạt động cứu trợ</small>
                    </a>
                  }
                  footer={"4 hoạt động cứu trợ đã hoàn thành"}
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
                      {event.lOEventSubscriptions.map((lo) => lo.householdsNumber)} <small>Hộ dân bị ảnh hưởng</small>
                    </a>
                  }
                  footer={"63 hộ dân đã nhận được cứu trợ"}
                />
              </Grid.Col>

              <Grid.Col width={6}>
                <StampCard
                  color="red"
                  icon="dollar-sign"
                  header={
                    <a href="#">
                      53 <small>Mạnh thường quân</small>
                    </a>
                  }
                  footer={"Số tiền quyên góp: 56,040,000 đồng"}
                />
              </Grid.Col>
            </Grid.Row>

            <Grid.Row>
              <Grid.Col width={12}>
                <Button color="blue" icon="arrow-right" onClick={() => {
                  window.location.replace('http://localhost:3000/events/bbbc5212-6df4-40ab-8715-6b64c74338e7/donation-posts')
                }}>Xem các bài đăng kêu gọi quyên góp</Button>
              </Grid.Col>
            </Grid.Row>
            
          </Grid.Col>
        </Grid.Row>
      </Page.Content>
    </SiteWrapper>
  );
}

export default EventPage;
