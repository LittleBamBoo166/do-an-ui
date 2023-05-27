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
} from "tabler-react";

import C3Chart from "react-c3js";

import SiteWrapper from "../../SiteWrapper.react";

function GuestDashboardPage () {
  return (
    <SiteWrapper>
      <Page.Content title="Dashboard">
        <Grid.Row cards={true}>

          <Grid.Col width={6} sm={4} lg={2}>
            <StatsCard layout={1} movement={6} total="5" label="Sự kiện thiên tai đang diễn ra" />
          </Grid.Col>

          <Grid.Col width={6} sm={4} lg={2}>
            <StatsCard
              layout={1}
              movement={3}
              total="17"
              label="Hoạt động cứu trợ đang diễn ra"
            />
          </Grid.Col>

          <Grid.Col width={6} sm={4} lg={2}>
            <StatsCard layout={1} movement={9} total="7" label="Xã được cứu trợ hôm nay" />
          </Grid.Col>

          <Grid.Col width={6} sm={4} lg={2}>
            <StatsCard
              layout={1}
              movement={3}
              total="27.3k"
              label="Cán bộ, đội cứu trợ và mạnh thường quân"
            />
          </Grid.Col>

          <Grid.Col width={6} sm={4} lg={2}>
            <StatsCard
              layout={1}
              movement={2}
              total="94 triệu"
              label="Tổng giá trị các phần quà cứu trợ"
            />
          </Grid.Col>

          <Grid.Col width={6} sm={4} lg={2}>
            <StatsCard layout={1} movement={1} total="621,000" label="Tổng số hộ dân được cứu trợ" />
          </Grid.Col>

          <Grid.Col lg={6}>
            <Card>
              <Card.Header>
                <Card.Title>Hoạt động đăng ký sự kiện thiên tai</Card.Title>
              </Card.Header>
              <C3Chart
                style={{ height: "10rem" }}
                data={{
                  columns: [
                    // each columns data
                    [
                      "data1",
                      0,
                      5,
                      1,
                      2,
                      7,
                      5,
                      6,
                      8,
                      24,
                      7,
                      12,
                      5,
                      6,
                      3,
                      2,
                      2,
                      6,
                      30,
                      10,
                      10,
                      15,
                      14,
                      47,
                      65,
                      55,
                    ],
                  ],
                  type: "area", // default type of chart
                  groups: [["data1", "data2", "data3"]],
                  colors: {
                    data1: colors["blue"],
                  },
                  names: {
                    // name of each serie
                    data1: "Xã, phường, thị trấn",
                  },
                }}
                axis={{
                  y: {
                    padding: {
                      bottom: 0,
                    },
                    show: false,
                    tick: {
                      outer: false,
                    },
                  },
                  x: {
                    padding: {
                      left: 0,
                      right: 0,
                    },
                    show: false,
                  },
                }}
                legend={{
                  position: "inset",
                  padding: 0,
                  inset: {
                    anchor: "top-left",
                    x: 20,
                    y: 8,
                    step: 10,
                  },
                }}
                tooltip={{
                  format: {
                    title: function(x) {
                      return "";
                    },
                  },
                }}
                padding={{
                  bottom: 0,
                  left: -1,
                  right: -1,
                }}
                point={{
                  show: false,
                }}
              />
              <Table
                cards={true}
                striped={true}
                responsive={true}
                className="table-vcenter"
              >
                <Table.Header>

                  <Table.Row>
                    <Table.ColHeader colSpan={2}>Xã</Table.ColHeader>
                    <Table.ColHeader>Sự kiện</Table.ColHeader>
                    <Table.ColHeader>Ngày</Table.ColHeader>
                    <Table.ColHeader />
                  </Table.Row>

                </Table.Header>

                <Table.Body>

                  <Table.Row>
                    <Table.Col className="w-1">
                      <Icon name="home"/>
                    </Table.Col>
                    <Table.Col>A Dơi, Hướng Hóa, Quảng Trị</Table.Col>
                    <Table.Col>Bão số 5, Sơn ca</Table.Col>
                    <Table.Col className="text-nowrap">15/05/2022</Table.Col>
                    <Table.Col className="w-1">
                      <Icon link={true} name="arrow-right" />
                    </Table.Col>
                  </Table.Row>

                  <Table.Row>
                    <Table.Col>
                      <Icon name="home"/>
                    </Table.Col>
                    <Table.Col>02, 4, Hồ Chí Minh</Table.Col>
                    <Table.Col>Sạt lở bờ sông Cổ Chiên</Table.Col>
                    <Table.Col className="text-nowrap">
                      12/06/2022
                    </Table.Col>
                    <Table.Col>
                      <Icon link={true} name="arrow-right" />
                    </Table.Col>
                  </Table.Row>

                  <Table.Row>
                    <Table.Col>
                      <Icon name="home"/>
                    </Table.Col>
                    <Table.Col>Hoàng Văn Thụ, Văn Lãng, Lạng Sơn</Table.Col>
                    <Table.Col>Lũ quét - Lạng Sơn - 2022</Table.Col>
                    <Table.Col className="text-nowrap">
                      10/05/2022
                    </Table.Col>
                    <Table.Col>
                      <Icon link={true} name="arrow-right" />
                    </Table.Col>
                  </Table.Row>

                  <Table.Row>
                    <Table.Col>
                      <Icon name="home"/>
                    </Table.Col>
                    <Table.Col>07, 11, Hồ Chí Minh</Table.Col>
                    <Table.Col>Sạt lở bờ sông Cổ Chiên</Table.Col>
                    <Table.Col className="text-nowrap">13/06/2022</Table.Col>
                    <Table.Col>
                      <Icon link={true} name="arrow-right" />
                    </Table.Col>
                  </Table.Row>

                  <Table.Row>
                    <Table.Col>
                      <Icon name="home"/>
                    </Table.Col>
                    <Table.Col>An Bình, Cao Lãnh, Đồng Tháp</Table.Col>
                    <Table.Col>Lũ Đồng Tháp Mười - 2022</Table.Col>
                    <Table.Col className="text-nowrap">18/08/2022</Table.Col>
                    <Table.Col>
                      <Icon link={true} name="arrow-right" />
                    </Table.Col>
                  </Table.Row>

                </Table.Body>

              </Table>
            </Card>

          </Grid.Col>

          <Grid.Col md={6}>
            {/* <Alert type="primary">
              <Alert.Link
                href={
                  process.env.NODE_ENV === "production"
                    ? "https://tabler.github.io/tabler-react/documentation"
                    : "/documentation"
                }
              >
                Read our documentation
              </Alert.Link>{" "}
              with code samples.
            </Alert> */}

            <Grid.Row>
              <Grid.Col sm={6}>
                <Card>
                  <Card.Header>
                    <Card.Title>Hoạt động cứu trợ</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <C3Chart
                      style={{ height: "12rem" }}
                      data={{
                        columns: [
                          // each columns data
                          ["data1", 53],
                          ["data2", 37],
                          ["data3", 10]
                        ],
                        type: "donut", // default type of chart
                        colors: {
                          data1: colors["green"],
                          data2: colors["green-light"],
                          data3: colors["green-dark"]
                        },
                        names: {
                          // name of each serie
                          data1: "Các xã đang chờ cứu trợ",
                          data2: "Các xã đã được cứu trợ",
                          data3: "Các xã đang được cứu trợ"
                        },
                      }}
                      legend={{
                        show: false, //hide legend
                      }}
                      padding={{
                        bottom: 0,
                        top: 0,
                      }}
                    />
                  </Card.Body>
                </Card>
              </Grid.Col>

              <Grid.Col sm={6}>
                <Card>
                  <Card.Header>
                    <Card.Title>Hoạt động quyên góp</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <C3Chart
                      style={{ height: "12rem" }}
                      data={{
                        columns: [
                          // each columns data
                          ["data1", 63],
                          ["data2", 44],
                        ],
                        type: "pie", // default type of chart
                        colors: {
                          data1: colors["blue-darker"],
                          data2: colors["blue"],
                        },
                        names: {
                          // name of each serie
                          data1: "Đợt quyên góp đã hoàn thành",
                          data2: "Đợt quyên góp chưa hoàn thành",
                        },
                      }}
                      legend={{
                        show: false, //hide legend
                      }}
                      padding={{
                        bottom: 0,
                        top: 0,
                      }}
                    />
                  </Card.Body>
                </Card>
              </Grid.Col>

              <Grid.Col sm={6}>
                <ProgressCard
                  header="Lượt quyên góp thành công hôm nay"
                  content="62"
                  progressColor="red"
                  progressWidth={28}
                />
              </Grid.Col>

              <Grid.Col sm={6}>
                <ProgressCard
                  header="Hoạt động cứu trợ đã hoàn thành hôm nay"
                  content="9"
                  progressColor="green"
                  progressWidth={84}
                />
              </Grid.Col>

            </Grid.Row>
            
          </Grid.Col>

          {/* <Grid.Col sm={6} lg={3}>
            <StampCard
              color="blue"
              icon="dollar-sign"
              header={
                <a href="#">
                  132 <small>Sales</small>
                </a>
              }
              footer={"12 waiting payments"}
            />
          </Grid.Col> */}

          {/* <Grid.Col sm={6} lg={3}>
            <StampCard
              color="green"
              icon="shopping-cart"
              header={
                <a href="#">
                  78 <small>Orders</small>
                </a>
              }
              footer={"32 shipped"}
            />
          </Grid.Col> */}

          {/* <Grid.Col sm={6} lg={3}>
            <StampCard
              color="red"
              icon="users"
              header={
                <a href="#">
                  1,352 <small>Members</small>
                </a>
              }
              footer={"163 registered today"}
            />
          </Grid.Col> */}

          {/* <Grid.Col sm={6} lg={3}>
            <StampCard
              color="yellow"
              icon="message-square"
              header={
                <a href="#">
                  132 <small>Comments</small>
                </a>
              }
              footer={"16 waiting"}
            />
          </Grid.Col> */}

        </Grid.Row>

        {/* <Grid.Row cards deck>
          <Grid.Col width={12}>
            <Card>
              <Table
                responsive
                highlightRowOnHover
                hasOutline
                verticalAlign="center"
                cards
                className="text-nowrap"
              >
                <Table.Header>
                  <Table.Row>
                    <Table.ColHeader alignContent="center" className="w-1">
                      <i className="icon-people" />
                    </Table.ColHeader>
                    <Table.ColHeader>User</Table.ColHeader>
                    <Table.ColHeader>Usage</Table.ColHeader>
                    <Table.ColHeader alignContent="center">
                      Payment
                    </Table.ColHeader>
                    <Table.ColHeader>Activity</Table.ColHeader>
                    <Table.ColHeader alignContent="center">
                      Satisfaction
                    </Table.ColHeader>
                    <Table.ColHeader alignContent="center">
                      <i className="icon-settings" />
                    </Table.ColHeader>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Col alignContent="center">
                      <Avatar
                        imageURL="demo/faces/female/26.jpg"
                        className="d-block"
                        status="green"
                      />
                    </Table.Col>
                    <Table.Col>
                      <div>Elizabeth Martin</div>
                      <Text size="sm" muted>
                        Registered: Mar 19, 2018
                      </Text>
                    </Table.Col>
                    <Table.Col>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>42%</strong>
                        </div>
                        <div className="float-right">
                          <Text.Small muted>
                            Jun 11, 2015 - Jul 10, 2015
                          </Text.Small>
                        </div>
                      </div>
                      <Progress size="xs">
                        <Progress.Bar color="yellow" width={42} />
                      </Progress>
                    </Table.Col>
                    <Table.Col alignContent="center">
                      <Icon payment name="visa" />
                    </Table.Col>
                    <Table.Col>
                      <Text size="sm" muted>
                        Last login
                      </Text>
                      <div>4 minutes ago</div>
                    </Table.Col>
                    <Table.Col alignContent="center">42%</Table.Col>
                    <Table.Col alignContent="center">
                      <Dropdown
                        trigger={
                          <Dropdown.Trigger
                            icon="more-vertical"
                            toggle={false}
                          />
                        }
                        position="right"
                        items={
                          <React.Fragment>
                            <Dropdown.Item icon="tag">Action </Dropdown.Item>
                            <Dropdown.Item icon="edit-2">
                              Another action{" "}
                            </Dropdown.Item>
                            <Dropdown.Item icon="message-square">
                              Something else here
                            </Dropdown.Item>
                            <Dropdown.ItemDivider />
                            <Dropdown.Item icon="link">
                              {" "}
                              Separated link
                            </Dropdown.Item>
                          </React.Fragment>
                        }
                      />
                    </Table.Col>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Card>
          </Grid.Col>
        </Grid.Row> */}
        
        <Grid.Row>
          {/* <Grid.Col sm={6} lg={4}>
            <Card title="Browser Stats">
              <Table className="card-table">
                <Table.Row>
                  <Table.Col>
                    <Icon prefix="fa" name="chrome" className="text-muted" />
                  </Table.Col>
                  <Table.Col>Google Chrome</Table.Col>
                  <Table.Col className="text-right">
                    <Text RootComponent="span" muted>
                      23%
                    </Text>
                  </Table.Col>
                </Table.Row>
              </Table>
            </Card>
          </Grid.Col> */}

          {/* <Grid.Col sm={6} lg={4}>
            <Card title="Projects">
              <Table cards>
                <Table.Row>
                  <Table.Col>Admin Template</Table.Col>
                  <Table.Col alignContent="right">
                    <Badge color="default">65%</Badge>
                  </Table.Col>
                </Table.Row>
              </Table>
            </Card>
          </Grid.Col> */}

          {/* <Grid.Col md={6} lg={4}>
            <Card title="Members">
              <Card.Body>
                <ul className="list-unstyled list-separated">
                  <li className="list-separated-item">
                    <Grid.Row className="align-items-center">
                      <Grid.Col auto>
                        <Avatar
                          size="md"
                          className="d-block"
                          imageURL="demo/faces/female/12.jpg"
                        />
                      </Grid.Col>
                      <Grid.Col>
                        <div>
                          <a className="text-inherit" href="#">
                            Amanda Hunt
                          </a>
                        </div>
                        <Text.Small muted className="d-block item-except h-1x">
                          amanda_hunt@example.com
                        </Text.Small>
                      </Grid.Col>
                      <Grid.Col auto>
                        <Dropdown
                          trigger={
                            <Dropdown.Trigger
                              icon="more-vertical"
                              toggle={false}
                            />
                          }
                          position="right"
                          items={
                            <React.Fragment>
                              <Dropdown.Item icon="tag">Action </Dropdown.Item>
                              <Dropdown.Item icon="edit-2">
                                {" "}
                                Another action{" "}
                              </Dropdown.Item>
                              <Dropdown.Item icon="message-square">
                                {" "}
                                Something else here
                              </Dropdown.Item>
                              <Dropdown.ItemDivider />
                              <Dropdown.Item icon="link">
                                {" "}
                                Separated link
                              </Dropdown.Item>
                            </React.Fragment>
                          }
                        />
                      </Grid.Col>
                    </Grid.Row>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Grid.Col> */}

          {/* <Grid.Col md={6} lg={12}>
            <Grid.Row>
              <Grid.Col sm={6} lg={3}>
                <StatsCard
                  layout={2}
                  movement={5}
                  total="423"
                  label="Users online"
                  chart={
                    <C3Chart
                      style={{ height: "100%" }}
                      padding={{
                        bottom: -10,
                        left: -1,
                        right: -1,
                      }}
                      data={{
                        names: {
                          data1: "Users online",
                        },
                        columns: [["data1", 30, 40, 10, 40, 12, 22, 40]],
                        type: "area",
                      }}
                      legend={{
                        show: false,
                      }}
                      transition={{
                        duration: 0,
                      }}
                      point={{
                        show: false,
                      }}
                      tooltip={{
                        format: {
                          title: function(x) {
                            return "";
                          },
                        },
                      }}
                      axis={{
                        y: {
                          padding: {
                            bottom: 0,
                          },
                          show: false,
                          tick: {
                            outer: false,
                          },
                        },
                        x: {
                          padding: {
                            left: 0,
                            right: 0,
                          },
                          show: false,
                        },
                      }}
                      color={{
                        pattern: ["#467fcf"],
                      }}
                    />
                  }
                />
              </Grid.Col>
              <Grid.Col sm={6} lg={3}>
                <StatsCard
                  layout={2}
                  movement={-3}
                  total="423"
                  label="Users online"
                  chart={
                    <C3Chart
                      style={{ height: "100%" }}
                      padding={{
                        bottom: -10,
                        left: -1,
                        right: -1,
                      }}
                      data={{
                        names: {
                          data1: "Users online",
                        },
                        columns: [["data1", 30, 40, 10, 40, 12, 22, 40]],
                        type: "area",
                      }}
                      legend={{
                        show: false,
                      }}
                      transition={{
                        duration: 0,
                      }}
                      point={{
                        show: false,
                      }}
                      tooltip={{
                        format: {
                          title: function(x) {
                            return "";
                          },
                        },
                      }}
                      axis={{
                        y: {
                          padding: {
                            bottom: 0,
                          },
                          show: false,
                          tick: {
                            outer: false,
                          },
                        },
                        x: {
                          padding: {
                            left: 0,
                            right: 0,
                          },
                          show: false,
                        },
                      }}
                      color={{
                        pattern: ["#e74c3c"],
                      }}
                    />
                  }
                />
              </Grid.Col>
              <Grid.Col sm={6} lg={3}>
                <StatsCard
                  layout={2}
                  movement={-3}
                  total="423"
                  label="Users online"
                  chart={
                    <C3Chart
                      style={{ height: "100%" }}
                      padding={{
                        bottom: -10,
                        left: -1,
                        right: -1,
                      }}
                      data={{
                        names: {
                          data1: "Users online",
                        },
                        columns: [["data1", 30, 40, 10, 40, 12, 22, 40]],
                        type: "area",
                      }}
                      legend={{
                        show: false,
                      }}
                      transition={{
                        duration: 0,
                      }}
                      point={{
                        show: false,
                      }}
                      tooltip={{
                        format: {
                          title: function(x) {
                            return "";
                          },
                        },
                      }}
                      axis={{
                        y: {
                          padding: {
                            bottom: 0,
                          },
                          show: false,
                          tick: {
                            outer: false,
                          },
                        },
                        x: {
                          padding: {
                            left: 0,
                            right: 0,
                          },
                          show: false,
                        },
                      }}
                      color={{
                        pattern: ["#5eba00"],
                      }}
                    />
                  }
                />
              </Grid.Col>
              <Grid.Col sm={6} lg={3}>
                <StatsCard
                  layout={2}
                  movement={9}
                  total="423"
                  label="Users online"
                  chart={
                    <C3Chart
                      style={{ height: "100%" }}
                      padding={{
                        bottom: -10,
                        left: -1,
                        right: -1,
                      }}
                      data={{
                        names: {
                          data1: "Users online",
                        },
                        columns: [["data1", 30, 40, 10, 40, 12, 22, 40]],
                        type: "area",
                      }}
                      legend={{
                        show: false,
                      }}
                      transition={{
                        duration: 0,
                      }}
                      point={{
                        show: false,
                      }}
                      tooltip={{
                        format: {
                          title: function(x) {
                            return "";
                          },
                        },
                      }}
                      axis={{
                        y: {
                          padding: {
                            bottom: 0,
                          },
                          show: false,
                          tick: {
                            outer: false,
                          },
                        },
                        x: {
                          padding: {
                            left: 0,
                            right: 0,
                          },
                          show: false,
                        },
                      }}
                      color={{
                        pattern: ["#f1c40f"],
                      }}
                    />
                  }
                />
              </Grid.Col>
            </Grid.Row>
          </Grid.Col> */}

          {/* <Grid.Col width={12}>
            <Card title="Invoices">
              <Table
                responsive
                className="card-table table-vcenter text-nowrap"
                headerItems={[
                  { content: "No.", className: "w-1" },
                  { content: "Invoice Subject" },
                  { content: "Client" },
                  { content: "VAT No." },
                  { content: "Created" },
                  { content: "Status" },
                  { content: "Price" },
                  { content: null },
                  { content: null },
                ]}
                bodyItems={[
                  {
                    key: "1",
                    item: [
                      {
                        content: (
                          <Text RootComponent="span" muted>
                            001401
                          </Text>
                        ),
                      },
                      {
                        content: (
                          <a href="invoice.html" className="text-inherit">
                            Design Works
                          </a>
                        ),
                      },
                      { content: "Carlson Limited" },
                      { content: "87956621" },
                      { content: "15 Dec 2017" },
                      {
                        content: (
                          <React.Fragment>
                            <span className="status-icon bg-success" /> Paid
                          </React.Fragment>
                        ),
                      },
                      { content: "$887" },
                      {
                        alignContent: "right",
                        content: (
                          <React.Fragment>
                            <Button size="sm" color="secondary">
                              Manage
                            </Button>
                            <div className="dropdown">
                              <Button
                                color="secondary"
                                size="sm"
                                isDropdownToggle
                              >
                                Actions
                              </Button>
                            </div>
                          </React.Fragment>
                        ),
                      },
                      { content: <Icon link name="edit" /> },
                    ],
                  },
                ]}
              />
            </Card>
          </Grid.Col> */}

        </Grid.Row>
        
      </Page.Content>
    </SiteWrapper>
  );
}

export default GuestDashboardPage;