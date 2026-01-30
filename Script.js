document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".box");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-target");
      const content = document.getElementById(target);

      if (!content) return;

      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  });
});
