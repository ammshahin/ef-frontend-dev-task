$(document).ready(function() {
    const searchIcon = $("#searchIcon");
    const searchInput = $("#searchInput");
    const headerSecondaryMenuContainer = $("#headerSecondaryMenuContainer");
    const searchExpand = $("#searchExpand");
    const closeSearch = $("#closeSearch");
  
    searchIcon.click(function() {
      searchExpand.addClass("searchExpandShow");
      searchInput.addClass("searchInputActive");
      headerSecondaryMenuContainer.css("background", "none");
    });
  
    closeSearch.click(function() {
      searchExpand.removeClass("searchExpandShow");
      headerSecondaryMenuContainer.css("background", "linear-gradient(to right, #08131a, #36434c)");
      searchInput.removeClass("searchInputActive");
    });
  });
  