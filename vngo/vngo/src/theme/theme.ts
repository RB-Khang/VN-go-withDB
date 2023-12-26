import type { ThemeConfig } from "antd";

const theme: ThemeConfig = {
  components: {
    Button: {
      primaryShadow: "none",
      dangerShadow: "none",
    },
  },

  token: {
    colorPrimary: "#1b74f2",
    colorPrimaryHover: "#4096ff",
    colorError: "#f32013",
  },
};

export default theme;
