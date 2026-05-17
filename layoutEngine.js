function updateLayout(layout, message) {
  const text = message.toLowerCase();

  const headline = layout.layers.find(l => l.role === "headline");
  const product = layout.layers.find(l => l.role === "product");
  const badge = layout.layers.find(l => l.role === "offer-badge");

  if (text.includes("9:16")) {
    layout.canvas.width = 1080;
    layout.canvas.height = 1920;
  }

  if (text.includes("headline") && text.includes("top")) {
    headline.y = 40;
  }

  if (text.includes("headline") && text.includes("smaller")) {
    headline.fontSize -= 10;
  }

  if (text.includes("headline") && text.includes("larger")) {
    headline.fontSize += 10;
  }

  if (text.includes("badge") && text.includes("higher")) {
    badge.y -= 100;
  }

  if (text.includes("product") && text.includes("large")) {
    product.width += 100;
    product.height += 100;
  }

  return layout;
}

module.exports = updateLayout;
