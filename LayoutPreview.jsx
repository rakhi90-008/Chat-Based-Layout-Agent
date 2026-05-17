function LayoutPreview({ layout }) {
  return (
    <div
      style={{
        position: "relative",
        width: "400px",
        height: "700px",
        border: "1px solid black",
        marginTop: "20px",
      }}
    >
      {layout.layers.map((layer) => (
        <div
          key={layer.id}
          style={{
            position: "absolute",
            left: layer.x / 3,
            top: layer.y / 3,
            width: layer.width / 3,
            height: layer.height / 3,
            border: "1px solid gray",
            fontSize: layer.fontSize ? layer.fontSize / 3 : 16,
          }}
        >
          {layer.text || layer.role}
        </div>
      ))}
    </div>
  );
}

export default LayoutPreview;