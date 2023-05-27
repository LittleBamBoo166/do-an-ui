// @flow

import * as React from "react";
import { NavLink, withRouter } from "react-router-dom";

import {
  Site,
  Nav,
  Grid,
  List,
  Button,
  RouterContextProvider,
} from "tabler-react";

import { AuthService } from "./services";

import type { NotificationProps } from "tabler-react";

type Props = {|
  +children: React.Node,
|};

type State = {|
  notificationsObjects: Array<NotificationProps>,
|};

type subNavItem = {|
  +value: string,
  +to?: string,
  +icon?: string,
  +LinkComponent?: React.ElementType,
  +useExact?: boolean,
|};

type navItem = {|
  +value: string,
  +to?: string,
  +icon?: string,
  +active?: boolean,
  +LinkComponent?: React.ElementType,
  +subItems?: Array<subNavItem>,
  +useExact?: boolean,
|};

class SiteWrapper extends React.Component<Props, State> {
  state = {
    notificationsObjects: [
      {
        unread: true,
        avatarURL: "demo/faces/male/41.jpg",
        message: (
          <React.Fragment>
            <strong>Hoàng Phủ Ngọc Tường</strong> quyên góp cho xã A Dơi, Hướng Hóa, Quảng Trị
          </React.Fragment>
        ),
        time: "10 phút trước",
      },
      {
        unread: true,
        avatarURL: "demo/faces/female/1.jpg",
        message: (
          <React.Fragment>
            <strong>Đỗ Thị Ngọc Lan</strong> quyên góp cho xã A Dơi, Hướng Hóa, Quảng Trị
          </React.Fragment>
        ),
        time: "1 giờ trước",
      },
      {
        unread: false,
        avatarURL: "demo/faces/female/18.jpg",
        message: (
          <React.Fragment>
            <strong>Đội cứu trợ Ánh Sao</strong> kêu gọi quyên góp cho xã A Dơi, Hướng Hóa, Quảng Trị
          </React.Fragment>
        ),
        time: "2 giờ trước",
      },
    ],
    currentUser: undefined,
    adminNav: false,
    rescueTeamNav: false,
    localOfficerNav: false,
    sponsorNav: false
  };

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState(() => ({
        notificationsObjects: this.state.notificationsObjects,
        currentUser: AuthService.getCurrentUser(),
        adminNav: user.userType.includes("ADMIN"),
        rescueTeamNav: user.userType.includes("RESCUE_TEAM"),
        sponsorNav: user.userType.includes("SPONSOR"),
        localOfficerNav: user.userType.includes("LOCAL_OFFICER")
      }));
    }
  }

  render(): React.Node {
    const notificationsObjects = this.state.notificationsObjects || [];
    const unreadCount = this.state.notificationsObjects.reduce(
      (a, v) => a || v.unread,
      false
    );
    const { adminNav, currentUser, localOfficerNav, rescueTeamNav, sponsorNav } = this.state;

    let userType;

    if (localOfficerNav) userType = "Cán bộ xã";
    if (rescueTeamNav) userType = 'Đội cứu trợ';
    if (sponsorNav) userType = 'Mạnh thường quân';
    if (adminNav) userType = 'Administrator';
    
    const accountDropdownProps = currentUser ? {
      avatarURL: "../demo/faces/female/25.jpg",
      name: currentUser.fullName,
      description: userType,
      options: [
        { icon: "user", value: "Hồ sơ cá nhân" },
        { icon: "settings", value: "Cài đặt" },
        { isDivider: true },
        { icon: "log-out", value: "Đăng xuất", to: "/logout" },
      ],
    } : undefined;

    const rescueTeamNavBarItems: Array<navItem> = [
      {
        value: "Trang chủ",
        to: "/",
        icon: "home",
        LinkComponent: withRouter(NavLink),
        useExact: true,
      },
      {
        value: "Về chúng tôi",
        to: "/about",
        icon: "info",
        LinkComponent: withRouter(NavLink),
        useExact: true,
      },
      {
        value: "Sự kiện",
        icon: "cloud",
        subItems: [
          {
            value: "Danh sách sự kiện",
            to: "/rescue-teams/events",
            LinkComponent: withRouter(NavLink),
          },
          {
            value: "Lịch sử đăng ký sự kiện", 
            to: "/rescue-teams/event-subscriptions", 
            LinkComponent: withRouter(NavLink) 
          }
        ]
      },
      {
        value: "Hoạt động cứu trợ",
        icon: "anchor",
        to: "/rescue-teams/rescue-actions",
        LinkComponent: withRouter(NavLink),
        useExact: true,
      },
    ];

    const localOfficerNavBarItems: Array<navItem> = [
      {
        value: "Trang chủ",
        to: "/",
        icon: "home",
        LinkComponent: withRouter(NavLink),
        useExact: true,
      },
      {
        value: "Về chúng tôi",
        to: "/about",
        icon: "info",
        LinkComponent: withRouter(NavLink),
        useExact: true,
      },
      {
        value: "Sự kiện",
        icon: "cloud",
        subItems: [
          {
            value: "Danh sách sự kiện",
            to: "/local-officers/events",
            LinkComponent: withRouter(NavLink),
          },
          {
            value: "Lịch sử đăng ký sự kiện", 
            to: "/local-officers/event-subscriptions", 
            LinkComponent: withRouter(NavLink) 
          }
        ]
      },
      {
        value: "Hoạt động cứu trợ",
        icon: "anchor",
        to: "/local-officers/rescue-actions",
        LinkComponent: withRouter(NavLink),
        useExact: true,
      },
    ];

    const sponsorNavBarItems: Array<navItem> = [
      {
        value: "Trang chủ",
        to: "/",
        icon: "home",
        LinkComponent: withRouter(NavLink),
        useExact: true,
      },
      {
        value: "Về chúng tôi",
        to: "/about",
        icon: "info",
        LinkComponent: withRouter(NavLink),
        useExact: true,
      },
      {
        value: "Quyên góp",
        icon: "credit-card",
        subItems: [
          {
            value: "Bài đăng kêu gọi quyên góp",
            to: "/sponsors/donation-posts",
            LinkComponent: withRouter(NavLink),
          },
          {
            value: "Quản lý thông tin quyên góp", 
            to: "/sponsors/donations", 
            LinkComponent: withRouter(NavLink) },
          {
            value: "Thống kê",
            to: "/sponsors/donations/statistics",
            LinkComponent: withRouter(NavLink),
          },
        ]
      },
    ];

    const adminNavBarItems: Array<navItem> = [
      {
        value: "Trang chủ",
        to: "/",
        icon: "home",
        LinkComponent: withRouter(NavLink),
        useExact: true,
      },
      {
        value: "Về chúng tôi",
        to: "/about",
        icon: "info",
        LinkComponent: withRouter(NavLink),
        useExact: true,
      },
      {
        value: "Quản lý tài khoản",
        icon: "user",
        subItems: [
          { value: "Danh sách người dùng", to: "/user-management", LinkComponent: withRouter(NavLink) },
          {
            value: "Cán bộ xã",
            to: "/user-management/local-officers",
            LinkComponent: withRouter(NavLink),
          },
        ]
      },
      {
        value: "Quản lý sự kiện",
        icon: "database",
        subItems: [
          {
            value: "Danh sách sự kiện",
            to: "/event-management",
            LinkComponent: withRouter(NavLink),
          },
          { value: "Thêm sự kiện", to: "/add-events", LinkComponent: withRouter(NavLink) }
        ]
      },
    ];

    const navBarItems: Array<navItem> = [
      {
        value: "Trang chủ",
        to: "/",
        icon: "home",
        LinkComponent: withRouter(NavLink),
        useExact: true,
      },
      {
        value: "Về chúng tôi",
        to: "/about",
        icon: "info",
        LinkComponent: withRouter(NavLink),
        useExact: true,
      },
      {
        value: "Hoạt động của chúng tôi",
        to: "/road",
        icon: "map",
        LinkComponent: withRouter(NavLink),
        useExact: true,
      },
    ];

    const getNavItems = () => {
      if (!currentUser) return navBarItems;
      if (localOfficerNav) return localOfficerNavBarItems;
      if (rescueTeamNav) return rescueTeamNavBarItems;
      if (sponsorNav) return sponsorNavBarItems;
      if (adminNav) return adminNavBarItems;
    }

    return (
      <Site.Wrapper
        headerProps={{
          href: "/",
          alt: "Troi Xanh",
          imageURL: "../demo/brand/logo-no-background.svg",
          notificationsTray: {
            notificationsObjects,
            markAllAsRead: () =>
              this.setState(
                () => ({
                  notificationsObjects: this.state.notificationsObjects.map(
                    v => ({ ...v, unread: false })
                  ),
                }),
                () =>
                  setTimeout(
                    () =>
                      this.setState({
                        notificationsObjects: this.state.notificationsObjects.map(
                          v => ({ ...v, unread: true })
                        ),
                      }),
                    5000
                  )
              ),
            unread: unreadCount,
          },
          navItems: !currentUser ? (
            <Nav.Item type="div" className="d-none d-md-flex">
              <Button
                href="/login"
                outline
                size="sm"
                RootComponent="a"
                color="primary"
                className="mx-1"
              >
                Đăng nhập
              </Button>

              <Button
                href="/register"
                outline
                size="sm"
                RootComponent="a"
                color="secondary"
              >
                Đăng ký
              </Button>
            </Nav.Item>
          ) : undefined,
          accountDropdown: accountDropdownProps,          
        }}
        navProps={{ itemsObjects: getNavItems() }}
        routerContextComponentType={withRouter(RouterContextProvider)}
        footerProps={{
          links: [
            <a href="#">Trang chủ</a>,
            <a href="#">Về chúng tôi</a>,
            <a href="#">Điều khoản sử dụng</a>,
            // <a href="#">Fourth Link</a>,
            // <a href="#">Five Link</a>,
            // <a href="#">Sixth Link</a>,
            // <a href="#">Seventh Link</a>,
            // <a href="#">Eigth Link</a>,
          ],
          note:
            "Dự án Trời Xanh - Để mỗi cơn bão đi qua là một bầu trời xanh thẳm",
          copyright: (
            <React.Fragment>
              Copyright © 2019
              <a href="."> TroiXanh</a>. Phát triển bởi: 
              <a
                href="https://github.com/LittleBamBoo166"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Nguyễn Thị Phi Thương
              </a>{" "}
            </React.Fragment>
          ),
          nav: (
            <React.Fragment>
              <Grid.Col auto={true}>
                <List className="list-inline list-inline-dots mb-0">
                  <List.Item className="list-inline-item">
                    <a href="./docs/index.html">Documentation</a>
                  </List.Item>
                  <List.Item className="list-inline-item">
                    <a href="./faq.html">FAQ</a>
                  </List.Item>
                </List>
              </Grid.Col>
              <Grid.Col auto={true}>
                <Button
                  href="https://github.com/LittleBamBoo166/do-an-tot-nghiep"
                  size="sm"
                  outline
                  color="primary"
                  RootComponent="a"
                >
                  Source code
                </Button>
              </Grid.Col>
            </React.Fragment>
          ),
        }}
      >
        {this.props.children}
      </Site.Wrapper>
    );
  }
}

export default SiteWrapper;
