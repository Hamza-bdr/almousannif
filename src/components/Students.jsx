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

  const coursesData = [
    {
      title: "درس 1: العقيدة الإسلامية",
      description: "مقدمة إلى العقيدة الإسلامية وأهميتها.",
      previewLink:
        "https://view.officeapps.live.com/op/embed.aspx?src=YOUR_PPT_LINK",
      driveLink: "https://drive.google.com/YOUR_DRIVE_LINK",
    },
    {
      title: "درس 2: السيرة النبوية",
      description: "تعرف على حياة النبي محمد صلى الله عليه وسلم.",
      previewLink:
        "https://view.officeapps.live.com/op/embed.aspx?src=YOUR_PPT_LINK",
      driveLink: "https://drive.google.com/YOUR_DRIVE_LINK",
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
            <Tab label="الأولى باكالوريا" {...a11yProps(0)} />
            <Tab label="التانية باكالوريا" {...a11yProps(1)} />
            <Tab label="التالتة باكالوريا" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Courses title="الأولى باكالوريا" courses={coursesData} />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Courses title="التانية باكالوريا" courses={coursesData} />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Courses title="التالتة باكالوريا" courses={coursesData} />
        </TabPanel>
      </Box>
    </div>
  );
}
