const questions = document.querySelectorAll(".faq-question");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    const icon = question.querySelector("i");
    const isActive = question.classList.contains("active");

    questions.forEach((q) => {
      q.classList.remove("active");
      q.querySelector("i").classList.replace(
        "fa-chevron-up",
        "fa-chevron-down"
      );
      q.nextElementSibling.classList.remove("active");
    });

    if (!isActive) {
      question.classList.add("active");
      answer.classList.add("active");
      icon.classList.replace("fa-chevron-down", "fa-chevron-up");
    }
  });
});
