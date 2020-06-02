import React, { useState, useEffect } from "react";
import axios from "axios";

export default ({ comments }) => {
  const renderedComments = comments.map((comment) => {
    let { content } = comment;
    if (comment.status === "rejected") {
      content = "This comment has been rejected";
    } else if (comment.status === "pending") {
      content = "This comment is pending moderation";
    }
    return <li key={comment.id}>{content}</li>;
  });

  return (
    <div>
      <div>{renderedComments}</div>
    </div>
  );
};
