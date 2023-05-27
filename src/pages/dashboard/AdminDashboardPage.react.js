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

function AdminDashboardPage () {
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
                  <a href={"./donation-posts/bbbc5212-6df4-40ab-8715-6b64c74338e7"}>{"Quyên góp giúp đỡ người dân ở Kỳ Sơn, Nghệ An"}</a>
                </h4>
                <div className="text-muted">Xin chào mọi người! Hiện nay, cơn lũ quét qua huyện Kỳ Sơn, Nghệ An đã tàn phá nhiều khu vực và gây thiệt hại nghiêm trọng cho cuộc sống của nhiều người dân. Trong thời điểm này, chúng ta có thể cùng nhau đứng về phía những người bị ảnh hưởng và giúp đỡ họ vượt qua khó khăn.</div>
                <div className="text-default">Tổng số tiền kêu gọi: 10,000,000 đồng<br/>Đã nhận quyên góp: 1,000,000 đồng</div>
                <div className="text-default">Nhu yếu phẩm:
                    <List.Group>
                      <List.GroupItem active={true}>10,000 kg gạo - đã nhận: 1000 kg gạo</List.GroupItem>
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
                      {"Đội cứu trợ ánh sao"}
                    </a>
                    <small className="d-block text-muted">{"10 ngày trước"}</small>
                  </div>
                  <div className="ml-auto text-red">
                    <a href={"./donation-posts/bbbc5212-6df4-40ab-8715-6b64c74338e7"} className="icon d-none d-md-inline-block ml-3">
                      <Icon prefix="fe" name={"heart"} />
                    </a>
                  </div>
                </div>
              </Card.Body>
            </Card>

            <Card className="card-aside">
              <a
                href={"#"}
                className="card-aside-column"
                style={{ backgroundImage: `url(./demo/event/event-19.jpg)` }}
              >
                {""}
              </a>
              <Card.Body className="d-flex flex-column">
                <h4>
                  <a href={"./donation-posts/bbbc5212-6df4-40ab-8715-6b64c74338e7"}>{"Tấm lòng vàng giúp sức cho huyện nghèo Lộc Hà, Hà Tĩnh"}</a>
                </h4>
                <div className="text-muted">Huyện Lộc Hà, nơi bà con nông dân chủ yếu sống bằng nghề nông, trên con đất nức nẻ mỗi khi hè về. Cơn lũ đi qua, cái nghèo lại trở nên nghèo hơn. Bà con lại chật vật với những ngôi nhà ẩm thấp do phù sa để lại, với những ruộng lúa mới gieo nay đã trôi theo cơn lũ. Kính mong quý bà con gần xa, góp một phần công sức cho đội cứu trợ Trái Tim thực hiện cứu trợ cho bà con nơi đây, mong mỏi một tia nắng ấm đến với bà con trong những ngày khó khăn nhọc nhằn sau lũ này.</div>
                <div className="text-default">Tổng số tiền kêu gọi: 125,000,000 đồng<br/>Đã nhận quyên góp: 26,000,000 đồng</div>
                <div className="text-default">Nhu yếu phẩm:
                    <List.Group>
                      <List.GroupItem active={true}>200,000 kg gạo - đã nhận: 105,000 kg gạo</List.GroupItem>
                      <List.GroupItem>5000 thùng mì: đã nhận 689 thùng mì</List.GroupItem>
                    </List.Group>
                </div>
                <div className="d-flex align-items-center pt-5 mt-auto">
                  <div
                    className="avatar avatar-md mr-3"
                    style={{ backgroundImage: `url(./demo/faces/male/18.jpg` }}
                  />
                  <div>
                    <a href={"./profile.html"} className="text-default">
                      {"Đội cứu trợ Trái Tim"}
                    </a>
                    <small className="d-block text-muted">{"10 ngày trước"}</small>
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

          <Grid.Col width={12} sm={4} lg={6}>

            <Card className="card-aside">
              <a
                href={"#"}
                className="card-aside-column"
                style={{ backgroundImage: `url(./demo/event/event-2.png)` }}
              >
                {""}
              </a>
              <Card.Body className="d-flex flex-column">
                <h4>
                  <a href={"./donation-posts/bbbc5212-6df4-40ab-8715-6b64c74338e7"}>{"Kêu gọi chung sức giúp đỡ bà con Quảng Trị sau cơn bão Noru"}</a>
                </h4>
                <div className="text-muted">Mảnh đất Quảng Trị, khúc ruột của miền Trung vừa trải qua cơn bão Noru với sức tàn phá khủng khiếp. 3 người mất tích, hơn 345 căn nhà bị hư hỏng nặng nề. Người dân chủ yếu sinh sống bằng nghề nông, thu nhập vốn ít ỏi, nay lại càng khó khăn khi phải gồng gánh những tổn thất do cơn bão để lại. Các mạnh thường quân, các nhà hảo tâm xin hãy đồng hành cùng đội cứu trợ Mây, giúp sức cho bà con nơi đây được tái ổn định cuộc sống.</div>
                <div className="text-default">Tổng số tiền kêu gọi: 70,000,000 đồng<br/>Đã nhận quyên góp: 42,000,000 đồng</div>
                <div className="d-flex align-items-center pt-5 mt-auto">
                  <div
                    className="avatar avatar-md mr-3"
                    style={{ backgroundImage: `url(./demo/faces/female/16.jpg` }}
                  />
                  <div>
                    <a href={"./profile.html"} className="text-default">
                      {"Đội cứu trợ Mây"}
                    </a>
                    <small className="d-block text-muted">{"5 ngày trước"}</small>
                  </div>
                  <div className="ml-auto text-red">
                    <a href={"./donation-posts/bbbc5212-6df4-40ab-8715-6b64c74338e7"} className="icon d-none d-md-inline-block ml-3">
                      <Icon prefix="fe" name={"heart"} />
                    </a>
                  </div>
                </div>
              </Card.Body>
            </Card>

            <Card className="card-aside">
              <a
                href={"#"}
                className="card-aside-column"
                style={{ backgroundImage: `url(./demo/event/event-18.jpg)` }}
              >
                {""}
              </a>
              <Card.Body className="d-flex flex-column">
                <h4>
                  <a href={"./donation-posts/bbbc5212-6df4-40ab-8715-6b64c74338e7"}>{"Chung tay giúp đỡ huyện A Lưới, Huế sau cơn lũ quét"}</a>
                </h4>
                <div className="text-muted">Ngày 9 tháng 3 vừa qua, huyện A Lưới, một huyện vùng núi nghèo của Thừa Thiên - Huế đã trải qua một cơn lũ quét, gây thiệt hại về tính mạng và tài sản của bà con. Kính mong quý mạnh thường quân góp một chút lòng thành cùng đội cứu trợ Rạng Đông chung tay giúp đỡ bà con vượt qua thời gian khó khăn này.</div>
                <div className="text-default">Tổng số tiền kêu gọi: 50,000,000 đồng<br/>Đã nhận quyên góp: 12,000,000 đồng</div>
                <div className="text-default">Nhu yếu phẩm:
                    <List.Group>
                      <List.GroupItem active={true}>10,000 kg gạo - đã nhận: 1000 kg gạo</List.GroupItem>
                      <List.GroupItem>1000 thùng mì: đã nhận 562 thùng mì</List.GroupItem>
                      <List.GroupItem>80000 lít nước sạch - đã nhận: 5000 lít nước sạch</List.GroupItem>
                      <List.GroupItem>Quần áo - đã nhận: 15 kg quần áo</List.GroupItem>
                    </List.Group>
                </div>
                <div className="d-flex align-items-center pt-5 mt-auto">
                  <div
                    className="avatar avatar-md mr-3"
                    style={{ backgroundImage: `url(./demo/faces/male/16.jpg` }}
                  />
                  <div>
                    <a href={"./profile.html"} className="text-default">
                      {"Đội cứu trợ Rạng Đông"}
                    </a>
                    <small className="d-block text-muted">{"5 ngày trước"}</small>
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

        <Grid.Row>
          <Grid.Col width={12}>
            <div className="d-flex">
            <Button
              href="/donation-posts"
              RootComponent="a"
              color="primary"
              className="ml-auto"
              icon="arrow-right"
              >
              Xem thêm bài đăng kêu gọi quyên góp
            </Button>
            </div>
          </Grid.Col>
        </Grid.Row>
        
      </Page.Content>
    </SiteWrapper>
  );
}

export default AdminDashboardPage;