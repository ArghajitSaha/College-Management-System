$(document).ready(function () {
  // Add functionality to the form
  $("#notice-form").submit(function (event) {
    event.preventDefault();

    // Get the current date and time
    let now = new Date();
    let date = now.getDate() + "/" + (now.getMonth() + 1) + "/" + now.getFullYear();
    let time = now.toLocaleTimeString();

    // Create a new notice card
    let noticeCard = $("<div>").addClass("card notice-card");
    let cardHeader = $("<div>").addClass("card-header");
    let cardTitle = $("<h5>").addClass("card-title").text($("#noticeTitle").val());
    let cardBody = $("<div>").addClass("card-body");
    let noticeContent = $("<p>").addClass("card-text notice-content").text($("#noticeContent").val());
    let publishDate = $("<p>").addClass("card-text publish-date").text("Published on " + date + " at " + time);
    let noticeActions = $("<div>").addClass("btn-group notice-actions").attr("role", "group").attr("aria-label", "Notice Actions");
    let editButton = $("<button>").addClass("btn btn-sm btn-primary edit-notice").text("Edit");
    let deleteButton = $("<button>").addClass("btn btn-sm btn-danger delete-notice").text("Delete");

    // Append elements to the card
    cardHeader.append(cardTitle);
    noticeActions.append(editButton, deleteButton);
    cardBody.append(noticeContent, publishDate, noticeActions);
    noticeCard.append(cardHeader, cardBody);

    // Add the new notice to the card container
    $(".card-container").append(noticeCard);

    // Reset the form
    $("#notice-form")[0].reset();
  });

  // Handle delete notice button click
  $(document).on("click", ".delete-notice", function () {
    $(this).closest(".notice-card").remove();
  });

  // Handle edit notice button click
  $(document).on("click", ".edit-notice", function () {
    let cardBody = $(this).closest(".card-body");
    let noticeContent = cardBody.find(".notice-content").text();
    let noticeTitle = cardBody.prev().find(".card-title").text();

    // Populate form with existing notice details
    $("#noticeTitle").val(noticeTitle);
    $("#noticeContent").val(noticeContent);

    // Remove the notice card
    $(this).closest(".notice-card").remove();
  });
});
