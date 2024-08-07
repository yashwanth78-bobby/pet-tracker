import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

const ViewViolations = ({ violations = [] }) => {
  return (
    <div className="violations-container">
      <h2>Violation History</h2>
      <table className="violations-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Location</th>
            <th>Description</th>
            <th>Fine</th>
          </tr>
        </thead>
        <tbody>
          {violations.length > 0 ? (
            violations.map((violation, index) => (
              <tr key={index}>
                <td>{violation.date}</td>
                <td>{violation.location}</td>
                <td>{violation.description}</td>
                <td>${violation.fine}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No violations found.</td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="violations-footer">
        <p>Total Penalties: ${violations.reduce((total, violation) => total + violation.fine, 0)}</p>
        <div className="violations-actions">
          <button type="button" className="action-button pay-fine">Pay Fine</button>
          <button type="button" className="action-button appeal-violation">Appeal Violation</button>
        </div>
      </div>
    </div>
  );
}

// Add PropTypes validation
ViewViolations.propTypes = {
  violations: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      fine: PropTypes.number.isRequired,
    })
  )
};

export default ViewViolations;
