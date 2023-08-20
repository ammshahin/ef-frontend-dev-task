$(document).ready(function() {
    const desktopMenuElement = $("#secondaryMenuExpand");
    const pcMenuElement = $("#pcMenu");
    const overlay = $("#overlay");
    const searchIcon = $("#searchIcon");
  
    pcMenuElement.click(function() {
      if (!desktopMenuElement.hasClass("show-desktop-menu")) {
        desktopMenuElement.addClass("show-desktop-menu");
        pcMenuElement.addClass("active");
        searchIcon.addClass("active");
        overlay.css("display", "block");
      } else {
        desktopMenuElement.removeClass("show-desktop-menu");
        overlay.css("display", "none");
      }
    });
  
    overlay.click(function() {
      if (desktopMenuElement.hasClass("show-desktop-menu")) {
        desktopMenuElement.removeClass("show-desktop-menu");
        overlay.css("display", "none");
      }
    });
  });
  