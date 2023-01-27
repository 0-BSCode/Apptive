import { type GetServerSidePropsContext } from "next";
import { getProviders } from "next-auth/react";
import { type Provider } from "next-auth/providers";

interface Props {
  providers: Provider[];
}

const Signin = ({ providers }: Props) => {
  return <div>Signin</div>;
};

export default Signin;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  return {
    props: {
      providers: await getProviders(),
    },
  };
};
