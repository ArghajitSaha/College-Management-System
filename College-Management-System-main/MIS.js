function populateYearDropdown() {
  var dropdown = document.getElementById("yearDropdown");
  var currentYear = new Date().getFullYear();

  for (var year = 1950; year <= currentYear; year++) {
    var option = document.createElement("option");
    option.value = year;
    option.text = year;
    dropdown.add(option);
  }
}
// Call the function to populate the year dropdown when the page loads
window.onload = populateYearDropdown;

// FOR BCA
var bca_sc_male = parseInt(
  document.querySelector(".for_bca .sc_male").innerText
);
var bca_st_male = parseInt(
  document.querySelector(".for_bca .st_male").innerText
);
var bca_obc_male = parseInt(
  document.querySelector(".for_bca .obc_male").innerText
);
var bca_gen_male = parseInt(
  document.querySelector(".for_bca .gen_male").innerText
);
var bca_other_male = parseInt(
  document.querySelector(".for_bca .other_male").innerText
);

var bca_sc_female = parseInt(
  document.querySelector(".for_bca .sc_female").innerText
);
var bca_st_female = parseInt(
  document.querySelector(".for_bca .st_female").innerText
);
var bca_obc_female = parseInt(
  document.querySelector(".for_bca .obc_female").innerText
);
var bca_gen_female = parseInt(
  document.querySelector(".for_bca .gen_femala").innerText
);
var bca_other_female = parseInt(
  document.querySelector(".for_bca .other_female").innerText
);

var bca_total_male =
  bca_sc_male + bca_st_male + bca_obc_male + bca_gen_male + bca_other_male;
var bca_total_female =
  bca_sc_female +
  bca_st_female +
  bca_obc_female +
  bca_gen_female +
  bca_other_female;
var bca_total = bca_total_male + bca_total_female;

document.getElementById("bca_total_male").innerText = bca_total_male;
document.getElementById("bca_total_female").innerText = bca_total_female;
document.getElementById("total").innerText = bca_total;

// FOR MCA
var mca_sc_male = parseInt(
  document.querySelector(".for_mca .sc_male").innerText
);
var mca_st_male = parseInt(
  document.querySelector(".for_mca .st_male").innerText
);
var mca_obc_male = parseInt(
  document.querySelector(".for_mca .obc_male").innerText
);
var mca_gen_male = parseInt(
  document.querySelector(".for_mca .gen_male").innerText
);
var mca_other_male = parseInt(
  document.querySelector(".for_mca .other_male").innerText
);

var mca_sc_female = parseInt(
  document.querySelector(".for_mca .sc_female").innerText
);
var mca_st_female = parseInt(
  document.querySelector(".for_mca .st_female").innerText
);
var mca_obc_female = parseInt(
  document.querySelector(".for_mca .obc_female").innerText
);
var mca_gen_female = parseInt(
  document.querySelector(".for_mca .gen_femala").innerText
);
var mca_other_female = parseInt(
  document.querySelector(".for_mca .other_female").innerText
);

var mca_total_male =
  mca_sc_male + mca_st_male + mca_obc_male + mca_gen_male + mca_other_male;
var mca_total_female =
  mca_sc_female +
  mca_st_female +
  mca_obc_female +
  mca_gen_female +
  mca_other_female;
var mca_total = mca_total_male + mca_total_female;

document.getElementById("mca_total_male").innerText = mca_total_male;
document.getElementById("mca_total_female").innerText = mca_total_female;
document.getElementById("mca_total").innerText = mca_total;



// FOR PGDCA
var pgdca_sc_male = parseInt(
  document.querySelector(".for_pgdca .sc_male").innerText
);
var pgdca_st_male = parseInt(
  document.querySelector(".for_pgdca .st_male").innerText
);
var pgdca_obc_male = parseInt(
  document.querySelector(".for_pgdca .obc_male").innerText
);
var pgdca_gen_male = parseInt(
  document.querySelector(".for_pgdca .gen_male").innerText
);
var pgdca_other_male = parseInt(
  document.querySelector(".for_pgdca .other_male").innerText
);

var pgdca_sc_female = parseInt(
  document.querySelector(".for_pgdca .sc_female").innerText
);
var pgdca_st_female = parseInt(
  document.querySelector(".for_pgdca .st_female").innerText
);
var pgdca_obc_female = parseInt(
  document.querySelector(".for_pgdca .obc_female").innerText
);
var pgdca_gen_female = parseInt(
  document.querySelector(".for_pgdca .gen_female").innerText
); 

var pgdca_other_female = parseInt(
  document.querySelector(".for_pgdca .other_female").innerText
);

var pgdca_total_male =
  pgdca_sc_male + pgdca_st_male + pgdca_obc_male + pgdca_gen_male + pgdca_other_male;
var pgdca_total_female =
  pgdca_sc_female +
  pgdca_st_female +
  pgdca_obc_female +
  pgdca_gen_female +
  pgdca_other_female;
var pgdca_total = pgdca_total_male + pgdca_total_female;

document.getElementById("pgdca_total_male").innerText = pgdca_total_male;
document.getElementById("pgdca_total_female").innerText = pgdca_total_female;
document.getElementById("pgdca_total").innerText = pgdca_total;



// Open the download options modal
function openDownloadModal(course) {
  document.getElementById('downloadModal').style.display = 'block';
  // You can pass the course parameter to identify which row is being downloaded
  // and customize the download accordingly
  // For now, I'm just alerting the course for demonstration
  // alert("Downloading data for " + course);
}

// Close the download options modal
function closeDownloadModal() {
  document.getElementById('downloadModal').style.display = 'none';
}

// Trigger the download based on the selected format
function downloadData(format) {
  // You can implement the download logic here based on the format
  // For now, I'm just alerting the selected format
  alert("Downloading data in " + format + " format");
  closeDownloadModal(); // Close the modal after download
}