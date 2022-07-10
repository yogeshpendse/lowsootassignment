import { useDash } from "../context/Dashcontext";

export function Menuoptions() {
  const { state } = useDash();
  return (
    <>
      {state.first === 1 && <Option1 />}
      {state.first === 2 && <Option2 />}
      {state.first === 3 && <Option3 />}
      {state.first === 4 && <Option4 />}
    </>
  );
}

function Option1() {
  return (
    <div className="menu cmenu">
      <p className="menu__name">
        <span>Metric Library</span>
        <button className="menu__nameclose">
          <i className="bi bi-x-lg" />
        </button>
      </p>
      <div className="menu__content">
        <div className="menucontainer__metriclib">
          <div className="menucontainer__metriclibcont">
            <div className="menucontainer__metriclibconttop">
              <div className="menucontainer__metriclibimg">
                <img
                  className="menucontainer__metriclibimgin"
                  src="https://www.gstatic.com/analytics-suite/header/suite/v2/ic_analytics.svg"
                  alt="Google Analytics"
                />
              </div>
              <div className="menucontainer__metriclibconttext">
                Google
                <br />
                Analytics 4
              </div>
            </div>
            <p className="menucontainer__metriclibmessage">
              Lowsuit landing page
            </p>
            <span className="menucontainer__metriclibsymbol">
              <i className="bi bi-lightning-charge-fill" />
            </span>
          </div>
          <p className="menucontainer__metriclibwarn">
            <i className="bi bi-cone-striped" /> On Hold
          </p>
          <p className="menucontainer__metriclibwarnmessage">
            Your subscription has expired. Please update your billing info.
          </p>
          <button className="menucontainer__metriclibbill">billing</button>
        </div>
      </div>
    </div>
  );
}
function Option2() {
  return (
    <div className="menu cmenu">
      <p className="menu__name">
        <span>Visualization Types</span>
        <button className="menu__nameclose">
          <i className="bi bi-x-lg" />
        </button>
      </p>
      <div className="menu__content">
        <div className="menucontainer__visualization">
          <div className="menucontainer__item">
            <div className="menucontainer__logo">
              <i className="bi bi-earbuds" />
            </div>
            <p className="menucontainer__itemname">itemname</p>
          </div>
          <div className="menucontainer__item">
            <div className="menucontainer__logo">
              <i className="bi bi-earbuds" />
            </div>
            <p className="menucontainer__itemname">itemname</p>
          </div>
          <div className="menucontainer__item">
            <div className="menucontainer__logo">
              <i className="bi bi-earbuds" />
            </div>
            <p className="menucontainer__itemname">itemname</p>
          </div>
          <div className="menucontainer__item">
            <div className="menucontainer__logo">
              <i className="bi bi-earbuds" />
            </div>
            <p className="menucontainer__itemname">itemname</p>
          </div>
          <div className="menucontainer__item">
            <div className="menucontainer__logo">
              <i className="bi bi-earbuds" />
            </div>
            <p className="menucontainer__itemname">itemname</p>
          </div>
          <div className="menucontainer__item">
            <div className="menucontainer__logo">
              <i className="bi bi-earbuds" />
            </div>
            <p className="menucontainer__itemname">itemname</p>
          </div>
          <div className="menucontainer__item">
            <div className="menucontainer__logo">
              <i className="bi bi-earbuds" />
            </div>
            <p className="menucontainer__itemname">itemname</p>
          </div>
          <div className="menucontainer__item">
            <div className="menucontainer__logo">
              <i className="bi bi-earbuds" />
            </div>
            <p className="menucontainer__itemname">itemname</p>
          </div>
          <div className="menucontainer__item">
            <div className="menucontainer__logo">
              <i className="bi bi-earbuds" />
            </div>
            <p className="menucontainer__itemname">itemname</p>
          </div>
          <div className="menucontainer__item">
            <div className="menucontainer__logo">
              <i className="bi bi-earbuds" />
            </div>
            <p className="menucontainer__itemname">itemname</p>
          </div>
          <div className="menucontainer__item">
            <div className="menucontainer__logo">
              <i className="bi bi-earbuds" />
            </div>
            <p className="menucontainer__itemname">itemname</p>
          </div>
          <div className="menucontainer__item">
            <div className="menucontainer__logo">
              <i className="bi bi-earbuds" />
            </div>
            <p className="menucontainer__itemname">itemname</p>
          </div>
          <div className="menucontainer__item">
            <div className="menucontainer__logo">
              <i className="bi bi-earbuds" />
            </div>
            <p className="menucontainer__itemname">itemname</p>
          </div>
          <div className="menucontainer__item">
            <div className="menucontainer__logo">
              <i className="bi bi-earbuds" />
            </div>
            <p className="menucontainer__itemname">itemname</p>
          </div>
          <div className="menucontainer__item">
            <div className="menucontainer__logo">
              <i className="bi bi-earbuds" />
            </div>
            <p className="menucontainer__itemname">itemname</p>
          </div>
          <div className="menucontainer__item">
            <div className="menucontainer__logo">
              <i className="bi bi-earbuds" />
            </div>
            <p className="menucontainer__itemname">itemname</p>
          </div>
          <div className="menucontainer__item">
            <div className="menucontainer__logo">
              <i className="bi bi-earbuds" />
            </div>
            <p className="menucontainer__itemname">itemname</p>
          </div>
          <div className="menucontainer__item">
            <div className="menucontainer__logo">
              <i className="bi bi-earbuds" />
            </div>
            <p className="menucontainer__itemname">itemname</p>
          </div>
          <div className="menucontainer__item">
            <div className="menucontainer__logo">
              <i className="bi bi-earbuds" />
            </div>
            <p className="menucontainer__itemname">itemname</p>
          </div>
          <div className="menucontainer__item">
            <div className="menucontainer__logo">
              <i className="bi bi-earbuds" />
            </div>
            <p className="menucontainer__itemname">itemname</p>
          </div>
          <div className="menucontainer__item">
            <div className="menucontainer__logo">
              <i className="bi bi-earbuds" />
            </div>
            <p className="menucontainer__itemname">itemname</p>
          </div>
        </div>
      </div>
    </div>
  );
}
function Option3() {
  return (
    <div className="menu cmenu">
      <p className="menu__name">
        <span>My metrics</span>
        <button className="menu__nameclose">
          <i className="bi bi-x-lg" />
        </button>
      </p>
      <div className="menu__content">
        <div className="menucontainer__mymetrics">
          <input
            className="menu__search"
            placeholder="Search Metrics"
            type="text"
          />
          <div className="menucontainer__mymetricslist">
            <div className="menucontainer__mymetricslistitem">
              <div className="menucontainer__mymetricslistitemlogo">
                <i className="bi bi-bar-chart-fill" />
              </div>
              <div className="menucontainer__mymetricsnamecont">
                <p className="menucontainer__mymetricsnamehead">
                  Lorem ipsum dolor sit amet.
                </p>
                <p className="menucontainer__mymetricsnameshort">
                  <i className="bi bi-circle-fill" /> Lowsoot landing page.
                </p>
                <span className="menucontainer__mymetricssideicon">
                  <i className="bi bi-circle-fill" />
                </span>
                <div className="menucontainer__mymetricslistitemtooltip">
                  <p>
                    <i className="bi bi-arrow-90deg-right"></i>
                  </p>
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
              </div>
            </div>
            <div className="menucontainer__mymetricslistitem">
              <div className="menucontainer__mymetricslistitemlogo">
                <i className="bi bi-bar-chart-fill" />
              </div>
              <div className="menucontainer__mymetricsnamecont">
                <p className="menucontainer__mymetricsnamehead">
                  Lorem ipsum dolor sit amet.
                </p>
                <p className="menucontainer__mymetricsnameshort">
                  <i className="bi bi-circle-fill" /> Lowsoot landing page.
                </p>
                <span className="menucontainer__mymetricssideicon">
                  <i className="bi bi-circle-fill" />
                </span>
                <div className="menucontainer__mymetricslistitemtooltip">
                  <p>
                    <i className="bi bi-arrow-90deg-right"></i>
                  </p>
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
              </div>
            </div>
            <div className="menucontainer__mymetricslistitem">
              <div className="menucontainer__mymetricslistitemlogo">
                <i className="bi bi-bar-chart-fill" />
              </div>
              <div className="menucontainer__mymetricsnamecont">
                <p className="menucontainer__mymetricsnamehead">
                  Lorem ipsum dolor sit amet.
                </p>
                <p className="menucontainer__mymetricsnameshort">
                  <i className="bi bi-circle-fill" /> Lowsoot landing page.
                </p>
                <span className="menucontainer__mymetricssideicon">
                  <i className="bi bi-circle-fill" />
                </span>
                <div className="menucontainer__mymetricslistitemtooltip">
                  <p>
                    <i className="bi bi-arrow-90deg-right"></i>
                  </p>
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
              </div>
            </div>
            <div className="menucontainer__mymetricslistitem">
              <div className="menucontainer__mymetricslistitemlogo">
                <i className="bi bi-bar-chart-fill" />
              </div>
              <div className="menucontainer__mymetricsnamecont">
                <p className="menucontainer__mymetricsnamehead">
                  Lorem ipsum dolor sit amet.
                </p>
                <p className="menucontainer__mymetricsnameshort">
                  <i className="bi bi-circle-fill" /> Lowsoot landing page.
                </p>
                <span className="menucontainer__mymetricssideicon">
                  <i className="bi bi-circle-fill" />
                </span>
                <div className="menucontainer__mymetricslistitemtooltip">
                  <p>
                    <i className="bi bi-arrow-90deg-right"></i>
                  </p>
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
              </div>
            </div>
            <div className="menucontainer__mymetricslistitem">
              <div className="menucontainer__mymetricslistitemlogo">
                <i className="bi bi-bar-chart-fill" />
              </div>
              <div className="menucontainer__mymetricsnamecont">
                <p className="menucontainer__mymetricsnamehead">
                  Lorem ipsum dolor sit amet.
                </p>
                <p className="menucontainer__mymetricsnameshort">
                  <i className="bi bi-circle-fill" /> Lowsoot landing page.
                </p>
                <span className="menucontainer__mymetricssideicon">
                  <i className="bi bi-circle-fill" />
                </span>
                <div className="menucontainer__mymetricslistitemtooltip">
                  <p>
                    <i className="bi bi-arrow-90deg-right"></i>
                  </p>
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
              </div>
            </div>
            <div className="menucontainer__mymetricslistitem">
              <div className="menucontainer__mymetricslistitemlogo">
                <i className="bi bi-bar-chart-fill" />
              </div>
              <div className="menucontainer__mymetricsnamecont">
                <p className="menucontainer__mymetricsnamehead">
                  Lorem ipsum dolor sit amet.
                </p>
                <p className="menucontainer__mymetricsnameshort">
                  <i className="bi bi-circle-fill" /> Lowsoot landing page.
                </p>
                <span className="menucontainer__mymetricssideicon">
                  <i className="bi bi-circle-fill" />
                </span>
                <div className="menucontainer__mymetricslistitemtooltip">
                  <p>
                    <i className="bi bi-arrow-90deg-right"></i>
                  </p>
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
              </div>
            </div>
            <div className="menucontainer__mymetricslistitem">
              <div className="menucontainer__mymetricslistitemlogo">
                <i className="bi bi-bar-chart-fill" />
              </div>
              <div className="menucontainer__mymetricsnamecont">
                <p className="menucontainer__mymetricsnamehead">
                  Lorem ipsum dolor sit amet.
                </p>
                <p className="menucontainer__mymetricsnameshort">
                  <i className="bi bi-circle-fill" /> Lowsoot landing page.
                </p>
                <span className="menucontainer__mymetricssideicon">
                  <i className="bi bi-circle-fill" />
                </span>
                <div className="menucontainer__mymetricslistitemtooltip">
                  <p>
                    <i className="bi bi-arrow-90deg-right"></i>
                  </p>
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
              </div>
            </div>
            <div className="menu__addtometrics">
              <p>
                <i className="bi bi-plus-circle" />
                &nbsp; Add to metrics
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function Option4() {
  const data = {
    data: {
      $uyg: "1",
      y: "1",
      url: "http://url.com",
    },
    event: "start",
    show: 1,
    id: 50,
  };
  return (
    <>
      <div className="menu cmenu">
        <p className="menu__name">
          <span>Terminal</span>
          <button className="menu__nameclose">
            <i className="bi bi-x-lg" />
          </button>
        </p>
        <div className="menu__content">
          <div className="menucontainer__console">
            <pre>{JSON.stringify(data, undefined, 2)}</pre>
            <span className="menucontainer__consolecopy">
              <i className="bi bi-clipboard-fill"></i>
            </span>
          </div>
          <div className="menucontainer__consoleops">
            <p className="menucontainer__consoletoken">access token</p>
            <p className="menucontainer__consoletokenops">Lorem ipsum</p>
            <p className="menucontainer__consolepush">
              <i className="bi bi-check-lg" />
              &nbsp;push
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
