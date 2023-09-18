import { useState } from "react";
import AppHeader, { MenuItems } from "./components/AppHeader";
import ManageBiling from "./components/ManageBilling";
import PickPlan from "./components/PickPlan";


const App = () => {
  

  const [selectedMenuItem, setSelectedMenuItem] = useState(MenuItems[0]);
  const onMenuItemSelected = (menuItem: string) => {
    console.log(`onMenuItemSelected: ${menuItem}`);
    setSelectedMenuItem(menuItem);
  };

  return (
    <>
      <AppHeader
        selectedMenuItem={selectedMenuItem}
        onMenuItemSelected={onMenuItemSelected}
      />
      {selectedMenuItem === MenuItems[0] && <PickPlan />}
      {selectedMenuItem === MenuItems[1] && <ManageBiling />}
    </>
  );
};

export default App;
