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

function LoRescueActionPage() {
  // const [event, setEvent] = React.useState(null);

  // React.useEffect(() => {
  //   async function getEvent() {
  //     const params = {
  //       id: id,
  //     };
  //     const response = await adminEventService.getEvent(params);
  //     setEvent(response.data);
  //   };

  //   if (!event)
  //     getEvent();
  // });

  // if (!event) {
  //   return (
  //     <Grid.Col width={12}>
  //       <Header.H1><Icon prefix="fe" name="sun" className="p-5"/><small>Không có sự kiện thiên tai.</small></Header.H1>
  //     </Grid.Col>
  //   );
  // }

  // let closedAt = 'Chưa cập nhật';
  // if (event.endDate) {
  //   closedAt = dayjs(event.endDate).format('DD-MM-YYYY');
  // }

  // let closedBy = 'Chưa cập nhật';
  // if (event.closedBy) {
  //   closedBy = event.closedBy.fullName;
  // }

  return (
    <SiteWrapper>
      <Page.Content title={'Quản lý hoạt động cứu trợ'}>
        <Grid.Row cards={true}>
          <Grid.Col>
            <Card statusColor="green" >
              <Card.Header>
                <Card.Title>
                  Danh sách hộ dân cần cứu trợ
                </Card.Title>
                <Card.Options>
                  <Button color="primary" size="sm">
                    Xem chi tiết
                  </Button>
                </Card.Options>
              </Card.Header>
              <Card.Body>
                <Text>Số hộ dân cần cứu trợ: 50</Text>
              </Card.Body>
            </Card>
          </Grid.Col>
          <Grid.Col>
            <Card statusColor="yellow" >
              <Card.Header>
                <Card.Title>
                  Thông tin cần cứu trợ
                </Card.Title>
                <Card.Options>
                  <Button color="primary" size="sm">
                    Xem chi tiết
                  </Button>
                </Card.Options>
              </Card.Header>
              <Card.Body>
                <Text>Số tiền cần cứu trợ: chưa cập nhật</Text>
                <Text>Danh sách nhu yếu phẩm đang cần được cứu trợ: chưa cập nhật</Text>
              </Card.Body>
            </Card>
          </Grid.Col>
        </Grid.Row>
        <Grid.Row cards={true}>
          <Grid.Col>
            <Card statusColor="red" >
              <Card.Header>
                <Card.Title>
                  Thông tin đăng ký cứu trợ
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <Text>Chưa có đội cứu trợ đăng ký cứu trợ</Text>
              </Card.Body>
            </Card>
          </Grid.Col>
        </Grid.Row>
      </Page.Content>
    </SiteWrapper>
  );
}

export default LoRescueActionPage;
