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

import dayjs from "dayjs";
import adminEventService from "../../services/admin/admin-event.service";

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
                  window.location.replace(`http://localhost:3000/event-management/${event.id}`)
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

function AdminDashboardPage () {
  return (
    <SiteWrapper>
      <Page.Content title="Dashboard">
        <Grid.Row cards={true}>
          <EventCard></EventCard>
        </Grid.Row>        
      </Page.Content>
    </SiteWrapper>
  );
}

export default AdminDashboardPage;