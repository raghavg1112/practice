import { Navbar, Link, Text, useTheme } from "@nextui-org/react";
import { Layout } from "./Layout.js";
import { AcmeLogo } from "./AcmeLogo.js";
import Button from "@/components/Button";
import { useRouter } from "next/router.js";
export default function App() {
  const { isDark } = useTheme();
  const router = useRouter();
  const handleClick = async () => {
    await router.push("/dashboard/auth/login");
  };
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
            <Button title="Sign in" onClick={handleClick} />
          </Navbar.Link>
        </Navbar.Content>
      </Navbar>
    </Layout>
  );
}
