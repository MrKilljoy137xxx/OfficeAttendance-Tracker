// Test if JSDOM creates a DOM environment
test('jsdom creates a DOM environment', () => {
    document.body.innerHTML = '<div id="test">Hello</div>';
    const div = document.getElementById('test');
    expect(div.textContent).toBe('Hello');
});

// An example of a failing test
test('failing test for date selection', () => {
    document.body.innerHTML = `
      <form class="week-begin-form">
        <input type="date" id="weekBeginDate" name="weekBeginDate" required>
      </form>
    `;
    const dateInput = document.getElementById('weekBeginDate');
    dateInput.value = '2025-07-11';
    expect(dateInput.value).toBe('2025-01-01');
});

// Test if date selection works - Pass
test('date selection updates the input value', () => {
    document.body.innerHTML = `
      <form class="week-begin-form">
        <input type="date" id="weekBeginDate" name="weekBeginDate" required>
      </form>
    `;
    const dateInput = document.getElementById('weekBeginDate');
    dateInput.value = '2025-07-11';
    expect(dateInput.value).toBe('2025-07-11');
});

// Test if weekday selection works
test('weekday selections update correctly', () => {
    document.body.innerHTML = `
      <form class="second-question-form">
        <div class="days-checkboxes">
          <label><input type="checkbox" name="days" value="Monday" id="monday"> Monday</label>
          <label><input type="checkbox" name="days" value="Tuesday" id="tuesday"> Tuesday</label>
          <label><input type="checkbox" name="days" value="Wednesday" id="wednesday"> Wednesday</label>
          <label><input type="checkbox" name="days" value="Thursday" id="thursday"> Thursday</label>
          <label><input type="checkbox" name="days" value="Friday" id="friday"> Friday</label>
        </div>
      </form>
    `;
    // Simulate checking Monday and Wednesday
    document.getElementById('monday').checked = true;
    document.getElementById('wednesday').checked = true;

    // Collect checked values
    const checkedDays = Array.from(document.querySelectorAll('input[name="days"]:checked')).map(cb => cb.value);

    expect(checkedDays).toEqual(['Monday', 'Wednesday']);
});

// Test if reason input works
test('can enter text in the attendance reason textbox', () => {
    document.body.innerHTML = `
      <form class="third-question-form">
        <label for="attendanceReason"><strong>What is the reason for attending the office?</strong></label>
        <input type="text" id="attendanceReason" name="attendanceReason" placeholder="Enter your reason... " required>
      </form>
    `;
    const reasonInput = document.getElementById('attendanceReason');
    reasonInput.value = 'Team meeting';
    expect(reasonInput.value).toBe('Team meeting');
});

// Test if accessibility input works
test('can enter text in the accessibility reason textbox', () => {
    document.body.innerHTML = `
      <form class="fourth-question-form">
        <label for="accessibilityReason"><strong>Will you require any accessibility acccomdations while on-site:</strong></label>
        <input type="text" id="accessibilityReason" name="accessibilityReason" placeholder="Enter your needs..." required>
      </form>
    `;
    const accessInput = document.getElementById('accessibilityReason');
    accessInput.value = 'Wheelchair access';
    expect(accessInput.value).toBe('Wheelchair access');
});

// Test if notification selection works
test('can select the radio button for Yes or No', () => {
    document.body.innerHTML = `
      <form class="fifth-question-form">
        <div class="radio-options">
          <label><input type="radio" id="otherConfirmationYes" name="otherConfirmation" value="Yes" required> Yes</label>
          <label><input type="radio" id="otherConfirmationNo" name="otherConfirmation" value="No"> No</label>
        </div>
      </form>
    `;
    const yesRadio = document.getElementById('otherConfirmationYes');
    const noRadio = document.getElementById('otherConfirmationNo');

    // Simulate selecting "Yes"
    yesRadio.checked = true;
    expect(yesRadio.checked).toBe(true);
    expect(noRadio.checked).toBe(false);

    // Simulate selecting "No"
    yesRadio.checked = false;
    noRadio.checked = true;
    expect(yesRadio.checked).toBe(false);
    expect(noRadio.checked).toBe(true);
});

// Test if submit button event listener works
test('submit button event listener works', () => {
    document.body.innerHTML = `
      <div class="form-buttons">
        <button type="submit" id="submitBtn">Submit</button>
      </div>
    `;
    const button = document.getElementById('submitBtn');
    let clicked = false;
    button.addEventListener('click', () => {
        clicked = true;
    });
    button.click();
    expect(clicked).toBe(true);
});

// Test if reset button event listener works
test('reset button event listener works', () => {
    document.body.innerHTML = `
      <div class="form-buttons">
        <button type="reset" id="resetBtn">Reset</button>
      </div>
    `;
    const button = document.getElementById('resetBtn');
    let resetCalled = false;
    button.addEventListener('click', () => {
        resetCalled = true;
    });
    button.click();
    expect(resetCalled).toBe(true);
});

// Test if Export button event listener works
test('export to CSV button event listener works', () => {
    document.body.innerHTML = `
      <div class="form-buttons">
        <button type="button" id="exportCsvBtn">Export to CSV</button>
      </div>
    `;
    const button = document.getElementById('exportCsvBtn');
    let exportCalled = false;
    button.addEventListener('click', () => {
        exportCalled = true;
    });
    button.click();
    expect(exportCalled).toBe(true);
});

// Test if Office Days data card works
test('office days box updates when checkboxes are selected', () => {
    document.body.innerHTML = `
      <div class="data-card" id="officeDaysCard">
        <h2>Office Days</h2>
        <div class="office-days-count" id="officeDaysCount">0</div>
      </div>
      <form>
        <input type="checkbox" name="days" id="monday">
        <input type="checkbox" name="days" id="tuesday">
        <input type="checkbox" name="days" id="wednesday">
        <input type="checkbox" name="days" id="thursday">
        <input type="checkbox" name="days" id="friday">
      </form>
    `;

    // Simulate checking Monday and Wednesday
    document.getElementById('monday').checked = true;
    document.getElementById('wednesday').checked = true;

    // Simulate your update function
    const officeDays = document.querySelectorAll('input[name="days"]:checked').length;
    document.getElementById('officeDaysCount').textContent = officeDays;

    expect(document.getElementById('officeDaysCount').textContent).toBe('2');
});

// Test if Total Working Days card works
test('total working days card displays correct value', () => {
    document.body.innerHTML = `
      <div class="data-card2" id="TotalDaysCard">
        <h2>Total Working Days</h2>
        <div class="total-days-count" id="totalDaysCount">0</div>
      </div>
    `;
    // Simulate setting the total working days
    document.getElementById('totalDaysCount').textContent = '5';
    expect(document.getElementById('totalDaysCount').textContent).toBe('5');
});

// Test if the Target Box works
test('target box updates based on attendance percentage', () => {
    document.body.innerHTML = `
      <div class="target-box off" id="targetBox">
        <span id="targetStatus">Target: OFF</span>
      </div>
    `;

    // Simulate attendance calculation and update logic
    function updateTargetBox(attendancePercent) {
        const targetBox = document.getElementById('targetBox');
        const targetStatus = document.getElementById('targetStatus');
        if (attendancePercent >= 60) {
            targetBox.classList.remove('off');
            targetStatus.textContent = 'On target';
        } else {
            targetBox.classList.add('off');
            targetStatus.textContent = 'Off target';
        }
    }

    // Test for on target
    updateTargetBox(75);
    expect(document.getElementById('targetBox').classList.contains('off')).toBe(false);
    expect(document.getElementById('targetStatus').textContent).toBe('On target');

    // Test for off target
    updateTargetBox(40);
    expect(document.getElementById('targetBox').classList.contains('off')).toBe(true);
    expect(document.getElementById('targetStatus').textContent).toBe('Off target');
});