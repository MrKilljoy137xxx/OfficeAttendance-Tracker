// 1. Pure JavaScript Functions

/// 1.1. Business Logics
//// Test Attendance Calculation
function calculateAttendance(officeDays, totalDays) {
    if (totalDays === 0) return 0;
    return Math.round((officeDays / totalDays) * 100);
}  
module.exports = { calculateAttendance };

//// Test Cases
const { calculateAttendance } = require('./script');

test('returns 0% when no office days', () => {
    expect(calculateAttendance(0, 5)).toBe(0);
});

test('returns 100% when all days attended', () => {
    expect(calculateAttendance(5, 5)).toBe(100);
});

test('returns 60% for 3 out of 5 days', () => {
    expect(calculateAttendance(3, 5)).toBe(60);
});

test('returns 0% when totalDays is 0', () => {
    expect(calculateAttendance(3, 0)).toBe(0);
});