export function Desktopsb() {
  return (
    <div className="scren">
      <div className="scren__topcont">
        <div className="scren__selector">
          <span>
            <i className="bi bi-droplet-fill color-olive" />
            &nbsp;
            <i className="bi bi-chevron-down" />
          </span>
        </div>
        <div className="scren__options">
          <p>
            <i className="bi bi-image" />
            &nbsp;visual settings
          </p>
          <p>share</p>
          <p>save as template</p>
          <p>more</p>
        </div>
      </div>
      <div className="databox-parent">
        <iframe
          title="desktop-frame"
          src="https://app.databox.com/datawall/c1a16ac50a4126f9f4a6759b8db5d0c50590cc1cf?i"
          className="databox-child databox-child--desktop"
        />
      </div>
    </div>
  );
}
