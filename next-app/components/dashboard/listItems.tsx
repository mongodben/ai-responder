import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SaveSharp from "@mui/icons-material/SaveSharp";
import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsSharp from "@mui/icons-material/SettingsSharp";

export const mainListItems = (
  <>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Create Story" />
    </ListItemButton>
    {/* <ListItemButton>
      <ListItemIcon>
        <SaveSharp />
      </ListItemIcon>
      <ListItemText primary="Saved Stories" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <SettingsSharp />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItemButton> */}
  </>
);
