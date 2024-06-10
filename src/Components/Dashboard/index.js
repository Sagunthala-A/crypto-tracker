import React,{useState} from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from './Grid';
import List from './List';
import './style.css';
import Button from '../Common/Button';
import { Link } from 'react-router-dom';

export default function LabTabs({data,setSearch}) {
  const [value, setValue] = useState('1');
  const style = {
    color: "var(--white)",
    fontSize: "1.2rem",
    fontWeight: 600,
    fontFamily: "Inter",
    textTransform: "capitalize",
  };
  const theme = createTheme({
    palette: {
      primary: {
        main: "#3a80e9",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value} style={{ color: "red", fontSize: "10rem" }}>
        <TabList aria-label="lab API tabs example" variant="fullWidth">
          <Tab
            label="Grid"
            value="1"
            onClick={() => {
              setValue("1");
            }}
            sx={style}
          />
          <Tab
            label="List"
            value="2"
            onClick={() => {
              setValue("2");
            }}
            sx={style}
          />
        </TabList>
        <TabPanel value="1" className="grid">
          {data.length > 0 ? (
            data.map((coin, ind) => <Grid coin={coin} key={ind} />)
          ) : (
            <div className="no__items grid__noItems">
              <h1>Sorry, Couldn't find the coin you're looking for 😞</h1>
              <Button
                text={"Clear Search"}
                onClick={() => {
                  setSearch("");
                }}
              ></Button>
            </div>
          )}
        </TabPanel>
        <TabPanel value="2" className="list">
          {data.length > 0 ? (
            <table>
              {data.map((coin, ind) => (
                // <Link to={`/coin/${coin.id}`}>
                  <List coin={coin} key={ind} />
                // </Link>
              ))}
            </table>
          ) : (
            <div
              className="no__items"
              style={{ padding: "0px !important", margintop: "0rem" }}
            >
              <h1
                onClick={() => {
                  console.log("sdf");
                }}
              >
                Sorry, Couldn't find the coin you're looking for 😞
              </h1>
              <Button
                text={"Clear Search"}
                onClick={() => {
                  setSearch("");
                }}
              ></Button>
            </div>
          )}
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}

