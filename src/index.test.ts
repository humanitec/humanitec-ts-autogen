import { describe, expect, test, beforeEach, afterEach } from "vitest";
import { createServer, IncomingMessage, RequestListener } from "node:http";
import { AddressInfo } from "node:net";

import { apiConfig, PublicApi } from ".";

interface SimpleServer {
  url: string;
  stop: () => Promise<void>;
}

const simpleServer = async (
  receivedRequests: IncomingMessage[],
): Promise<SimpleServer> => {
  const requestListener: RequestListener = function (req, res) {
    receivedRequests.push(req);

    res.writeHead(200);
    res.end(JSON.stringify({}));
  };

  const server = createServer(requestListener);

  await new Promise((res, rej) => {
    server.once("listening", res).once("error", rej);
    server.listen(0);
  });

  return {
    url: `http://localhost:${(server.address() as AddressInfo).port}`,
    stop: () => {
      return new Promise((res, rej) =>
        server.close((err) => (err ? rej(err) : res)),
      );
    },
  };
};

describe("client", () => {
  let server: SimpleServer;
  let receivedRequests: IncomingMessage[];
  beforeEach(async () => {
    receivedRequests = [];
    server = await simpleServer(receivedRequests);
  });

  afterEach(async () => {
    server.stop();
  });

  test("succeeds", async () => {
    const client = new PublicApi(
      apiConfig({
        token: "DUMMY",
        apiHost: server.url,
      }),
    );

    await client.getCurrentUser();

    expect(receivedRequests).toHaveLength(1);
    expect(receivedRequests[0].headers.authorization).toEqual("Bearer DUMMY");
  });

  test("includes a humanitec-user-agent", async () => {
    const client = new PublicApi(
      apiConfig({
        token: "DUMMY",
        apiHost: server.url,
        internalApp: "test/latest",
      }),
    );

    await client.getCurrentUser();

    expect(receivedRequests).toHaveLength(1);
    expect(receivedRequests[0].headers["humanitec-user-agent"]).toEqual(
      "sdk humanitec-ts-autogen/latest; app test/latest",
    );
  });
});
