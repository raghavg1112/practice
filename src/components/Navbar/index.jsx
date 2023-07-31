import { Navbar, Link, Text, useTheme } from "@nextui-org/react";
import { Layout } from "./Layout.js";
import { AcmeLogo } from "./AcmeLogo.js";
import Button from "@/components/Button";
import { useRouter } from "next/router.js";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
export default function App() {
  const session = useSession();
  const { isDark } = useTheme();
  const router = useRouter();
  const handleSignOut = async () => {
    signOut();
    router.push("/dashboard");
  };
  const handleSignIn = async () => {
    router.push("/dashboard/auth/login");
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
            {session.status == "authenticated" ? (
              <Button title="Sign Out" onClick={handleSignOut} />
            ) : (
              <Button title="Sign in" onClick={handleSignIn} />
            )}
          </Navbar.Link>
        </Navbar.Content>
      </Navbar>
    </Layout>
  );
}
