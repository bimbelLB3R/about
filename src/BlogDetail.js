import { useParams } from "react-router-dom";

export default function BlogDetail() {
  const urlParams=useParams();
    console.log(urlParams);
  
  return (
    <div>
      <h1>Blog Detail</h1>
      <p>Halo ini detail {urlParams.slug}</p>
    </div>
  );
}
