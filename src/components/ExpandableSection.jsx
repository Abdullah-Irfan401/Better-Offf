import { useState } from 'react';

import styles from "./ExpandableSection.module.css"


function ExpandableSection() {

    const [isExpanded, setIsExpanded] = useState(false);

  // Function to toggle the state
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };


    return (
        <div className={styles.ExpandableSection}>
            <div className={styles.expandableSection}>
      <div className={styles.header} onClick={toggleExpand}>
        <div className={styles.number}>1</div>
        <div className={styles.title}>Strategy</div>
        <div className={styles.toggleIcon}>
          {isExpanded ? '-' : '+'}
        </div>
      </div>

      {/* Conditionally render the content */}
      {isExpanded && (
        <div className={styles.content}>
          <p>
            Behind every surprising campaign, compelling site launch, or must-watch piece of content...
          </p>
          <div className={styles.tags}>
            <span>Brand Architecture & Roadmaps</span>
            <span>Brand Strategy</span>
            <span>Digital Strategy</span>
            <span>Product Launch Strategy</span>
            <span>SEO & Content Strategy</span>
            <span>Information Architecture (IA)</span>
            <span>Design Systems</span>
            <span>Brand Messaging</span>
            <span>User Research & Testing</span>
            <span>New Revenue Streams</span>
          </div>
        </div>
      )}
    </div>
        </div>
    )
}

export default ExpandableSection
