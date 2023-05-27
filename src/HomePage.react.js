// @flow

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

import SiteWrapper from "./SiteWrapper.react";

import { AuthService, LocationService } from "./services";
import { GuestDashboardPage, SponsorDashboardPage, AdminDashboardPage } from "./pages";

function Home() {
  const user = AuthService.getCurrentUser();

  if (!user)
    return <GuestDashboardPage></GuestDashboardPage>;
  if (user.userType.includes("ADMIN"))  
    return <AdminDashboardPage></AdminDashboardPage>

  return <SponsorDashboardPage></SponsorDashboardPage>
}

export default Home;
