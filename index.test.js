const index = require("../index");

describe("playGame", () => {
    let playerScoreDisplay, computerScoreDisplay, resultDisplay;

    beforeEach(() => {
    playerScoreDisplay = { textContent: "" };
    computerScoreDisplay = { textContent: "" };
    resultDisplay = { textContent: "", classList: { add: jest.fn(), remove: jest.fn() } };
    });

    test("should handle a tie", () => {
    playGame("rock", playerScoreDisplay, computerScoreDisplay, resultDisplay);
    expect(resultDisplay.textContent).toBe("IT'S A TIE!");
    expect(resultDisplay.classList.add).not.toHaveBeenCalled();
    expect(resultDisplay.classList.remove).not.toHaveBeenCalled();
    });

    test("should handle a player win", () => {
    playGame("paper", playerScoreDisplay, computerScoreDisplay, resultDisplay);
    expect(resultDisplay.textContent).toBe("YOU WIN");
    expect(resultDisplay.classList.add).toHaveBeenCalledWith("greenText");
    expect(resultDisplay.classList.remove).toHaveBeenCalledWith("redText");
    });

    test("should handle a computer win", () => {
    playGame("scissors", playerScoreDisplay, computerScoreDisplay, resultDisplay);
    expect(resultDisplay.textContent).toBe("YOU LOSE");
    expect(resultDisplay.classList.add).toHaveBeenCalledWith("redText");
    expect(resultDisplay.classList.remove).toHaveBeenCalledWith("greenText");
    });
});