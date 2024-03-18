function createProductValidation(props) {
  if (!props?.title?.trim()) {
    throw new Error('Title is required. Please check if it is provided.');
  }
}

module.exports = { createProductValidation };
