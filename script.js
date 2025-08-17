
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".sidebar nav a");
  const sections = document.querySelectorAll(".content-section");
  let calendarInitialized = false;

  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();

      navLinks.forEach(l => l.classList.remove("active"));
      sections.forEach(s => s.classList.remove("active"));

      link.classList.add("active");
      const targetId = link.getAttribute("data-target");
      const targetSection = document.getElementById(targetId);
      targetSection.classList.add("active");

      if (targetId === "calendar" && !calendarInitialized) {
        const calendarEl = document.getElementById("calendar-container");
        const calendar = new FullCalendar.Calendar(calendarEl, {
          initialView: "dayGridMonth",
          headerToolbar: {
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay"
          },
          events: [
            { title: "Meeting", start: "2025-08-17T10:00:00" },
            { title: "Project Deadline", start: "2025-08-20" },
            { title: "Team Lunch", start: "2025-08-22T13:00:00" }
          ]
        });
        calendar.render();
        calendarInitialized = true;
      }
    });
  });
});
