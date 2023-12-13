import { Component } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  TextField,
  Grid,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CopyrightIcon from "@mui/icons-material/Copyright";
import BodyItem from "../body_item/bodyitem";
import style from "./navbar.styles";

interface MyObject {
  id: number;
  name: string;
  image: string;
  text: string;
  hyperLink: string;
}

const arrayOfObjects: MyObject[] = [
  {
    id: 1,
    name: "Using Abstract",
    image:
      "https://theme.zdassets.com/theme_assets/2197739/aed6500f4da41c641f3de5d96247eb6654e9c386.png",
    text: "Abstract lets you manage, version, and document your designs in one place.",
    hyperLink:
      "https://help.abstract.com/hc/en-us/categories/360005436612-Using-Abstract",
  },
  {
    id: 2,
    name: "Manage your account",
    image:
      "https://theme.zdassets.com/theme_assets/2197739/91588b3d042df901d9b941ccbb57af4f151401c7.png",
    text: "Configure your account settings, such as your email, profile details, and password",
    hyperLink:
      "https://help.abstract.com/hc/en-us/categories/360005449431-Manage-your-account",
  },
  {
    id: 3,
    name: "Manage organizations, teams, and projects",
    image:
      "https://theme.zdassets.com/theme_assets/2197739/50d0db451c0e1e66e1caddd142986fcf6792ca05.png",
    text: "Use Abstract organizations, teams, and projects to organize your people and your work.",
    hyperLink:
      "https://help.abstract.com/hc/en-us/categories/360005449531-Manage-organizations-teams-and-projects",
  },
  {
    id: 4,
    name: "Manage billing",
    image:
      "https://theme.zdassets.com/theme_assets/2197739/3e82d0126e97d7b7c60a611d4e11b3c278d33743.png",
    text: "Change subscriptions and payment details.",
    hyperLink:
      "https://help.abstract.com/hc/en-us/categories/360005436672-Manage-billing",
  },
  {
    id: 5,
    name: "Authenticate to Abstract",
    image:
      "https://theme.zdassets.com/theme_assets/2197739/7712592465ef5c7bf18f1c7cb16e19ab44eb81e3.png",
    text: "Set up and configure SSO, SCIM, and Just-in-Time provisioning.",
    hyperLink:
      "https://help.abstract.com/hc/en-us/categories/360005436592-Authenticate-to-Abstract",
  },
  {
    id: 6,
    name: "Abstract support",
    image:
      "https://theme.zdassets.com/theme_assets/2197739/dcc25d18e224d12621d74e545cc8bdd1b5685ca8.png",
    text: "Get in touch with a human.",
    hyperLink:
      "https://help.abstract.com/hc/en-us/articles/360050382291-Contact-Support",
  },
];

interface State {
  isHamburgerIconDisplayed: boolean;
  isSearchIconClicked: boolean;
  isTextFeildFocused: boolean;
}

class MuiNavbar extends Component<{}, State> {
  // state: {
  //   isHamburgerIconDisplayed: boolean;
  // } = {
  //   isHamburgerIconDisplayed: true,
  // };
  state: State = {
    isHamburgerIconDisplayed: true,
    isSearchIconClicked: false,
    isTextFeildFocused: false,
  };

  iconEventHandler = () => {
    this.setState((prevState) => ({
      isHamburgerIconDisplayed: !prevState.isHamburgerIconDisplayed,
    }));
  };

  searchIconInputHandler = () => {
    console.log(this.state.isSearchIconClicked);
    this.setState((prevState) => ({
      isSearchIconClicked: !prevState.isSearchIconClicked,
    }));
  };

  focusBlurEventHandler = () => {
    this.setState((prevState) => ({
      isTextFeildFocused: !prevState.isTextFeildFocused,
    }));
  };

  render() {
    const {
      isHamburgerIconDisplayed,
      isSearchIconClicked,
      isTextFeildFocused,
    } = this.state;

    return (
      <Box sx={style.mainBoxContainer}>
        <AppBar
          sx={{
            background: `${isSearchIconClicked ? "white" : "black"}`,
            height: "70px",
            position: "static",
          }}
        >
          {isSearchIconClicked === false ? (
            <Toolbar sx={style.toolBar}>
              <Box component="div" sx={style.leftContainerLogo}>
                <Typography
                  component="a"
                  href="https://www.abstract.com/"
                  sx={style.leftAnchorLogo}
                >
                  <Box
                    component="img"
                    src="https://assets-global.website-files.com/5ff3926f03b3ba26b7d639cb/60c388bf3c3ae4d1d10653e7_Abstract_Wordmark-White.svg"
                    alt=""
                    sx={style.imageLogo}
                  />
                </Typography>
                <Box
                  component="a"
                  href="https://help.abstract.com/hc/en-us"
                  sx={style.anchorTextHelpCenter}
                >
                  Help Center
                </Box>
              </Box>
              <Box component="div" sx={style.rightContainerBtnsLarge}>
                <Button sx={style.outlineButton} variant="outlined">
                  <Typography
                    component="a"
                    href="https://help.abstract.com/hc/en-us/articles/360050382291-Contact-Support"
                    sx={style.anchorSubmitaRequest}
                  >
                    Submit a request
                  </Typography>
                </Button>
                <Button sx={style.containedButton} variant="contained">
                  <Typography
                    component="a"
                    href="https://goabstract.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fhelp.abstract.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=360000024632&auth_origin=360000024632%2Ctrue%2Ctrue"
                    sx={style.anchorSignIn}
                  >
                    Sign in
                  </Typography>
                </Button>
              </Box>
              <Box component="div" sx={style.rightContainerBtnsSmall}>
                <SearchIcon
                  sx={style.reactIcon}
                  onClick={this.searchIconInputHandler}
                />
                {isHamburgerIconDisplayed ? (
                  <MenuIcon
                    onClick={this.iconEventHandler}
                    sx={style.reactIcon}
                  />
                ) : (
                  <CloseIcon
                    onClick={this.iconEventHandler}
                    sx={style.reactIcon}
                  />
                )}
              </Box>
            </Toolbar>
          ) : (
            <Box sx={style.divContainerForNavigationBar}>
              <TextField
                id="outlined-basic"
                sx={style.searchInputSmall}
                placeholder="Search"
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
              />
              <CloseIcon
                onClick={this.searchIconInputHandler}
                sx={style.reactCloseSmallIcon}
              />
            </Box>
          )}
        </AppBar>
        {!isHamburgerIconDisplayed && (
          <Box sx={style.containerSmall}>
            <Box sx={style.nestedContainerSmall}>
              <Typography
                component="a"
                href="https://help.abstract.com/hc/en-us/articles/360050382291-Contact-Support"
                sx={style.anchorSubmitaRequest}
              >
                Submit a request
              </Typography>
              <Typography component="hr" sx={style.horizontalLine} />
              <Typography
                component="a"
                href="https://goabstract.zendesk.com/auth/v2/login/signin?return_to=https%3A%2F%2Fhelp.abstract.com%2Fhc%2Fen-us&theme=hc&locale=en-us&brand_id=360000024632&auth_origin=360000024632%2Ctrue%2Ctrue"
                sx={style.anchorSignIn}
              >
                Sign in
              </Typography>
            </Box>
          </Box>
        )}
        <Box sx={style.howCanWeHelpContainer}>
          <Box sx={style.howCanWeHelpNestedContainer}>
            <Typography variant="h1" sx={style.howCanWeHelpText}>
              How can we help?
            </Typography>
            <Box
              sx={
                isTextFeildFocused === false
                  ? style.searchInputRightArrowContainer
                  : {
                      ...style.searchInputRightArrowContainer,
                      border: "1px solid blue",
                    }
              }
            >
              <TextField
                id="outlined-basic"
                sx={style.searchInputHowCanWeHelp}
                placeholder="Search"
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                onFocus={this.focusBlurEventHandler}
                onBlur={this.focusBlurEventHandler}
                // onMouseEnter={() => {
                //   console.log("fdgkdfg");
                //   style = {...style, };
                // }}
                // onMouseLeave={() => {
                //   console.log("sdkjsbdfshb");
                //   style.searchInputRightArrowContainer.border =
                //     "1px solid black";
                // }}
              />
              <ArrowRightAltIcon
                sx={
                  isTextFeildFocused === false
                    ? style.rightArrowIcon
                    : { ...style.rightArrowIcon, color: "blue" }
                }
              />
            </Box>
          </Box>
        </Box>
        <Box sx={style.body}>
          <Grid
            sx={style.gridContainer}
            container
            // spacing={2}
            // rowSpacing={6}
            // columnSpacing={2}
          >
            {arrayOfObjects.map((eachObj) => (
              <BodyItem key={eachObj.id} eachObj={eachObj} />
            ))}
          </Grid>
        </Box>
        <Box sx={style.footerContainer}>
          <Box sx={style.footerContent}>
            <Box sx={style.footerColumn}>
              <Typography variant="h6" sx={style.fHeading}>
                Abstract
              </Typography>
              <Typography variant="subtitle2" sx={style.fParagraph}>
                Start Trial
              </Typography>
              <Typography variant="subtitle2" sx={style.fParagraph}>
                Pricing
              </Typography>
              <Typography variant="subtitle2" sx={style.fParagraph}>
                Download
              </Typography>
            </Box>
            <Box sx={style.footerColumn}>
              <Typography variant="h6" sx={style.fHeading}>
                Resources
              </Typography>
              <Typography variant="subtitle2" sx={style.fParagraph}>
                Blog
              </Typography>
              <Typography variant="subtitle2" sx={style.fParagraph}>
                Help Center
              </Typography>
              <Typography variant="subtitle2" sx={style.fParagraph}>
                Release Notes
              </Typography>
              <Typography variant="subtitle2" sx={style.fParagraph}>
                Status
              </Typography>
            </Box>
            <Box sx={style.footerColumn}>
              <Typography variant="h6" sx={style.fHeading}>
                Community
              </Typography>
              <Typography variant="subtitle2" sx={style.fParagraph}>
                Twitter
              </Typography>
              <Typography variant="subtitle2" sx={style.fParagraph}>
                LinkedIn
              </Typography>
              <Typography variant="subtitle2" sx={style.fParagraph}>
                Facebook
              </Typography>
              <Typography variant="subtitle2" sx={style.fParagraph}>
                Dribble
              </Typography>
              <Typography variant="subtitle2" sx={style.fParagraph}>
                Podcast
              </Typography>
            </Box>
            <Box sx={style.footerColumn}>
              <Typography variant="h6" sx={style.fHeading}>
                Company
              </Typography>
              <Typography variant="subtitle2" sx={style.fParagraph}>
                About Us
              </Typography>
              <Typography variant="subtitle2" sx={style.fParagraph}>
                Career
              </Typography>
              <Typography variant="subtitle2" sx={style.fParagraph}>
                Legal
              </Typography>
              <Box>
                <Typography variant="h6" sx={style.fHeading1}>
                  Contact Us
                </Typography>
                <Typography variant="subtitle2" sx={style.fParagraph1}>
                  info@abstract.com
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={style.copyContainer}>
            <Box
              component="img"
              src="https://assets-global.website-files.com/5ff3926f03b3ba26b7d639cb/60c388bf3c3ae4d1d10653e7_Abstract_Wordmark-White.svg"
              sx={style.fImage}
            />
            <Typography sx={style.copy}>
              <CopyrightIcon />
              <Typography sx={style.copy1}>Copyright 2023</Typography>
            </Typography>
            <Typography>Abstract Studio Design, Inc.</Typography>
            <Typography>All rights reserved</Typography>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default MuiNavbar;
