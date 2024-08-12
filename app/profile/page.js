import React from "react";
import Cover from "../components/profile/Cover";
import NavigationMenu from "../components/profile/NavigationMenu";
import Notes from "../components/profile/Notes";

export default function page() {
  return (
    <div>
      <Cover />
      <NavigationMenu />
      {/* <Notes /> */}
    </div>
  );
}
