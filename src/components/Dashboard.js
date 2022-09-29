import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Feed from './Feed';
import Myfeed from './MyFeed';
import Savedpost from './SavedPost';
import Taskmanagement from './TaskManagement';
import Taskdashboard from './TaskDashboard';
import Myprofile from './MyProfile';

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
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="FEED" {...a11yProps(0)} />
        <Tab label="MY FEED" {...a11yProps(1)} />
        <Tab label="SAVED POSTS" {...a11yProps(2)} />
        <Tab label="TASK MANAGEMENT" {...a11yProps(3)} />
        <Tab label="TASK DASHBOARD" {...a11yProps(4)} />
        <Tab label="MY PROFILE" {...a11yProps(5)} />
        
      </Tabs>
      <TabPanel value={value} index={0}>
        <Feed/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Myfeed/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Savedpost/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Taskmanagement/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Taskdashboard/>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Myprofile/>
      </TabPanel>
      </Box>
  );
}
