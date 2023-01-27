import { type GetServerSidePropsContext } from "next";
import { signIn, getProviders } from "next-auth/react";
import { type Provider } from "next-auth/providers";
import icons from "@assets/images/icons";

interface Props {
  providers: Provider[];
}

const Signin = ({ providers }: Props) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-16">
      <div className="bg-gradient--purple cdrop-shadow flex flex-col items-center justify-center rounded-full p-5">
        <img src={icons.pencilIcon} alt={"Logo"} className="w-10" />
      </div>
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-xl font-semibold">Apptive</h1>
        <p className="text-sm text-gray-500">Take better notes today</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        {Object.values(providers).map((provider) => (
          <button
            key={provider.id}
            className="bg-gradient--purple cdrop-shadow rounded-lg py-4 px-5"
            onClick={() => {
              signIn(provider.id, {
                callbackUrl: "/",
              });
            }}
          >
            Continue with {provider.name}
          </button>
        ))}
      </div>
    </main>
  );
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
