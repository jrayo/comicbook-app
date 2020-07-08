export const getId = url => {
    return url
      .split("/")
      .filter(el => !!el)
      .pop();
  };
  