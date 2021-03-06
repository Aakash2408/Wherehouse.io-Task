import React, { useState, useEffect } from "react";
import { styles } from "./styles/filterStyles";
import { Button, withStyles } from "@material-ui/core";
import { green, red } from "@material-ui/core/colors";
import { useRouteMatch } from "react-router-dom";
import { fetchlaunchData } from "../fetcher/fetchdata";
import { filterOptions } from "../constant";

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(green[500]),
    backgroundColor: green[500],
    borderRadius: 5,
    width: 75,
    margin: "10px auto",
    "&:hover": {
      backgroundColor: green[700],
    },
    "&.active": {
      backgroundColor: theme.palette.primary.main,
      color: `${theme.palette.secondary.contrastText}!important`,
      transition: "border-radius .15s cubic-bezier(0.4,0.0,0.2,1)",
    },
  },
}))(Button);

/*
 * Filter component:
 *  year/land/launch handle change and data is updated on
 *  filter change and latest data from the api is stored in the state 
 * constant data for year and boolean option is stored in constant.js file
 */

function Filter(props) {
  const { onUpdateFilterData, onUpdateLoadState } = props;
  const classes = styles();
  const url = `https://api.spacexdata.com/v3/launches`;
  const { years, boolOptions } = filterOptions;
  const [year, setYear] = useState(null);
  const [launch, setLaunch] = useState(null);
  const [landing, setLanding] = useState(null);

  const match = useRouteMatch();
  // const history = useHistory();
  console.log('%c⧭', 'color: #cc0088', match);
  const handleFilterYearCLick = (selected, type) => () => {
    const paramVal = { ...match.params };
    // const uri = match.url.includes(`/launches/`) && `/launches/`;
    if (type === "year") {
      setYear(selected);
      paramVal.year = selected;
    }
    if (type === "land") {
      setLanding(selected);
      paramVal.land = selected;
    }
    if (type === "luanch") {
      setLaunch(selected);
      paramVal.luanch = selected;
    }
    
  };

  useEffect(() => {
    let params = { limit: 100 };
    if (year) {
      params = { ...params, launch_year: year };
    }
    if (launch !== null) {
      params = { ...params, launch_success: launch };
    }
    if (landing !== null) {
      params = { ...params, land_success: landing };
    }
    let ignore = false;

    onUpdateLoadState(true);
    fetchlaunchData(url, params, (res) => {
      if(res.length>0){

        if (!ignore) {
          onUpdateFilterData(res);
        }
      }else{
          onUpdateFilterData(null);       
      }
      onUpdateLoadState(false);
    });
    return () => {
      ignore = true;
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [landing, launch, year]);

  return (
    <div className={classes.filterList}>
     
      <div className={classes.filterListWrapper}>
        <div style={{fontWeight: "bolder",fontSize:"20px"}}>Launch Year</div>
        <div className={classes.filterListContent}>
          {years &&
            years.map((yea) => {
              return (
                <div key={yea} className={classes.yearButton}>
                  <ColorButton
                    variant="contained"
                    color="primary"
                    key={yea}
                    className={year === yea ? "active" : false}
                    onClick={handleFilterYearCLick(yea, "year")}
                  >
                    {yea}
                  </ColorButton>
                </div>
              );
            })}
        </div>
      </div>
      <div className={classes.filterListWrapper}>
        <div style={{fontWeight: "bolder",fontSize:"20px"}}>Successful Launch</div>
        <div className={classes.filterListContent}>
          {boolOptions &&
            boolOptions.map((option) => (
              <div key={option} className={classes.yearButton}>
                <ColorButton
                  variant="contained"
                  color="primary"
                  key={option}
                  className={launch === option ? "active" : false}
                  onClick={handleFilterYearCLick(option, "luanch")}
                >
                  {option}
                </ColorButton>
              </div>
            ))}
        </div>
      </div>
      <div className={classes.filterListWrapper}>
        <div style={{fontWeight: "bolder",fontSize:"20px"}}>Successful Landing</div>
        <div className={classes.filterListContent}>
          {boolOptions &&
            boolOptions.map((option) => (
              <div key={option} className={classes.yearButton}>
                <ColorButton
                  variant="contained"
                  color="primary"
                  key={option}
                  className={landing === option ? "active" : false}
                  onClick={handleFilterYearCLick(option, "land")}
                >
                  {option}
                </ColorButton>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
export default React.memo(Filter);
