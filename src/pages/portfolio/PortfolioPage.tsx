import { Link } from "react-router-dom";
import { PageTransition } from "../../utils/motion";
import styles from "./PortfolioPage.module.scss";

interface Props {
  title?: string;
  titleWidth?: number;
}

const PortFolioPage = ({ title, titleWidth }: Props) => {
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
