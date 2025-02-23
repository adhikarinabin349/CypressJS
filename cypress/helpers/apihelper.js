export const apiHelper = {
    getRequest: (url, headers = {}) => {
      return cy.request({
        method: "GET",
        url,
        headers,
        failOnStatusCode: false,
      });
    },
  
    postRequest: (url, body, headers = {}) => {
      return cy.request({
        method: "POST",
        url,
        body,
        headers,
        failOnStatusCode: false,
      });
    },
  
    putRequest: (url, body, headers = {}) => {
      return cy.request({
        method: "PUT",
        url,
        body,
        headers,
        failOnStatusCode: false,
      });
    },
  
    deleteRequest: (url, headers = {}) => {
      return cy.request({
        method: "DELETE",
        url,
        headers,
        failOnStatusCode: false,
      });
    },
  };