import React, { useState } from "react";

export default function FeedbackForm() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [comments, setComments] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your feedback, ${name || "User"}!`);
  };

  return (
    <div className="ff-root">
      <div className="ff-left">
        <h1 className="ff-title">Feedback Form</h1>

        <form className="ff-form" onSubmit={handleSubmit}>
          <label className="ff-label">Name</label>
          <input
            className="ff-input"
            type="text"
            value={name}
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label className="ff-label">Rating (1–5)</label>
          <input
            className="ff-input"
            type="number"
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
          />

          <label className="ff-label">Comment</label>
          <textarea
            className="ff-textarea"
            rows="4"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            placeholder="Share your thoughts..."
            required
          />

          <button className="ff-button" type="submit">
            Submit
          </button>
        </form>
      </div>

      <div className="ff-right">
        <div className="ff-summary">
          <h2>Summary</h2>
          <p>
            <strong>Name:</strong> {name || "—"}
          </p>
          <p>
            <strong>Rating:</strong> {rating || "—"}
          </p>
          <p>
            <strong>Comment:</strong> {comments || "—"}
          </p>
        </div>
      </div>
    </div>
  );
}
