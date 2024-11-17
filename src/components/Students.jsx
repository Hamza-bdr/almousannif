import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Courses from "./Courses";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function Students() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const coursesbac1 = [
    {
      title: "القسم الأول من المقرر",
      driveLink:
        "https://drive.google.com/drive/folders/1Na70VTHI-fYOeVkY4_8DL-CKcOuJR7e-?usp=drive_link",
    },
    {
      title: "القسم الثاني من المقرر",
      driveLink:
        "https://drive.google.com/drive/folders/123gE6g_FIZCXNiAHzoqnxqX9AVjqcJ-w?usp=drive_link",
    },
    {
      title: "القسم الثالث من المقرر",
      driveLink:
        "https://drive.google.com/drive/folders/1Kx5-pzF7wVexi11X5cHmhsSFK7vBRhhQ?usp=drive_link",
    },
    {
      title: "القسم الرابع من المقرر",
      driveLink:
        "https://drive.google.com/drive/folders/1XboicCY6h6fdIFNMkJjhAXIpv_SDa3ih?usp=drive_link",
    },
  ];

  return (
    <div className="my-4">
      <Box sx={{ bgcolor: "background.paper", width: "1200" }}>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="جدع مشترك" {...a11yProps(0)} />
            <Tab label="الأولى باكالوريا" {...a11yProps(1)} />
            <Tab label="الثانية باكالوريا" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Courses title="جدع مشترك" courses={coursesbac1} />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Courses title="الأولى باكالوريا" courses={coursesbac1} />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Courses title="الثانية باكالوريا" courses={coursesbac1} />
        </TabPanel>
      </Box>
    </div>
  );
}
