function getCommentsAmount(comments) {
  let commentsAmount = 0;
  const commentsKeys = comments && Object.keys(comments);

  commentsKeys && commentsKeys.forEach(() => commentsAmount++);
  return commentsAmount;
}

export { getCommentsAmount };
