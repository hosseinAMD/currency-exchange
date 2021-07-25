import { formatDate, formatDateTime, minusDays } from "utils/date";

const TEST_ISO_DATE = "2021-07-25T11:31:15.042Z";
const date = new Date(TEST_ISO_DATE);

describe("minusDays in date", () => {
  test("should return day input day for 0 count input", () => {
    expect(minusDays(date, 0).getDate()).toBe(25);
    expect(minusDays(date, 0).getMonth()).toBe(6); //zero-index
    expect(minusDays(date, 0).getFullYear()).toBe(2021);
  });

  test("should return correct day for count in current month", () => {
    expect(minusDays(date, 1).getDate()).toBe(24);
    expect(minusDays(date, 1).getMonth()).toBe(6); //zero-index
  });

  test("should return correct day for count in past month", () => {
    expect(minusDays(date, 60).getDate()).toBe(26);
    expect(minusDays(date, 60).getMonth()).toBe(4); //zero-index
  });

  test("should return correct day for count in past year", () => {
    expect(minusDays(date, 365).getDate()).toBe(25);
    expect(minusDays(date, 365).getMonth()).toBe(6); //zero-index
    expect(minusDays(date, 365).getFullYear()).toBe(2020);
  });
});

describe("formatDate in date", () => {
  test("should return date in DD/MM/YYYY format", () => {
    expect(formatDate(date)).toBe("25/07/2021");
  });
});

describe("formatDateTime in date", () => {
  test("should return date and time in DD/MM/YYYY@ HH:mm format", () => {
    // test with static timezone
    let independentDateStr = date.toLocaleString("en-US", {
      timeZone: "America/New_York",
    });
    const independentDateObj = new Date(independentDateStr);
    expect(formatDateTime(independentDateObj)).toBe("25/07/2021@ 07:31");
  });
});
