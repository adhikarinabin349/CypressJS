import { homePage } from "../../pages/homePage";
import { waitForElement } from "../../helpers/actions";
import { apiHelper } from "../../helpers/apiHelper";

describe("Google Search Test", () => {
  it("Should visit Google and search for Cypress", () => {
    homePage.visit();
    waitForElement('[aria-label="Search"]');
    homePage.search("Cypress");
    cy.fixture("testData").then((data) => {
      homePage.search(data.searchQuery);
    });
  });
});

describe("API Testing with Cypress", () => {
  const baseUrl = "https://jsonplaceholder.typicode.com/posts"; // Sample API

  it("Should create a new post", () => {
    apiHelper.postRequest(baseUrl, {
      title: "foo",
      body: "bar",
      userId: 1,
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property("id");
    });
  });

  it("Should get a post by ID", () => {
    apiHelper.getRequest(`${baseUrl}/1`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("id", 1);
    });
  });

  it("Should update a post", () => {
    apiHelper.putRequest(`${baseUrl}/1`, {
      title: "updated title",
      body: "updated body",
      userId: 1,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("title", "updated title");
    });
  });

  it("Should delete a post", () => {
    apiHelper.deleteRequest(`${baseUrl}/1`).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});