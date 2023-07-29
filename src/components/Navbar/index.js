import { Navbar, Button, Link, Text, useTheme } from "@nextui-org/react";
import { Layout } from "./Layout.js";
import { AcmeLogo } from "./AcmeLogo.js";
import Login from "@/pages/login.js";
export default function App() {
  const { isDark } = useTheme();

  return (
    <Layout>
      <Navbar shouldHideOnScroll isBordered={isDark} variant="sticky">
        <Navbar.Brand>
          <AcmeLogo />
          <Text b color="inherit" hideIn="xs">
            ACME
          </Text>
        </Navbar.Brand>

        <Navbar.Content>
          <Navbar.Link color="inherit" href="#">
            <Login />
          </Navbar.Link>
        </Navbar.Content>
      </Navbar>
    </Layout>
  );
}
