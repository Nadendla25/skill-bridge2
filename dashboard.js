function displayStudent(user) {
    const fullName = (
        user.name ||
        user.full_name ||
        user.fullName ||
        user.username ||
        "Student"
    ).trim();

    const firstName = fullName.split(/\s+/)[0] || "Student";
    const initial = firstName.charAt(0).toUpperCase();

    setText("headerName", fullName);
    setText("welcomeName", firstName);
    setText("headerAvatar", initial);
    setText("profileAvatar", initial);
    setText("profileName", fullName);

    setText("profileEmail", user.email || "Not provided");
    setText("profileCollege", "Not added");
    setText("profileCourse", "Not added");
}

