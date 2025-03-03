import React, { useState } from "react";
import { Drawer, List, ListItem, ListItemText, IconButton, Divider, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { positions, styled } from "@mui/system";

const guides = [
  { id: 1, title: "Guía de Elden Ring" },
  { id: 2, title: "Secretos de The Witcher 3" },
  { id: 3, title: "Construcciones en Minecraft" },
  { id: 4, title: "Tácticas en Age of Empires IV" },
];

// Estilos personalizados
const StyledDrawer = styled(Drawer)({
  '& .MuiDrawer-paper': {
    backgroundColor: '#844184', 
    color: 'white', 
    width: 250,
    padding: 16,
  }
});

const StyledTypography = styled(Typography)({
  color: 'white', 
});

const StyledListItem = styled(ListItem)({
  '&:hover': {
    backgroundColor: '#844184', 
  },
});

const StyledDivider = styled(Divider)({
  margin: '8px 0',
  backgroundColor: 'white', 
});

const StyledIconButton = styled(IconButton)(() => ({
    marginTop: '60px',
    position: 'fixed',  // Fija el botón en la parte superior
    top: 16,            // Ajusta la distancia desde la parte superior de la página
    left: 16,           // Ajusta la distancia desde la parte izquierda
    zIndex: 1000,       // Asegura que el botón esté por encima de otros elementos
    '& svg': {
      color: 'white',
    },
  }));

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <StyledIconButton onClick={toggleDrawer}>
        <MenuIcon />
      </StyledIconButton>
      <StyledDrawer
        anchor="left"
        open={open}
        onClose={toggleDrawer}
      >
        <div>
          <StyledTypography variant="h6">Últimas Guías</StyledTypography>
          <StyledDivider />
          <List>
            {guides.map((guide) => (
              <StyledListItem button key={guide.id}>
                <ListItemText primary={guide.title} sx={{ color: 'white'}} />
              </StyledListItem>
            ))}
          </List>
        </div>
      </StyledDrawer>
    </>
  );
};

export default Sidebar;
