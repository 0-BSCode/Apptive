import Navbar from "@layouts/navbar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, {
  useEffect,
  type FunctionComponent,
  type ReactElement,
} from "react";

const authenticated = (Page: FunctionComponent) =>
  function Content(): ReactElement {
    const router = useRouter();
    const session = useSession();

    useEffect(() => {
      const redirect = () => {
        if (session.status === "unauthenticated") {
          router.push("/sign-in");
        }
      };

      redirect();
    }, [session]);

    return (
      <>
        <Navbar />
        <Page />
      </>
    );
  };

export default authenticated;
