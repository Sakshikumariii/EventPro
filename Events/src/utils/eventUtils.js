export const getEventId = (event) => event?.id || event?._id || "";

export const formatEventPrice = (price) => {
  if (typeof price === "number") {
    return `₹${price.toLocaleString("en-IN")}`;
  }

  if (price === null || price === undefined || price === "") {
    return "₹0";
  }

  return `₹${price}`;
};

export const getSafeText = (value) => (value ?? "").toString().toLowerCase();
