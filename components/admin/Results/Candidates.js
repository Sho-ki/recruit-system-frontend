import styles from "../../../styles/admin/Result.module.css";
import { useContext } from "react";
import candidateContext from "../../../store/CandidateContext";
import Link from "next/link";
import ShowMoreText from "react-show-more-text";

function Candidate({ id, firstname, lastname, email, score, date }) {
  const candidateCtx = useContext(candidateContext);
  const testDate = date.split("T")[0];
  return (
    <li className={[`row ${styles.resultList}`]}>
      <div className="col-2">{testDate}</div>
      <div className="col-1">{id}</div>
      <div className="col-2">{firstname}</div>
      <div className="col-2">{lastname}</div>

      <div className="col-2">
        <ShowMoreText
          lines={2}
          more="Show more"
          less="Show less"
          truncatedEndingComponent={"... "}
        >
          {email}{" "}
        </ShowMoreText>
      </div>
      <div className="col-1">{score ? score : "Not Submitted"}</div>
      <div className={`col-2 ${styles.btnArea}`}>
        {score && (
          <Link
            href={{
              pathname: "/admin/results/details",
              query: { id },
            }}
          >
            <i
              className={`fas fa-glasses fa-lg ${styles.detailsCandidateBtn}`}
              title="details"
            ></i>
          </Link>
        )}

        <i
          className={`fas fa-trash fa-lg ${styles.deleteCandidateBtn}`}
          onClick={() => candidateCtx.deleteCandidateHandler(id)}
          title="delete"
        ></i>
      </div>
    </li>
  );
}

export default Candidate;
