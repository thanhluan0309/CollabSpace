import { useNavigate } from "react-router-dom";
export const Dashboard = () => {
  let nav = useNavigate();
  return (
    <>
      <button onClick={() => nav("/luan")}>luan</button>
      <button onClick={() => nav("/dang")}>dang</button>
      <button onClick={() => nav("/tuan")}>tuan</button>
    </>
  );
};
