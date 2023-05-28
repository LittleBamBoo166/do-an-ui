import * as React from "react";

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

import C3Chart from "react-c3js";

import SiteWrapper from "../../SiteWrapper.react";

import EventData from "../../data/event/EventData";
import sponorDonationpostService from "../../services/sponsor/sponor-donationpost.service";
import dayjs from "dayjs";

function EventCard () {
  const events = EventData.events;

  return events.map((event) => {
    return (
      <Grid.Col width={6} sm={4} lg={4}>
        <Card>
          <Card.Header>
            <Card.Title>
              {event.name}
            </Card.Title>
            <Card.Options>
              <Button 
                RootComponent="App" 
                color="primary" 
                size="sm"
                onClick={() => {
                  window.location.replace(`http://localhost:3000/events/${event.id}`)
                }}>
                Chi tiết
              </Button>
            </Card.Options>
          </Card.Header>
          <Card.Body>
            <Text className="">{event.description}</Text>
            <br/>
            <Text>Địa phương bị ảnh hưởng: {event.lOEventSubscriptions.length}</Text>
          </Card.Body>
          <Card.Footer>
            <Text>Ngày thêm: {dayjs(event.createdAt).format('DD-MM-YYYY')}</Text>
          </Card.Footer>
        </Card>
      </Grid.Col>
    )
  })
}
function DonationPost(){
  const [donationPost, setDonationPost] = React.useState(null);
 
  React.useEffect(() => {
    async function getEvents() {
      const query = undefined;
      const respone = await sponorDonationpostService.getEvents(query);
      setDonationPost(respone.data);
    };
    if (!donationPost)
      getEvents();
  });
  if (!donationPost) {
    return (
      <Grid.Col width={12}>
        <Header.H1><Icon prefix="fe" name="sun" className="p-5"/><small>Không có bài đăng kêu gọi quyên góp.</small></Header.H1>
      </Grid.Col>
    );
  }
  return donationPost.map((event)=>{
    return (
      <Card>
        
  
          <Grid.Row cards={true} deck>
  
            <Grid.Col width={12} sm={4} lg={6}>
  
              <Card className="card-aside">
                <a
                  href={"#"}
                  className="card-aside-column"
                  style={{ backgroundImage: `url(./demo/event/event-20.jpg)` }}
                >
                  {""}
                </a>
                <Card.Body className="d-flex flex-column">
                  <h4>
                    <a href={"./donation-posts/bbbc5212-6df4-40ab-8715-6b64c74338e7"}>{event.eventName}</a>
                  </h4>
                  <Card.Options>
              <Button 
                RootComponent="App" 
                color="primary" 
                size="sm"
                onClick={() => {
                  window.location.replace(`http://localhost:3001/donation/${event.id}`)
                }}>
                Chi tiết
              </Button>
            </Card.Options>
                  <div className="text-muted">{event.description}</div>
                  <div className="text-default">Tổng số tiền kêu gọi: {event.moneyNeed}<br/>Đã nhận quyên góp: {event.donateMoney}</div>
                  <div className="text-default">Nhu yếu phẩm:
                      <List.Group>
                        <List.GroupItem active={true}>{event.necessariesList}</List.GroupItem>
                        <List.GroupItem>1000 thùng mì: đã nhận 562 thùng mì</List.GroupItem>
                        <List.GroupItem>80000 lít nước sạch - đã nhận: 5000 lít nước sạch</List.GroupItem>
                      </List.Group>
                  </div>
                  <div className="d-flex align-items-center pt-5 mt-auto">
                    <div
                      className="avatar avatar-md mr-3"
                      style={{ backgroundImage: `url(./demo/faces/male/16.jpg` }}
                    />
                    <div>
                      <a href={"./profile.html"} className="text-default">
                        {event.rescueTeam.name}
                      </a>
                      <small className="d-block text-muted">{event.deadline}</small>
                    </div>
                    <div className="ml-auto text-red">
                      <a href={"./donation-posts/bbbc5212-6df4-40ab-8715-6b64c74338e7"} className="icon d-none d-md-inline-block ml-3">
                        <Icon prefix="fe" name={"heart"} />
                      </a>
                    </div>
                  </div>
                </Card.Body>
              </Card>
  
  
            </Grid.Col>
  
          </Grid.Row>
  
       
          </Card>
    )
  })
}
function SponsorDashboardPage () {
  const [donationPost, setDonationPost] = React.useState(null);
 
  React.useEffect(() => {
    async function getEvents() {
      const query = undefined;
      const respone = await sponorDonationpostService.getEvents(query);
      setDonationPost(respone.data);
    };
    if (!donationPost)
      getEvents();
  });
  if (!donationPost) {
    return (
      <Grid.Col width={12}>
        <Header.H1><Icon prefix="fe" name="sun" className="p-5"/><small>Không có bài đăng kêu gọi quyên góp.</small></Header.H1>
      </Grid.Col>
    );
  }
  return donationPost.map((event)=>{
    return (

      <SiteWrapper>
        <Page.Content title="Dashboard">
          <Grid.Row cards={true}>
            <EventCard></EventCard>
          </Grid.Row>
          <Grid.Row>
            <Grid.Col width={12}>
              <Header.H1 className="page-title">Bài kêu gọi quyên góp</Header.H1>
            </Grid.Col>
          </Grid.Row>
          <Grid.Row cards={true}>
            <DonationPost></DonationPost>
          </Grid.Row>
          <Grid.Row>
            <Grid.Col width={12}>
              <div className="d-flex">
              <Button
               RootComponent="App" 
               color="primary" 
               size="sm"
               onClick={() => {
                 window.location.replace(`http://localhost:3001/donation`)
               }}
                >
                Xem thêm bài đăng kêu gọi quyên góp
              </Button>
              </div>
            </Grid.Col>
          </Grid.Row>
        </Page.Content>
      </SiteWrapper>
    );
  })
 
}

export default SponsorDashboardPage;