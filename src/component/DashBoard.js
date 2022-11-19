import { useNavigate } from "react-router-dom";
import * as f from "react-foundation";
export const Dashboard = () => {
  let nav = useNavigate();
  return (
    <>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "506px",
          display: "flex",
        }}
      >
        <div style={{ margin: "auto" }}>
          <f.Button
            style={{ marginRight: "20px" }}
            onClick={() => nav("/dang")}
          >
            dang
          </f.Button>
          <f.Button
            style={{ marginRight: "20px" }}
            onClick={() => nav("/luan")}
          >
            luan
          </f.Button>
          <f.Button
            style={{ marginRight: "20px" }}
            onClick={() => nav("/tuan")}
          >
            tuan
          </f.Button>
        </div>
      </div>
    </>
  );
};
