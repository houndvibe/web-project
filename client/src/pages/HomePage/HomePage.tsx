import React, { useMemo, useState } from "react";
import {
  Container,
  List,
  ListItemIcon,
  ListItemText,
  Divider,
  TextField,
  Typography,
  ListItem,
} from "@mui/material";
import HttpIcon from "@mui/icons-material/Http";
import LanguageIcon from "@mui/icons-material/Language";
import AmazonIcon from "@mui/icons-material/ShoppingCart";
import LogOut from "../../features/LoOut/ui";

const sites = [
  { icon: <HttpIcon />, label: "http://192.168.0.1" },
  { icon: <LanguageIcon />, label: "activision.com" },
  { icon: <LanguageIcon />, label: "aeroflot.ru" },
  { icon: <LanguageIcon />, label: "aknet.kg" },
  { icon: <AmazonIcon />, label: "amazon.co.uk" },
  { icon: <LanguageIcon />, label: "atlassian.com" },
  { icon: <LanguageIcon />, label: "audiokinetic.com" },
  { icon: <LanguageIcon />, label: "battle.net" },
  { icon: <LanguageIcon />, label: "binance.com" },
  { icon: <LanguageIcon />, label: "cgpeers.to" },
  { icon: <LanguageIcon />, label: "cloudlessons.ru" },
];

const HomePage = () => {
  const [filter, setFilter] = useState<string>("");

  const handleChangeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  const filteredSites = useMemo(() => {
    return sites.filter((item) => item.label.includes(filter));
  }, [filter]);

  return (
    <Container maxWidth="sm" style={{ marginTop: "20px" }}>
      <LogOut />
      <Typography variant="h6">
        {`Сайтов и приложений: ${sites.length}`}{" "}
      </Typography>
      <TextField
        variant="outlined"
        fullWidth
        placeholder="Поиск паролей"
        style={{ margin: "20px 0" }}
        onChange={handleChangeFilter}
      />
      <List>
        {filteredSites.map((site, index) => (
          <React.Fragment key={index}>
            <ListItem button>
              <ListItemIcon>{site.icon}</ListItemIcon>
              <ListItemText primary={site.label} />
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Container>
  );
};

export default HomePage;
