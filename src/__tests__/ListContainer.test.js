import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Container from "../features/comicsList/Container";
import store from "../app/store"
import { Provider } from 'react-redux'

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("Container component", () => {
  test("it shows a container with list of comics", async () => {
    const fakeResponse = [{ name: "Mocked Name" }, { name: "Mocked 2" }];

    jest.spyOn(window, "fetch").mockImplementation(() => {
      const fetchResponse = {
        json: () => Promise.resolve(fakeResponse)
      };
      return Promise.resolve(fetchResponse);
    });

    await act(async () => {
      render (<Provider store={store}><Container /> </Provider>, container);
    });
    expect(container.contains(document.createElement('button'))).toBe(false);

    expect(container.textContent).toBe(" ComicBook Latest Issues List  Grid Network error, cannot display comics. ");

    window.fetch.mockRestore();
  });
});