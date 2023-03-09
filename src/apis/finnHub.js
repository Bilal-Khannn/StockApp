import axios from "axios";

const TOKEN = "cg52ihpr01qi63pm5j10cg52ihpr01qi63pm5j1g";

export default axios.create({
  baseURL: "https://finnhub.io/api/v1",
  params: {
    token: TOKEN,
  },
});
