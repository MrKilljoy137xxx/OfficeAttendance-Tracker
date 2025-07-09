// Show notification on submit
document.querySelector('.form-buttons button[type="submit"]').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent actual form submission (remove this if you want to submit for real)
    updateOfficeDaysCount(); // Ensure the office days card is updated on submit
    alert('Your form has been submitted to HR.');
    // If you want the form to actually submit after the alert, remove the event.preventDefault() line above.
});

// Resets the form and reloads the page to restart the app
document.querySelector('.form-buttons button[type="reset"]').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default reset behavior
    window.location.reload(); // Reloads the page, restarting the app
});

// Handles the export to CSV functionality
document.getElementById('exportCsvBtn').addEventListener('click', function() {
    // Collect responses
    const weekBegin = document.getElementById('weekBeginDate')?.value || '';
    const days = Array.from(document.querySelectorAll('input[name="days"]:checked')).map(cb => cb.value).join('; ');
    const reason = document.getElementById('attendanceReason')?.value || '';
    const access = document.getElementById('accessibilityReason')?.value || '';
    const notify = document.querySelector('input[name="otherConfirmation"]:checked')?.value || '';
    const officeDays = document.getElementById('officeDaysCount')?.textContent || '0';
    const totalDays = document.getElementById('totalDaysCount')?.textContent || '0';
    const attendance = document.getElementById('attendance_calc')?.textContent || '0';


    // Check if at least one field is filled
    if (!weekBegin && !days && !reason && !access && !notify) {
        alert('Please fill in at least one field before exporting.');
        return;
    }

    // Prepare CSV content
    const csvRows = [
        [
            'Week Beginning',
            'Days Attended',
            'Reason',
            'Accessibility Needs',
            'Notify Others',
            'Office Days',
            'Total Working Days',
            'Attendance (%)'
        ],
        [
            weekBegin,
            days,
            reason,
            access,
            notify,
            officeDays,
            totalDays,
            attendance
        ]
    ];
    const csvContent = csvRows.map(row => row.map(field => `"${field.replace(/"/g, '""')}"`).join(',')).join('\r\n');

    // Trigger download
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'attendance.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
});

// Number of days attended
function updateOfficeDaysCount() {
    const checkedDays = document.querySelectorAll('input[name="days"]:checked').length;
    document.getElementById('officeDaysCount').textContent = checkedDays;
}

// Attach the event listener to all day checkboxes
document.querySelectorAll('input[name="days"]').forEach(cb => {
    cb.addEventListener('change', updateOfficeDaysCount);
});

// Initialize the count on page load
updateOfficeDaysCount();

// Total number of working days
document.getElementById('totalDaysCount').textContent = 5;

// Calculate the percentage of office days attended
function updateAttendance() {
    const officeDays = document.querySelectorAll('input[name="days"]:checked').length;
    const totalDays = 5; // Static for now
    const attendancePercent = totalDays > 0 ? Math.round((officeDays / totalDays) * 100) : 0;
    document.getElementById('attendance_calc').textContent = attendancePercent + '%';
}

// Update attendance whenever office days change
document.querySelectorAll('input[name="days"]').forEach(cb => {
    cb.addEventListener('change', updateAttendance);
});

// Initialize on page load
updateAttendance();