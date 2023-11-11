import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 1, href: "#about", text: "about" },
  { id: 1, href: "#services", text: "services" },
  { id: 1, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-facebook" },
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-squarespace" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores officia.",
    title: "saving money",
  },
  {
    id: 1,
    icon: "fas fa-tree fa-fw",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores officia.",
    title: "endless hiking",
  },
  {
    id: 1,
    icon: "fas fa-socks fa-fw",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores officia.",
    title: "amazing comfort",
  },
];

export const tours = [
  {
    id: "1",
    title: "Tibet Adventure",
    img: tour1,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugitqui corporis.",
    country: "china",
    day: "6 Days",
    price: "From $2100",
    date: "August 26th, 2020",
  },
  {
    id: "2",
    title: "best of java",
    img: tour2,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugitqui corporis.",
    country: "indonesia",
    day: "11 Days",
    price: "From $1400",
    date: " October 1st, 2020",
  },
  {
    id: "3",
    title: "explore hong kong",
    img: tour3,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugitqui corporis.",
    country: "hong kong",
    day: "8 Days",
    price: "From $5000",
    date: " September 15th, 2020",
  },
  {
    id: "4",
    title: "kenya highlights",
    img: tour4,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugitqui corporis.",
    country: "hong kong",
    day: "20 days",
    price: "from $3300",
    date: " december 5th, 2019",
  },
];
