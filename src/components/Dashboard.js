import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Feed from "./Feed";
import MyFeed from "./MyFeed";
import SavedPosts from "./SavedPost";
import MyProfile from "./MyProfile";
import TaskDashboard from "./TaskDashboard";
import TaskManagement from "./TaskManagement";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          borderRight: 2,
          borderColor: "divider",
          backgroundColor: "white",
          fontWeight: "bolder",
          position: "fixed",
          width: "200px",
          marginTop: "50px",
        }}
      >
        <Tab label="FEED" {...a11yProps(0)} />
        <Tab label="MY FEED" {...a11yProps(1)} />
        <Tab label="SAVED POSTS" {...a11yProps(2)} />
        <Tab label="TASK MANAGEMENT" {...a11yProps(3)} />
        <Tab label="TASK DASHBOARD" {...a11yProps(4)} />
        <Tab label="MY PROFILE" {...a11yProps(5)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <div className="tabclass">
          <Feed />
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="tabclass">
          <MyFeed />
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className="tabclass">
          <SavedPosts />
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div className="tabclass">
          <TaskManagement />
        </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <div className="tabclass">
          <TaskDashboard />
        </div>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <div className="tabclass">
          <MyProfile />
        </div>
      </TabPanel>
    </>
  );
}