const { test, describe, it, beforeEach, mock } = require("node:test");
const assert = require("node:assert");
const MakeRequest = require("./../src/index");

describe("Mocking Tests", async () => {
  beforeEach(() => mock.restoreAll());

  it("fetchDataFromAPI should return a product", async (t) => {
    mock
      .method(MakeRequest, MakeRequest.fetchDataFromAPI.name)
      .mock.mockImplementation(async () => {
        return {
          userId: 1,
          id: 1,
          title: "delectus aut autem",
          completed: false,
        };
      });
    const res = await MakeRequest.fetchDataFromAPI();
    assert.strictEqual(res.userId, 1);
    assert.strictEqual(res.completed, false);
  });

  it("fetchDataFromAPI should return product with given ID", async (t) => {
    const id = 3;
    mock
      .method(MakeRequest, MakeRequest.fetchDataFromAPI.name)
      .mock.mockImplementation(async (id) => {
        return {
          userId: 1,
          id: id,
          title: "delectus aut autem",
          completed: false,
        };
      });
    const res = await MakeRequest.fetchDataFromAPI(id);
    assert.deepEqual(res.id, id);
  });

  it("should create a slug based on the title", async (t) => {
    const slugSpy = mock.method(MakeRequest, "slugifyTitle");
    mock
      .method(MakeRequest, "fetchDataFromAPI")
      .mock.mockImplementation(async () => {
        return {
          userId: 1,
          id: 1,
          title: "delectus aut autem",
          completed: false,
        };
      });
    await MakeRequest.addToDB();
    const call = MakeRequest.slugifyTitle.mock.calls[0];
    assert.deepEqual(slugSpy.mock.calls.length, 1);
    assert.deepEqual(MakeRequest.fetchDataFromAPI.mock.callCount(), 1);
    assert.strictEqual(call.result.slug, `delectus-aut-autem1`);
  });
});
