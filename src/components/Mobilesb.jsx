export function Mobilesb() {
  return (
    <div className="screnmb">
      <div className="screnmb__topcont">
        <div className="screnmb__selector">
          <span>
            <i className="bi bi-droplet-fill color-olive" />
            &nbsp;
            <i className="bi bi-chevron-down" />
          </span>
        </div>
        <div className="screnmb__options--mobile">
          <p>share</p>
        </div>
      </div>
      <div className="databox-parentmb">
        <iframe
          title="mobile-frame"
          src="https://app.databox.com/datawall/c1a16ac50a4126f9f4a6759b8db5d0c50590cc1cf?i"
          className="databox-childmb databox-child--mobile"
        />
      </div>
    </div>
  );
}
