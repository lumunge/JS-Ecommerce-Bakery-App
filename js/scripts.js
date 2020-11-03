getComments();
function getComments() {
  $.get("./comments", function(data) {
    if (!data) {
      console.log("No data was received");
    }
    console.log("Data was received");
    for (let i = 0; i < data.length; i++) {
      console.log(data[i].name);
    }
    showContent(data);
  });
}

function showComments(comments) {
  let commentSection = document.querySelector(".suggestions");
  for (let i = 0; i < comments.length; i++) {
    let section = document.createElement("section");
    section.className += "suggestion";
    let heading = document.createElement("h3");
    heading.innerHTML = comments[i].name;
    let comment = document.createElement("p");
    comment.innerHTML = comments[i].comment;
    section.appendChild(heading);
    section.appendChild(comment);
    commentSection.appendChild(section);
  }
}
