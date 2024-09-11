import { useState } from 'react';

import Styles from "./ExpandableSection.module.css"


const ExpandableSection = ({ number, title, content, tags }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };


    return (
        <div className={Styles.ExpandableSection}>
          <div className={Styles.expandableSection}>
            <div className={Styles.header} onClick={toggleExpand}>
              <div className={Styles.number}> {number} </div>
              <div className={Styles.title}> {title} </div>
              <div className={Styles.toggleIcon}>
                {isExpanded ? '-' : '+'}
            </div>
          </div>


      {isExpanded && (
        <div className={Styles.content}>
          <p>
            {content}
          </p>
          <div className={Styles.tags}>
            {tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>
        </div>
      )}
    </div>
        </div>
    )
}

export default ExpandableSection
