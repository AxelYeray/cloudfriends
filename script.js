// Login functionality
document.addEventListener("DOMContentLoaded", () => {
  // Toggle password visibility
  const togglePassword = document.getElementById("togglePassword")
  const passwordInput = document.getElementById("password")

  if (togglePassword && passwordInput) {
    togglePassword.addEventListener("click", function () {
      const type = passwordInput.getAttribute("type") === "password" ? "text" : "password"
      passwordInput.setAttribute("type", type)

      const icon = this.querySelector("i")
      icon.classList.toggle("fa-eye")
      icon.classList.toggle("fa-eye-slash")
    })
  }

  // Login form submission
  const loginForm = document.getElementById("loginForm")
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault()

      const email = document.getElementById("email").value
      const password = document.getElementById("password").value

      if (email && password) {
        // Simulate login process
        const submitBtn = this.querySelector('button[type="submit"]')
        const originalText = submitBtn.innerHTML

        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Iniciando sesión...'
        submitBtn.disabled = true

        setTimeout(() => {
          window.location.href = "dashboard.html"
        }, 1500)
      }
    })
  }

  // Dashboard interactions
  if (window.location.pathname.includes("dashboard.html")) {
    // Add hover effects to cards
    const cards = document.querySelectorAll(".stat-card, .course-item, .event-item, .mentor-item, .university-item")
    cards.forEach((card) => {
      card.addEventListener("mouseenter", function () {
        this.style.transform = "translateY(-2px)"
      })

      card.addEventListener("mouseleave", function () {
        this.style.transform = "translateY(0)"
      })
    })

    // Progress bar animation for courses
    const progressBars = document.querySelectorAll(".progress-bar")
    progressBars.forEach((bar) => {
      const width = bar.style.width
      bar.style.width = "0%"
      setTimeout(() => {
        bar.style.transition = "width 1s ease-in-out"
        bar.style.width = width
      }, 500)
    })
  }
})

// Utility functions
function showNotification(message, type = "success") {
  const notification = document.createElement("div")
  notification.className = `alert alert-${type} alert-dismissible fade show position-fixed`
  notification.style.top = "20px"
  notification.style.right = "20px"
  notification.style.zIndex = "9999"
  notification.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `

  document.body.appendChild(notification)

  setTimeout(() => {
    notification.remove()
  }, 5000)
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})
