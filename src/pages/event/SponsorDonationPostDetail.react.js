import React from "react";
import SiteWrapper from "../../SiteWrapper.react";
import { useLocation, useParams } from "react-router-dom/cjs/react-router-dom.min";
import dayjs from "dayjs";
import { Formik } from "formik";
import { FormDatePicker } from "../custom";
import sponorDonationpostService from "../../services/sponsor/sponor-donationpost.service";
import { Grid } from "tabler-react";
import {
  Page,
  Avatar,
  Icon,

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
import { Router } from "react-router-dom/cjs/react-router-dom.min";
import  { useEffect, useState } from 'react';
const DetailDonationPost = () => {
  const [eventId] = window.location.pathname.split('/').slice(-1);
  const [detailEvent, setDetailEvent] = useState({})

  const fetchDetailEvent = async () => {
    const data = await sponorDonationpostService.getDetailDonation({ id: eventId })
    setDetailEvent(data.data)
  }

  useEffect(() => {
    fetchDetailEvent()
  },[eventId])
return(
  <SiteWrapper>
  <Page.Content title="BÀI ĐĂNG KÊU GỌI QUYÊN GÓP">
    {/* <Page.Header>
      <div className="d-flex flex-row">
        <div className="p-2 text-secondary"><Icon prefix="fe" name="clock" /> Ngày đăng: {dayjs().format('DD-MM-YYYY')}</div>
        <div className="p-2 text-secondary"><Icon prefix="fe" name="clock" /> Thời gian bắt đầu cứu trợ: {dayjs().format('DD-MM-YYYY')}</div>
        <div className="p-2 text-secondary"><Icon prefix="fe" name="clock" /> Thời gian kết thúc cứu trợ: {dayjs().format('DD-MM-YYYY')}</div>
      </div>
    </Page.Header> */}
    <Grid.Row cards={true}>

      <Grid.Col width={6}>
        <Card>
          <Card.Header>
            <Card.Title>
              <img src="../demo/event/event-1.png" className="py-4 rounded" />
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <Text className="">{detailEvent.description}</Text>
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
                  <small>Danh sách nhu yếu phẩm kêu gọi : {detailEvent.necessariesList}</small>
                </a>
                
              }
              footer={"Danh sách nhu yếu phâm đôi cứu trợ kêu gọi quyên góp cho đợt cứu trợ"}
            />
          </Grid.Col>

          <Grid.Col width={6}>
            <StampCard
              color="yellow"
              icon="flag"
              header={
                <a href="#">
                 <small>Số tiền kêu gọi cứu trợ : {detailEvent.moneyNeed}</small>
                </a>
              }
              footer={"Số tiền  đôi cứu trợ kêu gọi quyên góp cho đợt cứu trợ"}
            />
          </Grid.Col>
          <Grid.Col width={6}>
            <StampCard
              color="yellow"
              icon="flag"
              header={
                <a href="#">
                 <small>Trạng thái của bài đăng : {detailEvent.status}</small>
                </a>
              }
              // footer={"Số tiền  đôi cứu trợ kêu gọi quyên góp cho đợt cứu trợ"}
            />
          </Grid.Col>
          <Grid.Col width={6}>
            <StampCard
              color="yellow"
              icon="flag"
              header={
                <a href="#">
                 <small>Thời hạn quyên góp :{dayjs(detailEvent.deadline).format('DD-MM-YYYY')}</small>
                </a>
              }
              footer={"Thời hạn quyên góp cho đợt cứu trợ"}
            />
          </Grid.Col>
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
                Quyên góp
              </Button>
              </div>
            </Grid.Col>
        </Grid.Row>
        
      </Grid.Col>
    </Grid.Row>
  </Page.Content>
</SiteWrapper>
)
          }
export default DetailDonationPost;