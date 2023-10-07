const handlePageChange = (page, setCurrentPage, onPageChange) => {
  setCurrentPage(page);
  onPageChange(page);
};

export default handlePageChange;
