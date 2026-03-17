class PaginationHelper {
	constructor(collection, itemsPerPage) {
	  this.collection = collection
    this.itemsPerPage = itemsPerPage
	}
	itemCount() {
	  return this.collection.length
	}
	pageCount() {
    return Math.ceil(this.collection.length / this.itemsPerPage)
	}
	pageItemCount(pageIndex) {
  let totalPages = this.pageCount()
  
  if(pageIndex < 0 || pageIndex >= totalPages){
    return -1
  }
  if (pageIndex === totalPages - 1) {
    let leftoverItems = this.collection.length % this.itemsPerPage

    if (leftoverItems === 0) {
      return this.itemsPerPage
    }

    return leftoverItems
  }

  return this.itemsPerPage

	}
	pageIndex(itemIndex) {
	if(itemIndex < 0 || itemIndex >= this.collection.length){
    return -1
  }
  let pageNumber = Math.floor(itemIndex / this.itemsPerPage)
  
  return pageNumber
	}
}

Typescript

