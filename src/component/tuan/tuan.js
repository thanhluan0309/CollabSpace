import "foundation-sites/dist/css/foundation.min.css";

// import components
import { Button, Colors } from "react-foundation";
import * as Foundation from "react-foundation";
export const Tuan = () => {
  return (
    <>
      <h2>Thumbnail</h2>
      <div className="media-object-basics-example">
        <Foundation.MediaObject>
          <Foundation.MediaObjectSection>
            <Foundation.Thumbnail src="//unsplash.it/100" />
          </Foundation.MediaObjectSection>
          <Foundation.MediaObjectSection isMain>
            <h4>Dreams feel real while we're in them.</h4>
            <p>
              I'm going to improvise. Listen, there's something you should know
              about me... about inception. An idea is like a virus, resilient,
              highly contagious. The smallest seed of an idea can grow. It can
              grow to define or destroy you.
            </p>
          </Foundation.MediaObjectSection>
        </Foundation.MediaObject>
      </div>
      <h2>Button</h2>
      <Button color={Colors.SUCCESS}>Submit</Button>
      <Button color={Colors.INFO}>INFO</Button>
      <Button color={Colors.ALERT}>ALERT</Button>

      <br></br>
      <h2>menu</h2>
      <Foundation.Menu>
        <Foundation.MenuItem>
          <a>One</a>
        </Foundation.MenuItem>
        <Foundation.MenuItem>
          <a>Two</a>
        </Foundation.MenuItem>
        <Foundation.MenuItem>
          <a>Three</a>
        </Foundation.MenuItem>
        <Foundation.MenuItem>
          <a>Four</a>
        </Foundation.MenuItem>
      </Foundation.Menu>
      <h2>Link</h2>
      <div className="button-basics-example">
        <Foundation.Link>Learn More</Foundation.Link>
        <Foundation.Link>View All Features</Foundation.Link>
        <Button color={Colors.SUCCESS}>Save</Button>
        <Button color={Colors.ALERT}>Delete</Button>
      </div>
      <h2>Switch</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "20%",
        }}
        className="switch-radio-example"
      >
        <Foundation.Switch
          input={{
            type: "radio",
            name: "testGroup",
            defaultChecked: true,
          }}
        />
        <Foundation.Switch input={{ type: "radio", name: "testGroup" }} />
        <Foundation.Switch input={{ type: "radio", name: "testGroup" }} />
      </div>
      <h2>Grid</h2>
      <div className="grid-basics-example">
        <Foundation.Grid className="display">
          <Foundation.Cell small={2} large={4}>
            4 columns
          </Foundation.Cell>
          <Foundation.Cell small={4} large={4}>
            4 columns
          </Foundation.Cell>
          <Foundation.Cell small={6} large={4}>
            4 columns
          </Foundation.Cell>
        </Foundation.Grid>
        <Foundation.Grid className="display">
          <Foundation.Cell large={3}>3 columns</Foundation.Cell>
          <Foundation.Cell large={6}>6 columns</Foundation.Cell>
          <Foundation.Cell large={3}>3 columns</Foundation.Cell>
        </Foundation.Grid>
        <Foundation.Grid className="display">
          <Foundation.Cell small={6} large={2}>
            2 columns
          </Foundation.Cell>
          <Foundation.Cell small={6} large={8}>
            8 columns
          </Foundation.Cell>
          <Foundation.Cell small={12} large={2}>
            2 columns
          </Foundation.Cell>
        </Foundation.Grid>
        <Foundation.Grid className="display">
          <Foundation.Cell small={3}>3 columns</Foundation.Cell>
          <Foundation.Cell small={9}>9 columns</Foundation.Cell>
        </Foundation.Grid>
        <Foundation.Grid className="display">
          <Foundation.Cell large={4}>4 columns</Foundation.Cell>
          <Foundation.Cell large={8}>8 columns</Foundation.Cell>
        </Foundation.Grid>
        <Foundation.Grid className="display">
          <Foundation.Cell small={6} large={5}>
            5 columns
          </Foundation.Cell>
          <Foundation.Cell small={6} large={7}>
            7 columns
          </Foundation.Cell>
        </Foundation.Grid>
        <Foundation.Grid className="display">
          <Foundation.Cell large={6}>6 columns</Foundation.Cell>
          <Foundation.Cell large={6}>6 columns</Foundation.Cell>
        </Foundation.Grid>
      </div>
    </>
  );
};
