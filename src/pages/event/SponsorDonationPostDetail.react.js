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
import Router, { useRouter } from 'next/router';
import  { useEffect, useState } from 'react';
const DetailDonationPost = () => {
  const router = useRouter()
  const [detailEvent, setDetailEvent] = useState({})

  const { eventId } = router.query

  const fetchDetailEvent = async () => {
    const data = await sponorDonationpostService.getDetailDonation({ id: eventId })
    setDetailEvent(data.data.data)
  }

  useEffect(() => {
    fetchDetailEvent()
  },[eventId])
return(
  <SiteWrapper>
  <Page.Content title={detailEvent.status}>
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
                  {detailEvent.necessariesList} <small>Danh sách nhu yếu phẩm kêu gọi</small>
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
)
          }
export default DetailDonationPost;