const style = {
  mainBoxContainer: {},

  toolBar: {
    width: { xs: "90%", sm: "90%", md: "90%", lg: "85%", xl: "85%" },
    maxWidth: { xs: "93%", sm: "93%", md: "93%", lg: "85%", xl: "85%" },
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // border: "1px solid red",
    margin: "auto",
    paddingLeft: "0",
    paddingRight: "0",
  },

  leftContainerLogo: {
    display: "flex",
    alignItems: "center",
    gap: { xs: "10px", sm: "10px", md: "10px", lg: "15px", xl: "15px" },
    // border: "1px solid saddlebrown",
    height: "71px",
    marginLeft: "0",
    padding: "0",
    // width: "30%",
  },

  leftAnchorLogo: {
    textDecoration: "none",
    // border: '1px solid slateblue',
    height: "70px",
    display: "flex",
    alignItems: "center",
  },

  imageLogo: {
    width: "105px",
    height: "50px",
    // border: "1px solid sienna",
    padding: "0",
  },

  anchorTextHelpCenter: {
    borderLeft: "2px solid #fff",
    lineHeight: "17px",
    padding: "2px 0 4px 0.8rem",
    color: "#ffffff",
    fontSize: "17px",
    fontWeight: "100",
    textDecoration: "none",
    paddingTop: "5px",
    letterSpacing: {
      xs: "0.8px",
      sm: "0.8px",
      md: "0.8px",
      lg: "0.8px",
      xl: "0.8px",
    },
    "&:hover": {
      textDecoration: "underline",
    },
  },

  rightContainerBtnsLarge: {
    // width: '85%',
    // maxWidth: '85%',
    display: { xs: "none", sm: "none", md: "none", lg: "flex", xl: "flex" },
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    // border: "1px solid red",
    paddingRight: "0",
    flexGrow: 1,
    gap: "15px",
  },

  outlineButton: {
    display: { xs: "none", sm: "none", md: "none", lg: "block", xl: "block" },
    outline: "none",
    cursor: "pointer",
    border: "1px solid #ffffff",
    borderRadius: "5px",
    backgroundColor: "transparent",
    padding: "5px 21px",
  },

  anchorSubmitaRequest: {
    textDecoration: "none",
    fontSize: { xs: "21px", sm: "21px", md: "21px", lg: "18px", xl: "18px" },
    textTransform: "lowercase",
    color: "#ffffff",
    "&::first-letter": {
      textTransform: "capitalize",
    },
  },

  containedButton: {
    display: { xs: "none", sm: "none", md: "none", lg: "block", xl: "block" },
    outline: "none",
    cursor: "pointer",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#4c5fd5",
    padding: "5px 20px",
    margin: "0",
    "&:hover": {
      backgroundColor: "#ffffff",
    },
  },

  anchorSignIn: {
    textDecoration: "none",
    fontSize: { xs: "21px", sm: "21px", md: "21px", lg: "18px", xl: "18px" },
    textTransform: "lowercase",
    color: "#ffffff",
    "&::first-letter": {
      textTransform: "capitalize",
    },
    "&:hover": {
      color: "black",
    },
  },

  rightContainerBtnsSmall: {
    display: { xs: "flex", sm: "flex", md: "flex", lg: "none", xl: "none" },
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "end",
    // border: "1px solid red",
    gap: "3px",
  },

  reactIconBtn: {
    outline: "none",
    cursor: "pointer",
    width: "20px",
    height: "20px",
    backgroundColor: "transparent",
    padding: "0px",
    border: "1px solid red;",
  },

  reactIcon: {
    width: "26px",
    height: "26px",
    color: "#ffffff",
    margin: "0px !important",
  },

  containerSmall: {
    display: { xs: "flex", lg: "none" },
    position: "absolute",
    top: "70px",
    height: "200px",
    minWidth: "100%",
    left: "0px",
    right: "0px",
    backgroundColor: "black",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderTop: "1px solid #ffffff",
    zIndex: "1",
  },

  nestedContainerSmall: {
    width: "92%",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    // border: "2px solid #ffffff",
  },

  horizontalLine: {
    width: "130px",
    color: "white",
  },

  searchInputSmall: {
    outline: "none",
    border: "1px solid black",
    // width: "91%",
    flexGrow: "1",
    fontSize: "19px",
    padding: "10px 10px",
    borderRadius: "4px",
    marginRight: "13px",
    color: "black",
    letterSpacing: "0.9px",
  },

  reactCloseSmallIcon: {
    width: "17px",
    height: "17px",
    color: "black",
    fontWeight: "700",
  },

  divContainerForNavigationBar: {
    backgroundColor: "transparent",
    display: "flex",
    alignItems: "center",
    padding: "0px",
    width: "91%",
    // border: "2px solid green",
    margin: "auto",
    justifyContent: "space-between",
  },

  howCanWeHelpContainer: {
    backgroundColor: "#DADBF1",
    height: "400px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // border: "6px solid darkblue",
    // position: "absolute",
    // top: "70px",
    // left: "0px",
    // right: "0px",
  },

  howCanWeHelpNestedContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // border: "1px solid black",
    width: { xs: "90%", sm: "90%", md: "80%", lg: "650px", xl: "650px" },
    gap: { xs: "30px", sm: "27px", md: "25px", lg: "20px", xl: "20px" },
  },

  howCanWeHelpText: {
    fontSize: { xs: "35px", sm: "47px", md: "55px", lg: "55px", xl: "55px" },
    fontWeight: "500",
  },

  searchInputRightArrowContainer: {
    backgroundColor: "white",
    border: "1px solid black",
    borderRadius: "4px",
    display: "flex",
    alignItems: "center",
    width: { xs: "100%", sm: "100%", md: "90%", lg: "100%", xl: "100%" },
  },

  searchInputHowCanWeHelp: {
    outline: "none",
    // border: "1px solid red",
    flexGrow: "1",
    fontSize: "19px",
    padding: "11px 10px",
    marginRight: "13px",
    color: "black",
    letterSpacing: "0.9px",
  },

  rightArrowIcon: {
    color: "black",
    marginRight: "11px",
  },

  body: {
    backgroundColor: "white",
    // position: "absolute",
    // top: "470px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "100px 0px",
  },

  gridContainer: {
    // border: "3px solid pink",
    width: "90%",
    // position: "relative",
    // top: "13px",
    // left: "0px",
    margin: "auto",
    rowGap: "70px",
    columnGap: "40px",
  },

  footerContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#000000",
    color: "#fff",
    // position: "absolute",
    // top: {
    //   xs: "1200px",
    //   sm: "1200px",
    //   md: "1500px",
    //   lg: "1500px",
    //   xl: "1500px",
    // },
    // left: "0px",
    // right: "0px",
    // bottom: "0px",
  },
  footerContent: {
    width: { xs: "100%", sm: "80%" },
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "flex-start",
    marginTop: "40px",
    alignSelf: "flex-start",

    marginBottom: "40px",
  },
  footerColumn: {
    width: { xs: "40%", sm: "18%" },
  },
  fHeading: {
    fontSize: "22px",
    fontWeight: "bold",
    lineHeight: "50px",
  },
  fParagraph: {
    fontSize: "16px",
    fontWeight: "500",
  },
  fHeading1: {
    fontSize: "16px",
    fontWeight: "bold",
    marginTop: "10px",
  },
  fParagraph1: {
    fontSize: "12px",
    fontWeight: "500",
  },
  copy: {
    display: "flex",
  },
  copy1: {
    marginLeft: "5px",
  },
  copyContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    alignSelf: { xs: "flex-start", sm: "flex-end" },
    marginLeft: { xs: "5%" },
    marginRight: { xs: "2%" },
    marginBottom: { xs: "4%" },
  },
  fImage: {
    height: "54px",
    width: "54px",
    marginBottom: { xs: "20px" },
  },
};

export default style;
