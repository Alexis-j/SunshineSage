import "./styles.css";

import PropTypes from "prop-types";

function DebugPanel({ data }) {
  return <pre className="debug-panel">{JSON.stringify(data, null, 2)}</pre>;
}

DebugPanel.propTypes = { data: PropTypes.any };
export default DebugPanel;
