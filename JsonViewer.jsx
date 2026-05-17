function JsonViewer({ layout }) {
  return (
    <pre>
      {JSON.stringify(layout, null, 2)}
    </pre>
  );
}

export default JsonViewer;