import { Navbar, Link, Text, useTheme } from "@nextui-org/react";
import { Layout } from "./Layout.js";
import { AcmeLogo } from "./AcmeLogo.js";
import Button from "@/components/Button";
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
            <Button title="Sign in" url="/Dashboard/auth/login" />
          </Navbar.Link>
        </Navbar.Content>
      </Navbar>
    </Layout>
  );
}
