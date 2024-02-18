import Counter from "./aaaTest/counter";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("counter", () => {
  describe("plus minos counter whit dis to be mycounter nad incrumentor", () => {
    beforeEach(() => {
      render(
        <Counter
          defaultCount={0}
          description="my counter"
          defaultIncrumentor={1}
        />
      );
    });

    describe("incrumentor", () => {
      test("is incrumentor rendered", () => {
        expect(screen.getByText("incrumentor: 1")).toBeInTheDocument();
      });
    });

    test("default number is 0", () => {
      expect(screen.getByText("current count: 0")).toBeInTheDocument();
    });

    test("dis to be my counter", () => {
      expect(screen.getByText(/description: my counter/)).toBeInTheDocument();
    });

    describe("when incrument is clicked", () => {
      beforeEach(() => {
        fireEvent.click(screen.getByRole("button", { name: "incrument" }));
      });

      test("render current count after click", () => {
        expect(screen.getByText("current count: 1"));
      });
    });

    describe("when decrument is clicked", () => {
      beforeEach(async () => {
        const user = userEvent.setup();
        await user.click(screen.getByRole("button", { name: "decrument" }));
      });

      test("render current count after click", async () => {
        expect(await screen.findByText("current count: -1"));
      });
    });

    describe("when typed input", () => {
      beforeEach(async () => {
        const user = userEvent.setup();
        await user.type(screen.getByLabelText("input"), "{selectall}5");
        await user.click(screen.getByRole("button", { name: "incrument" }));
      });

      test("incrument whit different incrumentors", async () => {
        expect(screen.getByText("current count: 15")).toBeInTheDocument();
      });
    });
  });
});
