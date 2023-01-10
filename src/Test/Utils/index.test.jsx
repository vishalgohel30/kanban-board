import {
  handleCallBackDragEnd,
  opacityCC,
  transformCC,
  webApiLS,
} from "../../Utils";

describe("Test Web apis (localStorage)", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("should call webapils don't pass any aurgument.", () => {
    webApiLS();
    expect(webApiLS("test")).toEqual([]);
  });

  test("store value in webapi ([{ test: '1' }])  ", () => {
    webApiLS({ keyName: "taskList", data: [{ test: "1" }] });
    expect(webApiLS({ keyName: "taskList" }).length).toBe(1);
  });

  test("test transformCC fun check return value", () => {
    expect(transformCC({ transform: { x: 5, y: 3 } })).toEqual({
      transform: "translate3d(5px, 3px, 0)",
    });
    expect(transformCC({})).toBeUndefined();
  });

  test("test opacityCC fun check return value", () => {
    expect(opacityCC({ isOver: true })).toEqual({ opacity: 0.5 });
    expect(opacityCC({ isOver: false })).toEqual({ opacity: 1 });
  });

  test("test handleCallBackDragEnd fun check return value", () => {
    expect(
      handleCallBackDragEnd({
        active: { id: 1 },
        over: { id: 1 },
        data: [{ id: 1 }],
      }).length
    ).toBe(1);
    expect(
      handleCallBackDragEnd({
        active: { id: 2 },
        over: { id: 1 },
        data: [{ id: 1 }],
      }).length
    ).toBe(1);
    expect(
      handleCallBackDragEnd({
        active: { id: 1 },
        over: {},
        data: [{ id: 1, status: "active" }],
      }).length
    ).toBe(1);
  });
});
