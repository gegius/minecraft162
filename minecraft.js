function setCorrectAnswers() {
  const VariantButtons = document.querySelectorAll(".btn-mark-variant")
  const sendAnswerButton = document.querySelector(".btn-send-all-variants")
  if(!!sendAnswerButton) {
    const answerVariants = []
    VariantButtons.forEach((button) => answerVariants.push(button.getAttribute("data-value")))
    sendAnswerButton.setAttribute("data-value", JSON.stringify(answerVariants))
    sendAnswerButton.classList.remove("btn-send-variant")
    sendAnswerButton.style.display = "flex"
    sendAnswerButton.style.width = "100%"
  }
}
setCorrectAnswers()

const mutationObserver = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    setCorrectAnswers()
  });
});

mutationObserver.observe(document.documentElement, {
  childList: true,
  subtree: true
});

