export default function Home() {
  const text = "This is a test文章です。Please submit the file by 明日。";
  const text2 = `「Success doesn't come overnight」と彼は言ったが、大切なのは"consistency（継続性）"である。`;

  const fontSizes = [10, 14, 16, 20, 24, 32, 36, 40];

  return (
    <main
      style={{
        padding: "24px",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif",
        lineHeight: 1.6,
      }}
    >
      <h1 style={{ fontSize: 24, marginBottom: 32 }}>フォントテスト</h1>

      {fontSizes.map((size) => (
        <div key={size} style={{ marginBottom: 32 }}>
          <div style={{ fontSize: 12, color: "#555", marginBottom: 4 }}>
            {size}px
          </div>
          <div style={{ fontSize: size }}>
            <div>{text}</div>
            <div>{text2}</div>
            <br />
            <div>
              <strong>{text}</strong>
            </div>
            <div>
              <strong>{text2}</strong>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}
