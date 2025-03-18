import { faChartPie, faTicketAlt, faLightbulb, faAddressBook, faUserTie, faNewspaper, faCog, faCreditCard } from "@fortawesome/free-solid-svg-icons";

const sidebarContents = [
  { name: "Overview", hash: "/dashboard", },
  { name: "Tickets", hash: "/tickets", },
  { name: "Ideas", hash: "/ideas", },
  { name: "Contacts", hash: "/contacts", },
  { name: "Agents", hash: "/agents", },
  { name: "Articles", hash: "/articles", },
  { name: "Settings", hash: "/settings", },
  { name: "Subscription", hash: "/subscription", },
] as const;

const sidebarIcons = {
  "/dashboard": faChartPie,
  "/tickets": faTicketAlt,
  "/ideas": faLightbulb,
  "/contacts": faAddressBook,
  "/agents": faUserTie,
  "/articles": faNewspaper,
  "/settings": faCog,
  "/subscription": faCreditCard,
} as const;

const mainCardsData = [
  { title: "Unresolved", value: 60 },
  { title: "Overdue", value: 16 },
  { title: "Open", value: 43 },
  { title: "on hold", value: 64 },
] as const;

const chartData = [
  { title: "Resolved", value: "449" },
  { title: "Received", value: "426" },
  { title: "Average first response time", value: "33m" },
  { title: "Average response time", value: "3h 8m" },
  { title: "Resolution within SLA", value: "94%" }
] as const

export { sidebarContents, sidebarIcons, mainCardsData, chartData };