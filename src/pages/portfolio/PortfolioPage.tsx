import { Link } from "react-router-dom";
import { PageTransition } from "../../utils/motion";

const PortFolioPage = () => {
  return (
    <div>
      整備中...
      <footer className="back">
        <Link to="/">Back to galleries</Link>
      </footer>
      <PageTransition />
    </div>
  );
};

export default PortFolioPage;
