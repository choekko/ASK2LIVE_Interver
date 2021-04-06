import { useHistory } from "react-router";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos"
import IconButton from "@material-ui/core/IconButton"
import Grid from "@material-ui/core/Grid"
import Button from '@material-ui/core/Button';

const style = {
  title: {
    top: 0,
    display: "flex",
    position: "fixed",
    fontSize: "1.2em",
    // margin: "auto",
    height: "7%",
    width: "100%",
    maxWidth: "66em",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff8ef",
    borderBottom: "2px solid",
    zIndex: "1",
  },
};

const MypageNav = ({ text }) => {
  const history = useHistory();

  return (
    <>

        <div className="BMDOHYEON" style={style.title}>
          <IconButton
            style={{position: "absolute", left:0}}
            aria-label="back"
            onClick={() => history.goBack()}
          >
            <ArrowBackIosIcon />
          </IconButton>
          <span style={{transform:"translate(0, 2px)"}}>{text}</span>
        </div>

    </>
  );
};


export default MypageNav
