import { LoaderFunction, useLoaderData } from "remix";
import Footer from "~/components/Footer";
import SelectServer from "~/components/SelectServer";
import { makeApiRequest } from "~/utils/api.server";
import { ServerList } from "~/utils/contracts";

export const loader: LoaderFunction = async ({ request }) => {
  const guilds = await makeApiRequest(request, "/v1/guilds", "get");

  return guilds;
};

export default function Index() {
  const guilds = useLoaderData<ServerList[]>();

  return (
    <div className="mt-3">
      {guilds.length > 0 ? (
        <h1 className="text-center text-lg font-bold text-gray-700 dark:text-white md:text-2xl lg:text-3xl">
          Your Servers
        </h1>
      ) : (
        <div className="mx-auto w-full max-w-lg space-y-2 text-lg">
          <h1 className="text-center text-lg font-bold text-gray-700 dark:text-white md:text-2xl lg:text-3xl">
            No Servers
          </h1>
          <p className="text-center text-gray-400 dark:text-slate-200">
            You have no servers that you can manage. You should{" "}
            <a
              className="underline decoration-blue-500 decoration-2"
              href="https://support.discord.com/hc/en-us/articles/204849977-How-do-I-create-a-server-"
              rel="noreferrer"
            >
              try creating your own server
            </a>{" "}
            and invite Payload to your new server!
          </p>
        </div>
      )}

      <main className="mx-auto mt-4 flex min-h-[calc(100vh-60px)] max-w-sm flex-col gap-5 py-6 sm:max-w-lg md:max-w-xl lg:max-w-4xl">
        {guilds.length > 0
          ? guilds.map((guild) => (
              <SelectServer key={guild.id} server={guild} />
            ))
          : null}
      </main>

      <Footer />
    </div>
  );
}
