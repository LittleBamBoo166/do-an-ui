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
import adminUserService from "../../services/admin/admin-user.service";
import { Formik } from "formik";
import { DistrictOption, FormDatePicker, ProvinceOption, WardOption } from "../custom";

function UserRow(query) {
  const tmp = useLocation().search;
  console.log(tmp);
  const vcl = new URLSearchParams(tmp).get('username');
  console.log(vcl);
  const [users, setUsers] = React.useState(null);

  React.useEffect(() => {
    async function getUsers() {
      const query = {};
      const response = await adminUserService.getLocalOfficerUser(query);
      setUsers(response.data);
    };
    if (!users)
      getUsers();
  });
  if (!users) {
    return (
      <Grid.Col width={12}>
      </Grid.Col>
    );
  }

  function onClick () {
    alert('Sucess');
  }

  return users.map((user) => {
    let userStatus = '';
    switch (user.userStatus) {
      case 'ACTIVE':
        userStatus = 'Hoạt động';
        break;
      case 'INACTIVE':
        userStatus = 'Không hoạt động';
        break;
      case 'PENDING':
        userStatus = 'Chờ duyệt';
        break;   
      default:
        break;
    }

    let phoneNumber = 'Chưa cập nhật';
    if (user.phoneNumber) {
      phoneNumber = user.phoneNumber;
    }

    return (
      <Table.Row>
        <Table.Col>{user.fullName}</Table.Col>
        <Table.Col>{user.email}</Table.Col>
        <Table.Col>{phoneNumber}</Table.Col>
        <Table.Col>{user.address}</Table.Col>
        <Table.Col>{userStatus}</Table.Col>
        <Table.Col>
          {
            user.isCurrentLocalOfficer ? '' : <Button colors="info" href={`event-management`} onClick={onClick}><Icon prefix="fe" name={"check"}/>
            </Button>
          }
        </Table.Col>
      </Table.Row>
    )
  })
}

function SearchSection() {
  const [state, setState] = React.useState({
    provinceId: '',
    districtId: '',
  })

  function handleChange(event) {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value
    });
  };

  return (
    <Form onSubmit={(event) => console.log(event + 'clicked')}>
      <Grid.Row>
        <Grid.Col width={4} sm={12} lg={4}>
          <Form.Group label="Loại">
            <Form.Radio
              isInline
              label="Cán bộ xã"
              name="types"
              value="LOCAL_OFFICER"
            />
            <Form.Radio
              isInline
              label="Mạnh thường quân"
              name="types"
              value="SPONSOR"
            />
            <Form.Radio
              isInline
              label="Đội cứu trợ"
              name="types"
              value="RESCUE_TEAM"
            />
            <Form.Radio
              isInline
              label="Administrator"
              name="types"
              value="ADMIN"
            />
          </Form.Group>
        </Grid.Col>
        <Grid.Col width={4} sm={12} lg={4}>
          <Form.Group label="Trạng thái">
            <Form.Checkbox
              isInline
              label="Hoạt động"
              name="statuses"
              value="ACTIVE"
            />
            <Form.Checkbox
              isInline
              label="Không hoạt động"
              name="statuses"
              value="INACTIVE"
            />
            <Form.Checkbox
              isInline
              label="Chờ duyệt"
              name="statuses"
              value="PENDING"
            />
          </Form.Group>
        </Grid.Col>
        <Grid.Col width={4} sm={12} lg={4}>
          <Form.Input
            className="mb-3"
            icon="search"
            placeholder="Tìm theo: số điện thoại, email"
            position="append"
            label="Tìm kiếm"
            name="search"
          />
        </Grid.Col>
        <Grid.Col width={3} sm={12} lg={3}>
          <Form.Select name="provinceId" label="Tỉnh / thành phố" onChange={handleChange}>
            <ProvinceOption/>
          </Form.Select>
        </Grid.Col>
        <Grid.Col width={3} sm={12} lg={3}>
          <Form.Select name="districtId" label="Quận / huyện / thị xã" onChange={handleChange}>
            <DistrictOption provinceId={state.provinceId}/>
          </Form.Select>
        </Grid.Col>
        <Grid.Col width={3} sm={12} lg={3}>
          <Form.Select name="wardId" label="Xã / phường / thị trấn">
            <WardOption districtId={state.districtId} />
          </Form.Select>
        </Grid.Col>
        <Grid.Col width={3} sm={12} lg={3}>
          <Button color="primary" type='submit' size="lg" className="mt-5">Tìm</Button>
        </Grid.Col>
      </Grid.Row>      
    </Form>
  )
}

function AdminLocalOfficerPage() {
    return (
    <SiteWrapper>
      <Page.Content title={'Quản lý tài khoản'}>
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
                    Email <Button className="ml-3" size="sm"><Icon prefix="fe" name="arrow-down"/></Button>
                  </Table.ColHeader>
                  <Table.ColHeader>
                    Số điện thoại <Button className="ml-3" size="sm"><Icon prefix="fe" name="arrow-down"/></Button>
                  </Table.ColHeader>
                  <Table.ColHeader>
                    Địa chỉ
                  </Table.ColHeader>
                  <Table.ColHeader>
                    Trạng thái
                  </Table.ColHeader>
                  <Table.ColHeader>Phê duyệt</Table.ColHeader>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <UserRow/>
              </Table.Body>
            </Table>
          </Grid.Col>
        </Grid.Row>
      </Page.Content>
    </SiteWrapper>
  );
}

export default AdminLocalOfficerPage;
