import { useFormatDateStr } from "@/hooks/useFormatDateStr";

describe("useFormatDateStr", () => {
  it("returns formatted date string for valid date input", () => {
    const { formatDateStr } = useFormatDateStr();

    const actual = formatDateStr("2023-09-18T13:45:30+09:00");
    expect(actual).toBe("2023/09/18 13:45:30");
  });

  it('returns "-" for invalid date input', () => {
    const { formatDateStr } = useFormatDateStr();

    const actual = formatDateStr("invalid-date");
    expect(actual).toBe("-");
  });
});
