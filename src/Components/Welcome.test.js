import {render, screen} from "@testing-library/react";
import Welcome from "./Welcome";
import userEvents from "@testing-library/user-event"

describe("Welcome text checking", ()=>{
    test("test hello world", ()=>{
        render(<Welcome />);
        const helloWorld = screen.getByText("Hello World", { exact: false });
        expect(helloWorld).toBeInTheDocument();
    
    });
    test("Button not clicked", ()=>{
        render(<Welcome/>);
        const notClickText = screen.getByText("Good to have ", { exact: false });
        expect(notClickText).toBeInTheDocument();
    
    });

    test("Button is clicked", ()=>{
        render(<Welcome />);
        const button = screen.getByRole("button");
        userEvents.click(button);

        const element = screen.getByText("Text was changed", { exact: false });
        expect(element).toBeInTheDocument();
    });

    test("removed message", () => {
        render(<Welcome />);
        const button = screen.getByRole("button");
        userEvents.click(button);
        const element = screen.queryByText("Good to have", { exact: false })
        expect(element).toBeNull();
    })

})


