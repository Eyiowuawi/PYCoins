const Background = ({ children }) => (
  <main className="background">
    <div className="background_container">
      <div className="background_bgcolor"></div>
      <div className="background_ext"></div>
      <div className="background_content">{children}</div>
    </div>
  </main>
);

export default Background;
