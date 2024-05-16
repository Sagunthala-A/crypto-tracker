import React,{useState} from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from './Grid';
import List from './List';
import './style.css';

export default function LabTabs({data,setData}) {
  const [value, setValue] = useState('2');
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
        <TabContext value={value} style={{color:"red",fontSize:"10rem"}}>
            <TabList aria-label="lab API tabs example" variant="fullWidth" >
              <Tab label="Grid" value="1" onClick={()=>{setValue('1')}} sx={style}/>
              <Tab label="List" value="2" onClick={()=>{setValue('2')}} sx={style}/>
            </TabList>
          <TabPanel value="1" className='grid'>
            {data.length > 0 && data.map((coin,ind)=>(
              <Grid coin={coin} key={ind}/>
            ))}
            {/* <Grid data={data}/> */}
          </TabPanel>
          <TabPanel value="2" className='list'>
            <table>
              {data.length > 0 && data.map((coin,ind)=>(
                <List coin={coin} key={ind}/>
              ))}
            </table>
            
          </TabPanel>
        </TabContext>
      </ThemeProvider>
  );
}

