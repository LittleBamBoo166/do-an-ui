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
  Stamp,
  Timeline,
} from "tabler-react";

import C3Chart from "react-c3js";

import SiteWrapper from "../../SiteWrapper.react";

import dayjs from "dayjs";
import adminEventService from "../../services/admin/admin-event.service";
import loRescueActionService from "../../services/local-officer/lo-rescue-action.service";

function EventCard () {
  const [events, setEvents] = React.useState(null);

  React.useEffect(() => {
    async function getEvents() {
      const query = undefined;
      const response = await adminEventService.getEvents(query);
      setEvents(response.data);
    };
    if (!events)
      getEvents();
  });

  if (!events) {
    return (
      <Grid.Col width={12}>
        <Header.H1><Icon prefix="fe" name="sun" className="p-5"/><small>Không có sự kiện thiên tai diễn ra hôm nay.</small></Header.H1>
      </Grid.Col>
    );
  }

  let threeEvents = events.slice(0, 3);

  return threeEvents.map((event) => {
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
          </Card.Body>
          <Card.Footer>
            <Text>Ngày thêm: {dayjs(event.createdAt).format('DD-MM-YYYY')}</Text>
          </Card.Footer>
        </Card>
      </Grid.Col>
    )
  })
}

function mapRescueActionType(type) {
  switch (type) {
    case 'SUBSCRIBE':
      return 'Đã đăng ký';
    case 'APPROVED':
      return 'Được phê duyệt';
    case 'RELIEF_PLAN_CREATED':
      return 'Tạo kế hoạch cứu trợ';
    case 'RELIEF_PLAN_UPDATED':
      return 'Cập nhật kế hoạch cứu trợ';
    case 'DONATION_POST_CREATED':
      return 'Đăng bài kêu gọi quyên góp';
    case 'DONATION_POST_UPDATED':
      return 'Cập nhật bài đăng kêu gọi quyên góp';
    case 'DONATION_COMPLETED':
      return 'Hoàn thành quyên góp';
    case 'PROOF_IMAGE_UPDATED':
      return 'Cập nhật hình ảnh minh chứng';
    case 'COMPLETED':
      return 'Hoàn thành cứu trợ';
  
    default:
      return '';
  }
}

function CurrentRescueAction() {
  const [currentAction, setCurrentAction] = React.useState(null);

  React.useEffect(() => {
    async function getCurrentAction() {
      const response = await loRescueActionService.getLoCurrentRescueAction();
      setCurrentAction(response);
    };
    if (!currentAction)
      getCurrentAction();
  });

  if (!currentAction) {
    return (
      <Grid.Col width={12}>
        <Header.H1><Icon prefix="fe" name="sun" className="p-5"/><small>Không có hoạt động cứu trợ đang diễn ra.</small></Header.H1>
      </Grid.Col>
    );
  }

  const {
    id, 
    amountOfMoney,
    rescueTeamName,
    rescueTeamUserId,
    createdAt,
    reliefPlan,
    donationPost,
    proofs,
    histories
  } = currentAction;

  return (
    <Grid.Col width={12}>
      <Card
        title={rescueTeamName ? rescueTeamName : 'Chưa cập nhật tên đội cứu trợ'}
        // options={<Stamp color="red">L2</Stamp>}
        body={
          <Timeline>
            {histories ? histories.map((value) => {
              let startTime = dayjs(value.startAt).format('DD-MM-YYYY HH:mm:ss');
              return (
                <Timeline.Item
                  title={mapRescueActionType(value.type)}
                  badge
                  time={startTime}
                />
              )
            }) : 'Chưa cập nhật'}
          </Timeline>
        }
      />
    </Grid.Col>
  )
}

function LocalOfficerDashboardPage () {
  return (
    <SiteWrapper>
      <Page.Content title="Dashboard">
        <Grid.Row cards={true}>
          <EventCard></EventCard>
        </Grid.Row>        
      </Page.Content>
      <Page.Content title="Hoạt động cứu trợ dang diễn ra">
        <Grid.Row cards={true}>
          <CurrentRescueAction></CurrentRescueAction>
        </Grid.Row>        
      </Page.Content>
    </SiteWrapper>
  );
}

export default LocalOfficerDashboardPage;