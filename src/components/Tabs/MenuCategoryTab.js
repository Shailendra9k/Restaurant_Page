import React, { useState } from "react";
import { Tabs, Tab, AppBar, makeStyles, Container } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import image from "../../assets/items/momo.webp";
import FoodItem from "../FoodItem/FoodItem";

const MenuCategoryTab = (props) => {
  const classes = useCategoryStyles();
  const [value, setValue] = useState(0);
  const handleTabs = (e, val) => {
    console.warn(val);
    setValue(val);
  };
  return (
    <>
      <AppBar position="static" color="default" className={classes.root}>
        <Container maxWidth="lg">
          <Tabs
            value={value}
            onChange={handleTabs}
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label={"MONDAY 10.30-15.00"} />
            <Tab label={"TUESDAY 10.30-15.00"} />
            <Tab label={"WEDNESDAY 10.30-15.00"} />
            <Tab label={"THURSDAY 10.30-15.00"} />
            <Tab label={" FRIDAY 10.30-15.00"} />
          </Tabs>
        </Container>
      </AppBar>
      <Container maxWidth={"lg"} className={classes.foodItemRoot}>
        <TabPanel value={value} index={0}>
          <Grid container spacing={3}>
            <Grid item xs={12} xl={6} md={6}>
              <Paper className={classes.paper} elevation={0}>
                <FoodItem
                  image={image}
                  title="Butter paneer"
                  price="10,00"
                  description="Cheese, butter in tomato-cream sauce."
                />
              </Paper>
            </Grid>
            <Grid item xs={12} xl={6} md={6}>
              <Paper className={classes.paper} elevation={0}>
                <FoodItem
                  image={image}
                  title="Saag tofu chili"
                  price="9,00"
                  description="Tofu in ginger-garlic- tomato-onion-spinach and chili sauce."
                />
              </Paper>
            </Grid>
            <Grid item xs={12} xl={6} md={6}>
              <Paper className={classes.paper} elevation={0}>
                <FoodItem
                  image={image}
                  title="Chicken tikka masala  🌶️"
                  price="9,50"
                  description="Tandoori marinated chicken tikka with onion,fresh tomato, ginger, garlic masala sauce."
                />
              </Paper>
            </Grid>
            <Grid item xs={12} xl={6} md={6}>
              <Paper className={classes.paper} elevation={0}>
                <FoodItem
                  image={image}
                  title="Butter lamb"
                  price="9,90"
                  description="Lamb filet with tomato-butter-nuts-creamy sauce."
                />
              </Paper>
            </Grid>
            <Grid item xs={12} xl={6} md={6}>
              <Paper className={classes.paper} elevation={0}>
                <FoodItem
                  image={image}
                  title="Fish Chili"
                  price="9,50"
                  description="Pangas fish with onion, capsicum, ginger, garlic soy chilli sauce."
                />
              </Paper>
            </Grid>
            <Grid item xs={12} xl={6} md={6}>
              <Paper className={classes.paper} elevation={0}>
                <FoodItem
                  image={image}
                  title="Green curry chicken 🌶️🌶️
                 "
                  price="9,50"
                  description=" Green curry of chicken with bamboo coconut sauce."
                />
              </Paper>
            </Grid>
            <Grid item xs={12} xl={6} md={6}>
              <Paper className={classes.paper} elevation={0}>
                <FoodItem
                  image={image}
                  title="Fish Chili"
                  price="9,50"
                  description="Pangas fish with onion, capsicum, ginger, garlic soy chilli sauce."
                />
              </Paper>
            </Grid>
            <Grid item xs={12} xl={6} md={6}>
              <Paper className={classes.paper} elevation={0}>
                <FoodItem
                  image={image}
                  title="Launch mix"
                  price="11,00"
                  description="Two dishes on same plate from the list of above."
                />
              </Paper>
            </Grid>
            <Grid item xs={12} xl={6} md={6}>
              <Paper className={classes.paper} elevation={0}>
                <FoodItem
                  image={image}
                  title="Today Special"
                  price="14,50"
                  description="Tandoori marinated chicken and lamb fillet, onion, capsicum in curry sauce.                  "
                />
              </Paper>
            </Grid>
            <Grid item xs={12} xl={6} md={6}>
              <Paper className={classes.paper} elevation={0}>
                <FoodItem
                  image={image}
                  title="Child meal"
                  price="8,50"
                  description=""
                />
              </Paper>
            </Grid>
            <Grid item xs={12} xl={12} md={12}>
              <Paper className={classes.paper} elevation={0}>
                <p>
                  Note: All lunch menu options include basmati rice, yoghurt
                  sauce, mint sauce and Nan bread. Coffee or Nepalese tea as a
                  dessert.
                </p>
              </Paper>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Grid container spacing={3}>
            <Grid item xs={12} xl={6} md={6}>
              <Paper className={classes.paper} elevation={0}>
                <FoodItem
                  image={image}
                  title="Paneer swadi"
                  price="9,50"
                  description="cottage cheese in spinach, mint-onion-tomato-cream sause."
                />
              </Paper>
            </Grid>
            <Grid item xs={12} xl={6} md={6}>
              <Paper className={classes.paper} elevation={0}>
                <FoodItem
                  image={image}
                  title="Alu  gobi masala 🌶️"
                  price="9,00"
                  description="Potato, cauliflower, ginger, garlic, onion, tomato in curry sauce."
                />
              </Paper>
            </Grid>
            <Grid item xs={12} xl={6} md={6}>
              <Paper className={classes.paper} elevation={0}>
                <FoodItem
                  image={image}
                  title="Chicken makhani"
                  price="9,50"
                  description="Chicken in tomato-butter-nuts-coconut-cream based sauce."
                />
              </Paper>
            </Grid>
            <Grid item xs={12} xl={6} md={6}>
              <Paper className={classes.paper} elevation={0}>
                <FoodItem
                  image={image}
                  title="Lamb 🌶️"
                  price="9,90"
                  description="Lamb in onion, tomato, ginger based masala sauce."
                />
              </Paper>
            </Grid>
            <Grid item xs={12} xl={6} md={6}>
              <Paper className={classes.paper} elevation={0}>
                <FoodItem
                  image={image}
                  title="Red curry 🌶️🌶️"
                  price="9,50"
                  description="Red curry of chicken, vegetables in coconut sauce.                  "
                />
              </Paper>
            </Grid>
            <Grid item xs={12} xl={6} md={6}>
              <Paper className={classes.paper} elevation={0}>
                <FoodItem
                  image={image}
                  title="Prawn chili 🌶️"
                  price="10,00"
                  description="Prawns, capsicum , onion, tomato in soy-chili sauce.                  "
                />
              </Paper>
            </Grid>
            <Grid item xs={12} xl={6} md={6}>
              <Paper className={classes.paper} elevation={0}>
                <FoodItem
                  image={image}
                  title="Launch mix"
                  price="11,00"
                  description="Two dishes on same plate from the list of above."
                />
              </Paper>
            </Grid>
            <Grid item xs={12} xl={6} md={6}>
              <Paper className={classes.paper} elevation={0}>
                <FoodItem
                  image={image}
                  title="Today Special"
                  price="14,50"
                  description="Tandoori marinated chicken and lamb fillet, onion, capsicum in curry sauce.                  "
                />
              </Paper>
            </Grid>
            <Grid item xs={12} xl={6} md={6}>
              <Paper className={classes.paper} elevation={0}>
                <FoodItem
                  image={image}
                  title="Child meal"
                  price="8,50"
                  description=""
                />
              </Paper>
            </Grid>
            <Grid item xs={12} xl={12} md={12}>
              <Paper className={classes.paper} elevation={0}>
                <p>
                  Note: All lunch menu options include basmati rice, yoghurt
                  sauce, mint sauce and Nan bread. Coffee or Nepalese tea as a
                  dessert.
                </p>
              </Paper>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Grid container spacing={3}>
            <Grid item xs={12} xl={6} md={6}>
              <Paper className={classes.paper} elevation={0}>
                <FoodItem
                  image={image}
                  title="Saag Tofu 🌶️"
                  price="9,00"
                  description="Tofu in ginger-garlic- tomato-onion, spinach and curry sauce."
                />
              </Paper>
            </Grid>
            <Grid item xs={12} xl={6} md={6}>
              <Paper className={classes.paper} elevation={0}>
                <FoodItem
                  image={image}
                  title="Paneer Tikka Masala 🌶️"
                  price="9,50"
                  description="Deep fried cottage cheese, onion, garlic, capsicum, in yogurt masala sauce."
                />
              </Paper>
            </Grid>
            <Grid item xs={12} xl={6} md={6}>
              <Paper className={classes.paper} elevation={0}>
                <FoodItem
                  image={image}
                  title="Chicken Swadilo"
                  price="9,50"
                  description="Chicken in tomato, onion , cashew-nuts and coconut-cream sauce."
                />
              </Paper>
            </Grid>
            <Grid item xs={12} xl={6} md={6}>
              <Paper className={classes.paper} elevation={0}>
                <FoodItem
                  image={image}
                  title="Garlic Lamb"
                  price="9,90"
                  description="Lamb, onion, tomato, ginger,capsicum in garlic curry-sauce."
                />
              </Paper>
            </Grid>
            <Grid item xs={12} xl={6} md={6}>
              <Paper className={classes.paper} elevation={0}>
                <FoodItem
                  image={image}
                  title="Garlic Lamb"
                  price="9,90"
                  description="Lamb, onion, tomato, ginger,capsicum in garlic curry-sauce."
                />
              </Paper>
            </Grid>
            <Grid item xs={12} xl={6} md={6}>
              <Paper className={classes.paper} elevation={0}>
                <FoodItem
                  image={image}
                  title="SK Chicken Special"
                  price="9,50"
                  description="Chicken, onion, tomato ginger, garlic fresh coriander in spicy sauce."
                />
              </Paper>
            </Grid>
            <Grid item xs={12} xl={6} md={6}>
              <Paper className={classes.paper} elevation={0}>
                <FoodItem
                  image={image}
                  title="Launch mix"
                  price="11,00"
                  description="Two dishes on same plate from the list of above."
                />
              </Paper>
            </Grid>
            <Grid item xs={12} xl={6} md={6}>
              <Paper className={classes.paper} elevation={0}>
                <FoodItem
                  image={image}
                  title="Today Special"
                  price="14,50"
                  description="Tandoori marinated chicken and lamb fillet, onion, capsicum in curry sauce.                  "
                />
              </Paper>
            </Grid>
            <Grid item xs={12} xl={6} md={6}>
              <Paper className={classes.paper} elevation={0}>
                <FoodItem
                  image={image}
                  title="Child meal"
                  price="8,50"
                  description=""
                />
              </Paper>
            </Grid>
            <Grid item xs={12} xl={12} md={12}>
              <Paper className={classes.paper} elevation={0}>
                <p>
                  Note: All lunch menu options include basmati rice, yoghurt
                  sauce, mint sauce and Nan bread. Coffee or Nepalese tea as a
                  dessert.
                </p>
              </Paper>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} xl={6} md={6}>
              <Paper className={classes.paper} elevation={0}>
                <FoodItem
                  image={image}
                  title="Malai Kofta "
                  price="10,00"
                  description="Cheese and potatos mixed balls with tomato-nuts-cream sauce."
                />
              </Paper>
            </Grid>
            <Grid item xs={12} xl={6} md={6}>
              <Paper className={classes.paper} elevation={0}>
                <FoodItem
                  image={image}
                  title="Tofu masala 🌶️"
                  price="9,00"
                  description="Tofu, with onion-tomato-ginger-garlic-masala sauce."
                />
              </Paper>
            </Grid>
            <Grid item xs={12} xl={6} md={6}>
              <Paper className={classes.paper} elevation={0}>
                <FoodItem
                  image={image}
                  title="Garlic chicken "
                  price="9,50"
                  description="Chicken in onion, tomato, ginger, capsicum in garlic curry-sauce."
                />
              </Paper>
            </Grid>
            <Grid item xs={12} xl={6} md={6}>
              <Paper className={classes.paper} elevation={0}>
                <FoodItem
                  image={image}
                  title="Butter Lamb 🌶️"
                  price="9,90"
                  description="Lamb filet with tomato-butter-nuts-creamy sauce."
                />
              </Paper>
            </Grid>
            <Grid item xs={12} xl={6} md={6}>
              <Paper className={classes.paper} elevation={0}>
                <FoodItem
                  image={image}
                  title="Coconut fish"
                  price="9,50"
                  description="Deep fried fish in onion-tomato-coconut based sause."
                />
              </Paper>
            </Grid>
            <Grid item xs={12} xl={6} md={6}>
              <Paper className={classes.paper} elevation={0}>
                <FoodItem
                  image={image}
                  title="Red curry 🌶️🌶️ "
                  price="9,50"
                  description="red curry of chicken, vegetables in coconut sauce.                  "
                />
              </Paper>
            </Grid>
            <Grid item xs={12} xl={6} md={6}>
              <Paper className={classes.paper} elevation={0}>
                <FoodItem
                  image={image}
                  title="Launch mix"
                  price="11,00"
                  description="Two dishes on same plate from the list of above."
                />
              </Paper>
            </Grid>
            <Grid item xs={12} xl={6} md={6}>
              <Paper className={classes.paper} elevation={0}>
                <FoodItem
                  image={image}
                  title="Today Special"
                  price="14,50"
                  description="Tandoori marinated chicken and lamb fillet, onion, capsicum in curry sauce.                  "
                />
              </Paper>
            </Grid>
            <Grid item xs={12} xl={6} md={6}>
              <Paper className={classes.paper} elevation={0}>
                <FoodItem
                  image={image}
                  title="Child meal"
                  price="8,50"
                  description=""
                />
              </Paper>
            </Grid>
            <Grid item xs={12} xl={12} md={12}>
              <Paper className={classes.paper} elevation={0}>
                <p>
                  Note: All lunch menu options include basmati rice, yoghurt
                  sauce, mint sauce and Nan bread. Coffee or Nepalese tea as a
                  dessert.
                </p>
              </Paper>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Grid container spacing={3}>
            <Grid item xs={12} xl={6} md={6}>
              <Paper className={classes.paper} elevation={0}>
                <FoodItem
                  image={image}
                  title="Palak paneer"
                  price="9,50"
                  description="Cottage cheese in spinach cream sauce.                  "
                />
              </Paper>
            </Grid>
            <Grid item xs={12} xl={6} md={6}>
              <Paper className={classes.paper} elevation={0}>
                <FoodItem
                  image={image}
                  title="Tofu chili"
                  price="9,00"
                  description="Tofu, ginger, onions, and tomato in chili sauce.                  "
                />
              </Paper>
            </Grid>
            <Grid item xs={12} xl={6} md={6}>
              <Paper className={classes.paper} elevation={0}>
                <FoodItem
                  image={image}
                  title="Butter chicken"
                  price="9,50"
                  description="Tandoori marinated chicken, in butter-nuts- tomato-cream sauce."
                />
              </Paper>
            </Grid>
            <Grid item xs={12} xl={6} md={6}>
              <Paper className={classes.paper} elevation={0}>
                <FoodItem
                  image={image}
                  title="Lamb chili 🌶️"
                  price="9,90"
                  description="Marinated lamb in onion, capsicum, ginger,garlic in soy chili sauce."
                />
              </Paper>
            </Grid>
            <Grid item xs={12} xl={6} md={6}>
              <Paper className={classes.paper} elevation={0}>
                <FoodItem
                  image={image}
                  title="Prawn curry 🌶️"
                  price="10,00"
                  description="Prawns in tomato-onion curry sauce.                  "
                />
              </Paper>
            </Grid>
            <Grid item xs={12} xl={6} md={6}>
              <Paper className={classes.paper} elevation={0}>
                <FoodItem
                  image={image}
                  title="Green curry Chicken 🌶️🌶️"
                  price="9,50"
                  description="Green curry of chicken with bamboo coconut sauce."
                />
              </Paper>
            </Grid>
            <Grid item xs={12} xl={6} md={6}>
              <Paper className={classes.paper} elevation={0}>
                <FoodItem
                  image={image}
                  title="Launch mix"
                  price="11,00"
                  description="Two dishes on same plate from the list of above."
                />
              </Paper>
            </Grid>
            <Grid item xs={12} xl={6} md={6}>
              <Paper className={classes.paper} elevation={0}>
                <FoodItem
                  image={image}
                  title="Today Special"
                  price="14,50"
                  description="Tandoori marinated chicken and lamb fillet, onion, capsicum in curry sauce.                  "
                />
              </Paper>
            </Grid>
            <Grid item xs={12} xl={6} md={6}>
              <Paper className={classes.paper} elevation={0}>
                <FoodItem
                  image={image}
                  title="Child meal"
                  price="8,50"
                  description=""
                />
              </Paper>
            </Grid>
            <Grid item xs={12} xl={12} md={12}>
              <Paper className={classes.paper} elevation={0}>
                <p>
                  Note: All lunch menu options include basmati rice, yoghurt
                  sauce, mint sauce and Nan bread. Coffee or Nepalese tea as a
                  dessert.
                </p>
              </Paper>
            </Grid>
          </Grid>
        </TabPanel>
      </Container>
    </>
  );
};

function TabPanel(props) {
  const { children, value, index } = props;
  return <div>{value === index && <h1>{children}</h1>}</div>;
}

const useCategoryStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTabs-flexContainer": {
      justifyContent: "center",
    },
  },
  foodItemRoot: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
}));

export default MenuCategoryTab;
