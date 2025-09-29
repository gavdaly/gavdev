function copyAgeKey() {
    const ageKey = document.getElementById("age-public-key").textContent;

    if (navigator.clipboard && navigator.clipboard.writeText) {
        // Use modern Clipboard API if available
        navigator.clipboard
            .writeText(ageKey)
            .then(() => {
                alert("Age public key copied to clipboard!");
            })
            .catch((err) => {
                console.error(
                    "Failed to copy age public key using Clipboard API: ",
                    err,
                );
                // Fallback if Clipboard API fails (e.g., permissions)
                fallbackCopyTextToClipboard(ageKey);
            });
    } else {
        // Fallback for older browsers or insecure contexts
        fallbackCopyTextToClipboard(ageKey);
    }
}

function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;

    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        const successful = document.execCommand("copy");
        const msg = successful
            ? "Age public key copied to clipboard!"
            : "Failed to copy age public key.";
        alert(msg);
    } catch (err) {
        console.error("Fallback: Failed to copy age public key: ", err);
        alert("Failed to copy age public key. Please copy it manually.");
    }

    document.body.removeChild(textArea);
}
