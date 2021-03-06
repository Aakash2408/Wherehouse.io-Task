import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  root: {
    height: 430,
    maxWidth: 375,
    cursor: "default",
    margin: "10px",
    borderRadius: 5,
    [theme.breakpoints.up("sm")]: {
      width: "45%",
    },
    [theme.breakpoints.up("lg")]: { width: "23%" },
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
    "&:hover": {
      boxShadow: " 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
    },
  },
  media: {
    height: 200,
    marginTop:10,
    objectFit: "scale-down",
    textAlign: "center"
    
  },
  section: {
    display: "flex",
    marginBottom: "5px",
  },
  heading: {
    fontSize: "1.1rem",
  },
  subheader: {
    fontWeight: "bold",
    paddingRight: "2px",
  },
  listType: {
    paddingLeft: "24px",
  },
  listStyle: {
    paddingBottom: 6,
  },
}));
