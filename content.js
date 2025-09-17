(function () {
    // Prevent injecting multiple times
    if (document.getElementById("copyLinkBtn")) return;
  
    // Create button
    const btn = document.createElement("button");
    btn.id = "copyLinkBtn";
    btn.innerText = "Copy Link";
  
    // Style it (bottom-right corner)
    btn.style.position = "fixed";
    btn.style.bottom = "20px";
    btn.style.right = "20px";
    btn.style.zIndex = "9999";
    btn.style.padding = "10px 15px";
    btn.style.background = "#007bff";
    btn.style.color = "white";
    btn.style.border = "none";
    btn.style.borderRadius = "5px";
    btn.style.cursor = "pointer";
    btn.style.fontSize = "14px";
  
    // Add click behavior
    btn.addEventListener("click", () => {
      navigator.clipboard.writeText(window.location.href).then(() => {
        btn.innerText = "Copied!";
        setTimeout(() => (btn.innerText = "Copy Link"), 1500);
      });
    });
  
    // Append to page
    document.body.appendChild(btn);
  })();
  