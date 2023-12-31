const FormatPrice = ({ price }) => {
  return Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "OMR",
    maximumFractionDigits: 2,
  }).format(price);
};

export default FormatPrice;
