import { useState } from "react";
import AppHeader, { MenuItems } from "./components/AppHeader";
import PickPlan from "./components/PickPlan";
import StripePricingTable from "./components/StripePricingTable";
import ManageBiling from "./components/ManageBilling";


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
